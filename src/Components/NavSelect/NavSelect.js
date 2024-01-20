import React from 'react'
import '../NavSelect/navselect.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import Tabbar from '../Tabs/Tabbar'



const productname = [
  "Ponds",
  "Clinique",
  "VLCC",
  "Plum",
  "Sebamed",
  "Nova",
  "SP",
  "Jockey",
  "Roots",
  "The Moms Co.",
  "Just Herbs",
  "Enamor",
  "Ponds",
  "Clinique",
  "VLCC",
  "Plum",
  "Sebamed",
  "Nova",
  "SP",
  "Jockey",
  "Roots",
  "The Moms Co.",
  "Just Herbs",
  "Enamor", "Ponds",
  "Clinique",
  "VLCC",
  "Plum",
  "Sebamed",
  "Nova",
  "SP",
  "Jockey",
  "Roots",
  "The Moms Co.",
  "Just Herbs",
  "Enamor",
  "Ponds",
  "Clinique",
  "VLCC",
  "Plum",
  "Sebamed",
  "Nova",
  "SP",
  "Jockey",
  "Roots",
  "The Moms Co.",
  "Just Herbs",
  "Enamor",
  "Ponds",
  "Clinique",
  "VLCC",
  "Plum",
  "Sebamed",
  "Nova",
  "SP",
  "Jockey",
  "Roots",
  "The Moms Co.",
  "Just Herbs",
  "Enamor", "Ponds",
  "Clinique",
  "VLCC",
  "Plum",
  "Sebamed",
  "Nova",
  "SP",
  "Jockey",
  "Roots",
  "The Moms Co.",
  "Just Herbs",
  "Enamor",
]


const productalph = [
  "*",
  " A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",

]

const NavSelect = () => {
  return (
    <div className='navselect'>
      <div className='col-difine'>
        <div className="brandwrapper">
          <SearchBar />
          <div className='brand-search'>
            <div>
              <ul className='listing'>
                <li className='name-top'>
                  TOPBRANDS
                </li>
                {
                  productname && productname.map((item, index) => {
                    return (
                      <li key={index}><Link>{item}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='alphacheck'>

              {
                productalph && productalph.map((i, index) => {
                  return (
                    <p key={index}>
                      <Link>{i}</Link>
                    </p>
                  )
                })
              }


            </div>
          </div>
        </div>
        <div className="brandname">
          <Tabbar />
        </div>
      </div>
    </div>
  )
}

export default NavSelect