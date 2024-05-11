import React from 'react'
import CourseNavbar from '../components/CourseComponents/CourseNavbar'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import SessionCard from '../components/CourseComponents/SessionCard'

const CourseInfoPage = () => {
    return (
        <div className="h-max bg-gradient-to-tr from-slate-300 to-sky-300">
            <CourseNavbar />
            <div className="p-4">

                <BreadcrumbComponent />
                <div id='course-info' className='px-6 pt-2 flex flex-col gap-4 '>
                    <h1 className='font-poppins sm:text-4xl text-2xl'>
                        <span>Course Name</span>
                        <button>

                        </button>
                    </h1>
                    <div className='bg-white p-4 rounded-lg shadow-xl h-max md:w-3/4 2xl:w-[1400px]'>
                        <div className='text-justify font-palanquin sm:text-xl text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                </div>
                <div id='sessions-container' className='pt-12 flex gap-8 flex-wrap'>
                    <SessionCard />
                </div>
            </div>
        </div>
    )
}

export default CourseInfoPage