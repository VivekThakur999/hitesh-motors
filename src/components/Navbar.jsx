import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
                <Link to="/" className="flex min-w-0 items-center gap-2">
                    <img
                        src={logo}
                        alt="Hitesh Motors Logo"
                        className="h-9 w-auto flex-shrink-0 object-contain md:h-10"
                    />
                    <span className="truncate text-base font-bold tracking-wide text-white sm:text-lg md:text-xl">
                        Hitesh <span className="text-red-500">Motors</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link to="/" className="text-sm text-white transition hover:text-red-400">
                        Home
                    </Link>
                    <Link to="/cars" className="text-sm text-white transition hover:text-red-400">
                        Cars
                    </Link>
                    <Link to="/about" className="text-sm text-white transition hover:text-red-400">
                        About
                    </Link>
                    <Link to="/contact" className="text-sm text-white transition hover:text-red-400">
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
                    >
                        Book Test Drive
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="ml-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
                >
                    <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-white/10 bg-black md:hidden">
                    <div className="flex flex-col gap-4 px-4 py-4">
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-white transition hover:text-red-400"
                        >
                            Home
                        </Link>
                        <Link
                            to="/cars"
                            onClick={() => setMenuOpen(false)}
                            className="text-white transition hover:text-red-400"
                        >
                            Cars
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="text-white transition hover:text-red-400"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="text-white transition hover:text-red-400"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 rounded-full bg-red-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-red-500"
                        >
                            Book Test Drive
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}