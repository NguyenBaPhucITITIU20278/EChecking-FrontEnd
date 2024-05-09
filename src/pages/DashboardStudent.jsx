import React from 'react';
import Checkattendance from '../assets/Checkattendance icon.jpg';
import Setting from '../assets/Setting icon.jpg';
import BackgroundImage from '../assets/BGROUND.jpg'; // Import the background image

const DashboardStudent = () => {
    return (
        <><div>DashboardStudent</div><div className='text-black' style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
        }}>
            <div className="bg-white py-10 text-black text-center absolute top-0 left-0 w-full h-35 "></div>
            <div className="relative z-10 flex justify-center items-center h-screen">
                <button className="border-2 border-gray-400 relative w-1444 h-1024 bg-white shadow-lg p-8 mr-56 mt-10 mt-50 rounded-2xl hover:scale-105 transition duration-300">
                    <img src={Checkattendance} alt="Check Attendance" className="pl-2 absolute top-8 left-24 w-32 h-32" />
                    <h1 className="text-2xl font-semibold mt-32 ml-10 mr-10 text-gray-700"> Check attendance</h1>
                </button>
                <button className="border-2 border-gray-400 relative w-1440 h-1024 bg-white shadow-lg p-8 mt-10 mt-50 rounded-2xl hover:scale-105 transition duration-300">
                    <img src={Setting} alt="Setting" className="pl-2 absolute top-12 left-28 w-24 h-24" />
                    <h1 className="text-2xl font-semibold mt-32 ml-24 mr-24 text-gray-700"> Setting</h1>
                </button>
            </div>
            <div className="absolute top-24 left-5 text-4xl font-bold">Dashboard</div>
        </div></>
    )
}

export default DashboardStudent