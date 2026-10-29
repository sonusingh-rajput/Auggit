import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCheckCircle, FiMail, FiFileText } from "react-icons/fi";

export default function AboutBrochureDownload() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 600);
  };

  return (
    <section className="relative py-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg shadow-slate-100/80 overflow-hidden relative"
      >
        {/* Subtle ambient accent background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#9eddf7]/20 via-[#41a0c8]/5 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Brochure 3D Mockup Cover */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative group max-w-[220px] sm:max-w-[260px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#41a0c8]/20 to-[#f7c037]/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <img
                src="/images/auggit_brochure.webp"
                alt="Auggit Corporate Brochure Mockup"
                width={260}
                height={340}
                loading="lazy"
                decoding="async"
                className="relative rounded-xl shadow-xl border border-slate-200/80 object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column: Download Form & Copy */}
          <div className="md:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider">
              <FiFileText className="w-3.5 h-3.5" />
              <span>Brochure & Enterprise Guide</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062039] tracking-tight">
                Download the brochure
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Discover our story, expertise, services, and the approach that drive our success. Enter your email and a high-resolution copy will be sent to your inbox.
              </p>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2 max-w-lg"
              >
                <div className="flex items-center gap-2.5 font-bold text-sm">
                  <FiCheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Brochure Sent Successfully!</span>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  The Auggit Corporate & Enterprise Solutions Brochure has been dispatched to your email. Check your inbox or spam folder in a moment.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 mt-1 cursor-pointer"
                >
                  Send to another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#062039] placeholder-slate-400 focus:outline-none focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#41a0c8] hover:bg-[#1267a7] text-white text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer disabled:opacity-50 whitespace-nowrap"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending..." : "Download Brochure"}</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Instant automated delivery. Zero spam. Safe & secure.
                </p>
              </form>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
