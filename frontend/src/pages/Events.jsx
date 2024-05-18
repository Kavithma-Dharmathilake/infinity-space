import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/Hero/Hero3.jsx";
import HeroCard3 from "../components/HeroCard/HeroCard4.jsx";
import BgVideo from "../assets/earth-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuthContext } from '../hooks/useAuthContext'

const Events = () => {
    const { user } = useAuthContext()
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSavedImages = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://localhost:4000/api/images/${user.email}`);
          console.log(response.data);
          setNeoData(response.data);
        } catch (error) {
          console.error('Error fetching saved images:', error);
        }
        setLoading(false);
      }
    };

    fetchSavedImages();
  }, [user]);




  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero3
          title={'Your Saved Images'}
        />
        <div className="relative z-10 flex justify-center mt-8">
        
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <HeroCard3 neoData={neoData} />
        )}
      </div>
    </div>
  );
};

export default Events;
