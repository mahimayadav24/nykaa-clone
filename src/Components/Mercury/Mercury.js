import React from 'react'
import '../Mercury/mercury.css'
import {Link} from 'react-router-dom'


const Mercury = ({mergerimg}) => {
    return (
        <div className='designerimg'>
            <Link>   <img src={mergerimg} alt="" /></Link>
        </div>
    )
}

export default Mercury