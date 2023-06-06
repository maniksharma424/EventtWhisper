import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
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
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  }
]);
export default myRouter;
