import React from 'react'
import CourseNavbar from '../components/CourseComponents/CourseNavbar'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import SessionCard from '../components/CourseComponents/SessionCard'
import { NotePencil } from '@phosphor-icons/react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'


const CourseInfoPage = () => {
    return (
        <div className={`sm:h-full h-full bg-gradient-to-tr from-violet-400 to-sky-200`}>
            <CourseNavbar />
            <div className="p-4">
                <BreadcrumbComponent />
                <div id='course-info' className='px-6 py-4 flex flex-col sm:gap-1 border-[1px] border-gray-700 bg-white w-full relative'>
                    <h1 className='font-poppins sm:text-4xl text-2xl items-center flex flex-row gap-4'>
                        <span>Course Name</span>
                        
                    </h1>
                    <div className='bg-white rounded-lg h-max  2xl:w-[1400px]'>
                        <div className='text-justify font-palanquin sm:text-xl text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                    <div>
                    <button className='absolute right-0 bottom-0 p-2 transition delay-100 '>
                            <NotePencil size={32} color='currentColor' className='transition hover:scale-110' />
                    </button>
                    </div>
                </div>
                <div id='sessions-container' className='pt-12 flex gap-8 flex-wrap'>
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
\
                </div>
            </div>
        </div>
    )
}

export default CourseInfoPage