import BreadcrumbComponent from '../components/BreadcrumbComponent';
import { ArrowsOut } from '@phosphor-icons/react';
import TableComponent from '../components/SessionComponents/TableComponent';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as AttendanceService from '../services/AttendanceService';
import * as RecordService from '../services/RecordService';
import { jwtDecode } from 'jwt-decode';
import * as message from '../components/MessageModal'
import { useQuery } from '@tanstack/react-query';

const SessionInfoPage = () => {
    const { session } = useParams();
    const [quiz, setQuiz] = useState('');
    const [ sessionID, setSessionID ] = useState('')

    const fetchSession = async () => {
        const res = await AttendanceService.getDetailsByCode(session);
        if (res?.status === "OK") {
            setQuiz(res.data.quiz);
            setSessionID(res.data._id)
        } else if (res?.status === "ERR") {
            message.error(res?.message);
        }
    }
    useEffect(() => {
        fetchSession();
        fetchRecords()
            
    }, []);

    const navigate = useNavigate();
    const { course } = useParams();
    const handleReview = () => {
        navigate(`/lecturer/dashboard/${course}/${session}/review`)
    }

    const fetchRecords =  () => {
        try {
            // let storageData = JSON.parse(localStorage.getItem('accessToken'));
            // const decoded = jwtDecode(storageData)
            // console.log('test', decoded)
            const res = RecordService.getAllRecord(sessionID)
            // console.log(res)
            // console.log('test',dataRecords)
            return res
        } catch (error) {
            console.log(error)   
            message.error('Failed to get records')    
        }
    }

    const queryRecord = useQuery({ queryKey: ['sessions'], queryFn: fetchRecords })
    const { isLoading: isLoadingRecords, data: dataRecords, error: errorRecords } = queryRecord


    return (
        <div className={`sm:h-full h-svh bg-gradient-to-tr from-violet-400 to-sky-200`}>
            <div className="p-4 flex flex-col gap-2">
                <BreadcrumbComponent />
                <div id='course-info' className='px-6 py-4 flex flex-col sm:gap-1 border-[1px] border-gray-700 bg-white bg-opacity-90 w-full relative shadow-xl'>
                    <h1 className=' flex flex-row justify-between gap-4'>
                        <div className='font-poppins sm:text-4xl text-2xl'>
                            {session ? session : 'Session Code'}
                        </div>
                        <div className='flex items-start'>
                            <button
                                onClick={handleReview}
                                className='flex items-center gap-2 border-[1px] border-black rounded-sm p-2 hover:scale-105 hover:shadow-xl'>
                                <ArrowsOut size={28} />
                                <span className='sm:flex hidden'>Review Code</span>
                            </button>
                        </div>
                    </h1>
                    <div className='rounded-lg h-max  2xl:w-[1400px]'>
                        <div className='text-justify font-palanquin sm:text-xl text-sm'>
                            {quiz ? quiz : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
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
                    <TableComponent className='' records={dataRecords.data}/>
                </div>
            </div>
        </div>
    )
}

export default SessionInfoPage