import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from "axios";

const HeroCard3 = ({ neoData }) => {
  const { user } = useAuthContext()
  const handleSaveImage = async (image) => {
    if (!user) {
      alert("Please log in to save images");
      return;
    }

    const imageData = {
      userEmail: user.email,
      imageUrl: image.links[0].href,
      title: image.data[0].title
    };

    try {
      await axios.post('http://localhost:4000/api/images/save', imageData);
      console.log(imageData);
      alert("Image saved successfully!");
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };



  return (

    <section className="bg-primary">
      <div className="container">
        <div className="min-h-[400px]">
          <div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">

              {neoData.map((data, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                >
                  <img
                    src={data.links[0].href}
                    alt={data.data[0].title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h2>{data.data[0].title}</h2> {/* Display the image title */}
                  
                  <p className="text-sm">Date Created: {new Date(data.data[0].date_created).toLocaleDateString()}</p> {/* Display the date created */}
                  <button
                    onClick={() => handleSaveImage(data)}
                    className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md"
                  >
                    Save Image
                  </button>
                </div>
              ))}
            </div>
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>

    </section >

  );
};

export default HeroCard3;
