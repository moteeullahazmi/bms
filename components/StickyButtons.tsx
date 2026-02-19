export default function StickyButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      <a
        href="tel:09602312374"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/919602312374"
        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
