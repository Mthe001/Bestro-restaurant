
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation(); // Get the current location

    // While loading, show a loading indicator
    if (loading) {
        return <progress className="progress w-56 h-2 bg-blue-500"></progress>;
    }

    // If the user is not authenticated, redirect to the login page
    if (user) {
        // If the user is authenticated, render the children (protected components)
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoutes;
