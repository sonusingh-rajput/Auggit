import { motion } from "framer-motion";

const topRowClients = [
  { src: "/client-1.png" },
  { src: "/client-2.png" },
  { src: "/client-3.png" },
  { src: "/client-4.png" },
  { src: "/client-5.png" },
];

const bottomRowClients = [
  { src: "/client-5.png" },
  { src: "/client-4.png" },
  { src: "/client-3.png" },
  { src: "/client-1.png" },
  { src: "/client-2.png" },
];

export default function BrandTicker() {
  const infiniteTop = [...topRowClients, ...topRowClients, ...topRowClients, ...topRowClients];
  const infiniteBottom = [...bottomRowClients, ...bottomRowClients, ...bottomRowClients, ...bottomRowClients];

  return (
    <div className="w-full bg-gradient-to-b from-[#f1f2f2] via-white to-[#f1f2f2] py-16 overflow-hidden relative border-y border-[#e3e3e3]">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#9eddf7]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#ffeda0]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#41a0c8]/10 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-white rounded-full border border-[#9eddf7] shadow-sm backdrop-blur-sm">
            Trusted Partners
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-[#062039] tracking-tight"
        >
          Powering <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">World-Class</span> Workflows
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[#353535] max-w-2xl mx-auto text-sm sm:text-base"
        >
          Leading enterprises trust Auggit to handle high-stakes data governance and workflow automation
        </motion.p>
      </div>

      {/* Dual Scrolling Tracks Container with pause-on-hover */}
      <div className="relative z-10 w-full overflow-hidden py-4 space-y-6 group/tracks" style={{ perspective: "1200px" }}>
        
        {/* Enhanced Gradient Masks */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#f1f2f2] via-[#f1f2f2]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#f1f2f2] via-[#f1f2f2]/90 to-transparent z-20 pointer-events-none" />

        {/* Top Track (Moving Left) */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 35, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex items-center gap-6 whitespace-nowrap min-w-max px-4 hover:[animation-play-state:paused]"
          style={{ transform: "rotateX(1deg) rotateY(-1deg)" }}
        >
          {infiniteTop.map((client, index) => (
            <div
              key={`top-${index}`}
              className="relative w-[180px] h-[100px] sm:w-[220px] sm:h-[110px] flex-shrink-0 rounded-2xl bg-white p-[1.5px] shadow-[0_4px_16px_rgba(6,32,57,0.05)] hover:shadow-[0_8px_24px_rgba(65,160,200,0.18)] transition-all duration-400 group"
            >
              <div className="relative w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-[#e3e3e3] group-hover:border-[#41a0c8] transition-all duration-400">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-tr from-[#9eddf7]/20 via-transparent to-[#ffeda0]/20" />
                
                <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                  <img
                    src={client.src}
                    alt="Client Brand Logo"
                    className="max-h-12 max-w-[140px] object-contain transition-all duration-400 group-hover:scale-105 drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Track (Moving Right) */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 38, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex items-center gap-6 whitespace-nowrap min-w-max px-4 hover:[animation-play-state:paused]"
          style={{ transform: "rotateX(1deg) rotateY(-1deg)" }}
        >
          {infiniteBottom.map((client, index) => (
            <div
              key={`bottom-${index}`}
              className="relative w-[180px] h-[100px] sm:w-[220px] sm:h-[110px] flex-shrink-0 rounded-2xl bg-white p-[1.5px] shadow-[0_4px_16px_rgba(6,32,57,0.05)] hover:shadow-[0_8px_24px_rgba(65,160,200,0.18)] transition-all duration-400 group"
            >
              <div className="relative w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-[#e3e3e3] group-hover:border-[#41a0c8] transition-all duration-400">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-tr from-[#9eddf7]/20 via-transparent to-[#ffeda0]/20" />
                
                <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                  <img
                    src={client.src}
                    alt="Client Brand Logo"
                    className="max-h-12 max-w-[140px] object-contain transition-all duration-400 group-hover:scale-105 drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-2xl font-extrabold text-[#062039]">500+</p>
            <p className="text-xs text-[#979797] uppercase tracking-wider font-semibold">Enterprise Deployments</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#e3e3e3]" />
          <div>
            <p className="text-2xl font-extrabold text-[#062039]">99.9%</p>
            <p className="text-xs text-[#979797] uppercase tracking-wider font-semibold">Sync Precision</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#e3e3e3]" />
          <div>
            <p className="text-2xl font-extrabold text-[#062039] flex items-center justify-center gap-1">
              <span>4.9</span>
              <span className="text-[#f7c037]">★</span>
            </p>
            <p className="text-xs text-[#979797] uppercase tracking-wider font-semibold">Client Trust Rating</p>
          </div>
        </div>
      </div>

    </div>
  );
}