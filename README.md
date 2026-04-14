# 🚗 Hitesh Motors – Car Dealership Website

A modern, responsive car dealership website built using **React + Vite + Tailwind CSS**.

This project is designed as a real-world product for showcasing cars, generating leads, and delivering a smooth and premium user experience for automotive businesses.

---

## 🌐 Live Demo

👉 https://hitesh-motors.vercel.app

---

## ✨ Features

* 🔥 Modern premium UI (Tailwind CSS)
* 📱 Fully responsive design (mobile + desktop)
* 🚗 Featured cars section
* 📄 Car details page
* 🔍 Search & filter functionality
* 🧑‍💼 Admin Panel (Add / Edit / Delete Cars)
* 📞 WhatsApp integration for instant enquiries
* 🧭 Smooth navigation with clean layout
* ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router
* **State/Data:** LocalStorage (temporary)
* **Animations:** Framer Motion

---

## 📁 Project Structure


src/
components/
Navbar.jsx
CarCard.jsx
Footer.jsx
Loader.jsx
WhatsAppButton.jsx

pages/
Home.jsx
Cars.jsx
CarDetails.jsx
About.jsx
Contact.jsx
Admin.jsx
AdminLogin.jsx

utils/
getCars.js
animations.js

data/
carsData.js

App.jsx
main.jsx
index.css


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/VivekThakur999/hitesh-motors.git
cd hitesh-motors
2. Install dependencies
npm install
3. Setup Tailwind CSS
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

Update tailwind.config.js:

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
4. Run development server
npm run dev

Open in browser:

http://localhost:5173/
📸 Screens
Home Page (Hero + Featured Cars)
Cars Listing Page with filters
Car Details Page
About Section with Owner Info
Contact Page with Google Map
Admin Panel for managing cars
📞 Contact Integration

Update the WhatsApp number in code:

https://wa.me/91XXXXXXXXXX

Replace with the actual business number.

🔮 Future Enhancements
☁️ Backend integration (Supabase)
🖼️ Image upload with cloud storage
🔐 Secure admin authentication
📊 Analytics dashboard
🧾 Booking / enquiry management system
📌 Use Case

This project is built as a real product for:

Local car dealers
Automotive businesses
Freelance client delivery
Portfolio showcase

👨‍💻 Author

Vivek Thakur
Frontend Developer | UI/UX Enthusiast
B.Tech Computer Engineering

Focused on building modern, real-world web applications with clean UI and smooth user experience.

📄 License

This project is intended for personal and client use.

You may use it for learning, portfolio, or delivering projects to clients.
However, reselling, redistributing, or publishing this template as your own product is not allowed.


---
