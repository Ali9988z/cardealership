import React from "react";
import Header from "../Header/header";
import CarSearch from "../CarSearch/Carsearch";
import Cartype from "../CarType/Cartype";
import MostSearchedCars from "../MostSearchedCars/MostSearchedCars";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import LatestCars from "../LatestCars/LatestCars";
import PremiumBrands from "../PremiumBrands/PremiumBrands";
import Footer from "../Footer/Footer";


const Homepage = () =>{
    return(
        <>
        <Header />
        <CarSearch />
        <Cartype />
        <MostSearchedCars />
        <WhyChooseUs />
        <LatestCars />
        <PremiumBrands />
        <Footer />
        </>
    )
}
export default Homepage;