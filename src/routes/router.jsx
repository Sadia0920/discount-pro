import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Brands from "../pages/Brands"
import About from "../pages/About"
import MyProfile from "../pages/MyProfile"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/couponCollectionData.json')
            },
            {
                path:'/brands',
                element:<Brands></Brands>,
                loader:() => fetch('/couponCollectionData.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/myProfile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router
