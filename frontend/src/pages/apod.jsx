import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero2.jsx";
import HeroCard from "../components/HeroCard/HeroCard.jsx";
import BgVideo from "../assets/earth-bg.mp4";
import wave from "../assets/wave Gif.gif";
import Rapidscat from "../components/Rapidscat/Rapidscat.jsx";
import Satelite from "../components/Satelite/Satelite.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Footer5 from "../components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const Apod = () => {

    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    React.useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
        });
    });
    return (
        <div className="">
            <div className="h-[800px] relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="fixed right-0 top-0 h-[800px] w-full object-cover z-[-1]"
                >
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <Navbar />
                <Hero className="mt-24"/>
            </div>
        </div>
    );
};

export default Apod;
