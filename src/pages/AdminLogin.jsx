import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const adminCredentials = {
        username: "hiteshadmin",
        password: "Hitesh@123",
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            form.username === adminCredentials.username &&
            form.password === adminCredentials.password
        ) {
            localStorage.setItem("isAdminLoggedIn", "true");
            navigate("/admin");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <section className="min-h-screen bg-black text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-16">
                <div className="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-900 p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                        Admin Access
                    </p>
                    <h1 className="mt-3 text-3xl font-bold">Login to Dashboard</h1>
                    <p className="mt-3 text-gray-400">
                        Only authorized admin can access the inventory dashboard.
                    </p>

                    <form onSubmit={handleLogin} className="mt-8 grid gap-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={form.username}
                            onChange={handleChange}
                            className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                        />

                        {error && (
                            <p className="text-sm text-red-400">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="rounded-2xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-500"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}