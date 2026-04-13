import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Contact() {
    return (
        <section className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-2">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                            Contact Us
                        </p>
                        <h1 className="mt-4 text-5xl font-bold">Book Test Drive</h1>
                        <p className="mt-6 max-w-xl leading-8 text-gray-400">
                            Connect with Hitesh Motors for car enquiries, finance help,
                            exchange support, or to schedule a test drive.
                        </p>

                        <div className="mt-8 space-y-4 text-gray-300">
                            <p>📍 Sudershan Colony, Jalgaon</p>
                            <p>📞 +91 99999 99999</p>
                            <p>🕗 Open till 8:00 PM</p>
                            <p>💬 WhatsApp available</p>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="mt-10 rounded-3xl border border-white/10 bg-neutral-900 p-6"
                        >
                            <h2 className="text-xl font-semibold">Business Hours</h2>
                            <div className="mt-4 space-y-3 text-gray-400">
                                <div className="flex justify-between">
                                    <span>Monday - Saturday</span>
                                    <span>10:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>By Appointment</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="rounded-3xl border border-white/10 bg-neutral-900 p-8"
                    >
                        <h2 className="text-2xl font-semibold">Send Enquiry</h2>

                        <div className="mt-6 grid gap-4">
                            <motion.input
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                type="text"
                                placeholder="Full Name"
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500"
                            />

                            <motion.input
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                                type="text"
                                placeholder="Phone Number"
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500"
                            />

                            <motion.input
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={4}
                                type="text"
                                placeholder="Interested Car"
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500"
                            />

                            <motion.textarea
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={5}
                                rows="5"
                                placeholder="Message"
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-gray-500"
                            ></motion.textarea>

                            <motion.button
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={6}
                                className="rounded-2xl bg-red-600 px-6 py-3 font-semibold transition duration-300 hover:scale-[1.02] hover:bg-red-500"
                            >
                                Submit Enquiry
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={2}
                    className="mt-12"
                >
                    <div className="mb-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                            Find Us
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">Visit Our Location</h2>
                        <p className="mt-2 text-gray-400">
                            📍 Hitesh Motors, near Kalika Mata Mandir, Sai Palace Hotel,
                            Old MIDC, Jalgaon, Maharashtra 425003
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-3 shadow-2xl">
                        <div className="overflow-hidden rounded-2xl">
                            <iframe
                                title="Hitesh Motors Location"
                                src="https://www.google.com/maps?q=Hitesh%20Motors%20near%20Kalika%20Mata%20Mandir%20Sai%20Palace%20Hotel%20Old%20MIDC%20Jalgaon%20Maharashtra%20425003&z=17&output=embed"
                                width="100%"
                                height="420"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            ></iframe>
                        </div>
                    </div>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Hitesh+Motors+near+Kalika+Mata+Mandir+Sai+Palace+Hotel+Old+MIDC+Jalgaon"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-500"
                    >
                        Open in Google Maps
                    </a>
                </motion.div>
            </div>
        </section>
    );
}