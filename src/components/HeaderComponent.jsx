import React from 'react'
import logo from '../assets/Logo.svg'


const HeaderComponent = ({ title, role }) => {
    return (
        <>
            <header className='bg-white mx-auto flex max-w-7xl justify-between sm:px-6 lg:px-8 items-center '>
                <div className='flex lg:flex-1'>
                    <a href="#" className='-m-1.5 p-1.5'>
                        <img src={logo} alt="logo" className='w-auto h-20 items-center' />
                    </a>

                    <div className=' text-black flex flex-col gap-2 uppercase text-left justify-center'>
                        <div className='text-lg'> {title} </div>
                        <div className='text-sm'> {role} </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 uppercase text-lg '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <div>
                        User Name
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent