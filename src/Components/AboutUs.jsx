import React from 'react';

const AboutUs = () => {
  return (
    <div 
      id='aboutus' 
      className='bg-cover bg-center h-auto md:h-[35rem] flex items-center justify-center p-4' 
      style={{ backgroundImage: "url('src/assets/handshake.jpg')" }}
    >
      <div className='bg-[#203955] flex flex-col w-full max-w-[75rem] p-6 md:p-[3rem] opacity-90'>
        <div className='text-4xl sm:text-5xl md:text-6xl text-white pb-4 md:pb-[1rem]'>
          About Us..
        </div>
        <div className='h-[0.1rem] bg-white flex w-[12rem] sm:w-[18rem] md:w-[22rem] mb-4 md:mb-[1rem] rounded-sm'></div>
        <div className='text-sm sm:text-base md:text-xl text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula odio, imperdiet ac pellentesque quis, viverra et sapien. Nam commodo, turpis at blandit volutpat, odio turpis faucibus turpis, non volutpat dolor erat a turpis.
          Etiam dapibus mattis erat ac sagittis. Etiam nec arcu at massa tempor volutpat. Ut bibendum, eros sed semper placerat, orci urna hendrerit ligula, at elementum augue nunc id turpis. Nulla mauris sem, convallis ut luctus non, mollis a urna.
          <br/><br/> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula odio, imperdiet ac pellentesque quis, viverra et sapien. Nam commodo, turpis at blandit volutpat, odio turpis faucibus turpis, non volutpat dolor erat a turpis.
          Etiam dapibus mattis erat ac sagittis. Etiam nec arcu at massa tempor volutpat. Ut bibendum, eros sed semper placerat, orci urna hendrerit ligula, at elementum augue nunc id turpis. Nulla mauris sem, convallis ut luctus non, mollis a urna.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
