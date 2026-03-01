import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const SITE_URL = "https://thefish.vn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "YDao — Dịch Vụ Bưng Quả & Cho Thuê Áo Dài Cưới tại TP Bình Dương",
    template: "%s | YDao",
  },
  description:
    "YDao cung cấp dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới tại TP. Bình Dương. Nâng niu trọn vẹn ngày trọng đại của bạn.",
  keywords: [
    "bưng quả",
    "cho thuê áo dài",
    "áo dài cưới",
    "dịch vụ cưới",
    "đám hỏi",
    "bê tráp",
    "áo dài bê tráp",
    "thuê áo dài Bình Dương",
    "phụ kiện cưới",
    "dịch vụ bưng quả Bình Dương",
    "cho thuê áo dài cưới Bình Dương",
    "bưng quả trọn gói",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "YDao",
    title: "YDao — Dịch Vụ Bưng Quả & Cho Thuê Áo Dài Cưới",
    description:
      "Dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới tại TP. Bình Dương. Nâng niu trọn vẹn ngày trọng đại.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YDao — Dịch Vụ Bưng Quả & Cho Thuê Áo Dài Cưới",
    description:
      "Dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới tại TP. Bình Dương.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "YDao",
    description:
      "Dịch vụ bưng quả chuyên nghiệp và cho thuê áo dài cưới tại TP. Bình Dương.",
    url: SITE_URL,
    telephone: "0355236911",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bình Dương",
      addressCountry: "VN",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${nunitoSans.variable}`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
