import { ArrowLineLeft } from '@phosphor-icons/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddCoursePage = () => {
    const navigate = useNavigate()

    const handleCreate = (e) => {
        // console.log('Create new course')
        // mutationCreateCourse.mutate(stateCourse)
        // console.log('course', stateCourse);
    }

    const handleOnChange = (e) => {
        console.log('e.target.value', e.target.name, e.target.value)
        // setStateCourse({
        //     ...stateCourse,
        //     [e.target.name]: e.target.value
        // }
}

    const goToCourseInfo = () => {
        navigate('/lecturer/dashboard/course')
    }

    return (
        <>
            <div className='flex justify-center items-center h-full w-full flex-col'>
                <div className='animate-fade-in sm:w-[502px] w-full sm:h-[450px] h-full backdrop bg-white bg-opacity-40 rounded sm:p-3 px-6 pt-2  border border-gray-300 shadow-lg'>
                    <form action="#" className='space-y-2'>
                        <legend className='sm:hidden pt-10 pb-8 text-[28px] text-center font-montserrat text-gray-600 font-bold '>CREATE NEW CLASS</legend>
                        <label htmlFor="courseID" className="block sm:text-2xl text-xl font-montserrat leading-6 text-black">Course ID</label>
                        <div className="mt-2">
                            <input id="courseID" name="courseID" placeholder='ID of the course' type="text" autoComplete="courseID" required className="font-palanquin block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-indigo-200 sm:text-sm sm:leading-6"
                            // onChange={handleCreate} 
                            />
                        </div>
                        <label htmlFor="courseName" className="block sm:text-2xl text-xl font-montserrat leading-6 text-black">Course Name</label>
                        <div className="mt-2">
                            <input id="courseName" name="courseName" placeholder='Name of the class' type="courseName" autoComplete="courseName" required className="font-palanquin block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            // onChange={handleCreate} 
                            />
                        </div>
                        <label htmlFor="classInfo" className=" block sm:text-2xl text-xl font-montserrat leading-6 text-black">Description</label>
                        <div className="mt-2">
                            <textarea id="classInfo" name="classInfo" placeholder="Information of the class (date, group, section,....)" autoComplete="classInfo" required className="resize-none block font-palanquin h-36 w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            // onChange={handleCreate} 
                            ></textarea>
                        </div>
                    </form>
                    <div className="pt-5 flex justify-center gap-3">
                        <button onClick={goToCourseInfo} className='sm:block hidden bg-gray-400 hover:bg-gray-600 text-white font-montserrat w-1/2 h-10 tracking-wider rounded-sm items-center transform shadow cursor-pointer'>
                            <div className='flex flex-row justify-center items-center'>
                                <span>Return</span>
                            </div>
                        </button>
                        <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-600 text-white font-montserrat  w-1/2 h-10 tracking-wider rounded-sm items-center transform shadow cursor-pointer">
                            <div className='flex flex-row justify-center'>
                                <span className=''>Create</span>
                            </div>
                        </button>
                    </div>
                </div>
                <footer className='sm:hidden h-20 bg-white w-full flex items-center pl-5 hover:text-gray-100'>
                    <button onClick={goToCourseInfo} className='flex items-center justify-center'>
                        <ArrowLineLeft size={16} color="#6b7280" weight="bold" onMouseOver={() => setColor("#fff")} />
                        <span className='uppercase pl-2 text-gray-500 text-sm font-montserrat font-bold hover:text-gray-600'>
                            Return to Dashboard
                        </span>
                    </button>
                </footer>
            </div>
        </>
    )
}

export default AddCoursePage
