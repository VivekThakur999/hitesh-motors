import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // adjust path if needed


export default function Navbar() {
    return (
        <header className="bg-black text-white border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Hitesh Motors Logo"
                        className="h-10 w-auto object-contain drop-shadow-md"
                    />
                    <span className="text-xl font-bold tracking-wide">
                        Hitesh <span className="text-red-500">Motors</span>
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/" className="hover:text-red-400 transition">Home</Link>
                    <Link to="/cars" className="hover:text-red-400 transition">Cars</Link>
                    <Link to="/about" className="hover:text-red-400 transition">About</Link>
                    <Link to="/contact" className="hover:text-red-400 transition">Contact</Link>
                </nav>

                <Link
                    to="/contact"
                    className="bg-red-600 hover:bg-red-500 px-5 py-2.5 rounded-full text-sm font-semibold transition"
                >
                    Book Test Drive
                </Link>
            </div>
        </header>
    );
}