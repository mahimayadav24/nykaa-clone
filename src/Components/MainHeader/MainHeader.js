import React from 'react'
import TopBar from '../TopBar/TopBar.js'
import HeroBanner from '../HeroBanner/HeroBanner.js';
import Mercury from '../Mercury/Mercury.js';
import CardSlider from '../CardSlider/CardSlider.js';
import ImageSlider from '../ImageSlider/ImageSlider.js';
import anotherBrandImg from '../../Assets/b7e80952-1327-4405-993d-4b16b052ab2d.avif';
import focusimage from '../../Assets/focustop.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../MainHeader/mainheader.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import MainTopBrands from '../TopBrands/MainTopBrands.js';
import brandimg from '../../Assets/01e0beb7-e225-40a8-8b48-5fb3c7da937d.avif'
import { Link } from 'react-router-dom';
import fslider from '../../Assets/dccb8d6b-0e5b-48a2-a732-02e9cc773b78.jpg';
import sslider from '../../Assets/a3f945c4-d6bd-4d39-bfee-ce82c43aa13d.jpg';
import tslider from '../../Assets/fde22586-9f3d-432b-89ea-65c5d622dc4f.jpg';
import frslider from '../../Assets/0b2d473e-238d-4286-85e9-c0aba1dc8b09.jpg';
import ftslider from '../../Assets/837fcc5b-c9cd-4dad-8af2-a9402851313a.jpeg';
import imagefirst from '../../Assets/dc9a9a12-2a47-4090-8670-a706525e9809.avif'
import MerImage from '../../Assets/ef55e711-351d-40bf-b322-24b62d54b7ed.webp'
import '../ProductSeller/productseller.css'
import Luxeproduct from '../../Assets/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg'
import Luxuryit from '../../Assets/28690ee2-3f52-494d-9ca2-5a14b5251f16.jpg'
import Lugf  from '../../Assets/b89c208b-d4d4-498f-b4f6-18a373619341.jpg'
import Lugs  from '../../Assets/9269ef04-519c-461b-9945-b9bc6206befc.jpg'
import Lugt  from '../../Assets/d63f5881-ba24-45fe-aa46-29ca08cce10c.jpg'


// home banner

