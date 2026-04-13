export default function WhatsAppButton() {
    const phoneNumber = "919356767848";
    const message =
        "Hello Hitesh Motors, I want to know more about your available cars.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-500"
        >
            WhatsApp
        </a>
    );
}