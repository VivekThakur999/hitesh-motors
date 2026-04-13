import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";
import getCars from "../utils/getCars";
import { fadeUp } from "../utils/animations";

export default function Cars() {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState("");
    const [fuelFilter, setFuelFilter] = useState("All");

    useEffect(() => {
        const loadCars = () => {
            setCars(getCars());
        };

        loadCars();
        window.addEventListener("carsUpdated", loadCars);

        return () => {
            window.removeEventListener("carsUpdated", loadCars);
        };
    }, []);

    const filteredCars = useMemo(() => {
        return cars.filter((car) => {
            const matchesSearch =
                car.name.toLowerCase().includes(search.toLowerCase()) ||
                car.brand.toLowerCase().includes(search.toLowerCase());

            const matchesFuel =
                fuelFilter === "All" || car.fuel === fuelFilter;

            return matchesSearch && matchesFuel;
        });
    }, [cars, search, fuelFilter]);

    return (
        <section className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <motion.div
                    className="mb-10"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <h1 className="text-4xl font-bold">Available Cars</h1>
                    <p className="mt-3 text-gray-400">
                        Browse premium cars with search and filter options.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-8 grid gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-4 md:grid-cols-2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <input
                        type="text"
                        placeholder="Search by car name or brand"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500"
                    />

                    <select
                        value={fuelFilter}
                        onChange={(e) => setFuelFilter(e.target.value)}
                        className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                    >
                        <option value="All">All Fuel Types</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                    </select>
                </motion.div>

                {filteredCars.length === 0 ? (
                    <motion.div
                        className="rounded-2xl border border-white/10 bg-neutral-900 p-8 text-center text-gray-400"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        No cars found.
                    </motion.div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCars.map((car, index) => (
                            <motion.div
                                key={car.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={index}
                            >
                                <CarCard car={car} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}