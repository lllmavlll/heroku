const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    messages:[
        {
            username:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true,
            },
            message:{
                type:String,
                required:true
            }
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]
},{timestamps:true})


//----- generating tokens and adding in into existing database(schema)-----//
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        error.log(error)
    }
}

//----- adding message from support page to data(schema) -----//
userSchema.methods.addMessages = async function(username, email, message){
    try {
        this.messages=this.messages.concat({ username, email, message })
        await this.save()
        return this.messages
    } catch (error) {
        console.log(error)
    }
}



module.exports = mongoose.model('User',userSchema)
