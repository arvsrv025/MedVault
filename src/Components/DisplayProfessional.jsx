import React from 'react'

const DisplayProfessional = () => {
  return (
    <div className='min-h-screen bg-[#4876A9] flex items-center justify-center p-4 bg-cover bg-center'
    style={{ backgroundImage: "url('src/assets/proff-login.jpg')" }}>
      <div className='bg-[#203955] w-full max-w-[35rem] p-6 md:p-[3rem] rounded-lg opacity-90'>
        <div className='text-3xl sm:text-4xl md:text-5xl text-white text-center pb-4'>PROFESSIONAL LOGIN</div>
        <div>
          <form action='' className='flex flex-col gap-4 items-center'>
            <input 
              type='text' 
              name='email' 
              placeholder='Your MedID' 
              className='w-full md:w-[20rem] h-[2.5rem] rounded-md p-4 text-base sm:text-lg'
            />
            <input 
              type='text' 
              name='name' 
              placeholder='Institute' 
              className='w-full md:w-[20rem] h-[2.5rem] rounded-md p-4 text-base sm:text-lg'
            />
            <input 
              type='text' 
              name='name' 
              placeholder='Designation' 
              className='w-full md:w-[20rem] h-[2.5rem] rounded-md p-4 text-base sm:text-lg'
            />
            <input 
              type='text' 
              name='name' 
              placeholder='Password' 
              className='w-full md:w-[20rem] h-[2.5rem] rounded-md p-4 text-base sm:text-lg'
            />
            
            <button 
              type='submit' 
              className='h-[2.5rem] w-[6rem] bg-white font-medium rounded-md hover:bg-[#A4D0DE] transition-all'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DisplayProfessional
