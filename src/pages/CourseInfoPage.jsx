import React from 'react'
import CourseNavbar from '../components/CourseComponents/CourseNavbar'
import BreadcrumbComponent from '../components/BreadcrumbComponent'

const CourseInfoPage = () => {
    return (
        <div className="h-full bg-gradient-to-tr from-slate-300 to-sky-300">
            <CourseNavbar />
            <div className="p-4">

                <BreadcrumbComponent />
                <div>
                    <h1 className='bg-white'>
                        Course Information
                    </h1>
                    <h2>

                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CourseInfoPage