import React, { useContext } from "react";
import Header from '../components/Header';
import {AuthContext} from '../contex/Auth.context'
import eatry from '../utils/eatry.jpg';
import hospital from '../utils/hospital.jpg';
import Hotel from "../utils/Hotel.jpg";
import  commercialptoperty from '../utils/commercialproperty.jpg'
import school from '../utils/school(1).jpg'
import {Link} from 'react-router-dom'

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (

   
      <div>
 <Header/>
 <div>
      <div className='firstrow'>

      
        <div className='card'>
        <h2>restaurants available</h2>
        <img src={eatry} alt =""/>
        <p>Click the button below  to see more eatries available</p>
        <button><Link to='/eatry'>view more</Link></button>
        </div>
       

        <div className='card'>
        <h2>hospitals available</h2>
        <img src={hospital} alt =""/>
        <p>click to see more hospitals available</p>
        <button>view more</button>
        </div>

        <div className='card'>
        <h2>hotels available</h2>
        <img src={Hotel} alt =""/>
        <button>view more</button>
        </div>

        <div className='card'>
        <h2>commercial properties available</h2>
        <img src={commercialptoperty} alt =""/>
        <button>view more</button>
        </div>

        <div className='card'>
        <h2>schools available</h2>
        <img src={school} alt =""/>
        <button><Link to='/school'>view more</Link></button>
        </div>
        </div>
        
        
       
    
    </div>
      </div>
    
  )
}



export default Home;
