import React from 'react'

function School() {
  return (
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
        <button>view more</button>
        </div>
        </div>
        
        
        <div className='headphones'>
          

        </div>
        <div className='drives'>

        </div>
        <div className='cases'>
            
        </div>
    
    </div>

    </div>
  )
}

export default School