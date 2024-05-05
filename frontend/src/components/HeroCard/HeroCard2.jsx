import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";

const HeroCard2 = ({ neoData }) => {



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
                    {data.icon}
                    <h2>{data.name}</h2> {/* Display the object name */}
                    <p className="text-sm">Close Approach Date: {data.closeApproachDate}</p> {/* Display the close approach date */}
                    <p className="text-sm">Velocity: {data.velocity} km/s</p> {/* Display the velocity */}
                    <p className="text-sm">
                      Hazardous: {data.isHazardous ? 'Yes' : 'No'}
                    </p> {/* Display whether the object is hazardous */}
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

export default HeroCard2;
