import React from 'react'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div className='bg-black'>
        <div className='mb-[54px]'>
            <Navbar/>
        </div>
        <div className='w-[80%] mx-auto relative rounded-[14px] bg-[#1a1a1a] pt-[31px] pl-[34px] pb-9 pr-4 grid grid-cols-12 h-[18.563rem] overflow-hidden text-left text-[1rem] text-white font-inter '>
<div className=' col-span-7'>

<div className='w-[100%] grid grid-cols-12 gap-6 '>
    <div className="col-span-5">
    <img src="https://i.imgur.com/TP6GXuh.png"  className=' w-full object-contain ' alt="" />
    </div>
 <div className="col-span-7">
        
    </div>
</div>
</div>
        </div>
      
    </div>
  )
}

export default Profile
