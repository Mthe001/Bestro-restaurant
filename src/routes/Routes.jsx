import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],

    },
]);

