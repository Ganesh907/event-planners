import React from 'react';
import Logo from '../../assets/images/EPLogo.jpeg';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-40">
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 border-4 border-black border-t-4 border-t-gray-300 rounded-full animate-spin"></div>
        <img
          src={Logo}
          alt="Loading"
          className="absolute top-1/2 left-1/2 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Spinner;
