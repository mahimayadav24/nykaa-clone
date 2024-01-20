import React, { useState } from 'react';
import '../Tabs/tabbar.css';
import { Link } from 'react-router-dom';


const tabLink = ["POPULAR", "LUXE", "ONLY AT NYKAA", "NEW LAUNCHES"];
const images = [
    require('../../Assets/Maybelline.png'),
    require('../../Assets/mac.png'),
    require('../../Assets/nykaa-cosmetics.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
    require('../../Assets/Maybelline.png'),
]

const Tabbar = () => {
    const [hoveredTab, setHoveredTab] = useState();
    const [active, setActive] = useState();

    const handleMouseOver = (i) => {
        setHoveredTab(i);
        setActive(i);
    };



    return (
        <>
            <div className='tab-grid'>
                {tabLink.map((i, index) => (
                    <Link
                        key={index}
                        onMouseOver={() => handleMouseOver(i)}
                        className={`tab-link ${active === i ? 'active' : ''}`}  >
                        {i}
                    </Link>
                ))}


            </div>

            {hoveredTab && (
                <div>
                    {/* Content related to the hovered tab */}
                    {hoveredTab === "POPULAR" && <div className='itemsdata'>
                        {
                            images.map((i, index) => {
                                return (
                                    <Link key={index}>
                                        <img src={i} alt="" />
                                    </Link>
                                )
                            })
                        }

                    </div>
                    }
                    {hoveredTab === "LUXE" &&
                        <div className='itemsdata'>
                            {
                                images.map((i, index) => {
                                    return (
                                        <Link key={index}>
                                            <img src={i} alt="" />
                                        </Link>
                                    )
                                })
                            }
                        </div>}
                    {hoveredTab === "ONLY AT NYKAA" &&
                        <div className='itemsdata'>
                            {
                                images.map((i, index) => {
                                    return (
                                        <Link key={index}>
                                            <img src={i} alt="" />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    }
                    {hoveredTab === "NEW LAUNCHES" &&
                        <div className='itemsdata'>
                            {
                                images.map((i, index) => {
                                    return (
                                        <Link key={index}>
                                            <img src={i} alt="" />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            )}
        </>
    );
};

export default Tabbar;
