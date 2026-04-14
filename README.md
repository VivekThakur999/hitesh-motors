# 🚗 Hitesh Motors – Car Dealership Website

A modern, responsive car dealership website built using **React + Vite + Tailwind CSS**.
This project is designed as a real-world product for showcasing cars, generating leads, and providing a smooth user experience.

---

## ✨ Features

* 🔥 Modern premium UI (Tailwind CSS)
* 📱 Fully responsive design (mobile + desktop)
* 🚗 Featured cars section
* 📄 Car details view (extendable)
* 📞 WhatsApp integration for instant contact
* 🧭 Smooth navigation with clean layout
* ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router (optional for future)
* **State/Data:** Local JSON / LocalStorage (for now)

---

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    CarCard.jsx
    WhyChooseUs.jsx
    CTASection.jsx
    Footer.jsx

  data/
    cars.js

  pages/
    Home.jsx

  App.jsx
  main.jsx
  index.css
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hitesh-motors.git
cd hitesh-motors
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Tailwind CSS

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### 4. Run development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173/
```

---

## 📸 Screens

* Home Page (Hero + Featured Cars)
* Car Cards with details
* WhatsApp contact button
* Footer with business info

---

## 📞 Contact Integration

Update the WhatsApp number in code:

```
https://wa.me/91XXXXXXXXXX
```

Replace with the actual business number.

---

## 🔮 Future Enhancements

* 🧑‍💼 Admin Panel (Add/Edit/Delete Cars)
* 🔍 Car Filters (price, brand, fuel)
* 🗂️ Inventory page
* 📄 Car details page
* ☁️ Backend integration (Firebase / Supabase)
* 🔐 Authentication system

---

## 📌 Use Case

This project is built as a **real product** for:

* Local car dealers
* Automotive businesses
* Freelance client delivery
* Portfolio showcase

---

## 👨‍💻 Author

**Vivek Thakur**
B.Tech Computer Engineering Student
Passionate about UI/UX, Web Development, and Real-World Projects

---

## ⭐ License

This project is for personal and commercial use.
Reselling or redistribution of this template is not allowed.

Full version available for ₹49
DM / WhatsApp: 9356767848