import React from 'react'

const NavBar = () => {
  return (
    <div className='lg:w-full bg-white shadow-md lg:py-4 '>
       <div className=' lg:flex justify-between w-[92svw] m-auto items-center
       '><div className='  font-semibold text-2xl '>./Loop </div>
        <div className='flex gap-3'>
            <button className='register border py-1 px-3 text-white bg-black rounded-md'>Giriş</button>
            <button className='register border py-1 px-3 text-white bg-black rounded-md'>Qeydiyyat</button>
        </div>
        </div>
      
    </div>
  )
}

export default NavBar