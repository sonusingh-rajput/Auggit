import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    quote: "Auggit's automation platform completely transformed how we handle invoice verification and vendor onboarding. Operations are effortless and audit-ready.",
    author: "Sarah Jenkins",
    role: "Chief Operations Officer",
    company: "Global Logistics UK",
    badge: "Operations",
  },
  {
    quote: "The SLaiCE integration allowed us to extract and secure precisely the financial data we needed from our SAP architecture without any friction.",
    author: "David Vance",
    role: "Head of IT Infrastructure",
    company: "Enterprise Systems Ltd",
    badge: "IT & Security",
  },
  {
    quote: "Exceptional document management tools combined with 100% regulatory compliance. It gives our entire board ultimate peace of mind.",
    author: "Priya Sharma",
    role: "Compliance Director",
    company: "Fintech Innovations",
    badge: "Compliance",
  },
  {
    quote: "The document workflow is a game-changer for managing our audits. It's efficient, transparent, and completely hassle-free.",
    author: "Joshua Taylor",
    role: "Senior Accountant",
    company: "Apex Global",
    badge: "Finance",
  },
  {
    quote: "Implementation took days instead of months. Our vendor reconciliation errors dropped by nearly 85% within the very first quarter.",
    author: "Elena Rostova",
    role: "VP of Finance",
    company: "Nordic Commerce",
    badge: "Automation",
  },
  {
    quote: "Cleanest, most intuitive data compliance UI we've ever deployed. Audit preparations now take hours rather than weeks.",
    author: "Amina Al-Mansoor",
    role: "Internal Audit Lead",
    company: "Emirates FinTech",
    badge: "Auditing",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#353535] py-24 sm:py-16 px-6 lg:px-16 border-b border-[#e3e3e3]">
      
      {/* Background Code Effects Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(255, 255, 255, 0.9) 0px, 
              rgba(255, 255, 255, 0.9) 30px, 
              rgba(158, 221, 247, 0.25) 31px, 
              rgba(65, 160, 200, 0.3) 60px
            )`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-[#f1f2f2]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-[#f1f2f2] rounded-full border border-[#9eddf7] shadow-sm">
            Enterprise Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#062039]">
            Trusted by Industry <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">Leaders</span>
          </h2>
          <p className="text-[#353535] text-sm sm:text-base">
            Read direct experiences from executives scaling their digital compliance operations with Auggit.
          </p>
        </div>

        {/* Masonry Grid Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-[#e3e3e3] shadow-[0_10px_30px_rgba(6,32,57,0.05)] flex flex-col justify-between space-y-6 hover:border-[#41a0c8] hover:shadow-[0_15px_35px_rgba(65,160,200,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#f1f2f2] text-[#062039] text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#9eddf7]">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[#f7c037]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-[#353535] text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e3e3e3] flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-[#062039] text-sm">{item.author}</h4>
                  <p className="text-xs text-[#979797] font-medium">{item.role}</p>
                </div>
                <span className="text-xs font-bold text-[#41a0c8]">{item.company}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}