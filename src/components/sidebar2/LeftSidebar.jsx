import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { LuSave } from "react-icons/lu";
import { TbShare } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";

const LeftSidebar = () => {
  return (
    <>
      <div className="container bg-[#1F1D1D] w-20 md:h-full flex flex-col items-center gap-4">
        <div className="mt-5 mr-5">
          <img className='' src="/src/assets/D logo.png" alt="" />
        </div>

        <div className="grid gap-10 mt-10">
          <div >
            <GrHomeRounded size={23}/>
          </div>

          <div>
            <CiSearch size={23}/>
          </div>

          <div>
            <LuSave size={23}/>
          </div>

          <div>
            <TbShare size={23}/>
          </div>

          <div>
            <IoSettings size={23}/>
          </div>

          <img className='h-9 w-9 mt-80' src="/src/assets/profile.png" alt="" />
        </div>

            
      </div>
    </>
  );
};

export default LeftSidebar;
