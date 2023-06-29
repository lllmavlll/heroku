import React ,{ useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Weapons.css'
import Img1 from '../Assets/weapons/wep.png'
import WeaponCard from './WeaponCard'
import shef from '../Assets/weapons/sherif.png'
import classic from '../Assets/weapons/classic.png'
import shorty from '../Assets/weapons/short.png'
import frenzy from '../Assets/weapons/frenzy.png'
import ghost from '../Assets/weapons/ghost.png'
import stinger from '../Assets/weapons/stinger.png'
import spec from '../Assets/weapons/spec.png'
import bucky from '../Assets/weapons/bucky.png'
import judge from '../Assets/weapons/judge.png'
import phantom from '../Assets/weapons/phantom.png'
import bulldog from '../Assets/weapons/bulldog.png'
import gaurdian from '../Assets/weapons/gaurdian.png'
import awp from '../Assets/weapons/awp.png'
import mar from '../Assets/weapons/mar.png'
import ares from '../Assets/weapons/ares.png'
import odin from '../Assets/weapons/odin.png'
import vandal from '../Assets/weapons/vandal.png'
import knife from '../Assets/weapons/knife.png'




const Weapons = () => {


  const navigate =useNavigate()
   

  //----- call function to check if user loged in -----//
     const callPage =async()=>{
        try { 
           const res = await fetch ('/getdata',{
              method:"GET",
              headers:{
                 Accept:"application/json",
                 "Content-Type":"application/json"
              },
              credentials:'include'
           });
           const data = await res.json();
           // console.log(data)
            if(!res.status===200){
              const error = new Error(res.error)
              throw error;
            }
        } catch (error) {
           console.log(error)   
           navigate('/signin')      
        }
     }
     //----- useState to get data of a user through token -----//
     useEffect(()=>{
        callPage()
     })


  return (
    <>
    <div className='wepMain'>
      <h1 className='sec1h'><b>Weapons</b></h1>
        <section  className='wepBG'>
          <div className='wepG1'>
            <p>In Valorant, there are a plethora of weapons to learn and keep track of. Here’s a breakdown of all 17 weapons in Valorant — from when to use them and what their strengths and weaknesses are.</p>
            <p>Agents have different variations of weapons, typically firearms, to cater to specific playstyles or metas. Weapons are separated by two categories, Sidearms and Primary weapons. Sidearms consists of pistols, whilst primaries include SMGs, shotguns, rifles, sniper rifles, and machine guns.</p>
            <p>Guns have limited amounts of ammo but come with reserve magazines. Bullets deal different amounts of damage depending on the gun, the body part they hit, and the distance between the shooter and the target. Each gun deals a set amount of damage to an enemy's body at its shortest range and then uses multipliers on this value to calculate the damage it will deal to the head and legs at close range and all body parts at further ranges. Resulting numbers with a decimal value are rounded down to the next integer value. Enemies hit by bullets will also be tagged with a 72.5% slow for a brief period. Shotgun pellets will only apply a 30% slow if they tag an enemy beyond 10 meters.</p>
            <p>Weapons can be purchased by Agents using creds during the pre-round sequence. Each Agent is equipped with a Knife and the Classic sidearm for free by default. Agents will keep the weapons they purchase through each round until they die. Weapons can also be picked up off the ground from deceased players, both friendly and hostile, which will carry on with the player into the next round.</p>
          </div>
          <div className='wepG2'>
            <img src={Img1} alt=''/>
          </div>
        </section>

        <sectiton className='wepCard'>
          <h1><b>CHOOSE <br/>YOUR WEAPONS</b></h1>
          <div className='sec2grid'>
            <WeaponCard title='Primary fire lands precise shots when still, and is equipped with an alternate burst-firing mode for close encounters.' h2=' SIDEARMS  ' p ='Lightweight and versatile, the default weapon for all is an instant classic.' name='classic' src={classic}/>
            <WeaponCard title='A nimble, short barrel shotgun that is deadly at close range but can only fire twice before needing to reload. Pairs well with long range weapons.' h2=' SIDEARMS' p ='Surprise your enemy up close for max effectiveness.' name='shorty' src={shorty}/>
            <WeaponCard title='Lightweight machine pistol that excels at firing on the move. Its high rate-of-fire can be difficult to control, so try short bursts at medium ranges.' h2=' SIDEARMS' p ='Up close, hold the trigger. From afar...try something else.' name='frenzy' src={frenzy}/>
            <WeaponCard title='The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.' h2=' SIDEARMS' p ='Sleek, silenced, and proficient at any range.' name='ghost' src={ghost}/>
            <WeaponCard title='Its high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.' h2=' SIDEARMS' p ='A modern six-shooter for the headshot searcher.' name='sheriff' src={shef}/>
            <WeaponCard title='This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility. The 20-round mag gets wasted in recoil-filled sprays, but lands lethal blows at medium distances with ADS and controlled fire.' h2=' SMGS' p ='They’ll know its over when the Stinger splash hits. ' name='stinger' src={stinger}/>
            <WeaponCard title='This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility.' h2=' SMGS' p ='They’ll know its over when the Stinger splash hits.' name='spectre' src={spec}/>
            <WeaponCard title='Heavy but stable, Bucky’s primary fire is for holding tight corners or charging close quarters. Alternate fire strikes targets at medium range.' h2=' SHOTGUN' p ='Attacker. Defender. You’re the one with the pump-action shotgun.' name='bucky' src={bucky}/>
            <WeaponCard title='The Judge is stable at the stand but volatile when fired rapidly. Primary fire hammers short range targets and you’ll need to be steady to nail anything beyond an arms-length.' h2=' SHOTGUN' p ='Automatic, rapid fire shotgun that provides sustained high damage.' name='judge' src={judge}/>
            <WeaponCard title='A surefire beast when you can pick your shots. Alt. fire lets you ADS and spew accurate, short bursts at anyone who tries you from medium to long-range.' h2=' RIFLES' p ='Some kind of happiness is measured out in taking down enemies with the Bulldog' name='bulldog' src={bulldog}/>
            <WeaponCard title='The designated marksman rifle. Heavier and less mobile relative to other rifles but precise and powerful. Headhunt when enemies appear at medium to long distances.' h2=' RIFLES' p ='Shines in the hands of a patient shooter.' name='gaurdian' src={gaurdian}/>
            <WeaponCard title='Go full auto for anyone who tests you up close and short controlled bursts scramble enemies from anywhere. Best when fired while stationary.' h2=' RIFLES' p ='A balanced weapon built for stable, extended shots.' name='phantom' src={phantom}/>
            <WeaponCard title='The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head. Extended fire results in less stability, however.' h2=' RIFLES' p ='This accurate powerhouse is ferocious in small bursts.' name='vandal' src={vandal}/>
            <WeaponCard title='A nimble lever-action sniper rifle with a single zoom that can keep bullish enemies at bay. A slow rate of fire means you have to either hit the mark or leave yourself open to attacks.' h2=' SNIPER' p ='Hold an angle, breathe, and they’ll regret turning that corner.' name='marshal' src={mar}/>
            <WeaponCard title='A fierce bolt-action sniper rifle with high-powered dual zoom. Extremely immobile but fires an incredibly powerful round that can devastate a team with one shot' h2=' SNIPER' p ='Get cozy and you can control important ground.' name='operator' src={awp}/>
            <WeaponCard title='The Ares’ large magazine means it excels at suppressive fire or dealing heavy damage to clustered groups.' h2=' HEAVY' p ='Don’t mistake its size for clunk.' name='ares' src={ares}/>
            <WeaponCard title='Suppressive, high damage fire with surprising stability. Spray enemies at short range and use alt. fire to make yourself a living turret.' h2=' HEAVY' p ='Wielding this hammer of a machine threatens glory for the holder and ruin for the foe.' name='odin' src={odin}/>
            <WeaponCard title='When in doubt or out of bullets, hit them with this. Lets you run fast, destroy objects faster, or one-shot enemies in the back with alt. fire.' h2=' MELEE' p ='An intimate solution.' name='tactical knife' src={knife}/>
          </div>
        </sectiton>
    </div>
    </>
  )
}

export default Weapons
