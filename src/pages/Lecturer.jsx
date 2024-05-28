import React, { useState } from 'react'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import { PlusSquare } from '@phosphor-icons/react'
import CourseCard from '../components/LecturerComponents/CourseCard'
import EmptyCard from '../components/LecturerComponents/EmptyCard'

const Lecturer = () => {
    const courseList = Array.from({ length: 20 }, (_, index) => index);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(courseList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCourses = courseList.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <div className={`${courseList > 8 ? `sm:h-full` : `sm:h-svh`} sm:flex hidden bg-gradient-to-tr from-violet-400 to-sky-200 p-4 flex-col gap-2 `}>
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
            <div id="card-container" className='pt-4 px-8 justify-center flex flex-wrap w-full h-[700px] gap-8'>
                {currentCourses.map((course, index) => (
                    <CourseCard key={index} />
                ))}
                {/* <EmptyCard /> */}
            </div>
            <div className='flex gap-4 justify-center'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className={` rounded-lg border border-black py-2 px-6 font-poppins tabular-nums w-[60px] ${currentPage === index + 1 ? 'bg-blue-200 scale-110' : 'bg-white'} transition duration-200 ease-in-out`}
                        key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Lecturer