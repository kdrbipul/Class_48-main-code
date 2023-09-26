import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/register',
                element: <Register />
            }
        ]
    }
])

export default router;