const Bannerimage = [
  {
    id: 1,
    img: require('../../Assets/2a7f45bf-5b08-4965-8433-ce705443c129.avif'),
    title: "Up To 50% Off",
    dis: "On Winter Essentials"
  },
  {
    id: 2,
    img: require('../../Assets/3bc5949b-9478-4d47-bee5-c30277cae713.jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  },

  {
    id: 3,
    img: require('../../Assets/default (4).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 4,
    img: require('../../Assets/default (2).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 5,
    img: require('../../Assets/default (1).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 6,
    img: require('../../Assets/default (3).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 7,
    img: require('../../Assets/default.jpeg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 8,
    img: require('../../Assets/default (1).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 9,
    img: require('../../Assets/default.avif'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 10,
    img: require('../../Assets/default.jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 11,
    img: require('../../Assets/default.avif'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 12,
    img: require('../../Assets/default.jpeg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  },
]

// round card

const round = [
  {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  },
  {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  }, {
    img: require('../../Assets/c4676410-607b-435f-90af-f1801d7e9495.avif'),
  },
]

// category
const bgitem = [
  {
    id: 1,
    img: require('../../Assets/2f77f24a-9f80-4b4d-8b27-6b0574223104.jpg'),

  },
  {
    id: 2,
    img: require('../../Assets/7008481d-848b-45fe-8095-0516ae19c9fd.jpg'),

  },

  {
    id: 3,
    img: require('../../Assets/0e7a07cf-52ac-4d42-be49-6225dbb420fe.jpg'),

  }, {
    id: 4,
    img: require('../../Assets/a3c2c9df-09bb-4573-ace9-e23477f282e9.jpg'),

  }, {
    id: 5,
    img: require('../../Assets/ecd303a3-23f3-4e5c-a26e-8e02d5356d20.jpg'),

  }, {
    id: 6,
    img: require('../../Assets/05d6d80f-75d3-468a-a44f-72ba68b2c865.jpg'),

  }, {
    id: 7,
    img: require('../../Assets/43d82b69-58be-4563-9626-88e5a06649c2.jpg'),

  }

]


// explore
const exploresimg = [
  {
    id: 1,
    img: require('../../Assets/explore(1).jpg'),
    title: "Up To 30% off",
    dis: "On Winter Essentials"
  },
  {
    id: 2,
    img: require('../../Assets/explore(2).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  },

  {
    id: 3,
    img: require('../../Assets/explore(3).jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 4,
    img: require('../../Assets/explore.jpeg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }, {
    id: 5,
    img: require('../../Assets/explore.jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  }

]

// explore
const dovsec = [
  {
    id: 1,
    img: require('../../Assets/dove1.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "2ml Each",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  },
  {
    id: 2,
    img: require('../../Assets/dove3.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "6ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  },

  {
    id: 3,
    img: require('../../Assets/dove4.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "1L",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 4,
    img: require('../../Assets/dove5.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "400ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 5,
    img: require('../../Assets/dove6.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "250gm",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }
  , {
    id: 6,
    img: require('../../Assets/dove6.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "150ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 7,
    img: require('../../Assets/dove7.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "150ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 8,
    img: require('../../Assets/dove8.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "On Winter Essentials",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 9,
    img: require('../../Assets/dove9.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "30g",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 10,
    img: require('../../Assets/dove10.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "8gm",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 11,
    img: require('../../Assets/dove11.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "400ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }
  , {
    id: 12,
    img: require('../../Assets/dove12.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "8gm",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 13,
    img: require('../../Assets/dove13.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "400ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 14,
    img: require('../../Assets/dove14.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "250gm",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 15,
    img: require('../../Assets/dove15.jpg'),
    title: "Up To 40% Off",
    dis: "150ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 16,
    img: require('../../Assets/dove16.jpg'),
    title: "Up To 40% Off",
    dis: "2ml Each",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 17,
    img: require('../../Assets/dove17.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "150ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 18,
    img: require('../../Assets/dove18.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "30g",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 19,
    img: require('../../Assets/dove19.jpg'),
    title: "Up To 40% Off",
    dis: "2ml Each",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 20,
    img: require('../../Assets/dove20.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "250ml",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 21,
    img: require('../../Assets/dove21.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "8gm",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 22,
    img: require('../../Assets/dove22.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "2.5ml"
    ,
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }, {
    id: 23,
    img: require('../../Assets/dove23.jpg'),
    title: "Maybelline New York Lash Sensational Sky High Waterproof Mascara - Very Black",
    dis: "30g",
    rating: " 4.4★",
    count: "/5  (3.8k)"
  }
]

// focus on 
const productfg = [
  {
    id: 1,
    img: require('../../Assets/focus.jpg'),
    title: "Up To 50% Off",
    dis: "On Winter Essentials"
  },
  {
    id: 2,
    img: require('../../Assets/focus1.jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  },

  {
    id: 3,
    img: require('../../Assets/focus2.jpg'),
    title: "Up To 40% Off",
    dis: "On Winter Essentials"
  },
]


// luxe item

const lgitem = [
  {
    id: 1,
    img: require('../../Assets/c2e60d90-c285-4141-912d-470e2fe6c6d9.jpg'),

  },
  {
    id: 2,
    img: require('../../Assets/58f29298-4369-40ed-945d-cd9d95c57800.jpg'),

  },

  {
    id: 3,
    img: require('../../Assets/cfb7b56f-c932-4d5a-b519-5180b94fa6e0.jpg'),

  }, {
    id: 4,
    img: require('../../Assets/71a86529-582b-497e-b94d-9bc6a7eb7e88.jpg'),

  }, {
    id: 5,
    img: require('../../Assets/80b6ac14-3ddd-4ae6-a05b-321c2944e469.jpg'),

  }, {
    id: 6,
    img: require('../../Assets/fed5d4a9-aa30-4e1a-96c1-c6dd3966efae.jpg'),

  }, {
    id: 7,
    img: require('../../Assets/62be6f9d-0e64-4bc9-942b-da653811aaaf.jpg'),

  }

]

const images = [fslider, sslider, tslider, frslider, ftslider];

// luxuryitems

const brglow =[Lugf, Lugs, Lugt ]

const MainHeader = () => {
  return (
    <div>
      <TopBar />
      {/* <HeroBanner /> */}
      <div className='herotheme'>
        <OwlCarousel className='owl-theme' margin={10} nav>
          {
            Bannerimage && Bannerimage.map((i, index) => (
              <HeroBanner url={i.img} title={i.title} desc={i.dis} index={index} />
            ))
          }
        </OwlCarousel>
      </div>
      {/* <HeroBanner /> */}
      <Mercury mergerimg={MerImage} />
      <CardSlider newcard={imagefirst} />
      {/* round card */}
      <div className='derma-com'>
        <OwlCarousel className='owl-theme' items={6} margin={25} nav>
          {
            round && round.map((i, index) => (
              <HeroBanner url={i.img} index={index} />
            ))
          }
        </OwlCarousel>
      </div>
      {/* round card */}

      <div className='aliceslider'>
        <div className='viw'>
          <h2>Nykaa Picks: New Arrivals</h2>
          <Link>View All</Link>
        </div>
        <AliceCarousel autoPlay autoPlayInterval="2000" fadeOutAnimation={true} mouseTrackingEnabled={true} disableAutoPlayOnAction={true}>
          {
            images && images.map((i, index) => (
              <ImageSlider index={index} image={i} />
            ))
          }
        </AliceCarousel>
      </div>
      {/* <Category /> */}
      <div className="smallcr">
        <OwlCarousel className='owl-theme' margin={10} nav items={5}  >
          {
            bgitem && bgitem.map((i, index) => (
              <HeroBanner url={i.img} index={index} />
            ))
          }

        </OwlCarousel>
      </div>
      {/* <Category /> */}
      {/* <Explore /> */}
      <div className='imagexp'>
        <MainTopBrands imageSrc={brandimg} />
        <div className='explorebrands'>
          <OwlCarousel className='owl-theme' margin={25} nav>
            {
              exploresimg && exploresimg.map((i, index) => (
                <HeroBanner url={i.img} title={i.title} desc={i.dis} index={index} explore={true} />
              ))
            }

          </OwlCarousel>
        </div>
      </div>
      {/* <Explore /> */}
      <div className='blue-dove'>
        <MainTopBrands imageSrc={anotherBrandImg} />
        <div className='productseller'>
          <OwlCarousel className='owl-theme' margin={25} nav items={7}>
            {
              dovsec && dovsec.map((i, index) => (
                <HeroBanner url={i.img} title={i.title} desc={i.dis} index={index} brandingimg={true} rating={i.rating} count={i.count} />
              ))
            }
          </OwlCarousel>
        </div>
      </div>
      {/* focus on */}
      <div className='focuson'>
        <MainTopBrands imageSrc={focusimage} />
        <div className='imagefg'>
          <OwlCarousel className='owl-theme' margin={20} nav>
            {
              productfg && productfg.map((i, index) => (
                <HeroBanner url={i.img} title={i.title} desc={i.dis} index={index} />
              ))
            }
          </OwlCarousel>
        </div>
      </div>
      {/* focus on */}
      {/* luxe product */}
      <div className='luximg'>
        <MainTopBrands imageSrc={Luxeproduct} />
        <div className='imagefg'>
          <OwlCarousel className='owl-theme' margin={10} nav items={6}  >
            {
              lgitem && lgitem.map((i, index) => (
                <HeroBanner url={i.img} index={index} />
              ))
            }

          </OwlCarousel>
        </div>
      </div>
      {/* luxe product */}
      {/* luxury items */}
      <div className='aliceslider'>

        <AliceCarousel autoPlay autoPlayInterval="2000" fadeOutAnimation={true} mouseTrackingEnabled={true} disableAutoPlayOnAction={true}>
          {
            brglow && brglow.map((i, index) => (
              <ImageSlider index={index} image={i} />
            ))
          }
        </AliceCarousel>
        <MainTopBrands imageSrc={Luxuryit} />
      </div>
    </div>
  )
}

export default MainHeader