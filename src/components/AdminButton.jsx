import { Link } from "react-router-dom";

export default function AdminButton() {
    return (
        <Link
            to="/admin"
            className="fixed bottom-20 right-6 z-50 bg-blue-600 px-5 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-blue-500 transition"
        >
            Admin
        </Link>
    );
}