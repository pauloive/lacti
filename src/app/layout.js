import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Lactifoz - Transformação e Comércio de Peixes e Marisco, S.A.",
    template: "%s | Lactifoz",
  },
  description:
    "Lactifoz, S.A. — Transformação e comércio de peixes e marisco de qualidade superior. Tradição, frescura e excelência desde há décadas. Qualidade certificada, diretamente para si.",
  keywords: [
    "peixes", "marisco", "transformação", "comércio", "peixe fresco",
    "marisco fresco", "qualidade", "Portugal", "Lactifoz",
  ],
  authors: [{ name: "Lactifoz, S.A." }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lactifoz - Transformação e Comércio de Peixes e Marisco, S.A.",
    description:
      "O melhor do mar para a sua mesa. Peixes e marisco de qualidade certificada, com tradição e frescura garantidas.",
    type: "website",
    locale: "pt_PT",
    siteName: "Lactifoz",
    images: [
      {
        url: "/images/lactifoz-logo.png",
        width: 400,
        height: 400,
        alt: "Lactifoz - Peixes e Marisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lactifoz - Transformação e Comércio de Peixes e Marisco",
    description:
      "O melhor do mar para a sua mesa. Qualidade certificada, tradição e frescura.",
    images: ["/images/lactifoz-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-altura)' }}>
          {children}
        </main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
