import React, { useState } from 'react'
import CourseNavbar from '../components/CourseComponents/CourseNavbar'
import BreadcrumbComponent from '../components/BreadcrumbComponent'
import SessionCard from '../components/CourseComponents/SessionCard'
import { CheckFat, NotePencil } from '@phosphor-icons/react'
import { Modal } from 'antd'


const CourseInfoPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isEditInfo, setIsEditInfo] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        if (isEdit === true) {
            setIsEdit(false);
        }
        if (isEditInfo === true) {
            setIsEditInfo(false);
        }
    };

    const showEdit = () => {
        setIsEdit(true);
        document.getElementById('courseNameInput').focus();
        console.log(isEdit);
    }

    const handleUpdate = () => {
        setIsEdit(false);
    }

    const showEditInfo = () => {
        setIsEditInfo(true);
        document.getElementById('courseDescriptionInput').focus();
        console.log(isEdit);
    }

    const handleUpdateInfo = () => {
        setIsEditInfo(false);
    }


    return (
        <div className={`sm:h-full h-full bg-gradient-to-tr from-violet-400 to-sky-200`}>
            <CourseNavbar />
            <div className="p-4">
                <BreadcrumbComponent />
                <div id='course-info' className='px-6 py-4 flex flex-col sm:gap-1 border-[1px] border-gray-700 bg-white w-full relative'>
                    <h1 className='font-poppins sm:text-4xl text-2xl items-center flex flex-row gap-4'>
                        <span>Course Name</span>
                        <span className='sm:text-2xl text-xl  uppercase'>COURSEID</span>
                    </h1>
                    <div className='bg-white rounded-lg h-max  2xl:w-[1400px]'>
                        <div className='text-justify font-palanquin sm:text-xl text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                    <div>
                        <button onClick={showModal} className='absolute right-0 bottom-0 p-2 transition delay-100 '>
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
                </div>
            </div>
            <>
                <Modal open={isModalOpen} okText="Done" onOk={handleOk} onCancel={handleCancel} footer={null} className='course-modal'>
                    <legend className=' uppercase flex flex-col font-montserrat justify-center items-center'>
                        <div className='text-xl'>Course Configuration</div>
                        <div className='text-3xl'> COURSEID </div>
                    </legend>
                    <div id='courseName' className='flex flex-col mt-4'>
                        <label htmlFor="courseName" className="block sm:text-lg text-sm font-montserrat leading-6 text-black">Class Name</label>
                        <div className="flex relative">
                            <input
                                id="courseNameInput"
                                name="courseName"
                                placeholder='Name of the class'
                                type="courseName"
                                className={`font-palanquin block w-full rounded-md px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-600 sm:text-sm sm:leading-6 ${isEdit ? "pointer-events-auto" : "pointer-events-none"}`}
                            />
                            <button onClick={showEdit} className={`${isEdit ? "hidden" : ""} absolute inset-y-0  right-2 transition delay-100 hover:scale-110`}>
                                <NotePencil size={30} color='currentColor' className='' />
                            </button>
                            <button className={`${isEdit ? "" : "hidden"} absolute inset-y-0 right-2 transition delay-100 hover:scale-110`} onClick={handleUpdate}>
                                <CheckFat size={30} color='#2b5432' weight='bold' className='' />
                            </button>
                        </div>
                    </div>
                    <div id='courseDescription' className='flex flex-col mt-4'>
                        <label htmlFor="courseDescription" className="block sm:text-lg text-sm font-montserrat leading-6 text-black">Course Description</label>
                        <div className="mt-2 relative">
                            <input id="courseDescriptionInput" name="courseDescription" placeholder='Description of the course' type="text" className={`font-palanquin block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-600 sm:text-sm sm:leading-6 ${isEditInfo ? "pointer-events-auto" : "pointer-events-none"}`} />
                            <button onClick={showEditInfo} className={`${isEditInfo ? "hidden" : ""} absolute inset-y-0  right-2 transition delay-100 hover:scale-110`}>
                                <NotePencil size={30} color='currentColor' className='' />
                            </button>
                            <button className={`${isEditInfo ? "" : "hidden"} absolute inset-y-0 right-2 transition delay-100 hover:scale-110`} onClick={handleUpdateInfo}>
                                <CheckFat size={30} color='#2b5432' weight='bold' className='' />
                            </button>
                        </div>
                    </div>
                </Modal>
            </>
        </div>
    )
}

export default CourseInfoPage