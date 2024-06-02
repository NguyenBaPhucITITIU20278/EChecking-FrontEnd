import React, { useEffect, useState } from 'react'
import { Download, DownloadSimple, TrayArrowUp, X } from '@phosphor-icons/react'
import BackgroundImage from '../assets/BGROUND.jpg'; // Import the background image


const QuizPage = () => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fileNameElement = document.getElementById('fileNameElement');
        if (file && fileNameElement) {
            fileNameElement.innerText = file.name;
        }
    }, [file]);

    const handleFileChange = (e) => {
        const files = e.target.files?.[0];
        const fileNameElement = document.getElementById('fileNameElement');
        if (files) {
            if (fileNameElement) {
                fileNameElement.innerText = '';
            }
            setFile(files);
        }
    };

    const removeFile = () => {
        const fileNameElement = document.getElementById('fileNameElement');
        if (fileNameElement) {
            fileNameElement.innerText = 'Browse your file here';
        }
        setFile(null);
    };

    return (
        <div className='flex justify-center items-center sm: h-full h-svg w-full flex-col bg-white bg-opacity-40 sm:bg-opacity-10'>
            <div className={`bg-white bg-opacity-40 w-[80%] h-max rounded-2xl p-6`}>
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
                <div className='flex sm:flex-row gap-4 justify-end p-4'>
                    <div className='flex flex-row items-center'>
                        <label htmlFor="dropzone-file" className="flex flex-row items-center gap-4 border border-dashed p-4 border-black ">
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-sm text-gray-500">
                                    <TrayArrowUp size={32} />
                                </span>
                            </div>
                            <div id="fileNameElement" className="text-sm text-gray-500">
                                Browse your file here
                            </div>
                            <button onClick={removeFile} className='border border-black p-2 rounded-lg'>
                                <X size={16} />
                            </button>
                        </label>
                    </div>
                    <button className='border border-black w-1/5 rounded-xl p-2 bg-white hover:bg-blue-400 group'>
                        <span className='text-lg uppercase font-montserrat text-gray-500 font-black tracking-wider group-hover:text-white'>
                            Submit
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizPage
