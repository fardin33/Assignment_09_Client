import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "StudyNook",
  description: "Library study room booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ECF0F1] text-slate-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
