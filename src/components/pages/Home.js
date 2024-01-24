import '../../App.css'
import React from 'react'
import HeroSection from '../HeroSection'//importing component HeroSection 
import Cards from '../Cards'
import Footer from '../Footer'


function Home() {
    return(
        <>
        <HeroSection/>{/**importing HeroSection component */}
        <Cards/>
        <Footer/>
        </>

    )
}

export default Home;
