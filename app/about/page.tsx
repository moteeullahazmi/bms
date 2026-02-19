import Image from "next/image";

export const metadata = {
  title: "About Us | Ajit Dental Clinic Jaipur",
  description:
    "Meet the experienced dentist at Ajit Dental Clinic & Implant Centre located at Sahakar Marg, Jaipur.",
};

export default function About() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            About Ajit Dental Clinic
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Trusted dental care in Jaipur providing advanced treatments
            including dental implants, root canal and cosmetic dentistry.
          </p>
        </div>

        {/* Doctor Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Doctor Image */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/doctor.jpg"
              alt="Experienced Dentist in Jaipur"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Doctor Content */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Meet Our Experienced Dentist
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              With over 10+ years of experience, our dentist has successfully
              treated thousands of patients in Jaipur. We specialize in
              dental implants, painless root canal treatment, braces and
              smile designing.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              Our clinic focuses on patient comfort, advanced technology,
              hygiene standards and long-term dental health solutions.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-2xl font-bold text-blue-600">
                  10+ Years
                </h3>
                <p className="text-slate-600">Experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-2xl font-bold text-blue-600">
                  1000+
                </h3>
                <p className="text-slate-600">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Our Modern Dental Clinic in Jaipur
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <Image
              src="/images/clinic-1.jpg"
              alt="Dental Clinic Reception Jaipur"
              width={400}
              height={300}
              className="rounded-2xl object-cover w-full h-64"
            />

            <Image
              src="/images/clinic-2.jpg"
              alt="Dental Treatment Room Jaipur"
              width={400}
              height={300}
              className="rounded-2xl object-cover w-full h-64"
            />

            <Image
              src="/images/clinic-3.jpg"
              alt="Modern Dental Equipment Jaipur"
              width={400}
              height={300}
              className="rounded-2xl object-cover w-full h-64"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Book Your Appointment Today
          </h2>

          <p className="mt-6 text-slate-600">
            Visit us at Sahakar Marg, Lalkothi, Jaipur.
          </p>

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
