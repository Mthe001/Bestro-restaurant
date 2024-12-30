import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Menu from '../Pages/Menu/Menu/Menu';




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
        ],

    },
]);

