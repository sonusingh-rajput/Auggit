import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiLinkedin } from "react-icons/fi";

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#353535] py-24 sm:py-16 px-6 lg:px-16 border-b border-[#e3e3e3]">
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-[#f1f2f2] rounded-full border border-[#9eddf7] shadow-sm">
            Leadership Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#062039]">
            Visionary Leadership at <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">Auggit</span>
          </h2>
          <p className="text-[#353535] text-sm sm:text-base">
            Driven by decades of enterprise software mastery and global technical innovation.
          </p>
        </motion.div>

        {/* Leadership Cards Container */}
        <div className="space-y-10">
          
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e3e3e3] shadow-[0_10px_30px_rgba(6,32,57,0.06)] hover:border-[#41a0c8] hover:shadow-[0_15px_40px_rgba(65,160,200,0.14)] transition-all duration-300 flex flex-col md:flex-row items-center gap-8 group"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0 border border-[#e3e3e3] bg-[#f1f2f2] shadow-sm flex items-center justify-center group-hover:border-[#41a0c8]/50 transition-colors">
              <img 
                src="/ceo_founder.png" 
                alt="Govind Gagoria - CEO" 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-4 text-left flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039]">Govind Gagoria</h3>
                  <p className="text-[#41a0c8] font-bold text-sm">Chief Executive Officer (CEO)</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/govindgagoria/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#f1f2f2] text-[#41a0c8] hover:bg-[#41a0c8] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border border-[#e3e3e3] hover:border-[#41a0c8]"
                >
                  <FiLinkedin className="w-4 h-4" /> Connect
                </a>
              </div>

              <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
                Govind is an accomplished technical architect and engineering leader driving Auggit's core product ecosystem. With deep-rooted expertise in secure architecture, data localization, and enterprise scalability, he spearheads technical strategy to ensure robust performance across all platforms.
              </p>
            </div>
          </motion.div>

          {/* CTO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e3e3e3] shadow-[0_10px_30px_rgba(6,32,57,0.06)] hover:border-[#41a0c8] hover:shadow-[0_15px_40px_rgba(65,160,200,0.14)] transition-all duration-300 flex flex-col md:flex-row items-center gap-8 group"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0 border border-[#e3e3e3] bg-[#f1f2f2] shadow-sm flex items-center justify-center group-hover:border-[#41a0c8]/50 transition-colors">
              <img 
                src="/cto.png" 
                alt="Sudeesh Kuttykrishnan - CTO" 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-4 text-left flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039]">Sudeesh Kuttykrishnan</h3>
                  <p className="text-[#41a0c8] font-bold text-sm">Chief Technology Officer (CTO)</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/sudeeshk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#f1f2f2] text-[#41a0c8] hover:bg-[#41a0c8] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border border-[#e3e3e3] hover:border-[#41a0c8]"
                >
                  <FiLinkedin className="w-4 h-4" /> Connect
                </a>
              </div>

              <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
                Sudeesh is a seasoned Technology Business Leader with 30 years of experience in software product management and enterprise leadership. Over 23 years at SAP, he led development teams, managed products across SAP’s portfolio, and drove adoption of SAP technologies across the APAC region, delivering solutions used in over 40 countries.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Learn More About Us Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center pt-4"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(65,160,200,0.3)] hover:shadow-[0_6px_24px_rgba(18,103,167,0.4)] group active:scale-95"
          >
            <span>Learn More About Our Team</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}