import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/Hero/Hero3.jsx";
import HeroCard2 from "../components/HeroCard/HeroCard2.jsx";
import BgVideo from "../assets/earth-bg.mp4";
import wave from "../assets/wave Gif.gif";
import Rapidscat from "../components/Rapidscat/Rapidscat.jsx";
import Satelite from "../components/Satelite/Satelite.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Footer5 from "../components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { FaReact } from "react-icons/fa";

const Neow = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch NEOWS data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-05-04&end_date=2024-05-04&api_key=TxDEm7v5ovKjhos5Yq58g7FahsoOC6IHKj6NTdD1');
        const data = response.data.near_earth_objects['2024-05-04'];

        // Map the NEO data to an array of objects with relevant information
        const mappedData = data.map((neo) => ({
          name: neo.name,
          closeApproachDate: neo.close_approach_data[0].close_approach_date,
          velocity: neo.close_approach_data[0].relative_velocity.kilometers_per_second,
          isHazardous: neo.is_potentially_hazardous_asteroid,
          icon:<FaReact className="text-7xl" />
        }));

        setNeoData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NEOWS data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


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
          title={'Introduction to Near-Earth Objects (NEOs)'}
          para={'Near-Earth objects (NEOs) are celestial bodies that orbit the Sun and come within approximately 1.3 astronomical units (AU) of Earth\'s orbit. These objects can be asteroids or comets, each with distinct characteristics. Asteroids are rocky or metallic objects that vary in size from a few meters to several hundred kilometers in diameter. They are remnants from the early formation of the solar system. Comets are composed of ice, dust, and rocky material. When they approach the Sun, they develop a glowing coma (atmosphere) and sometimes a tail due to the heat.'}
        />
        {/* Pass the NEO data to HeroCard2 */}
       
        <HeroCard2 neoData={neoData} />
      </div>
      <Footer />
    </div>
  );
};

export default Neow;
