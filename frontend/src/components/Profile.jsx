import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="w-full sm:h-[710px] h-[500px] flex justify-center items-center">
      <div
        id="profile-box"
        className="sm:w-2/4 w-3/4 h-2/4 flex sm:flex-row flex-col rounded-lg border-[1px] p-3 shadow-md"
      >
        <div id="logo" className="sm:w-1/3 w-full sm:h-full h-1/3 sm:border-r-[1px] flex flex-col justify-evenly items-center sm:py-28 ">
          <CgProfile className="sm:text-[50px]" />
         <p className="sm:text-[25px]">
           {userInfo?.name}
          </p>
        </div>
        <div id="info" className="sm:w-2/3 w-full h-full  sm:px-8 ">
          <p className="text-gray-600 font-[600] text-[16px] sm:font-[800] sm:text-[20px]">Information</p>
          <div className="w-full sm:h-1/4 h-1/3 border-t-[1px] flex flex-col sm:justify-between justify-around sm:py-2">
            <p className="w-full flex justify-between  sm:text-[18px] text-[15px] font-[600]">
              <span>Name</span>
              <span>Phone</span>
              <span>Password</span>
            </p>
            <p className="w-full flex justify-between text-gray-500 font-[400] sm:text-[14px] text-[12px]">
              <span>{userInfo?.name}</span>
              <span>{userInfo?.phone}</span>
              <span>*******</span>
            </p>
          </div>
          <p className="sm:mt-12 mt-3 text-gray-600 font-[600] text-[16px] sm:font-[800] sm:text-[20px]">AccountInfo</p>
          <div className="w-full sm:h-1/4 h-1/3 border-t-[1px] flex flex-col sm:justify-between justify-around sm:py-2 ">
            <p className="w-full flex justify-between sm:text-[18px] text-[15px] font-[600]">
              <span>Plan</span>
            </p>
            <p className="w-full flex justify-between  text-gray-500 font-[400] sm:text-[14px] text-[12px]">
              <span>Free</span>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
