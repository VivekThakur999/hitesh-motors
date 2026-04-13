import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getCars from "../utils/getCars";

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const loadCar = () => {
            const cars = getCars();
            const foundCar = cars.find((item) => String(item.id) === id);
            setCar(foundCar || null);
        };

        loadCar();
        window.addEventListener("carsUpdated", loadCar);

        return () => {
            window.removeEventListener("carsUpdated", loadCar);
        };
    }, [id]);

    if (!car) {
        return (
            <section className="min-h-screen bg-black px-6 py-16 text-white">
                <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-neutral-900 p-8">
                    <h1 className="text-3xl font-bold">Car not found</h1>
                    <Link
                        to="/cars"
                        className="mt-6 inline-block rounded-full bg-red-600 px-5 py-2.5"
                    >
                        Back to Cars
                    </Link>
                </div>
            </section>
        );
    }

    const whatsappMessage = `Hello Hitesh Motors, I am interested in ${car.name} priced at ${car.price}. Please share more details.`;
    const whatsappLink = `https://wa.me/919999999999?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <section className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                        <img
                            src={car.image}
                            alt={car.name}
                            className="h-full max-h-[500px] w-full object-cover"
                        />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
                        <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                            Car Details
                        </p>

                        <h1 className="mt-3 text-4xl font-bold">{car.name}</h1>
                        <p className="mt-3 text-2xl font-semibold text-red-400">
                            {car.price}
                        </p>

                        <p className="mt-6 leading-8 text-gray-400">{car.description}</p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-black p-4">
                                <p className="text-sm text-gray-500">Brand</p>
                                <p className="mt-1 font-medium">{car.brand}</p>
                            </div>
                            <div className="rounded-2xl bg-black p-4">
                                <p className="text-sm text-gray-500">Fuel</p>
                                <p className="mt-1 font-medium">{car.fuel}</p>
                            </div>
                            <div className="rounded-2xl bg-black p-4">
                                <p className="text-sm text-gray-500">Year</p>
                                <p className="mt-1 font-medium">{car.year}</p>
                            </div>
                            <div className="rounded-2xl bg-black p-4">
                                <p className="text-sm text-gray-500">Kilometers</p>
                                <p className="mt-1 font-medium">{car.km}</p>
                            </div>
                            <div className="rounded-2xl bg-black p-4">
                                <p className="text-sm text-gray-500">Transmission</p>
                                <p className="mt-1 font-medium">{car.transmission}</p>
                            </div>
                            <div className="rounded-2xl bg-black p-4">
                                <p className="text-sm text-gray-500">Color</p>
                                <p className="mt-1 font-medium">{car.color}</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
                            >
                                WhatsApp Enquiry
                            </a>

                            <Link
                                to="/contact"
                                className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
                            >
                                Book Test Drive
                            </Link>

                            <Link
                                to="/cars"
                                className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                            >
                                Back to Cars
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}