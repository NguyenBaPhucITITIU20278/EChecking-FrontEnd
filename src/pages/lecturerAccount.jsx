import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import Header from '../components/HeaderComponent';

export default function LecturerAccount() {
  const [inputName, setInputName] = useState("");
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputLecturerID, setInputLecturerID] = useState("");
  const [warning, setWarning] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  window.onbeforeunload = handleRefresh;

  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const alphabetRegex = /[a-zA-Z]/;

  useEffect(() => {
    handleInputName;
    handleInputDepartment;
    handleInputPhoneNumber;
  });

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };

  const handleInputDepartment = (event) => {
    setInputDepartment(event.target.value);
  };

  const handleInputPhoneNumber = (event) => {
    setInputPhoneNumber(event.target.value);
  };
  const handleInputLecturerID = (event) => { // Handler for lecturer ID
    setInputLecturerID(event.target.value);
  };
  const checkPresentInfomation = () => {
    if (
      inputName.length > 0 ||
      inputAddress.length > 0 ||
      inputPhoneNumber.length > 0 ||
      date.startDate.length > 0
    ) {
      window.confirm("Changes that you made may not be saved.");
    }
  };
  const checkValidInfomation = () => {
    const hasNameNumber = numberRegex.test(inputName);
    const hasNameSpecialChar = specialCharRegex.test(inputName);
    const hasPhoneAlphabets = alphabetRegex.test(inputPhoneNumber);
    const hasPhoneSpecialChar = specialCharRegex.test(inputPhoneNumber);

    if (
      hasNameNumber ||
      hasNameSpecialChar ||
      hasPhoneAlphabets ||
      hasPhoneSpecialChar ||
      inputName.length == 0 ||
      inputDepartment.length == 0 ||
      inputPhoneNumber.length == 0 ||
      inputPhoneNumber.length != 10
    ) {
      setWarning(true);
    } else {
      setConfirm(true);
    }
  };

  function handleRefresh(event) {
    if (
      inputName.length > 0 ||
      inputDepartment.length > 0 ||
      inputPhoneNumber.length > 0 &&
      !success
    ) {
      event.preventDefault();
      event.returnValue = "";
    }
  }

  const refreshPage = () => {
    window.location.reload();
    setSuccess((value) => {
      value == false ? true : false;
    });
  };

  const controlWarning = () => {
    setWarning((value) => {
      value == false ? true : false;
    });
  };

  const controlConfirm = () => {
    setConfirm((value) => {
      value == false ? true : false;
    });
  };

  return (
    <div>
      <Header />
      {success && <Success setSuccess={refreshPage} />}
      {confirm && (
        <Confirm
          setConfirm={controlConfirm}
          setSuccess={() => {
            setConfirm(false);
            setSuccess(true);
          }}
        />
      )}
      {warning && <Warning setWarning={controlWarning} />}

      <main className="h-dvh w-full bg-bg2 xl:px-48 bg-cover bg-no-repeat px-11">
        <div className="h-2/6 w-full static flex items-center justify-center">
          <img
            src={avatar}
            className="w-64 h-64 bg-white absolute flex-1 p-5 border-2 border-black rounded-full"
          />
        </div>
        <div className="h-1/6 w-full static flex items-center justify-center text-center">
          <h1 className="xl:text-5xl font-bold text-4xl">Update Information</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-5">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              placeholder="First-Middle-Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputName}
              onChange={handleInputName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Department:
            </label>
            <input
              type="text"
              placeholder="Department"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputDepartment}
              onChange={handleInputDepartment}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Lecturer ID:
            </label>
            <input
              type="text"
              placeholder="Enter Lecturer ID"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputLecturerID}
              onChange={handleInputLecturerID}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              placeholder="10 Digits"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputPhoneNumber}
              onChange={handleInputPhoneNumber}
            />
          </div>
        </div>
        <div className="h-1/6 w-full static flex flex-row items-center mt-[-70px] ml-40">
          <button
            className="xl:w-1/3 w-1/2 h-2/5 bg-slate-300 rounded-2xl shadow-xl drop-shadow-xl flex items-center justify-center m-5 justify-self-start hover:bg-white transition ease-in-out hover:duration-300 focus:ring focus:ring-gray-100 active:bg-zinc-500 active:text-slate-50"
            onClick={checkPresentInfomation}
          >
            <p className="xl:text-3xl text-2xl">Cancel</p>
          </button>
          <button
            className="xl:w-1/3 w-1/2 h-2/5 bg-sky-400 rounded-2xl shadow-xl drop-shadow-xl flex items-center justify-center m-5 justify-self-end hover:bg-white transition ease-in-out hover:duration-300 focus:ring focus:ring-gray-100 active:bg-sky-600 active:text-slate-50"
            onClick={checkValidInfomation}
          >
            <p className="xl:text-3xl text-2xl ">Save Change</p>
          </button>
        </div>
      </main>
    </div>
  );
}