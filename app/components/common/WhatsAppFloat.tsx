import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=919600134009&text=Hi%2C+I%E2%80%99d+like+to+know+more+about+Auggit%E2%80%99s+solutions.+Could+you+please+assist%3F&type=phone_number&app_absent=0";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring animation effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />
        
        <FaWhatsapp className="w-8 h-8 fill-current" />

        {/* Tooltip text on hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#062039] border border-[#41a0c8]/40 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Us
        </span>
      </a>
    </motion.div>
  );
}