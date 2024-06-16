import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import avatar from "../assets/avatar.png";
import Header from '../components/HeaderComponent'; 

export default function StudentAccount() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [warning, setWarning] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputID, setInputID] = useState("");
  const [date, setDate] = useState({
    startDate: null,
  });

  window.onbeforeunload = handleRefresh;

  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const alphabetRegex = /[a-zA-Z]/;

  useEffect(() => {
    handleInputName;
    handleInputAddress;
    handleInputPhoneNumber;
  });

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleInputID = (event) => {
    setInputID(event.target.value);
  };
  const handleInputAddress = (event) => {
    setInputAddress(event.target.value);
  };

  const handleInputPhoneNumber = (event) => {
    setInputPhoneNumber(event.target.value);
  };

  const handleDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setDate(newValue);
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

  const checkValidInfomation = async () => {
    // Check Name
    const hasNameNumber = numberRegex.test(inputName);
    const hasNameSpecialChar = specialCharRegex.test(inputName);

    // Check Phone Number
    const hasPhoneAlphabets = alphabetRegex.test(inputPhoneNumber);
    const hasPhoneSpecialChar = specialCharRegex.test(inputPhoneNumber);

    console.log("date ", date.startDate);

    if (
      hasNameNumber ||
      hasNameSpecialChar ||
      hasPhoneAlphabets ||
      hasPhoneSpecialChar ||
      inputName.length == 0 ||
      inputAddress.length == 0 ||
      inputPhoneNumber.length == 0 ||
      date.startDate == null ||
      inputPhoneNumber.length != 10
    ) {
      setWarning(true);
    } else {
      setConfirm(true);
      // Assuming you have a student ID and token available
      const studentData = {
        name: inputName,
        address: inputAddress,
        phoneNumber: inputPhoneNumber,
        dateOfBirth: date.startDate,
      };
      await updateStudent(studentId, studentData, token); // Replace `studentId` and `token` with actual values
    }
  };

  function handleRefresh(event) {
    if (
      (inputName.length > 0 ||
        inputAddress.length > 0 ||
        inputPhoneNumber.length > 0 ||
        date.startDate.length > 0) &&
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
  const updateStudent = async (id, studentData, token) => {
    try {
      const response = await StudentService.updateStudent(
        id,
        studentData,
        token
      );
      if (response.success) {
        console.log("Student updated successfully:", response.data);
      } else {
        console.error("Failed to update student:", response.message);
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };
  return (
    <div>
      <Header/> {/* Use the Header component */}
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
              Email:
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Student ID:
            </label>
            <input
              type="text"
              placeholder="Enter Student ID"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputID}
              onChange={handleInputID}
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
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address:
            </label>
            <input
              type="text"
              placeholder="Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputAddress}
              onChange={handleInputAddress}
            />
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date Of Birth:
            </label>
            <Datepicker
              useRange={false}
              asSingle={true}
              value={date}
              onChange={handleDateChange}
              showFooter={true}
              displayFormat={"DD/MM/YYYY"}
              popoverDirection="up"
              placeholder={"DD/MM/YYYY"}
              readOnly={true}
              inputClassName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              toggleClassName="datepicker-toggle"
            />
          </div> */}
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

function Warning({ setWarning }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Error
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  There was an error processing your request.
                  <br />
                  Please check again your information.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
              onClick={setWarning}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Success({ setSuccess }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Successfully!
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your information is updated.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
              onClick={setSuccess}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Confirm({ setConfirm, setSuccess }) {
  return (
    <div id="YOUR_ID" className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              onClick={setConfirm}
              data-behavior="cancel"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Do you want to update your personal information?
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Please check clearly before submitting.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              data-behavior="commit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={setSuccess}
            >
              Commit
            </button>
            <button
              type="button"
              onClick={setConfirm}
              data-behavior="cancel"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
