import React from 'react'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import { PlusSquare } from '@phosphor-icons/react'
import CourseCard from '../components/LecturerComponents/CourseCard'

const Lecturer = () => {
    return (
        <div className='sm:h-full h-svh bg-gradient-to-tr from-violet-400 to-sky-200 p-4 flex flex-col gap-2 '>
            <div id="title" className='animate-fade-in flex flex-col px-4'>
                <BreadcrumbComponent />
                <div className='flex flex-row items-center'>
                    <span className='text-black sm:text-4xl text-2xl font-poppins uppercase px-4'>
                        Course List
                    </span>
                    <button className=''>
                        <PlusSquare size={40} />
                    </button>
                </div>
            </div>
            <div id="card-container" className='pt-4 flex max-w-[200px] gap-8'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default Lecturer