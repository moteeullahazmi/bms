import Image from "next/image";

export const metadata = {
  title: "Contact Us | Ajit Dental Clinic Jaipur",
  description:
    "Contact Ajit Dental Clinic & Implant Centre at Sahakar Marg, Lalkothi, Jaipur. Call 09602312374 to book your appointment.",
};

export default function Contact() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact Ajit Dental Clinic
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Visit us at Sahakar Marg, Lalkothi, Jaipur or call us to book your appointment today.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Info */}
          <div className="space-y-8">

            <div className="bg-white p-8 rounded-3xl shadow">
              <h2 className="text-2xl font-bold text-slate-900">
                Clinic Address
              </h2>
              <p className="mt-4 text-slate-600 leading-7">
                14 Ka 4, Sahakar Marg, <br />
                Lalkothi, Jaipur, Rajasthan 302005
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h2 className="text-2xl font-bold text-slate-900">
                Call Us
              </h2>
              <a
                href="tel:09602312374"
                className="mt-4 block text-blue-600 font-semibold text-lg"
              >
                09602312374
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h2 className="text-2xl font-bold text-slate-900">
                Working Hours
              </h2>
              <p className="mt-4 text-slate-600">
                Monday – Saturday: 10:00 AM – 8:00 PM <br />
                Sunday: Closed
              </p>
            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Book an Appointment
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Submit Request
              </button>

            </form>
          </div>

        </div>

        {/* Google Map */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Find Us on Map
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Ajit+Dental+Clinic+Jaipur&output=embed"
              width="100%"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
