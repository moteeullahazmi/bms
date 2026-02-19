import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src="/images/clinic-front.png"
        alt="Ajit Dental Clinic Jaipur"
        fill
        priority
        className="object-cover brightness-75"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Trusted & Advanced Dental Care in Jaipur
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:09602312374"
            className="bg-blue-600 px-8 py-3 rounded-lg"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-lg"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
