import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { useEffect } from "react";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import {motion} from 'framer-motion'

const Login = () => {
  const [phone, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitHandler = async () => {

    try {
      const res = await login({ phone, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <div className="w-full sm:h-screen h-[500px] relative sm:top-0 top-[100px] sm:flex  flex-wrap justify-center items-center bg-[#e9e4f0] ">
        <div className=" sm:w-2/5 sm:h-4/5 w-full h-full sm:rounded-l-xl flex  justify-center items-center bg-white sm:shadow-xl">
          <div className=" w-2/3 sm:h-2/3 h-full flex flex-col justify-evenly items-start ">
            <div className="w-full flex justify-around items-center sm:hidden h-1/6">
              <img
                src="https://freeillustrations.xyz/wp-content/uploads/2020/07/Toy-Faces-3D-Avatar-Library@4x.png"
                alt="logo"
                className="w-2/5 h-5/5 rounded-full"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="sm:text-[30px] sm:font-[500] text-[20px] font-[300]">
                Welcome back
              </h2>
              <p className="sm:text-[12px] mt-1  text-[7px] text-gray-400">
                Welcome back! please enter your details
              </p>
            </div>
            <div className="w-full">
              <p className="sm:text-[13px] text-[10px] sm:font-[600] text-gray-700">
                Phone
              </p>
              <input
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="text"
                className=" sm:mt-2 mt-1 border-[1px]  rounded-md sm:text-[11px] sm:py-1.5 sm:px-1 text-[6px] px-1 py-1  sm:font-[400] border-black w-full"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-full">
              <p className="sm:text-[13px] text-[10px] sm:font-[600] text-gray-700">
                Password
              </p>
              <input
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className=" sm:mt-2 mt-1 border-[1px] rounded-md sm:text-[11px] sm:py-1.5 sm:px-1 text-[6px] px-1 py-1  sm:font-[400] border-black w-full"
                placeholder="Enter your password"
              />
            </div>

            <div className="w-full  flex justify-between sm:text-[13px] text-[10px] sm:font-[500] font-[300] ">
              <p>
                <input className="w-3 h-3" type="checkbox" />
                <span className="ml-1">Remember for 30 days</span>
              </p>
              <span className="text-[#752ed9] ">Forgot passowrd</span>
            </div>

            <motion.button
              onClick={() => {
                submitHandler();
              }}
              className="text-[10px] sm:text-[15px]  w-full rounded-md py-1 bg-[#752ed9] text-white"
            >
              Login
            </motion.button>

            <div className="flex justify-center w-full sm:text-[13px] text-[7px]">
              Don't have an account?{" "}
              <Link to="/register">
                <motion.button className="ml-1 text-[#752ed9]">Sign up</motion.button>
              </Link>
            </div>
            <p className="sm:text-[15px] text-[10px] w-full flex justify-center  text-gray-500">
            &copy; Event Whisper 2023
          </p>
          </div>
          
        </div>
        <div className="sm:w-2/5 sm:h-4/5 w-full h-1/2   rounded-r-xl bg-gray-50 shadow-xl sm:flex hidden flex-col justify-center items-center ">
          <div className=" w-2/3 h-2/3 flex flex-col justify-evenly items-center ">
            <img
              src="https://freeillustrations.xyz/wp-content/uploads/2020/07/Toy-Faces-3D-Avatar-Library@4x.png"
              alt="logo"
              className="w-1/2 h-2/5 rounded-full"
            />
            <p className="text-[#752ed9] text-[25px]">
              Unlock Your Eventful Journey{" "}
            </p>
            <p className="text-gray-400">Sign in and Experience MY-CAL </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
