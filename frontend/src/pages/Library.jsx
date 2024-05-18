import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/Hero/Hero3.jsx";
import HeroCard3 from "../components/HeroCard/HeroCard3.jsx";
import BgVideo from "../assets/earth-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuthContext } from '../hooks/useAuthContext'

const Library = () => {
    const { user } = useAuthContext()
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("earth"); // Default search term

  const fetchData = async (term) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${term}&media_type=image`);
      setNeoData(response.data.collection.items);
    } catch (error) {
      console.error('Error fetching Images data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(searchTerm); // Fetch data based on the default or current search term
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData(searchTerm);
  };



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
          title={'Image Library'}
          para={'The images.nasa.gov API is organized around REST, has predictable/resource­-oriented URLs and uses HTTP response codes to indicate API errors. This API uses built-­in HTTP features such as HTTP authentication and HTTP verbs, which are understood by many off-­the-­shelf HTTP clients.'}
        />
        <div className="relative z-10 flex justify-center mt-8">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 rounded-l-md border border-gray-300"
              placeholder="Search for images"
            />
            <button type="submit"  
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md">
              Search
            </button>
          </form>
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

export default Library;
