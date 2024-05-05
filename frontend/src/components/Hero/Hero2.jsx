import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios';

const Hero2 = () => {

  // Initialize state variables
  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Set today's date as the default selected date
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  useEffect(() => {
    // Fetch APOD data whenever selectedDate changes
    const apiKey = 'TxDEm7v5ovKjhos5Yq58g7FahsoOC6IHKj6NTdD1';
    const url = `https://api.nasa.gov/planetary/apod?api_key=TxDEm7v5ovKjhos5Yq58g7FahsoOC6IHKj6NTdD1&date=${selectedDate}`;
    setLoading(true);

    axios.get(url)
      .then(response => {
        setApodData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching APOD:', error);
        setLoading(false);
      });
  }, [selectedDate]);

  // Handler function for date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Return loading state if the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className=" bg-black/20 h-full mt-12">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              Astronomy Picture of the Day
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-amber-500 uppercase font-bold  text-2xl"
            >
              {apodData.title}  ({apodData.date})
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              {apodData.explanation}
              <br />
              <p className="text-amber-500">copyright by {apodData.copyright}</p>
            </p>
            <div className="flex">
              <input type="date"
                data-aos="fade-up"
                data-aos-delay="300"
                value={selectedDate}
                max={today}
                onChange={handleDateChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400" />
              <button
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"

              >
                Search
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img
                src={apodData.url}
                alt="Description of the image"
                className="object-contain w-full sm:w-96 lg:w-[40rem] h-auto mt-12"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]">4
      </div>
    </div>
  );
};

export default Hero2;
