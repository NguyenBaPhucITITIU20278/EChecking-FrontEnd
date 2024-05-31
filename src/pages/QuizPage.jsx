import React from 'react'
import { Download, DownloadSimple } from '@phosphor-icons/react'
import BackgroundImage from '../assets/BGROUND.jpg'; // Import the background image


const QuizPage = () => {
    return (
        <div className='flex justify-center items-center sm: h-full h-svg w-full flex-col bg-white bg-opacity-40 sm:bg-opacity-10'>
            <div className={`bg-white bg-opacity-40 w-[80%] h-[80%] rounded-2xl p-6`}>
                <div className='flex flex-col justify-center items-center p-4'>
                    <div className='font-poppins text-2xl normal-case drop-shadow-2xl font-black'>
                        Session Code
                    </div>
                    <div className='sm:flex hidden font-poppins text-4xl normal-case drop-shadow-2xl text-white font-black text-stroke-black'>
                        Course Name
                    </div>
                </div>
                <div className='flex p-6 bg-white h-2/3 rounded-xl'>
                    <div className='text-3xl font-poppins text-justify text-ellipsis overflow-scroll'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </div>
                <div className='flex sm:flex-row gap-4 justify-end'>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
                            <Download size={20} /> hekki
                        </label>
                        <input
                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file_input"
                            type="file"
                            accept="image/*"
                            />
                    </div>
                    <div>
                        Submit Button
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuizPage
