import React, { useEffect, useState } from 'react';
import Header from '../components/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import Warning from '../components/Warning'; 
import { message } from 'antd';
import { updateLecturer } from '../services/LecturerService';

export default function LecturerAccount() {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputLecturerID, setInputLecturerID] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [lecturerData, setLecturerData] = useState({});

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
    const token = localStorage.getItem('accessToken'); // Get token from localStorage
    if (!token) {
      message.error('No access token found');
      return;
    }

  const handleGetDetailUser = async () => {
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const alphabetRegex = /[a-zA-Z]/;
  
    const hasInvalidFirstName = numberRegex.test(inputFirstName) || specialCharRegex.test(inputFirstName);
    const hasInvalidLastName = numberRegex.test(inputLastName) || specialCharRegex.test(inputLastName);
    const hasInvalidPhone = alphabetRegex.test(inputPhone) || specialCharRegex.test(inputPhone);
  
    if (
      hasInvalidFirstName ||
      hasInvalidLastName ||
      hasInvalidPhone ||
      inputFirstName.length === 0 ||
      inputLastName.length === 0 ||
      inputLecturerID.length === 0 ||
      inputPhone.length === 0 ||
      inputPhone.length !== 10 ||
      inputEmail.length === 0
    ) {
      setWarning(true);
    } else {
      const lecturerData = {
        id: inputLecturerID,
        firstName: inputFirstName,
        lastName: inputLastName,
        phone: inputPhone,
        email: inputEmail
      };
      try {
        const res = await updateLecturer(inputLecturerID, lecturerData, token);
        if (res?.data) {
          setUpdateSuccess(true);
        } else {
          throw new Error('Update failed');
        }
      } catch (error) {
        setUpdateError(true);
        message.error('Update failed: ' + error.message);
      }
    }
  };

  
  useEffect(() => {
    if (updateError) {
      message.error('Update Failed');
    }
  }, [updateError]);




  return (
    <div>
      <Header />
      {warning && <Warning setWarning={() => setWarning(false)} />}

      <main className="h-dvh w-full bg-bg2 xl:px-48 bg-cover bg-no-repeat px-11">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-5">
          <input
            type="text"
            placeholder="First Name"
            value={inputFirstName}
            onChange={handleInputChange(setInputFirstName)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={inputLastName}
            onChange={handleInputChange(setInputLastName)}
          />
          <input
            type="text"
            placeholder="Lecturer ID"
            value={inputLecturerID}
            onChange={handleInputChange(setInputLecturerID)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={inputPhone}
            onChange={handleInputChange(setInputPhone)}
          />
          <input
            type="email"
            placeholder="Email"
            value={inputEmail}
            onChange={handleInputChange(setInputEmail)}
          />
        </div>
        <button onClick={handleGetDetailUser}>
          Update
        </button>
      </main>
    </div>
  );
}