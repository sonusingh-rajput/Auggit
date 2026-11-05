import { motion } from "framer-motion";
import PartnerHero from "../components/partner/PartnerHero";
import { useState } from "react";
import {
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiLayers,
  FiLock,
  FiShare2,
  FiUsers,
} from "react-icons/fi";

const ourPartners = [
  { name: "Novaklick Global", tag: "Zoho", logo: "/partner/novaklick-logo.png", href: "https://novaklickglobal.com/" },
  { name: "Jilaba Software", tag: "Jewellery", logo: "/partner/jilaba-logo.png", href: "https://jilaba.com/" },
];

const tracks = [
  {
    title: "Reseller Partner",
    icon: FiGlobe,
    desc: "Join our network of trusted resellers and bring Auggit’s solutions to your customers. Help your clients simplify everything about data, documents and compliance while expanding your own portfolio.",
  },
  {
    title: "Technology Partner",
    icon: FiShare2,
    desc: "Integrate or extend with Auggit’s core capabilities. We are open to exploring synergies between our various platforms and partner solutions for mutual growth and success.",
  },
];

const benefits = [
  {
    title: "Proven expertise in the domain",
    icon: FiAward,
    desc: "Benefit from years of industry-leading experience and deep technical insights that ensure seamless, high-stakes project execution.",
  },
  {
    title: "Collaboration first approach",
    icon: FiUsers,
    desc: "We succeed when you do. Access a dedicated support ecosystem built on transparency, shared goals and mutual growth.",
  },
  {
    title: "Resources for Success",
    icon: FiLayers,
    desc: "Empower your team with comprehensive training, technical documentation and marketing assets designed to accelerate your sales cycle.",
  },
  {
    title: "Security and Compliance",
    icon: FiLock,
    desc: "Deploy a robust architecture that meets rigorous global security standards, giving your clients total peace of mind.",
  },
];

const inputClass =
  "w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] outline-none";
const labelClass = "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1";

export default function PartnerWithUsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#353535]">
      <PartnerHero />

      {/* Specialized Tracks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0b3d73]">Specialized Tracks for Visionary Partners</h2>
        <p className="mt-3 text-slate-500 text-base sm:text-lg">
          Unlock elite growth with Reselling or Integrate to dominate your market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-[#f1f5f9] border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#41a0c8]/15 text-[#41a0c8] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#062039] mb-2">{t.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Our Partners */}
      <section className="bg-[#062039] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Partners</h2>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6">
          {ourPartners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} – ${p.tag}`}
              className="w-[240px] h-[110px] rounded-2xl bg-white flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform"
            >
              {p.logo ? (
                <img src={p.logo} alt={p.name} className="max-h-16 max-w-[180px] object-contain" />
              ) : (
                <>
                  <span className="text-lg font-extrabold text-[#062039]">{p.name}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#41a0c8]">{p.tag}</span>
                </>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Partnership benefits */}
      <section id="partner-benefits" className="bg-[#f1f2f2]/70 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b3d73]">A Partnership that helps you scale</h2>
            <p className="mt-3 text-slate-500">Designed to help you deliver seamlessly with trusted support.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#41a0c8]/10 text-[#41a0c8] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#062039] mb-1">{b.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="partner-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b3d73]">Let's grow together as trusted partners</h2>
          <p className="mt-3 text-slate-500">Join our partner ecosystem and co-create value for your clients.</p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <FiCheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-bold text-emerald-900">Thank you for your interest!</h3>
            <p className="text-xs text-emerald-700">Our team will review your details and get in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Company</label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass}
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                required
                checked={form.agreed}
                onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                className="mt-0.5"
              />
              <span>
                I agree to the{" "}
                <a href="https://www.auggit.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="text-[#41a0c8] underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="https://www.auggit.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#41a0c8] underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-extrabold text-sm shadow-xl shadow-[#41a0c8]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Submit</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
