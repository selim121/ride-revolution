import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/Home/About/About";
import Services from "../pages/Home/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'services',
            element: <Services></Services>
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'book/:id',
            element: <BookService></BookService>,
            loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
            
        },
        {
            path: 'bookings',
            element: <PrivateRoute>
                <Bookings></Bookings>
            </PrivateRoute>
        }
      ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;