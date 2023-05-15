import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../pages/Shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;