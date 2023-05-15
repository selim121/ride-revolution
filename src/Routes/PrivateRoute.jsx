import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <>
            <div className="flex justify-center items-center my-24">
            <div className="flex gap-2">
                <div className="flex items-center justify-center ">
                    <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                </div>
            </div>

        </div>
        </>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;