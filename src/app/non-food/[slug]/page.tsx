import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { nonFoodProducts } from "../../components/non-food-data";
import { slugify } from "../../components/slug";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

function parsePriceValue(price: string) {
  return price.replace(/[^\d.]/g, "") || "0";
}

function getProduct(slug: string) {
  return nonFoodProducts.find((p) => slugify(p.name) === slug);
}

export function generateStaticParams() {
  return nonFoodProducts.map((p) => ({ slug: slugify(p.name) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};

  const title = product.name;
  const description = product.description;
  const url = `https://www.choccoladd.com/non-food/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Choccoladd`,
      description,
      url,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Choccoladd`,
      description,
      images: [product.image],
    },
  };
}

export default function NonFoodDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const url = `https://www.choccoladd.com/non-food/${params.slug}`;
  const whatsappText = encodeURIComponent(`Hi! I'm interested in ordering: ${product.name} (${product.price})`);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://www.choccoladd.com${product.image}`,
    category: product.category,
    brand: { "@type": "Brand", name: "Choccoladd" },
    offers: {
      "@type": "Offer",
      priceCurrency: "MYR",
      price: parsePriceValue(product.price),
      availability: "https://schema.org/InStock",
      url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.choccoladd.com" },
      { "@type": "ListItem", position: 2, name: "Non-Food Products", item: "https://www.choccoladd.com/all-non-food" },
      { "@type": "ListItem", position: 3, name: product.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="min-h-screen pt-36 pb-20" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs" style={{ fontFamily: "'DM Mono', monospace" }} aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[#fdf6ee]/60">
              <li><Link href="/" className="hover:text-[#C8A040]">Home</Link></li>
              <li>/</li>
              <li><Link href="/all-non-food" className="hover:text-[#C8A040]">Non-Food Products</Link></li>
              <li>/</li>
              <li className="text-[#fdf6ee]">{product.name}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-square bg-[#1A1A1A]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              {product.tag && (
                <span
                  className="inline-block mb-4 bg-[#C8A040] text-[#0D0D0D] px-2 py-0.5 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {product.tag}
                </span>
              )}
              <p
                className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {product.category}
              </p>
              <h1
                className="text-[#fdf6ee] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700 }}
              >
                {product.name}
              </h1>
              <p
                className="text-[#fdf6ee]/80 mb-6"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                {product.description}
              </p>
              <p
                className="text-[#C8A040] mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem" }}
              >
                {product.price}
              </p>

              <a
                href={`https://wa.me/60196319373?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C8A040] text-[#0D0D0D] text-sm uppercase tracking-widest hover:bg-[#fdf6ee] transition-colors duration-300"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Order via WhatsApp
              </a>

              <div className="mt-8">
                <Link
                  href="/all-non-food"
                  className="text-sm text-[#fdf6ee]/60 hover:text-[#C8A040] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  ← Back to non-food products
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
