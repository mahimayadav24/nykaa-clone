import React from 'react'
import '../MainHeader/mainheader.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import ImageSlider from '../ImageSlider/ImageSlider.js';
import ctslid from '../../Assets/categories/531becc1-e3ae-4dc9-b7b7-4eb1fb475d85.jpg'
import ctslidse from '../../Assets/categories/c0ec43d8-bea8-492c-ba4e-5e364d58739a.jpg'
import TopBar from '../TopBar/TopBar.js';
import '../LinkProdusts/brandproducts.css'
import MainTopBrands from '../TopBrands/MainTopBrands.js';
import Newbrandimages from '../../Assets/categories/345c3402-cdde-471e-9a99-e207d879a0a9.avif'
import { Link } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterList from '../FilterList/FilterList.js';

const Muradproduct = [ctslid, ctslidse]

// bottom card
const facecreem = [
    {
        id: 1,
        img: require('../../Assets/categories/89565011-69a1-4e08-87d8-c6af0cc78297.jpg'),

    },
    {
        id: 2,
        img: require('../../Assets/categories/95c9658f-51ff-48a3-bbb4-fcc25e5a9f8b.jpg'),

    },

    {
        id: 3,
        img: require('../../Assets/categories/573f865b-2123-479f-930e-faad846f8915.jpg'),

    }, {
        id: 4,
        img: require('../../Assets/categories/39b146f8-295f-48d9-85e8-4af58f6aada9.jpg'),


    }

]


// product section 

const productlisting = [
    {
        id: 1,
        img: require('../../Assets/categories/Productlist/0a5eb69MURAD00000033.jpg'),
        toprat: "FEATURED",
        title: "Murad Better Together Kit",
        price: "MRP:₹17875 ",
        relprice: "₹12155 ",
        offper: "32% Off",
        rating: "",
        bag: "Add to Bag",
        icon: <FavoriteBorderIcon />,
        bestseller: "BESTSELLER        "
    },
    {
        id: 2,
        img: require('../../Assets/categories/Productlist/72a9cb7MURAD00000051_1.jpg'),
        toprat: "FEATURED",
        title: "Murad 30s Skin Perfectors ",
        price: "MRP:₹17875 ",
        relprice: "₹12155 ",
        offper: "32% Off",
        rating: "",
        bag: "Add to Bag",
        icon: <FavoriteBorderIcon />
    },

    {
        id: 3,
        img: require('../../Assets/categories/Productlist/aaeb40aMURAD00000066_2.jpg'),
        toprat: "FEATURED",
        title: "Murad 40's Skin Essentials",
        price: "MRP:₹17875 ",
        relprice: "₹12155 ",
        offper: "32% Off",
        rating: "",
        bag: "Add to Bag",
        icon: <FavoriteBorderIcon />
    },
]

// product section 
const BrandProducts = () => {
    return (
        <div className='categorysimilar '>
            <TopBar />
            <div className='usesection'>
                <h3>Buy Murad Products Online <span className='numpro'>(47)</span></h3>
                <div className='Onlineproducts'>
                    {/* top header */}
                    <div className="newimagesmur">
                        <MainTopBrands imageSrc={Newbrandimages} />
                    </div>
                    {/* top header */}

                    {/* home banner */}
                    <div className='sliderimg'>
                        <AliceCarousel autoPlay autoPlayInterval="2000" fadeOutAnimation={true} mouseTrackingEnabled={true} disableAutoPlayOnAction={true}>
                            {
                                Muradproduct && Muradproduct.map((i, index) => (
                                    <ImageSlider index={index} image={i} />
                                ))
                            }
                        </AliceCarousel>
                    </div>
                    {/* home banner */}
                    {/* bottom slider */}
                    <div className='slidebottomimages'>

                        {
                            facecreem && facecreem.map((i, index) => {
                                return (
                                    <Link key={index}>
                                        <img src={i.img} alt="" />
                                    </Link>
                                )
                            })
                        }

                    </div>
                    {/* bottom slider */}

                </div>
                {/* product all box */}
                <div className="list-wrapper">
                    <div className="filters">
                        <FilterList />
                    </div>
                    <div className="product-listing">
                        {
                            productlisting && productlisting.map((items, index) => {
                                return (
                                    <div className='proddes' key={index}>
                                        <img src={items.img} alt="" />
                                        <h5>{items.title}</h5>
                                        <p>{items.price} <span className='relpr'>{items.relprice}</span><span className='offspan'>{items.offper}</span></p>
                                        <div className='repotivetopit'>
                                            <p>{items.toprat}</p>
                                            {productlisting ? <span>{items.bestseller}</span> : <></> }
                                        </div>
                                        <div className='show_on'>
                                            <div className='add_icons'>
                                                <Link className='add_it_icon'>{items.icon}</Link>
                                                <Link to="" className='add_to_bag'>{items.bag}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* product all box */}
            </div>
        </div>
    )
}

export default BrandProducts