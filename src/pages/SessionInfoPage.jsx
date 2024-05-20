import BreadcrumbComponent from '../components/BreadcrumbComponent'
import SessionCard from '../components/CourseComponents/SessionCard'
import { ArrowsOut } from '@phosphor-icons/react'
import TableComponent from '../components/SessionComponents/TableComponent'

const SessionInfoPage = () => {

    return (
        <div className={`sm:h-full h-full bg-gradient-to-tr from-violet-400 to-sky-200`}>
            <div className="p-4 flex flex-col gap-2">
                <BreadcrumbComponent />
                <div id='course-info' className='px-6 py-4 flex flex-col sm:gap-1 border-[1px] border-gray-700 bg-white bg-opacity-90 w-full relative shadow-xl'>
                    <h1 className=' flex flex-row justify-between gap-4'>
                        <div className='font-poppins sm:text-4xl text-2xl'>CODEID</div>
                        <div className='flex items-start'>
                            <button className='flex items-center gap-2 border-[1px] border-black rounded-sm p-2 hover:scale-105 hover:shadow-xl'>
                                <ArrowsOut size={28} />
                                <span className='sm:flex hidden'>Review Code</span>
                            </button>
                        </div>
                    </h1>
                    <div className='rounded-lg h-max  2xl:w-[1400px]'>
                        <div className='text-justify font-palanquin sm:text-xl text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                    <div>
                        <button className='absolute right-0 bottom-0 p-2 transition delay-100 '>
                            {/* <NotePencil size={32} color='currentColor' className='transition hover:scale-110' /> */}
                        </button>
                    </div>
                </div>
                {/* <div>
                    <button className='flex items-center gap-2 border-[1px] border-black rounded-sm p-2 hover:scale-105 hover:shadow-xl'>
                        <ArrowsOut size={28} />
                        <span className='sm:flex hidden'>Review Code</span>
                    </button>
                </div> */}
                <div id='table-container' className='pt-12 flex gap-8'>
                    <TableComponent className='antd-table'/>
                </div>
            </div>
        </div>
    )
}

export default SessionInfoPage