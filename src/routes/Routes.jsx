import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoutes from './PrivateRoutes';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'order/:category',
                element: <Order />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes>
                    <Dashboard />
                </PrivateRoutes>
            }
        ],

    },
]);

