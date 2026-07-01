import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { giftSets } from "../../components/gift-sets-data";
import { slugify } from "../../components/slug";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

function parsePriceValue(price: string) {
  return price.replace(/[^\d.]/g, "") || "0";
}

function getGiftSet(slug: string) {
  return giftSets.find((s) => slugify(s.name) === slug);
}

export function generateStaticParams() {
  return giftSets.map((s) => ({ slug: slugify(s.name) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const set = getGiftSet(params.slug);
  if (!set) return {};

  const title = set.name;
  const description = set.description;
  const url = `https://www.choccoladd.com/gift-sets/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${set.name} | Choccoladd`,
      description,
      url,
      images: [{ url: set.image, alt: set.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${set.name} | Choccoladd`,
      description,
      images: [set.image],
    },
  };
}

export default function GiftSetDetailPage({ params }: { params: { slug: string } }) {
  const set = getGiftSet(params.slug);
  if (!set) notFound();

  const url = `https://www.choccoladd.com/gift-sets/${params.slug}`;
  const whatsappText = encodeURIComponent(`Hi! I'm interested in the ${set.name} gift set (${set.price}). Please provide more details.`);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: set.name,
    description: set.description,
    image: `https://www.choccoladd.com${set.image}`,
    category: set.occasion,
    brand: { "@type": "Brand", name: "Choccoladd" },
    offers: {
      "@type": "Offer",
      priceCurrency: "MYR",
      price: parsePriceValue(set.price),
      availability: "https://schema.org/InStock",
      url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.choccoladd.com" },
      { "@type": "ListItem", position: 2, name: "All Gift Sets", item: "https://www.choccoladd.com/all-gift-sets" },
      { "@type": "ListItem", position: 3, name: set.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="min-h-screen pt-36 pb-20" style={{ background: "#1A0802" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs" style={{ fontFamily: "'DM Mono', monospace" }} aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[#fdf6ee]/60">
              <li><Link href="/" className="hover:text-[#C8A040]">Home</Link></li>
              <li>/</li>
              <li><Link href="/all-gift-sets" className="hover:text-[#C8A040]">All Gift Sets</Link></li>
              <li>/</li>
              <li className="text-[#fdf6ee]">{set.name}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-square bg-[#2c1810]">
              <img
                src={set.image}
                alt={set.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <span
                className="inline-block mb-4 text-[10px] uppercase tracking-widest px-2 py-1 bg-[#2c1810]/70 text-[#C8A040]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {set.occasion}
              </span>
              <h1
                className="text-[#fdf6ee] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700 }}
              >
                {set.name}
              </h1>
              <p
                className="text-[#fdf6ee]/80 mb-6"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                {set.description}
              </p>
              <p
                className="text-[#C8A040] mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem" }}
              >
                {set.price}
              </p>

              <a
                href={`https://wa.me/60196319373?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[#fdf6ee] text-sm uppercase tracking-widest hover:opacity-85 transition-opacity"
                style={{ background: set.accent, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Order Gift via WhatsApp
              </a>

              <div className="mt-8">
                <Link
                  href="/all-gift-sets"
                  className="text-sm text-[#fdf6ee]/60 hover:text-[#C8A040] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  ← Back to all gift sets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
