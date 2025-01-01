import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation(); // Get the current location

    // While loading, show a loading indicator
    if (loading) {
        return <progress className="progress w-56 h-2 bg-blue-500"></progress>;
    }

    // If the user is not authenticated, redirect to the login page
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If the user is authenticated, render the children (protected components)
    return children;
};

export default PrivateRoutes;
