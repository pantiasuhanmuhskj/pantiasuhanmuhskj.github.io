import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Panti Asuhan Muhammadiyah Sokaraja",
  description:
    "Lembaga Kesejahteraan Sosial Anak (LKSA) atau Muhammadiyah Children Center (MCC) yang berada di bawah naungan Pimpinan Cabang Muhammadiyah Sokaraja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <main className="relative overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
