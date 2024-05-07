import React from "react";
import avatar from "../assets/avatar.png";

export default function StudentAccount() {
  return (
    <div>
      <nav className="h-24 w-full bg-gray-700"></nav>
      <main className="h-dvh w-full bg-bg2 px-48">
        <div className="h-2/6 w-full static flex items-center justify-center">
          <img
            src={avatar}
            className="w-96 h-96 bg-white absolute flex-1 p-5 border-2 border-black rounded-full"
          />
        </div>
        <div className="h-1/6 w-full static flex items-center justify-center">
          <h1 className="text-8xl font-bold">Update Information</h1>
        </div>
        <div className=" h-2/6 w-full static grid grid-cols-2 items-center justify-items-center">
          <div className="w-3/4 h-full justify-center items-center flex flex-col">
            <p className="text-4xl m-5 self-start">Full Name:</p>
            <input type="text" placeholder="Fist-Middle-Last Name........................................." className="bg-white h-1/2 w-full text-4xl p-2 border-2 border-black rounded-2xl placeholder-center"></input>
          </div>
          <div className="w-3/4 h-full justify-center items-center flex flex-col">
            <p className="text-4xl m-5 self-start">Phone Number:</p>
            <input type="text" placeholder="10 Digits......................................................................" className="bg-white h-1/2 w-full text-4xl p-2 border-2 border-black rounded-2xl "></input>
          </div>
          <div className="w-3/4 h-full justify-center items-center flex flex-col">
            <p className="text-4xl m-5 self-start">Address:</p>
            <input type="text" placeholder="........................................................................................" className="bg-white h-1/2 w-full text-4xl p-2 border-2 border-black rounded-2xl "></input>
          </div>
          <div className="w-3/4 h-full justify-center items-center flex flex-col">
            <p className="text-4xl m-5 self-start">Date Of Birth:</p>
            <input type="text" placeholder="...............................DD/MM/YY...................................." className="bg-white h-1/2 w-full text-4xl p-2 border-2 border-black rounded-2xl "></input>
          </div>
        </div>
        <div className="h-1/6 w-full static grid grid-cols-2 items-center">
          <button className="w-1/4 h-1/2 bg-slate-300 rounded-2xl shadow-xl drop-shadow-xl flex items-center justify-center m-5 justify-self-start hover:bg-white transition ease-in-out delay-75">
              <p className="text-4xl">Cancel</p>
          </button>
          <button className="w-1/4 h-1/2 bg-sky-400 rounded-2xl shadow-xl drop-shadow-xl flex items-center justify-center m-5 justify-self-end hover:bg-white transition ease-in-out delay-75">
              <p className="text-4xl">Save Change</p>
          </button>
        </div>
      </main>
    </div>
  );
}
