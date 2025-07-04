import { Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import ContactSection from './components/ContactSection'
import ServicesSection from './components/ServicesSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PricingPlans from './components/PricingPlans'
import OurProducts from './components/OurProducts'
import  Blogs  from './components/Blogs'




function App() {


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='/services' element={<ServicesSection/>}/>
    <Route path='/pricing' element={<PricingPlans/>}/>
    <Route path='/work' element={<OurProducts/>}/>
     <Route path='/blog' element={<Blogs/>}/>
     <Route path='/val' element={<Blogs/>}/>
     <Route path='/contact' element={<ContactSection/>}/>
     {/*  <Route path='/about'  element={<About/>}/> */}

     </Routes>
     <Footer/>
   
    </>
  )
}

export default App
