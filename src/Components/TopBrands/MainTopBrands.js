import React from 'react'
import '../TopBrands/topbrand.css'

const MainTopBrands = ({ imageSrc }) => {
    return (
        <div className='topbrands'>
            <img src={imageSrc} alt="" />
        </div>
    )
}

export default MainTopBrands