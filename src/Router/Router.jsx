import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
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