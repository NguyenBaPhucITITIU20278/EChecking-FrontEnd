import { ArrowSquareOut } from '@phosphor-icons/react'
import React from 'react'

const CourseCard = () => {
    return (
        <div href="" className='sm:p-5 p-4 bg-blue-50 h-max sm:w-[420px] rounded-xl shadow-xl overflow border border-slate-500 animate-fade'>
            <div className='flex flex-col gap-2'>
                <div className=' relative flex justify-center'>
                    <span className='font-poppins text-xl uppercase'>
                        Title Code
                    </span>
                    <span className='absolute right-0 '>
                        <ArrowSquareOut size={30} />
                    </span>
                </div>
                <div className='flex bg-white border border-black rounded-md overflow-hidden w-full h-[150px] p-2'>
                    <div className='text-justify overflow-hidden text-ellipsis text-black'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        date
                    </div>
                    <div>
                        session counter
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-white rounded-lg border border-black py-2 px-6'>
                        <span className='uppercase'>
                            View CourseName
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard