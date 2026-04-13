import { motion } from "framer-motion";
import ownerImage from "../assets/hitesh.png"; // make sure this file exists

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
        },
    }),
};

export default function About() {
    const highlights = [
        {
            title: "Trusted Dealer",
            text: "Hitesh Motors focuses on trust, transparency, and a premium car buying experience.",
        },
        {
            title: "Quality Inventory",
            text: "Carefully selected vehicles with proper details and modern presentation.",
        },
        {
            title: "Customer Support",
            text: "From enquiry to delivery, we ensure smooth and responsive service.",
        },
        {
            title: "Local Presence",
            text: "Serving Jalgaon with a modern dealership approach and strong customer trust.",
        },
    ];

    return (
        <section className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
                {/* 🔴 ABOUT + OWNER SECTION */}
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* LEFT TEXT */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                            About Hitesh Motors
                        </p>

                        <h1 className="mt-4 text-4xl font-bold md:text-6xl leading-tight">
                            Driven by Passion,
                            <span className="block text-red-500">Built on Trust</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-400 leading-8">
                            Founded in <span className="text-white font-semibold">2005</span>,
                            Hitesh Motors has built a strong reputation in Jalgaon for trust,
                            quality vehicles, and customer satisfaction. We focus on delivering
                            a modern and reliable car buying experience.
                        </p>

                        <p className="mt-4 text-lg text-gray-400 leading-8">
                            Our goal is simple — make car buying easy, reliable, and smooth
                            for every customer.
                        </p>

                        {/* OWNER INFO */}
                        <div className="mt-8 border-l-2 border-red-500 pl-4">
                            <p className="text-lg font-semibold">Mr. Hitesh Patil</p>
                            <p className="text-sm text-gray-400 mt-1">
                                Founder of Hitesh Motors, dedicated to building customer trust
                                and delivering a premium dealership experience.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-3xl bg-red-600/10 blur-3xl"></div>

                        <div className="relative rounded-3xl border border-white/10 bg-neutral-900 p-4 sm:p-6">
                            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-black">
                                <img
                                    src={ownerImage}
                                    alt="Hitesh Motors Owner"
                                    className="h-[320px] w-full object-contain sm:h-[420px] lg:h-[500px]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 🔴 STATS SECTION */}
                <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4 text-center">
                        <p className="text-2xl font-bold">500+</p>
                        <p className="text-sm text-gray-400">Cars Delivered</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4 text-center">
                        <p className="text-2xl font-bold">1000+</p>
                        <p className="text-sm text-gray-400">Happy Customers</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4 text-center">
                        <p className="text-2xl font-bold">Easy</p>
                        <p className="text-sm text-gray-400">Finance Support</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4 text-center">
                        <p className="text-2xl font-bold">Fast</p>
                        <p className="text-sm text-gray-400">Response Time</p>
                    </div>
                </div>

                {/* 🔴 WHY CHOOSE US */}
                <div className="mt-20 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                        Why Choose Us
                    </p>
                    <h2 className="mt-3 text-4xl font-bold">
                        What Makes Us Different
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
                            >
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mt-4 text-gray-400">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 🔴 MISSION / VISION */}
                <div className="mt-20 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl bg-neutral-900 p-6">
                        <h3 className="text-xl font-semibold">Our Mission</h3>
                        <p className="mt-3 text-gray-400">
                            Deliver quality cars with honest service and smooth buying experience.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-neutral-900 p-6">
                        <h3 className="text-xl font-semibold">Our Vision</h3>
                        <p className="mt-3 text-gray-400">
                            Become a trusted dealership brand known for reliability and customer satisfaction.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-neutral-900 p-6">
                        <h3 className="text-xl font-semibold">Our Promise</h3>
                        <p className="mt-3 text-gray-400">
                            Transparent deals, fast response, and complete customer support.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}