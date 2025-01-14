import React, { useContext } from 'react';
import { PiCallBellThin  } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { IoChatbubblesOutline, IoKeyOutline  } from "react-icons/io5";
import { CiLocationOn, CiLogout  } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BlackContext } from '@/Context/Context';

const Profile = ({data}) => {
  const {  showProfile } = useContext(BlackContext);

  return (
    <div className={`fixed top-16 right-4 w-full max-w-80 bg-white shadow-lg p-6 transition-transform duration-1000 ease-in-out ${
    showProfile ? "translate-x-0" : "translate-x-full"
    }`}>
      <div className='flex gap-5 items-center'> 
        <img src={data?.photo} alt="" className='w-16 h-16 object-cover rounded-full ' />
        <div>
          <h4 className='text-lg font-medium '>{data?.name}</h4>
          <p className='text-sm text-gray-500'>{data?.email}</p>
          <p> ৳ 0.00</p>
        </div>
      </div>
      {/* link list of profile  */}
      <div className='mt-10'>
        <Link className='flex gap-3 items-center border-b py-3 '>
          <PiCallBellThin  />
          <h5 className='text-sm font-normal text-gray-600 hover:text-pink-600 transition-transform ease-in-out duration-150'>My Orders</h5>
        </Link>
        <Link className='flex gap-3 items-center border-b py-3 '>
          <FaRegEdit  />
          <h5 className='text-sm font-normal text-gray-600 hover:text-pink-600 transition-transform ease-in-out duration-150'>Edit Profile</h5>
        </Link>
        <Link className='flex gap-3 items-center border-b py-3 '>
          <IoChatbubblesOutline  />
          <h5 className='text-sm font-normal text-gray-600 hover:text-pink-600 transition-transform ease-in-out duration-150'>Chat</h5>
        </Link>
        <Link className='flex gap-3 items-center border-b py-3 '>
          <CiLocationOn  />
          <h5 className='text-sm font-normal text-gray-600 hover:text-pink-600 transition-transform ease-in-out duration-150'>Address</h5>
        </Link>
        <Link className='flex gap-3 items-center border-b py-3 '>
          <IoKeyOutline   />
          <h5 className='text-sm font-normal text-gray-600 hover:text-pink-600 transition-transform ease-in-out duration-150'>Change Password</h5>
        </Link>
        <Link className='flex gap-3 items-center py-3 '>
          <CiLogout   />
          <h5 className='text-sm font-normal text-gray-600 hover:text-pink-600 transition-transform ease-in-out duration-150'>Logout</h5>
        </Link>
      </div>
    </div>
  );
};

export default Profile;