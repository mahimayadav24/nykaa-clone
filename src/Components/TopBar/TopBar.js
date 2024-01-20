import React from 'react'
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import '../TopBar/topbar.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js';



const pinkBar = [
    {
        id: 1,
        icon: <AdUnitsIcon />,
        name: "Get App",
        url: "/"
    },
    {
        id: 2,
        icon: <LocationOnIcon />,
        name: "Store & Events",
        url: "/store"
    }
    ,
    {
        id: 3,
        icon: <CardGiftcardIcon />,
        name: "Gift Card",
        url: "/gift-card"
    }
    ,
    {
        id: 4,
        icon: <HelpOutlineIcon />,
        name: "Help",
        url: "/help"
    },

]

const mercury = [
    "BEAUTY BONANZA Get Your Amazing Deals",
]

const TopBar = () => {
    return (
        <div className='fgm'>
            <section className='bg-pink '>
                <div className="container">
                    <div className='PinkSide'>
                        <div className='side-items marquee'>
                            {
                                mercury && mercury.map((item, index) => {
                                    return (
                                        <Link key={index}>
                                            {item}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className=' items-listed'>
                            <ul>
                                {
                                    pinkBar && pinkBar.map((item, index) => {
                                        return (
                                            <li key={index}><Link to={`${item.url}`}> {item.icon}<span>{item.name}</span></Link></li>
                                        )

                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* header starts here */}
            <div>
                <Header />
            </div>
            {/* header ends here */}
        </div>
    )
}

export default TopBar