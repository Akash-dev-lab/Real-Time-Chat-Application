import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import ChatSection from "./ChatSection";

const MessageHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#1F1D1D] p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatar.iran.liara.run/public/20"
            alt="Profile"
          />
          <div className="flex justify-center item">
            <div>
              <span className="text-lg font-semibold">Himanshu</span>
            </div>
            <div>
              <span className="text-sm text-green-500">Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <MdAddIcCall size={24} />
          <HiOutlineVideoCamera size={24} />
        </div>
      </div>
        
        <ChatSection />
        
    </>
  );
};

export default MessageHeader;
