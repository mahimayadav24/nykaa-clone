import React from 'react'
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainHeader from './Components/MainHeader/MainHeader'
import BrandProducts from './Components/LinkProdusts/BrandProducts'

const App = () => {



  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<MainHeader />} />
            <Route path='/element' element={<BrandProducts/>}/>
          </Routes>
     
      </Router>
    </div>
  )
}

export default App