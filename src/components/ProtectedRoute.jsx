import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

    if (!isAdminLoggedIn) {
        return <Navigate to="/hm-admin-login" replace />;
    }

    return children;
}