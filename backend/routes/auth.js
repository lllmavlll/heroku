const express =require('express')
const auth =express.Router()
const userModel =require('../model/userSchema')
const bcrypt = require('bcrypt');
const authenticate =require('../middleware/authenticate')
const cookieParser = require("cookie-parser");
auth.use(cookieParser());

const jwt = require('jsonwebtoken')

//----- landing page -----//
auth.get('/',(req,res)=>{
    res.send("home")
})
auth.get('/signup',(req,res)=>{
    res.send("signupRoute")
})
auth.post('/signup',async(req,res)=>{
    const { username, email, password,cpassword }= req.body

    //----- making sure user has entered all the fields -----//
    if(!username ||  !email ||  !password || !cpassword ){
            return res.status(422).json({error:"please fill all the fields"})
    }
    try {

        //----- checkking for existing user -----//
        const existingUser = await userModel.findOne({email:email})
        
        //----- if exists -----//
        if(existingUser){
            return res.status(422).json({messege:"user already exist"})
           }
           else if(password!=cpassword){
            return res.status(422).json({messege:"password not matching"})
           }
           else{
                 //----- if not create new user -----//
                 const hashedPassword = await bcrypt.hash(password,10) //----- hashing password
                 const hashedConPassword =  await bcrypt.hash(cpassword,10) //----- hashing confirm  password
                 const userResult = new userModel({
                     username:username,
                     password:hashedPassword,
                     cpassword:hashedConPassword,
                     email:email,
                 }) 
             await userResult.save()
         
             return  res.status(201).json({messege:"user saved"})
           }
     } catch (error) {   
        console.log(error)
    }
})


//----- sign in route-----//
auth.get('/signin',(req,res)=>{
    res.send("signin")
})
auth.post('/signin',async(req,res)=>{

    const {email, password} = req.body
    try {
        //----- checking for existence of the user -----//
        const existingUser = await userModel.findOne({ email : email })
        if(!existingUser){
            // return res.status(404).json({ message:"user not found"})
          return   res.status(404).send("invalid credentials")
        }
        
        //----- matching Cridentials -----//
        const matchPassword = await  bcrypt.compare(password,existingUser.password)
        if(!matchPassword){
         return   res.status(400).send("invalid credentials")
        }

        //----- generating token -----//
        const token = await existingUser.generateAuthToken()
        console.log(token)
        
        //----- creating JWT (jasonWebToken) -----//
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })
        
       return res.status(200).json({message:"sighnin successfull"})

    } catch (error) {
     return   res.status(500).json({message:"something went wrong"})
    }

})

//----- to get userData if user logins, and to access userData from -----//
auth.get('/getdata', authenticate,(req,res)=>{
    res.send(req.rootUser)
})

//----- support end points -----//
auth.post('/support',authenticate,async(req,res)=>{
    try {
        const {username, email, message}= req.body

        //----- if the input field empty throw error -----//
        if(!username || !email || !message){
            console.log(' error in support form')
            return res.json({error: "please fill  all the fields"})
        }

        //----- verifying which user sent message based on _id -----//
        const supportFiledData = await userModel.findOne({_id:req.userID})

        if(supportFiledData){

            const userMessage = await supportFiledData.addMessages(username, email, message ) 
            
            await userMessage.save
            res.status(201).json({ message:"message sent successfully!"})
        }

    } catch (error) {
        console.log(error)
    }
})
auth.get('/support',(req,res)=>{
    res.send('support route')
})

//----- logout end point -----//
auth.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('logout route')
})

module.exports = auth