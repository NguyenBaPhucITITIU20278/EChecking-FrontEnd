import React from 'react'
import { DownloadSimple } from '@phosphor-icons/react'
import BackgroundImage from '../assets/BGROUND.jpg'; // Import the background image


const QuizPage = () => {
    return (
        <><div>QuizPage</div><div className='text-black' style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
        }}>
            <div className="bg-white py-10 text-black text-center absolute top-0 left-0 w-full h-35 "></div>
            <div className="relative z-10 flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg shadow-lg p-8 relative" style={{ width: '1300px', height: '650px', marginTop: '50px' }}>
                    <div className="flex items-center mb-4">
                        <h1 className="text-4xl font-palanquin mr-4">Assignment Information</h1>
                        <div className="h-1 bg-black flex-grow"></div>
                    </div>
                    <div className="w-50 h-28 bg-gray-200 rounded ml-26 flex flex-col justify-center items-center" style={{ boxShadow: '0px 2px 4px rgba(0.5, 0.5, 0.5, 0.5)' }}>
                        <p className="text-xl text-black  font-montserrat" style={{ marginBottom: '12px' }}>Imagine you're part of a software development team tasked with building an e-commerce platform for a client. The client wants a robust and scalable system that can handle many users, transactions, and product listings. As a team, you need to decide on the best approach for designing and implementing various system components while ensuring code reusability and applying design patterns where appropriate.</p>

                    </div>
                    {/* Content of the rounded rectangle */}
                    <div className="h-1 mt-12 bg-black flex-grow mt-8"></div>
                    <div className="flex items-center mb-4 mt-8">
                        <h1 className="text-4xl font-palanquin mr-4">Assignment Submission</h1>
                        <div className="h-0.5 bg-black flex-grow"></div>
                    </div>
                    <div className="flex justify-between items-center mt-4 ml-12">
                        <div>
                            <div className="text-xl text-gray-700 ml-24 font-montserrat">Attach File
                            <DownloadSimple size={32} className=" ml-10" />
                            </div>
                            <button className="w-72 h-8 bg-gray-300 rounded flex flex-col justify-center items-center mt-4 ml-2 transform transition duration-300 hover:scale-105" style={{ boxShadow: '0px 2px 4px rgba(0.5, 0.5, 0.5, 0.5)' }}>
                                <p className="text-lg text-black font-montserrat" style={{ marginBottom: '2px' }}>Browse Local Files</p>
                            </button>
                        </div>

                        <div className="text-xl text-gray-700 mr-60 mb-10 font-montserrat">Uploaded File:</div>
                    </div>
                    <div className="h-0.5 bg-gray-300 flex-grow mt-14"></div>
                    {/* Buttons */}
                    <div className="absolute bottom-8 right-8 flex space-x-4">
                        <button className="px-4 py-2 bg-white text-black rounded-full transform transition duration-300 hover:scale-105 font-montserrat" style={{ boxShadow: '0px 2px 4px rgba(0.5, 0.5, 0.5, 0.5)' }}>Cancel</button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-full transform transition duration-300 hover:scale-105 font-montserrat" style={{ boxShadow: '0px 2px 4px rgba(0.5, 0.5, 0.5, 0.5)' }}>Submit</button>
                    </div>
                </div>

            </div>
        </div></> 
    )
}

export default QuizPage
