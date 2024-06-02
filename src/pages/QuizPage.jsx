import React, { useEffect, useState } from 'react'
import { Download, DownloadSimple, TrayArrowUp } from '@phosphor-icons/react'
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
        if (files) {
            setFile(files);
        }
    };

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
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-300"
                        >
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <p className="mb-2 text-sm text-gray-500">
                                    <TrayArrowUp size={32} />
                                </p>
                            </div>
                            <p
                                id="fileNameElement"
                                className="mb-2 text-sm text-gray-500"
                            ></p>
                        </label>
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
