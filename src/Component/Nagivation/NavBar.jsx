import React from "react";
import { CgProfile } from "react-icons/cg";

export const NavBar = () => {
  return (
    <>
      <div className="flex justify-between h-[52px] bg-[#1B191E] w-[100%]">
        <div className="flex justify-center items-center">
          <img className="w-[80%]" src="./Images/epic.png" alt="/" />
          <img className="w-[80%]" src="./Images/Log.png" alt="/" />
        </div>
        <div className="flex w-[] h-[52px]  text-[10px]">
          <div className="px-[5px] text-[#ffffff] flex justify-center items-center gap-[5px]">
            <div className="text-[20px]">
              <CgProfile />
            </div>
            <div className="text-[10px] hover:underline">ACCOUNT</div>
          </div>
          <div className="text-[9px] hover:bg-[#60eaff8b] text-black bg-[#60E9FF] flex w-[70px] justify-center items-center">
            DOWNLOAD
          </div>
        </div>
      </div>
      <div
        className="flex gap-[10px] h-[52px] text-[12px] justify-center items-center"
        style={{
          backgroundImage: "linear-gradient(270deg,#A643FA 0%,#6713EC 100%)",
          color: "#ffffff",
          fontFamily: "Titan One",
        }}
      >
        <div>DOWNLOAD NOW!</div>
        <div className="flex gap-[5px]">
          <img className="w-[30px] h-[30px]" src="./Images/con1.png" alt="/" />
          <img className="w-[30px] h-[30px]" src="./Images/con2.png" alt="/" />
          <img className="w-[30px] h-[30px]" src="./Images/con3.png" alt="/" />
          <img
            className="w-[30px] h-[30px]"
            about=""
            src="./Images/con4.png"
            alt="/"
          />
        </div>
      </div>
      <div>
        <img className="h-[250px] w-[100%]" src="./Images/bg.png" alt="/" />
        <img className="absolute top-[19%] right-[33%] flex h-[120px]" src="./Images/bg1.png" alt="/"/>
        <img className="absolute top-[40%] w-[30%] right-[33%]" src="./Images/Button.png" alt="/"/>
      </div>
    </>
  );
};
