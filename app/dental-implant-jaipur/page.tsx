import Image from "next/image";

export const metadata = {
  title: "Dental Implant in Jaipur | Best Tooth Implant Clinic",
  description:
    "Looking for dental implant in Jaipur? Ajit Dental Clinic at Sahakar Marg offers safe, permanent and advanced tooth implant solutions.",
};

export default function DentalImplantJaipur() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Dental Implant in Jaipur
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Permanent and advanced tooth replacement solutions at Ajit Dental Clinic,
            Sahakar Marg, Lalkothi, Jaipur.
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              What is a Dental Implant?
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              A dental implant is a permanent solution for missing teeth.
              It replaces the tooth root with a titanium implant that supports
              a natural-looking crown.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              At our Jaipur dental clinic, we use advanced implant technology
              ensuring safety, precision and long-term durability.
            </p>

            <a
              href="tel:09602312374"
              className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Book Consultation
            </a>
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src="/images/implant.jpg"
              alt="Dental Implant in Jaipur"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Benefits of Dental Implants
          </h2>

          <ul className="mt-10 space-y-4 text-slate-600 leading-8">
            <li>✔ Permanent tooth replacement</li>
            <li>✔ Natural look & feel</li>
            <li>✔ Improved chewing ability</li>
            <li>✔ Prevents bone loss</li>
            <li>✔ Long-lasting solution</li>
          </ul>
        </div>

        {/* Before After */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Dental Implant Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <Image
              src="/images/implant-before.png"
              alt="Before Dental Implant"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />

            <Image
              src="/images/implant-after.png"
              alt="After Dental Implant"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />

          </div>
        </div>

        {/* Cost Section */}
        <div className="mt-24 bg-blue-50 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Dental Implant Cost in Jaipur
          </h2>

          <p className="mt-8 text-slate-600 leading-8 text-center max-w-3xl mx-auto">
            The cost of dental implants in Jaipur depends on the case complexity,
            number of implants and material used. For exact pricing,
            book a consultation at our Sahakar Marg clinic.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Looking for the Best Dental Implant in Jaipur?
          </h2>

          <a
            href="tel:09602312374"
            className="inline-block mt-8 bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Call 09602312374
          </a>
        </div>

      </div>
    </section>
  );
}
