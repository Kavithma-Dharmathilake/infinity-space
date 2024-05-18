import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from "axios";

const HeroCard4 = ({ neoData }) => {
  const { user } = useAuthContext()


  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/images/${id}`);
      alert("Image deleted successfully!");
      // Optionally, you can update the state to remove the deleted image from the UI
    } catch (error) {
      console.error('Error deleting image:', error);
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
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h2>{data.title}</h2> {/* Display the image title */}
                  {/* <button
                    onClick={() => handleDeleteImage(data._id)} 
                    className="bg-blue-400 text-white hover:bg-red-500 px-4 py-1 rounded-md"
                  >
                    Remove
                  </button> */}
               
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

export default HeroCard4;
