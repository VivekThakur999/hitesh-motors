import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";
import getCars from "../utils/getCars";
import { fadeUp } from "../utils/animations";

const heroImage =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80";

export default function Home() {
    const [featuredCars, setFeaturedCars] = useState([]);

    useEffect(() => {
        const loadCars = () => {
            const allCars = getCars();
            setFeaturedCars(allCars.slice(0, 3));
        };

        loadCars();
        window.addEventListener("carsUpdated", loadCars);

        return () => {
            window.removeEventListener("carsUpdated", loadCars);
        };
    }, []);

    const testimonials = [
        {
            name: "Rahul Patil",
            role: "Car Buyer",
            text: "Very smooth experience. The team explained everything clearly and helped me choose the right car for my budget.",
        },
        {
            name: "Sneha More",
            role: "Happy Customer",
            text: "Professional service and fast response. The whole process from enquiry to delivery felt premium and trustworthy.",
        },
        {
            name: "Amit Chaudhari",
            role: "SUV Owner",
            text: "Good car options, honest dealing, and excellent support with finance. Highly recommended for anyone buying a car in Jalgaon.",
        },
    ];

    return (
        <div className="bg-black text-white">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(239,68,68,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_25%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

                <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                            Premium Car Dealer
                        </p>

                        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
                            Find Your
                            <span className="block text-red-500">Dream Car</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                            Hitesh Motors offers premium cars, trusted service, easy finance
                            support, and a smooth dealership experience in Jalgaon.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/cars"
                                className="rounded-full bg-red-600 px-6 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-red-500"
                            >
                                Explore Cars
                            </Link>

                            <Link
                                to="/contact"
                                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition duration-300 hover:bg-white hover:text-black"
                            >
                                Book Test Drive
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={0}
                                className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur-sm"
                            >
                                <p className="text-2xl font-bold">500+</p>
                                <p className="mt-1 text-sm text-gray-400">Cars Delivered</p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur-sm"
                            >
                                <p className="text-2xl font-bold">1000+</p>
                                <p className="mt-1 text-sm text-gray-400">Happy Customers</p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur-sm"
                            >
                                <p className="text-2xl font-bold">Easy</p>
                                <p className="mt-1 text-sm text-gray-400">Finance Support</p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                                className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur-sm"
                            >
                                <p className="text-2xl font-bold">Fast</p>
                                <p className="mt-1 text-sm text-gray-400">Enquiry Response</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80, scale: 1.05 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className="relative z-10 hidden lg:block"
                    >
                        <div className="absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-red-600/15 blur-3xl" />

                        <img
                            src={heroImage}
                            alt="Premium car"
                            className="relative ml-auto w-[125%] max-w-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-10 flex items-end justify-between gap-4"
                >
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                            Featured Inventory
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">Popular Cars</h2>
                    </div>

                    <Link
                        to="/cars"
                        className="text-sm font-medium text-gray-400 transition hover:text-white"
                    >
                        View All Cars
                    </Link>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredCars.map((car, index) => (
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
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-16">
                <div className="grid gap-6 rounded-3xl border border-white/10 bg-neutral-900 p-8 lg:grid-cols-3">
                    {[
                        {
                            title: "Easy Finance",
                            text: "Assistance with loan options, EMI support, and paperwork for a stress-free buying process.",
                        },
                        {
                            title: "Exchange Support",
                            text: "Upgrade your current car with fair exchange support and simple valuation assistance.",
                        },
                        {
                            title: "Trusted Dealer",
                            text: "A modern dealership experience focused on trust, transparency, and customer satisfaction.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                            className="rounded-2xl bg-black p-6 transition duration-300 hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-3 leading-7 text-gray-400">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-10 text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-4xl font-bold">What Our Customers Say</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Trusted by customers for quality cars, honest guidance, and a smooth dealership experience.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                            className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
                        >
                            <div className="mb-4 text-2xl text-red-500">★★★★★</div>
                            <p className="leading-7 text-gray-300">“{item.text}”</p>
                            <div className="mt-6 border-t border-white/10 pt-4">
                                <h3 className="font-semibold text-white">{item.name}</h3>
                                <p className="text-sm text-gray-400">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600 to-orange-500 p-8 md:p-12"
                >
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                                Ready to drive home your next car?
                            </p>
                            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                                Let’s Find the Perfect Car for You
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
                                Connect with Hitesh Motors for premium cars, fast support,
                                finance guidance, and a dealership experience built on trust.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-black px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105"
                            >
                                WhatsApp Now
                            </a>

                            <Link
                                to="/contact"
                                className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}