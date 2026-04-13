import defaultCars from "../data/carsData";

export default function getCars() {
  try {
    const savedCars = JSON.parse(localStorage.getItem("cars"));
    return savedCars && savedCars.length > 0 ? savedCars : defaultCars;
  } catch {
    return defaultCars;
  }
}