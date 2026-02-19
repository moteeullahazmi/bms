import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          <ServiceCard
            title="Dental Implants"
            image="/images/implant.webp"
          />
          <ServiceCard
            title="Root Canal"
            image="/images/root-canal.jpg"
          />
          <ServiceCard
            title="Braces & Aligners"
            image="/images/braces.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
      
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Advanced & painless dental treatment in Jaipur with modern technology.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
        >
          Book Appointment →
        </a>
      </div>
    </div>
  );
}
