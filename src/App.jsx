import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
import Product from './components/Product'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import MyFooter from './components/MyFooter'


function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <Aboutus/>
    <Product/>
    <Blog/>
    <Newsletter/>
    <MyFooter/>
    </>
  )
}

export default App
