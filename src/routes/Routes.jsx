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
import PrivateRoutes from './PrivateRoutes';
import DashboardLayout from '../Layout/DashboardLayout';
import Cart from '../Pages/Dashboard/Cart/Cart';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import AdminRoute from './AdminRoute';
import ManageItem from '../Pages/Dashboard/ManageItem/ManageItem';
import UpdateItem from '../Pages/Dashboard/UpdateItem/UpdateItem';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';




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
        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/cart',
                element: <PrivateRoutes><Cart /></PrivateRoutes>,

            },
            {
                path: '/dashboard/reservation',
                element: <PrivateRoutes><Payment /></PrivateRoutes>,
            },
            {
                path: '/dashboard/payment-history',
                element: <PrivateRoutes><PaymentHistory /></PrivateRoutes>,
            },



            // admin routes

            {
                path: '/dashboard/all-users',
                element: <AdminRoute><AllUsers /></AdminRoute>,
            },
            {
                path: '/dashboard/add-items',
                element: <AdminRoute><AddItems /></AdminRoute>,
            },
            {
                path: '/dashboard/manage-items',
                element: <AdminRoute><ManageItem /></AdminRoute>,
            },

            {
                path: '/dashboard/updateItem/:id',
                element: <AdminRoute> <UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },

        ],
    },
]);

