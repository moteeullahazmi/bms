import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Clinic
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image src="/images/clinic-interior.png"
            alt="Clinic Interior"
            width={500}
            height={400}
            className="rounded-xl object-cover w-full h-80"
          />
          <Image src="/images/doctor.jpg"
            alt="Dentist Jaipur"
            width={500}
            height={400}
            className="rounded-xl object-cover w-full h-80"
          />
          <Image src="/images/clinic-view.png"
            alt="Dental Clinic Jaipur"
            width={500}
            height={400}
            className="rounded-xl object-cover w-full h-80"
          />
        </div>
      </div>
    </section>
  );
}
