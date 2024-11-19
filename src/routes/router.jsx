import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Brands from "../pages/Brands"
import About from "../pages/About"
import MyProfile from "../pages/MyProfile"

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
