import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CarCard({ car }) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl"
        >
            <img
                src={car.image}
                alt={car.name}
                className="h-56 w-full object-cover"
            />

            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-xl font-semibold text-white">{car.name}</h3>
                        <p className="mt-1 text-sm text-gray-400">{car.brand}</p>
                    </div>

                    <span className="rounded-full bg-red-600/15 px-3 py-1 text-xs text-red-300">
                        {car.year}
                    </span>
                </div>

                <p className="mt-3 text-lg font-medium text-white">{car.price}</p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-400">
                    <span>Fuel: {car.fuel}</span>
                    <span>KM: {car.km}</span>
                    <span>Gear: {car.transmission}</span>
                    <span>Color: {car.color}</span>
                </div>

                <Link
                    to={`/car/${car.id}`}
                    className="mt-5 inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
}