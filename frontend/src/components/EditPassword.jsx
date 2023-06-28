import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useUpdateMutation } from "../slices/usersApiSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
const EditPassword = ({ handleEdit }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [update] = useUpdateMutation();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (password != confirmPassword) {
      toast("Passwords do not match");
    }
    try {
      await update({ password: password }).unwrap();
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
        exit={{ x: "-300", y: 0 }}
        className="sm:w-1/3 w-3/4 h-full border-[1px] absolute right-0 top-[40px] bg-white py-10 sm:px-12 px-4"
      >
        <div className="flex flex-col h-1/3 justify-around items-center">
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
              Set new Password
            </p>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              className=" sm:mt-2 mt-1 border-[1px]  sm:text-[11px] sm:py-1.5 sm:px-1 text-[6px] px-1 py-1  sm:font-[400] border-black w-full"
              placeholder="Enter new Password"
            />
          </div>
          <div className="w-full">
            <p className="sm:text-[13px] text-[10px] sm:font-[600] text-gray-700">
              Confirm passowrd
            </p>
            <input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="text"
              className=" sm:mt-2 mt-1 border-[1px]  sm:text-[11px] sm:py-1.5 sm:px-1 text-[6px] px-1 py-1  sm:font-[400] border-black w-full"
              placeholder="Confirm your password"
            />
          </div>

          <div className="w-full ">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="w-full border-[1px] py-1 bg-[#793ede] text-white"
            >
              {" "}
              Change
            </button>
          </div>
        </div>
      </motion.div>

  );
};

export default EditPassword;
