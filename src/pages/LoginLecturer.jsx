import { ExclamationMark, Eye, EyeSlash, Question } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as LecturerService from '../services/LecturerService'

const LoginLecturer = () => {
    const navigate = useNavigate()

    const [lecturerID, setLecturerID] = useState('')
    const [password, setPassword] = useState('')

    const mutation = useMutationHook(
        data => LecturerService.loginUser(data)
    )

    const { data, isSuccess, isError } = mutation

    const handleOnChangeID = (e) => {
        setLecturerID(e.target.value);
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const handleSignIn = () => {
        console.log(`Signing in with ID: ${lecturerID} and password: ${password}`);
        // console.log(process.env.REACT_APP_TEST)
        mutation.mutate({
            lecturerID,
            password
        })
    }

    const dispatch = useDispatch()
    const handleGetDetailUser = async (id, token) => {
        const res = await LecturerService.getDetailStudent(id, token)
        dispatch(updateStudent({ ...res?.data, accessToken: token }))
        console.log(res?.data)
    }

    useEffect(() => {
        if (data?.status === "OK") {
            navigate('/dashboard')
            localStorage.setItem('accessToken', JSON.stringify(data?.accessToken))
            console.log('test',data)
            if (data?.accessToken) {
                const decoded = jwtDecode(data?.accessToken);
                console.log('decoded', decoded)
                if (decoded?.id) {
                    handleGetDetailUser(decoded?.id, data?.accessToken);
                }
            }
        }

    }, [data, isSuccess, isError])


    return (
        <>
            <div className='flex justify-center items-center sm:h-max h-full w-full flex-col sm:bg-opacity-0 bg-white bg-opacity-40'>
                <div className='flex sm:flex-row flex-col sm:gap-6 justify-center items-center py-6 text-center text-white font-black font-poppins '>
                    <div className='sm:text-8xl text-[40px] uppercase text-stroke-black'>E-Checking</div>
                    <div className='sm:text-3xl text-xl bg-purple-500 bg-opacity-80 sm:py-4 py-2 px-6 rounded-xl'>System</div>
                </div>
                <div className='animate-fade-in sm:w-[502px] w-full sm:bg-purple-300 sm:bg-opacity-40 sm:rounded-3xl sm:p-3 sm:shadow-2xl sm:border sm:border-black '>
                    <div className='mt-4 px-8'>
                        <label className="block font-poppins text-black pb-2" htmlFor="email" value="Email" > Lecturer ID </label>
                        <input type='email'
                            name='email'
                            placeholder='Lecturer ID'
                            className="w-full rounded-md py-2.5 px-4 border border-black text-sm outline-[#ae67cf]" />
                    </div>
                    <div className="mt-4 px-8">
                        <label className="block font-poppins text-black pb-2" htmlFor="password" value="Password"> Password </label>
                        <div className=' relative flex items-center'>
                            <input type={passwordVisible ? 'text' : 'password'} className='w-full rounded-md py-2.5 px-4 border border-black text-sm outline-[#678dcf]' placeholder='Your password' />
                            <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600 absolute inset-y-0 right-2" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <EyeSlash size={26} color='currentColor' /> : <Eye size={26} color='currentColor' />}
                            </button>
                        </div>
                    </div>
                    <div className="my-4 mt-8 flex justify-center gap-3">
                        <button onClick={handleCreate} className=" bg-purple-500 hover:bg-purple-600 text-white font-montserrat px-12 py-2  tracking-wider rounded-xl transform shadow cursor-pointer font-bold">
                            <span className='uppercase'>sign in</span>
                        </button>
                    </div>
                </div>
                <div className='sm:pt-8 pt-2 font-poppins sm:text-xl text-base flex flex-row items-center'>
                    <span className=''>
                        You aren't a &nbsp;
                    </span>
                    <span className='text-purple-700 flex flex-row items-center'>
                        Lecturer?&nbsp;
                    </span>
                    <span>
                        try as&nbsp;
                    </span>
                    <a href='' className='text-blue-500 underline' onClick={goToStudent}>
                        Student!
                    </a>
                </div>
            </div>
        </>
    )
}

export default LoginLecturer