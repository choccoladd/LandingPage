"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#1C0E06]/10 bg-white text-[#1C0E06] placeholder-[#7A5430]/40 focus:outline-none focus:border-[#C8A040] focus:ring-2 focus:ring-[#C8A040]/15 transition-all text-sm";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "2a1cdf1b-7cc8-46f2-8270-ddce252d4460",
        subject: form.subject || "New message from Choccoladd website",
        from_name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    });
    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-14" style={{ background: "#FAF4EA" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Reach Out
          </p>
          <h2
            className="text-[#1C0E06] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Contact Us
          </h2>
          <div className="w-16 h-px bg-[#C8A040] mx-auto" />
        </div>

        {/* Card wrapper */}
        <div className="grid md:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl shadow-[#1C0E06]/10">

          {/* ── Left info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-2 px-8 py-12 lg:px-12 lg:py-14 flex flex-col relative"
            style={{ background: "#1A0802" }}
          >
            {/* Gold top accent bar — matches GiftSets / CompanyProfile */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A040]" />
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Contact Us
            </p>
            <h3
              className="text-[#fdf6ee] mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Handcrafted Chocolate,{" "}
              <em style={{ color: "#C8A040", fontStyle: "italic" }}>Made with Passion</em>
            </h3>
            <p
              className="text-[#fdf6ee]/75 text-sm mb-10"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.85 }}
            >
              Have a question, want to place a bulk order, or plan a custom gift? Reach out to us and we will get back to you swiftly.
            </p>

            {/* Contact info items */}
            <div className="space-y-5 mb-10">
              {[
                { icon: Phone,  label: "Our Phone",       value: "+60 19-631 9373" },
                { icon: Mail,   label: "Email",            value: "sufeil.newboxgreens@gmail.com" },
                { icon: MapPin, label: "Address",          value: "Desa Pandan, 55100 Kuala Lumpur" },
                { icon: Clock,  label: "Operating Hours",  value: "Mon – Sat: 10:00 AM – 8:00 PM\nSunday: Closed" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#C8A040" }}
                  >
                    <Icon size={16} className="text-[#0A0402]" />
                  </div>
                  <div>
                    <p
                      className="text-[#fdf6ee]/65 text-[10px] uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[#fdf6ee] text-sm whitespace-pre-line"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="mt-auto">
              <p
                className="text-[#fdf6ee]/65 text-[10px] uppercase tracking-widest mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Social Media
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/chocco_ladd?utm_source=qr&igsh=Yjg0MDAwNnBiYzhs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center border border-[#C8A040]/30 text-[#C8A040] hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-200">
                  <Instagram size={15} />
                </a>
                <a href="https://www.facebook.com/people/Choccoladd/61568651560003/?rdid=JtIatxt8CJ7M41LK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Lo4TRrPY4%2F" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center border border-[#C8A040]/30 text-[#C8A040] hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-200">
                  <Facebook size={15} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center border border-[#C8A040]/30 text-[#C8A040] hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right form panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-3 px-8 py-12 lg:px-12 lg:py-14 bg-white"
          >
            <h3
              className="text-[#1C0E06] mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 600 }}
            >
              Fill Up The Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1C0E06]/50 text-[10px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>Name</label>
                  <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} style={{ fontFamily: "'Lato', sans-serif" }} />
                </div>
                <div>
                  <label className="block text-[#1C0E06]/50 text-[10px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>Email</label>
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} style={{ fontFamily: "'Lato', sans-serif" }} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1C0E06]/50 text-[10px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>Phone Number</label>
                  <input type="tel" placeholder="Your Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} style={{ fontFamily: "'Lato', sans-serif" }} />
                </div>
                <div>
                  <label className="block text-[#1C0E06]/50 text-[10px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>Subject</label>
                  <input type="text" placeholder="Your Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} style={{ fontFamily: "'Lato', sans-serif" }} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#1C0E06]/50 text-[10px] uppercase tracking-widest mb-1.5" style={{ fontFamily: "'DM Mono', monospace" }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-shine w-full py-3.5 rounded-xl bg-[#0A0402] text-[#FAF4EA] text-sm uppercase tracking-widest"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Submit Now
              </button>

              {sent && (
                <p className="text-center text-[#C8A040] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                  ✓ Message sent! We'll reply shortly.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
