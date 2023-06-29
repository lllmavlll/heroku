import React, { createContext, useReducer } from 'react'
import {  BrowserRouter,Route,Routes } from 'react-router-dom';
import {reducer , initialState}from '../src/reducer/UseReduce';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Agents from './Components/Agents/Agents';
import Maps from './Components/Maps/Maps';
import Skins from './Components/Skins/Skins';
import Support from './Components/Support/Support';
import Signup from './Components/Signup/Signup';
import Weapons from './Components/Weapons/Weapons';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin1';
import Logout from './Components/Logout/Logout';
import Yoru from './Components/Agents/Yoru';
import Reyna from './Components/Agents/Reyna';
import Sage from './Components/Agents/Sage';
import Jett from './Components/Agents/Jett';
import Raze from './Components/Agents/Raze';
import Astra from './Components/Agents/Astra';
import Fade from './Components/Agents/Fade';
import Chamber from './Components/Agents/Chamber';
import Gekko from './Components/Agents/Gekko';
import Killjoy from './Components/Agents/Killjoy';
import Skye from './Components/Agents/Skye';
import Kayo from './Components/Agents/Kayo';
import Viper from './Components/Agents/Viper';
import Cypher from './Components/Agents/Cypher';
import Breach from './Components/Agents/Breach';
import Sova from './Components/Agents/Sova';
import Neon from './Components/Agents/Neon';
import Harbor from './Components/Agents/Harbor';
import Omen from './Components/Agents/Omen';
import Phoenix from './Components/Agents/Phoenix';
import Brimstone from './Components/Agents/Brimstone';
import AgentsHome from './Components/Agents/AgentsHome';


  //----- context API -----//
  export const userContext =createContext();

  //----- storing all the routes inside a function -----//
  const Routing =()=>{
    return(
      <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='agents' element={<Agents/>}>
        <Route path='' element={<AgentsHome/>}/>
        <Route path='yoru' element={<Yoru/>}/>
        <Route path='brimstone' element={<Brimstone/>}/>
        <Route path='reyna' element={<Reyna/>}/>
        <Route path='sage' element={<Sage/>}/>
        <Route path='jett' element={<Jett/>}/>
        <Route path='raze' element={<Raze/>}/>
        <Route path='astra' element={<Astra/>}/>
        <Route path='fade' element={<Fade/>}/>
        <Route path='chamber' element={<Chamber/>}/>
        <Route path='gekko' element={<Gekko/>}/>
        <Route path='killjoy' element={<Killjoy/>}/>
        <Route path='skye' element={<Skye/>}/>
        <Route path='kay-o' element={<Kayo/>}/>
        <Route path='viper' element={<Viper/>}/>
        <Route path='cypher' element={<Cypher/>}/>
        <Route path='breach' element={<Breach/>}/>
        <Route path='sova' element={<Sova/>}/>
        <Route path='neon' element={<Neon/>}/>
        <Route path='harbor' element={<Harbor/>}/>
        <Route path='omen' element={<Omen/>}/>
        <Route path='phoenix' element={<Phoenix/>}/>
      </Route>
      <Route path='maps' element={<Maps/>}/>
      <Route path='skins' element={<Skins/>}/>
      <Route path='support' element={<Support/>}/>
      <Route path='weapons' element={<Weapons/>}/>
      <Route path='signin' element={<Signin/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='logout' element={<Logout/>}/>
  </Routes>
    )
  }


const App = () => {

  //----- useReducer hook -----//
  const [state, dispatch]= useReducer(reducer,initialState)

  return (
   <>
   <userContext.Provider value={{state, dispatch}}>
   <BrowserRouter >
    <Header/>
    <Routing/>
    <Footer/>
   </BrowserRouter>
   </userContext.Provider>

   </>
  )
}

export default App
