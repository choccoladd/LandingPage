import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.choccoladd.com"),

  title: {
    default: "Choccoladd | Premium Malaysian Cocoa Chocolates & Gift Sets",
    template: "%s | Choccoladd",
  },
  description:
    "Handcrafted premium chocolates from 100% authentic Malaysian cacao. Shop artisan chocolates, curated gift sets, wellness cocoa drinks & cocoa skincare. Delivered across Malaysia.",
  keywords: [
    "Malaysian chocolate",
    "handcrafted chocolate Malaysia",
    "premium cocoa KL",
    "chocolate gift sets Malaysia",
    "keto chocolate Malaysia",
    "cocoa drinks Malaysia",
    "cocoa skincare Malaysia",
    "Choccoladd",
    "Newbox Greens Ventures",
    "Lembaga Koko Malaysia",
    "artisan chocolate Kuala Lumpur",
  ],
  authors: [{ name: "Choccoladd", url: "https://www.choccoladd.com" }],
  creator: "Choccoladd",
  publisher: "Newbox Greens Ventures",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },

  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://www.choccoladd.com",
    siteName: "Choccoladd",
    title: "Choccoladd | Premium Malaysian Cocoa Chocolates & Gift Sets",
    description:
      "Handcrafted premium chocolates from 100% authentic Malaysian cacao. Shop artisan chocolates, curated gift sets, wellness cocoa drinks & cocoa skincare.",
    images: [
      {
        url: "/images/logo/LogoChoccoladd.png",
        width: 800,
        height: 800,
        alt: "Choccoladd — Premium Malaysian Cocoa Chocolates",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Choccoladd | Premium Malaysian Cocoa Chocolates",
    description:
      "Handcrafted chocolates from 100% Malaysian cacao. Gift sets, cocoa drinks, keto chocolates and more.",
    images: ["/images/logo/LogoChoccoladd.png"],
  },

  icons: {
    icon: "/images/logo/LogoChoccoladd.png",
    apple: "/images/logo/LogoChoccoladd.png",
  },

  alternates: {
    canonical: "https://www.choccoladd.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.choccoladd.com",
  name: "Choccoladd",
  description:
    "Handcrafted premium chocolates from 100% authentic Malaysian cacao. Artisan chocolates, gift sets, wellness cocoa drinks and cocoa skincare.",
  url: "https://www.choccoladd.com",
  telephone: "+60196319373",
  email: "sufeil.newboxgreens@gmail.com",
  priceRange: "RM9 – RM180",
  image: "https://www.choccoladd.com/images/logo/LogoChoccoladd.png",
  logo: "https://www.choccoladd.com/images/logo/LogoChoccoladd.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blok G2-0-7, Jalan 5/76 D, Desa Pandan",
    addressLocality: "Kuala Lumpur",
    addressRegion: "Wilayah Persekutuan",
    postalCode: "55100",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 3.1355,
    longitude: 101.7262,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/chocco_ladd",
    "https://www.facebook.com/people/Choccoladd/61568651560003/",
  ],
  hasMap: "https://maps.google.com/?q=3.1355,101.7262",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
