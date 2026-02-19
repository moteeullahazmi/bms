import Image from "next/image";

export const metadata = {
  title: "Best Dentist in Jaipur | Ajit Dental Clinic",
  description:
    "Looking for the best dentist in Jaipur? Visit Ajit Dental Clinic at Sahakar Marg, Lalkothi for dental implants, root canal and braces treatment.",
};

export default function DentistJaipur() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Best Dentist in Jaipur
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Ajit Dental Clinic & Implant Centre provides advanced dental care
            in Jaipur including implants, root canal, braces and cosmetic dentistry.
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Trusted Dental Clinic in Lalkothi, Jaipur
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              If you are searching for a reliable dentist in Jaipur,
              our clinic located at Sahakar Marg, Lalkothi offers modern
              dental treatments with advanced technology and hygiene standards.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              We specialize in dental implants, painless root canal treatment,
              braces correction and smile designing for patients across Jaipur.
            </p>

            <a
              href="tel:09602312374"
              className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Call Now
            </a>
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src="/images/clinic-1.jpg"
              alt="Best Dentist in Jaipur Clinic"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Dental Services in Jaipur
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <ServiceCard
              title="Dental Implants in Jaipur"
              desc="Permanent solution for missing teeth."
            />
            <ServiceCard
              title="Root Canal Treatment"
              desc="Painless RCT using modern techniques."
            />
            <ServiceCard
              title="Braces & Aligners"
              desc="Advanced orthodontic smile correction."
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Dental Clinic in Jaipur?
          </h2>

          <ul className="mt-10 space-y-4 text-slate-600 leading-8">
            <li>✔ 10+ Years of Experience</li>
            <li>✔ Modern Dental Equipment</li>
            <li>✔ Hygienic & Safe Environment</li>
            <li>✔ Affordable Dental Treatments</li>
            <li>✔ Prime Location – Sahakar Marg, Jaipur</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">
                Who is the best dentist in Jaipur?
              </h3>
              <p className="mt-4 text-slate-600">
                Ajit Dental Clinic located at Sahakar Marg provides advanced
                dental treatments with modern equipment and experienced care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">
                Where is your clinic located?
              </h3>
              <p className="mt-4 text-slate-600">
                Our clinic is located at 14 Ka 4, Sahakar Marg, Lalkothi, Jaipur.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 text-slate-600">{desc}</p>
    </div>
  );
}
