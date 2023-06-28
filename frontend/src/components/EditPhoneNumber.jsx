import { useState } from "react";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useUpdateMutation } from "../slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
const EditPhoneNumber = ({ handleEdit }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const [update] = useUpdateMutation();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const handleSubmit = async () => {
    try {
      await update({ phone: phoneNumber }).unwrap();
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <motion.div
       initial={{ x: "100%", y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.2 }}
      className="sm:w-1/3 w-3/5 h-full border-[1px] absolute right-0  bg-white py-24 sm:px-12 px-4"
    >
      <div className="flex flex-col h-1/4 justify-around items-center">
        <button
          onClick={() => {
            handleEdit();
          }}
          className="flex w-full justify-end sm:text-[22px]"
        >
          <RxCross1 />
        </button>
        <div className="w-full">
          <p className="sm:text-[13px] text-[10px] sm:font-[600] text-gray-700">
            Set new PhoneNumber
          </p>
          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="text"
            className=" sm:mt-2 mt-1 border-[1px]  sm:text-[11px] sm:py-1.5 sm:px-1 text-[6px] px-1 py-1  sm:font-[400] border-black w-full"
            placeholder="Enter new PhoneNumber"
          />
        </div>
        <div className="w-full ">
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="w-full sm:text-[18px] text-[12px] border-[1px] sm:py-1 py-[2px] bg-[#793ede] text-white"
          >
            Change
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EditPhoneNumber;
