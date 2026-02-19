import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className="bg-[#f4f8fb] text-slate-900">



        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <Footer />

        <StickyButtons />

      </body>
    </html>
  );
}
