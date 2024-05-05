import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";
import { useEffect, useState } from 'react'
import axios from 'axios';

const Rapidscat = () => {

  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch APOD data from backend
    axios.get('https://api.nasa.gov/planetary/apod?api_key=TxDEm7v5ovKjhos5Yq58g7FahsoOC6IHKj6NTdD1')
        .then(response => {
            setApodData(response.data);
            console.log(apodData.title);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching APOD:', error);
            setLoading(false);
        });
}, []);

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={apodData.url}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Astronomy Picture Of The Day
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                {apodData.title}
             
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              {apodData.explanation}
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
