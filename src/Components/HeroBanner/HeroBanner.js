import React from 'react'
import '../HeroBanner/herobanner.css'
import { Link } from 'react-router-dom'

const HeroBanner = ({ url, title, desc, index, explore, brandingimg ,rating ,count }) => {
    return (
        <Link className='item itemdatacro' key={index}>
            <img src={url} alt="" />
            {
                brandingimg ?
                    <div>
                        <div className='rating-sticker-highlight-wrapper'>
                            <div className="rating-sticker-wrapper">
                                <span class="actual-rating">{rating}</span>
                                <span class="rating-count">{count}</span>
                            </div>
                        </div>
                        <div className="mousse">
                            <div className="product-name">
                                <h4>{title}</h4>
                            </div>
                            <p>{desc}</p>
                        </div>
                    </div> :
                    <div className={`${explore ? "exptext" : "outline"}`}>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
            }
        </Link>
    )
}

export default HeroBanner