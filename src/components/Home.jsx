import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import LogoCarousel from './LogoCarousel'
import OurProducts from './OurProducts'
import TeamSection from './TeamSection'
import ServicesSection from './ServicesSection'
import PricingPlans from './PricingPlans'
import ContactSection from './ContactSection'
// import Footer from './Footer'


const Home = () => {
  return (
    <>
     <Hero/>
    <AboutSection/> 
    <LogoCarousel />
    <OurProducts/>
    <TeamSection/>
    <ServicesSection/>
    <PricingPlans/>
    <ContactSection/>
    {/* <Footer/> */}
    </>
  )
}

export default Home