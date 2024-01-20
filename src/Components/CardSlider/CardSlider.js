import React from 'react'
import '../CardSlider/cardslide.css'
import  {Link} from 'react-router-dom'



const CardSlider = ({newcard}) => {
    return (
        <div className='card-slider'>
            <Link>  <img src={newcard} alt="" /></Link>
        </div>

    )
}

export default CardSlider