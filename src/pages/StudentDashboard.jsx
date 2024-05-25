import React, { useState } from 'react';
function App() {
  const [pinCode, setPinCode] = useState('');
  const [showLabel, setShowLabel] = useState(true);

  const handlePinChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleInputFocus = () => {
    setShowLabel(false);
  };

  const handleInputBlur = () => {
    if (pinCode === '') {
      setShowLabel(true);
    }
  };

  const handleEnter = () => {
    console.log("Đã nhập mã pin:", pinCode);
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-bg2 bg-cover bg-no-repeat">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl flex-col font-bold mb-6 text-center">Check Attendance</h1>
        <div className= "mb-4 relative flex flex-col  items-center justify-center">
            <label htmlFor="pin" className="ml-2 text-sm font-medium text-gray-700 mt-2">Pin Code</label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={pinCode}
            onChange={handlePinChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="mt-1 p-2 pl-8 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm w-full"
          />
        </div>
        <div>
          <button
            onClick={handleEnter}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
