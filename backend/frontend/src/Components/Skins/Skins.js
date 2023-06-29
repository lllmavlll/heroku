import React ,{ useEffect , useState} from 'react'
import './Skins.css'
import { useNavigate } from 'react-router-dom'
import skinBundle from '../Assets/skins/AraxysB.jpg'
import edition from '../Assets/skins/editions.png'
import shop from '../Assets/skins/shop.webp'
import skinData from '../../skinsLocalData/skinsData.json'

const Skins = () => {
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

   //----- fetcihig skin  from local data -----//

   const [fetchData,setFetchData]= useState([])


   useEffect(()=>{
      async function getData(){
         const response = await fetch('skinsData.json')
         const data = await response.json()
         setFetchData(data)

         // .then(response=>response.json())
         // .then(data=>showSkins(data))
      
         // function showSkins(data){
         //    console.log(data.skins)
         // }

      }
      getData()
      console.log(fetchData,"results")
   },[]);

 
  return (
    <>
      <div className='skinsMain'>

         <section className='Sk-sec1'>
            <h1><b>Weapon Skins</b></h1>
            <p>Weapon Skins are cosmetics in VALORANT that modify the appearance of weapons. They can be bought from the store with VALORANT Points and can be upgraded using Radianite Points to further modify appearance. They can also be be bought from an active Night.Market or earned from a Battle Pass, and a few can be obtained for free by completing Contracts or Battle Passes.</p>
            <p>Each weapon skin shares a theme with about three to five other weapons, the exception being Agents' skins.</p>
            <p>There are currently 652 different weapon skins.</p>
         </section>

         <section className='sec2'>
            <h1><b>All Valorant skin bundles: tiers, weapons, prices</b></h1>
            <div className='Sk-sec2'>
               <div className='Sk-sec2-grid1'>
                  <p>One of the coolest things about Valorant is the range of beautiful and expertly crafted skins that you can equip to make your weapons stand out. Here’s a rundown of every skin in Riot Games’ FPS, as well as everything you need to know about them.</p>
                  <p>Valorant has become one of the most popular FPS games in the world. Drawing influence from games like CS:GO and Overwatch, the game and its esports scene have been an instant success.</p>
                  <p>Alongside the colorful abilities that make Valorant and its Agents stand out among competitors, another aspect of the game is its skins. Riot Games have always had a knack for developing beautiful skin designs and executing them flawlessly, and Valorant is no exception.</p>
               </div>

               <div className='Sk-sec2-grid2'>
                  <img src={skinBundle} alt=''/>
               </div>

            </div>
         </section>

         <section className='sec2'>
            <h1><b>Valorant skin prices</b></h1>
            <div className='Sk-sec2'>

            <div className='Sk-sec3-grid2'>
                  <img src={edition} alt=''/>
               </div>

               <div className='Sk-sec2-grid1'>
                  <p>Just as in other Riot Games series, skins in Valorant are ranked by tier. Select tier is the lowest and therefore cheapest skin line, with Exclusive sitting at the other end of the scale. Let’s dive right into the base prices for each tier and their associated icons in the store:</p>
                  <div className='edition-list'>
                     <li><b>Select Edition (SE)</b>, blue circle: 875 VP (~ 824.46 ₹) per individual skin, 2930 VP (~ 2,803.15 ₹)/3,500 VP (~ 3,380.27 ₹) per bundle.</li>
                     <li><b>Deluxe Edition (DE)</b>, green rhombus: 1275 VP (~ 1319.13 ₹) per individual skin, 5,100 (~ 5111.62 ₹) per bundle.</li>
                     <li><b>Premium Edition (PE)</b>, upside-down pink triangle: 1775 VP (~ 1,896.25 ₹) per individual skin, 7,100 VP (~ 6,760.53 ₹) per bundle.</li>
                     <li><b>Ultra Edition (UE)</b>, yellow diamond: 2475 VP (~ 2,473.37 ₹) per individual skin, 9,900 VP (~ 9811.01 ₹) per bundle.</li>
                     <li><b>Exclusive Edition (XE)</b>, upside-down orange pentagon: Varies.</li>
                  </div>
               </div>
            </div>
         </section>

         <section className='sec2'>
            <h1><b>OK great, so where can I buy Valorant skin bundles?</b></h1>
            <div className='Sk-sec4'>

               <div className='Sk-sec2-grid1'>
                  <p>Skins are available through <b>Battle Pass</b> missions as well as in <b>the store</b>, and often come as all-inclusive bundles upon release.</p>
                  <p>Individual skins rotate every <b>24 hours</b>, so if you see something you like it may be worth adding it to your collection.</p>
                  <p>However, most skins never leave the store completely, so there’s no rush. Riot drops new skins relatively frequently, and so you never know what’s around the corner!</p>
               </div>

               <div className='Sk-sec4-grid2'>
                  <img src={shop} alt=''/>
               </div>

            </div>
         </section>

         <section className='sec5'>
            {/* {
               skinData.map(skin=>{
                  return(
                     <div>{skin.name}</div>
                  )
               })
            } */}
            <h1>Search for Skins</h1>
            <h1>{skinData.name}</h1>

            <div className='skinSearchBox'>
               <input  type='text' name='search' placeholder='search here '/>
               <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <h1>this section is under devlopment</h1>
            


         </section>
      
      </div>
    </>
  )
}

export default Skins
