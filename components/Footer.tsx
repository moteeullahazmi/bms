import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Ajit Dental Clinic
          </h3>
          <p className="text-sm leading-6">
            14 Ka 4, Sahakar Marg,  
            Lalkothi, Jaipur, Rajasthan 302005
          </p>
          <p className="mt-4 text-sm">
            📞 09602312374
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/dentist-in-jaipur">Dentist in Jaipur</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/dental-implant-jaipur">Dental Implants</Link></li>
            <li><Link href="/root-canal-jaipur">Root Canal</Link></li>
            <li><Link href="/braces-jaipur">Braces & Aligners</Link></li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h4 className="text-white font-semibold mb-4">Visit Us</h4>

          <iframe
            src="https://www.google.com/maps?q=Ajit+Dental+Clinic+Jaipur&output=embed"
            width="100%"
            height="180"
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Ajit Dental Clinic & Implant Centre. All Rights Reserved.
      </div>
    </footer>
  );
}
