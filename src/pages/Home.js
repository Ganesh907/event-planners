import BgVideo from '../assets/videos/BackgroundVideo.mp4';
import React, { useState, useEffect } from 'react';
// import logo from '../assets/images/EPLogo.jpeg'
import logo from '../assets/images/HiFiLogo.jpg'
import CategoriesCarousel from '../components/categoriespagecomponents/CategoriesCarousel';
import { categories } from '../utils/CategoriesData';
import { useNavigate } from 'react-router';
import Crud from '../components/Crud';

const EventPage = () => {
  const [showHeading, setShowHeading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Function to handle the visibility of the heading
    const toggleVisibility = () => {
      setShowHeading(true); // Show heading for the middle 7 seconds
      setTimeout(() => {
        setShowHeading(false); // Hide heading after 7 seconds
      }, 7000);
    };

    // Hide heading initially for 1.5 seconds
    const initialTimeout = setTimeout(() => {
      toggleVisibility(); // Show heading after 1.5 seconds
    }, 1500);

    // Repeat the process every 10 seconds (entire video duration)
    const interval = setInterval(() => {
      setShowHeading(false); // Hide for the last 1.5 seconds
      setTimeout(() => {
        toggleVisibility(); // Show heading again for the next cycle
      }, 1500);
    }, 10000);

    return () => {
      clearTimeout(initialTimeout); // Cleanup on unmount
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
          {/* <div className="relative h-[80vh] flex justify-center items-center ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={BgVideo} 
        autoPlay
        loop
        muted
      />

      <div className="relative flex justify-center items-center z-10">
        <div
          className={`transition-opacity flex flex-col  duration-1000 ease-in-out ${showHeading ? 'opacity-100' : 'opacity-0'} ${
            showHeading ? 'visible' : 'invisible'
          } flex justify-center items-center`}
        >
          <img
            src={logo} 
            alt="Logo"
            className="h-32 w-32 shadow-lg shadow-black border-black p-1 border-2 my-10 rounded-full"
          />
          <h1
            className="text-5xl text-center font-bold mx-10 border-y-4 py-2 italic border-black"
            style={{ fontFamily: 'Playfair Display' }}
          >
            HiFi Creations
          </h1>
        </div>
      </div>
    </div> */}
       <CategoriesCarousel/>

       <div className="flex justify-center flex-wrap gap-4 my-20">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center w-40 md:w-52">
                <button
                className='relative border-2 border-black flex items-center justify-center text-lg w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl'
              
                  onClick={() => navigate('/category')}
                >
                  <img src={category.image} alt={category.name} className="absolute inset-0 object-cover w-full h-full opacity-80 transition duration-300 ease-in-out" />
                </button>
                <span className={`mt-2 text-center text-xl font-semibold italic 'text-black'}`} style={{ fontFamily: 'Playfair Display' }}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>


<Crud/>

    </div>


  );
};

export default EventPage;
