import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <>
    <ToastContainer/>
     <Dashboard />,
    </>,
  },
  {
    path: "/login",
    element: <>
    <ToastContainer/> 
    <Login />
    </>,
  },
  {
    path: "/register",
    element:<>
    <ToastContainer/>
     <Signup />,
    </>
  },
]);
export default myRouter;
