import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import EditPassword from "./EditPassword";
import EditPhoneNumber from "./EditPhoneNumber";
const Profile = () => {
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="w-full sm:h-[710px] h-[500px] flex justify-center  items-center sm:px-32 ">
      <div
        id="profile-box"
        className={`sm:w-3/4 w-full sm:h-2/4 h-3/4 flex sm:flex-row  flex-col sm:rounded-lg border-[1px] p-3 sm:shadow-md bg-white ${
          editPhoneNumber || editPassword ? "blur-sm" : null
        }`}
      >
        <div
          id="logo"
          className="sm:w-1/3 w-full sm:h-full h-1/5 sm:border-r-[1px] flex flex-col justify-evenly items-center sm:py-28 "
        >
          <CgProfile className="sm:text-[50px]" />
          <p className="sm:text-[25px]">{userInfo?.name}</p>
        </div>
        <div id="info" className="sm:w-2/3 w-full h-full  sm:px-8 ">
          <p className="text-gray-600 font-[600] text-[16px] sm:font-[800] sm:text-[20px]">
            User Info
          </p>
          <div className="w-full sm:h-1/4 h-1/3 border-t-[1px] flex flex-col sm:justify-between justify-around sm:py-2">
            <p className="w-full flex justify-between  sm:text-[18px] text-[15px] font-[600]">
              <span className="w-1/3 ">Name</span>
              <span className="w-1/3 flex justify-start">
                <span>Phone</span>
                <button
                  onClick={() => {
                    setEditPhoneNumber((n) => !n);
                  }}
                  className="ml-1 font-[200]"
                >
                  <CiEdit />
                </button>
              </span>
              <span className="w-1/3 flex justify-start">
                <span>Password</span>
                <button
                  onClick={() => {
                    setEditPassword((n) => !n);
                  }}
                  className="ml-1"
                >
                  <CiEdit />
                </button>
              </span>
            </p>
            <p className="w-full flex justify-between text-gray-500 font-[400] sm:text-[14px] text-[12px]">
              <span className="w-1/3">{userInfo?.name}</span>
              <span className="w-1/3">{userInfo?.phone}</span>
              <span className="w-1/3">***********</span>
            </p>
          </div>
          <p className="sm:mt-12 mt-3 text-gray-600 font-[600] text-[16px] sm:font-[800] sm:text-[20px]">
            Account Info
          </p>
          <div className="w-full sm:h-1/4 h-1/4 border-t-[1px] flex flex-col sm:justify-between justify-around sm:py-2 ">
            <p className="w-full flex justify-between sm:text-[18px] text-[15px] font-[600]">
              <span>Plan</span>
            </p>
            <p className="w-full flex justify-between  text-gray-500 font-[400] sm:text-[14px] text-[12px]">
              <span>Free</span>
            </p>
          </div>
        </div>
      </div>
        {editPhoneNumber && (
          <EditPhoneNumber
            key="edit-phoneNumber-modal"
            handleEdit={() => {
              setEditPhoneNumber((n) => !n);
            }}
          />
        )}
      {editPassword ? (
        <EditPassword
          handleEdit={() => {
            setEditPassword((n) => !n);
          }}
        />
      ) : null}
    </div>
  );
};

export default Profile;
