import React, { useEffect, useState } from 'react'
import './Support.css'
import supBanner from '../Assets/bg/wideBanner1.webp'


const Support =()=>{

   
   const [userData , setUserData] = useState({name:"",email:"",message:"",})

//----- call function to check if user loged in -----//
   const callPage =async()=>{
      try { 
         const res = await fetch ('/getdata',{
            method:"GET",
            headers:{
               "Content-Type":"application/json"
            },
         });
         const data = await res.json();
         // console.log(data)
         setUserData({...userData,username:data.username,email:data.email})
          if(!res.status===200){
            const error = new Error(res.error)
            throw error;
          }
      } catch (error) {
         console.log(error)   
      }
   }
   //----- useState to get data of a user through token -----//
   useEffect(()=>{
      callPage()
   },[])
   //----- storing data in the state -----//

   const inputHandler =(e)=>{
      const name = e.target.name
      const value = e.target.value

      setUserData({...userData ,[name]:value})
   }

   //----- sending the data to the backend -----//
   const supportForm = async(e)=>{
      e.preventDefault();

      const { username, email, message} = userData;

      const res = await fetch('/support',{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify({
            username, email, message
         })
      });

      const data = await res.json()
      if(!data){
         console.log("message: data not sent")
      }else{
         setUserData({...userData, message:""})
         alert('message sent successfully!')
      }


   }
   

   return (
       <div className="supMain">
        <form  method='POST'>
           <div className="supContainer">
               <p className='supHead'>how can we help you?</p>
               <div className="supBanner">
                  <img alt=''  src={supBanner}/>
               </div>
                  <input autoComplete='off' onChange={inputHandler} value={userData.username} placeholder='username'name='username' className="supName" type='text'/>
                  <input autoComplete='off' onChange={inputHandler} value={userData.email} placeholder='email' name='email' className="supEmail" type='email'/>
                  <textarea autoComplete='off' onChange={inputHandler} value={userData.message}  placeholder='enter your message' name='message' className="supMessage" type='text'/>
                  <button type='submit' onClick={supportForm} className="supSubBtn" >submit</button>
           </div>
        </form>
       </div>
   )

}
export default Support