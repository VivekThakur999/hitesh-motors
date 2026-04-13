import logo from "../assets/logo.jpg";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <div className="relative flex flex-col items-center">
                <div className="absolute h-28 w-28 animate-spin rounded-full border-2 border-red-500/20 border-t-red-500"></div>
                <img
                    src={logo}
                    alt="Hitesh Motors Logo"
                    className="relative z-10 h-16 w-16 object-contain"
                />
                <h1 className="mt-8 text-2xl font-bold text-white">
                    Hitesh <span className="text-red-500">Motors</span>
                </h1>
            </div>
        </div>
    );
}