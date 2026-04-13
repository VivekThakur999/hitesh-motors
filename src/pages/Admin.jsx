import { useEffect, useState } from "react";
import defaultCars from "../data/carsData";

const emptyForm = {
    name: "",
    brand: "",
    price: "",
    image: "",
    fuel: "",
    year: "",
    km: "",
    transmission: "",
    color: "",
    description: "",
};

export default function Admin() {
    const [cars, setCars] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    useEffect(() => {
        try {
            const savedCars = JSON.parse(localStorage.getItem("cars"));
            if (savedCars && savedCars.length > 0) {
                setCars(savedCars);
            } else {
                localStorage.setItem("cars", JSON.stringify(defaultCars));
                setCars(defaultCars);
            }
        } catch {
            setCars(defaultCars);
        }
    }, []);

    const notifyCarsUpdated = () => {
        window.dispatchEvent(new Event("carsUpdated"));
    };

    const saveCars = (updatedCars) => {
        try {
            localStorage.setItem("cars", JSON.stringify(updatedCars));
            setCars(updatedCars);
            notifyCarsUpdated();
            return true;
        } catch (error) {
            console.error("Failed to save cars:", error);
            alert(
                "Could not save car data. The uploaded image is probably too large for browser storage. Please use a smaller image."
            );
            return false;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdminLoggedIn");
        window.location.href = "/hm-admin-login";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const compressImage = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement("canvas");

                    const maxWidth = 900;
                    const scale = Math.min(1, maxWidth / img.width);

                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;

                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
                    resolve(compressedBase64);
                };

                img.onerror = reject;
                img.src = event.target.result;
            };

            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploadingImage(true);

        try {
            const compressedImage = await compressImage(file);

            setForm((prev) => ({
                ...prev,
                image: compressedImage,
            }));
        } catch (error) {
            console.error("Image upload failed:", error);
            alert("Image upload failed");
        } finally {
            setIsUploadingImage(false);
        }
    };

    const resetForm = () => {
        setForm(emptyForm);
        setEditingId(null);
        setIsUploadingImage(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isUploadingImage) {
            alert("Please wait, image is still uploading");
            return;
        }

        if (
            !form.name.trim() ||
            !form.brand.trim() ||
            !form.price.trim() ||
            !form.image ||
            !form.fuel.trim() ||
            !form.year.trim()
        ) {
            alert("Please fill all important fields");
            return;
        }

        if (editingId) {
            const updatedCars = cars.map((car) =>
                car.id === editingId ? { ...car, ...form, id: editingId } : car
            );

            const saved = saveCars(updatedCars);
            if (saved) {
                alert("Car updated successfully");
                resetForm();
            }
        } else {
            const newCar = {
                id: Date.now(),
                ...form,
            };

            const updatedCars = [...cars, newCar];
            const saved = saveCars(updatedCars);

            if (saved) {
                alert("Car added successfully");
                resetForm();
            }
        }
    };

    const handleEditCar = (car) => {
        setForm({
            name: car.name || "",
            brand: car.brand || "",
            price: car.price || "",
            image: car.image || "",
            fuel: car.fuel || "",
            year: car.year || "",
            km: car.km || "",
            transmission: car.transmission || "",
            color: car.color || "",
            description: car.description || "",
        });
        setEditingId(car.id);
        setIsUploadingImage(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDeleteCar = (id) => {
        const updatedCars = cars.filter((car) => car.id !== id);

        const saved = saveCars(updatedCars);
        if (saved && editingId === id) {
            resetForm();
        }
    };

    const handleResetCars = () => {
        const saved = saveCars(defaultCars);
        if (saved) {
            resetForm();
        }
    };

    return (
        <section className="min-h-screen bg-black px-6 py-16 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                            Admin Panel
                        </p>
                        <h1 className="mt-3 text-4xl font-bold">Manage Inventory</h1>
                        <p className="mt-3 text-gray-400">
                            Add, edit, and remove cars from Hitesh Motors inventory.
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-white/10 bg-neutral-900 p-8"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <h2 className="text-2xl font-semibold">
                                {editingId ? "Edit Car" : "Add New Car"}
                            </h2>

                            {editingId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
                                >
                                    Cancel Edit
                                </button>
                            )}
                        </div>

                        <div className="grid gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Car Name"
                                value={form.name}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <input
                                type="text"
                                name="brand"
                                placeholder="Brand"
                                value={form.brand}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={form.price}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <div className="space-y-3">
                                <label className="text-sm text-gray-400">Upload Car Image</label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="w-full text-sm"
                                />

                                {isUploadingImage && (
                                    <p className="text-sm text-yellow-400">Uploading image...</p>
                                )}

                                {form.image && !isUploadingImage && (
                                    <img
                                        src={form.image}
                                        alt="preview"
                                        className="h-40 w-full rounded-xl border border-white/10 object-cover"
                                    />
                                )}
                            </div>

                            <input
                                type="text"
                                name="fuel"
                                placeholder="Fuel Type"
                                value={form.fuel}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <input
                                type="text"
                                name="year"
                                placeholder="Year"
                                value={form.year}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <input
                                type="text"
                                name="km"
                                placeholder="Kilometers"
                                value={form.km}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <input
                                type="text"
                                name="transmission"
                                placeholder="Transmission"
                                value={form.transmission}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <input
                                type="text"
                                name="color"
                                placeholder="Color"
                                value={form.color}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            />

                            <textarea
                                name="description"
                                placeholder="Description"
                                rows="5"
                                value={form.description}
                                onChange={handleChange}
                                className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none placeholder:text-gray-500"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isUploadingImage}
                                className="rounded-2xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isUploadingImage
                                    ? "Uploading Image..."
                                    : editingId
                                        ? "Update Car"
                                        : "Add Car"}
                            </button>
                        </div>
                    </form>

                    <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <h2 className="text-2xl font-semibold">Current Inventory</h2>
                            <button
                                onClick={handleResetCars}
                                className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
                            >
                                Reset Default Cars
                            </button>
                        </div>

                        <div className="space-y-4">
                            {cars.length === 0 ? (
                                <div className="rounded-2xl bg-black p-6 text-gray-400">
                                    No cars available.
                                </div>
                            ) : (
                                cars.map((car) => (
                                    <div
                                        key={car.id}
                                        className="flex flex-col gap-4 rounded-2xl bg-black p-4 md:flex-row md:items-center md:justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={car.image}
                                                alt={car.name}
                                                className="h-16 w-24 rounded-xl object-cover"
                                            />
                                            <div>
                                                <h3 className="font-semibold">{car.name}</h3>
                                                <p className="text-sm text-gray-400">
                                                    {car.brand} • {car.price}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => handleEditCar(car)}
                                                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteCar(car.id)}
                                                className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium transition hover:bg-red-500"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}