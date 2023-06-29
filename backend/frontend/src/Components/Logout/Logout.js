import React,{useContext, useEffect} from 'react'
import {useNavigate} from  'react-router-dom'
import { userContext } from '../../App'


const Logout = () => {

  //----- useContext to hide signin button after sigining in -----//
  const {state, dispatch } = useContext(userContext);

const navigate = useNavigate()

         //----- useEffect to logout -----//
         useEffect(()=>{
            fetch('/logout',{
              method:"GET",
              headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              credentials:"include"
            }).then((res)=>{
              dispatch({type:'USER',payload:false})//----- from useContetxt -----//
              navigate('/signin',{replace:true})
              if(!res.status===200){
                const error = new Error(res.error)
                throw error
              }
            }).catch((error)=>{ console.log(error)})
      
           })
  return (
    <div>
      logout
    </div>
  )
}

export default Logout
