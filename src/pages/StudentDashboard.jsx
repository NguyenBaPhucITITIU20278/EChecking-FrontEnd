import React, { useState } from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import { Modal } from 'antd';

const StudentDashboard = () => {
  // const [pinCode, setPinCode] = useState('');
  // const [showLabel, setShowLabel] = useState(true);

  // const handlePinChange = (e) => {
  //   setPinCode(e.target.value);
  // };

  // const handleInputFocus = () => {
  //   setShowLabel(false);
  // };

  // const handleInputBlur = () => {
  //   if (pinCode === '') {
  //     setShowLabel(true);
  //   }
  // };

  const handleEnter = () => {
    // console.log("Đã nhập mã pin:", pinCode);
    showModal();
  };

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

  return (

    <div className='flex justify-center items-center sm: h-full h-svg w-full flex-col bg-white bg-opacity-40 sm:bg-opacity-10'>
      <div className='sm:p-4 flex justify-center rounded-2xl items-center align-middle text-center'>
        <span className='sm:flex hidden font-poppins text-5xl normal-case drop-shadow-2xl text-white font-black text-stroke-black'>
          Attendance Session
        </span>
      </div>
      <div className='sm:bg-white sm:bg-opacity-40 animate-fade-in sm:w-[400px] w-full sm:h-max h-full rounded-xl sm:p-8 px-6 pt-2 shadow-xl flex justify-center items-center'>
        <form action="#" noValidate className='flex-col flex gap-6 sm:w-full w-full items-center'>
          <legend className='sm:hidden border-b shadow-xl border-black'>
            <div className=''>
              <span className='font-poppins text-3xl uppercase drop-shadow-2xl text-white font-black text-stroke-black'>
                Attendance Session
              </span>
            </div>
          </legend>
          <label htmlFor="pinCode" className="flex flex-col-reverse justify-center font-montserrat leading-6 text-black w-full sm:pt-0 pt-5">
            <input
              id="pinCode"
              name="pinCode"
              placeholder='Session Code'
              type="text"
              required
              maxLength="6"
              autoComplete="off"
              pattern='[A-Za-z0-9]{6}'
              className='font-poppins font-medium tracking-widest block w-full rounded-lg  p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder:flex placeholder:justify-center placeholder:items-center sm:text-xl sm:leading-6 text-center uppercase peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 ' />
            <span className="hidden text-sm text-red-500  peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Enter a correct pin with only 6 characters
            </span>
          </label>
          <button type="button" onClick={handleEnter} className='font-montserrat w-full py-2 border border-black rounded-lg bg-white uppercase hover:scale-105 transition  '>
            Enter
          </button>
        </form>
      </div>
      <>
        <Modal open={isModalOpen} okText="Done" onOk={handleOk} onCancel={handleCancel} footer={null} className='session-success-modal fixed inset-0 flex items-center justify-center sm:w-[500px]'>
          <legend className=' uppercase flex flex-col font-montserrat justify-center items-center'>
            <div className=''>
              <CheckCircle size={80} color="#20ac22" />
            </div>
          </legend>
          <div className='sm:py-4 pb-4 flex flex-col justify-center items-center gap-2'>
            <div className='flex sm:flex-row flex-col justify-center items-center sm:text-lg text-xs font-montserrat leading-6 text-black'>
              <span>Attendance roll call complete!</span>
              <span>
              You have been accounted for today's session
              </span> 
            </div>
            <div id="courseName" className='sm:text-4xl text-2xl uppercase font-montserrat'>
              course name
            </div>
            <div id="timeStamp" className='sm:text-lg text-sm font-poppins'>
              12:00 PM - 10/10/2021
            </div>
          </div>
          <div>
            <button onClick={handleOk} className='font-montserrat w-full py-2 border border-black rounded-lg bg-white uppercase hover:scale-105 transition'>
              Done
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
}

export default StudentDashboard;
