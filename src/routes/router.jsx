import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../components/Home"
import Brands from "../components/Brands"
import About from "../components/About"
import MyProfile from "../components/MyProfile"

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/brands',
                element:<Brands></Brands>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/myProfile',
                element:<MyProfile></MyProfile>
            }
        ]
    }
])

export default router
