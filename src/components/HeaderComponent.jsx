import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import { CaretDown, SignOut, UserCircle } from '@phosphor-icons/react'


const HeaderComponent = ({ title, role }) => {
    const [showProfile, setShowProfile] = useState(true)
    return (
        <>
            <header className='bg-white w-full flex justify-between sm:px-6 lg:px-8 items-center shadow-xl'>
                <div className='flex lg:flex-1'>
                    <a href="#" className='-m-1.5 p-1.5'>
                        <img src={logo} alt="logo" className='w-auto h-20 items-center' />
                    </a>
                    <div className='hidden sm:flex flex-col gap-0.5 uppercase text-left justify-center font-poppins text-gray-500'>
                        <div className='text-lg uppercase'> {title} </div>
                        <div className='text-sm capitalize'> {role} </div>
                    </div>
                </div>
                <div className='flex flex-col space-x-2 capitalize items-center text-lg pr-[18px] sm:pr-0'>
                    <button className='flex font-poppins text-gray-500 justify-center items-center gap-2 border-opacity-50 px-4 py-2 rounded-md hover:text-black hover:bg-slate-100 transition ease-in-out delay-50' onClick={() => setShowProfile(!showProfile)} type='button'>
                        <span className='hidden sm:flex capitalize'>user name</span>
                        <div>
                            <CaretDown size={16} color="#040c1e" className={`transition-transform duration-300 ease-in-out ${showProfile ? 'transform rotate-180' : ''}`} />
                        </div>
                    </button>
                    <div id='profileModal' className={showProfile ? 'hidden' : 'z-10 absolute top-14'} >
                        <ul className='bg-slate-100 rounded-lg shadow-xl p-4 flex flex-col gap-3 justify-start border-2 font-poppins transition-all duration-500'>
                            <li>
                                <a href="" className='flex flex-row items-center gap-2'>
                                    <UserCircle size={20} color="#040c1e" />
                                    <span>Account</span>
                                </a>
                            </li>
                            <li className='flex flex-row items-center gap-2'>
                                <SignOut size={20} color="#040c1e" />
                                <a href="">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent