import React from 'react'
import profile from '@public/image/profile-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function Sidenav() {
  return (
    <div className='w-72 bg-gray-100 fixed h-screen'>
      <div className="flex px-6 pt-4 pb-2 items-center gap-2">
        <div className="size-12 rounded-full relative">
        <Image src={profile} fill alt="profile image" className='rounded-full p-1' />
        </div>
        <div className="flex flex-col  text-sm">
          <h1>Gravid Cristofer</h1>
          <h1>Serion Developer</h1>
        </div>
       
          <span className='size-4'><FontAwesomeIcon icon={faPencil} /></span>
          
          
     
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center bg-white rounded-xl p-2">
        <input type="text" className='outline-none'/>
        <div className='size-5'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        </div>
      </div>

      <div className='flex gap-2 items-center p-4'>
        <div className="size-12 relative rounded-full">
        <Image src={profile} fill alt="profile image" className='rounded-full' />
        </div>
        <div className="">
          <p className='text-blue-400 text-sm'>Some Random Name</p>
          <p className='text-xs text-gray-500 leading-1 '>this is the last sms from this </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-2">
          <p className='text-gray-400'>12:10</p>
          <div className='text-xs bg-blue-400 rounded-full size-4 text-center text-white'>1</div>
        </div>
      </div>
      </div>
  )
}

export default Sidenav