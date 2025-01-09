import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";




const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();



    if (loading || isAdminLoading) {
        return <progress className="progress w-56  h-2 bg-blue-500"></progress>;
    }

    // If the user is not authenticated, redirect to the login page
    if (user && isAdmin) {
        // If the user is authenticated, render the children (protected components)
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;

};

export default AdminRoute;