import React from 'react'
import logo from '../assets/Logo.svg'
import { UserCircle } from '@phosphor-icons/react'


const HeaderComponent = ({ title, role }) => {
    return (
        <>
            <header className='bg-white w-full flex justify-between sm:px-6 lg:px-8 items-center shadow-xl'>
                <div className='flex lg:flex-1'>
                    <a href="#" className='-m-1.5 p-1.5'>
                        <img src={logo} alt="logo" className='w-auto h-20 items-center' />
                    </a>
                    <div className='hidden sm:flex flex-col gap-0.5 uppercase text-left justify-center font-montserrat font-bold text-gray-500'>
                        <div className='text-lg'> {title} </div>
                        <div className='text-sm'> {role} </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 uppercase items-center text-lg pr-[18px] sm:pr-0'>
                    <div>
                        <UserCircle size={42} color="#2563eb" weight="fill" />
                    </div>
                    <div className='hidden sm:flex font-montserrat font-bold text-gray-500'>
                        Kim Soo-hyun
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent