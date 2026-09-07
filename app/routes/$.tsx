import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiHome, FiArrowRight, FiSearch, FiCompass, FiShield } from "react-icons/fi";

export default function NotFoundPage() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-white via-[#f1f2f2]/60 to-white text-[#353535] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#9eddf7]/30 via-[#41a0c8]/20 to-[#f7c037]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-3xl w-full mx-auto text-center space-y-10 relative z-10">
        
        {/* Animated Error Code Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          <span className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent select-none drop-shadow-sm">
            404
          </span>
          <div className="absolute -bottom-2 right-0 bg-[#f1f2f2] border border-[#9eddf7] text-[#41a0c8] text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
            Link Lost in Transit
          </div>
        </motion.div>

        {/* Messaging */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039]">
            We couldn't find this document trail
          </h2>
          <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
            The page you are looking for might have been archived, relocated, or never existed in our enterprise database. Let's get you back on track.
          </p>
        </motion.div>

        {/* Quick Recovery Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto"
        >
          <Link 
            to="/" 
            className="p-5 rounded-2xl bg-white border border-[#e3e3e3] shadow-[0_10px_30px_rgba(65,160,200,0.06)] hover:shadow-lg hover:border-[#41a0c8] transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-[#9eddf7]/30 text-[#41a0c8] group-hover:scale-110 transition-transform">
              <FiHome className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm text-[#062039]">Home Portal</span>
            <span className="text-[11px] text-[#979797]">Return to main dashboard</span>
          </Link>

          <Link 
            to="/casestudy" 
            className="p-5 rounded-2xl bg-white border border-[#e3e3e3] shadow-[0_10px_30px_rgba(65,160,200,0.06)] hover:shadow-lg hover:border-[#41a0c8] transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-[#9eddf7]/30 text-[#41a0c8] group-hover:scale-110 transition-transform">
              <FiCompass className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm text-[#062039]">Case Studies</span>
            <span className="text-[11px] text-[#979797]">Explore enterprise success</span>
          </Link>

          <Link 
            to="/contact" 
            className="p-5 rounded-2xl bg-white border border-[#e3e3e3] shadow-[0_10px_30px_rgba(65,160,200,0.06)] hover:shadow-lg hover:border-[#41a0c8] transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-[#9eddf7]/30 text-[#41a0c8] group-hover:scale-110 transition-transform">
              <FiShield className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm text-[#062039]">Support Desk</span>
            <span className="text-[11px] text-[#979797]">Contact our experts</span>
          </Link>
        </motion.div>

        {/* Primary Back Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(65,160,200,0.3)] cursor-pointer group"
          >
            <span>Back to Safety</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}