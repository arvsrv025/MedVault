import React from 'react';

const Introduction = () => {
  return (
    <div className='bg-cover bg-center h-full flex items-center justify-center p-4' style={{ backgroundImage: "url('src/assets/doctors.jpg')" }}>
      <div className='bg-[#203955] flex flex-col md:flex-row items-center justify-between h-auto md:h-[25rem] w-full md:w-[85rem] opacity-85 p-6 md:p-0'>
        <div className='w-full md:w-[48%] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white flex items-center justify-center text-center md:text-left'>
          MED<br/>VAULT
        </div>
        <div className='w-[0.2%] bg-white flex h-0 md:h-[23rem] md:block hidden'></div>
        <div className='w-full md:w-[51%] text-sm sm:text-base md:text-xl p-2 sm:p-6 md:p-[3rem] text-white text-center md:text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula odio, imperdiet ac pellentesque quis, viverra et sapien. Nam commodo, turpis at blandit volutpat, odio turpis faucibus turpis, non volutpat dolor erat a turpis.<br/>
          Etiam dapibus mattis erat ac sagittis. Etiam nec arcu at massa tempor volutpat. Ut bibendum, eros sed semper placerat, orci urna hendrerit ligula, at elementum augue nunc id turpis. Nulla mauris sem, convallis ut luctus non, mollis a urna.
        </div>
      </div>
    </div>
  );
}

export default Introduction;
