import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FiBriefcase,
  FiTruck,
  FiDollarSign,
  FiFileText,
  FiGlobe,
  FiUsers,
  FiSettings,
  FiPackage,
  FiCpu,
} from "react-icons/fi";

export default function SolutionsPage() {
  const industries = [
    {
      id: "manufacturing-vendor-ap",
      title: "Manufacturing & Vendor AP",
      icon: FiTruck,
    },
    {
      id: "finance-procurement",
      title: "Procurement & Finance Document Control",
      icon: FiDollarSign,
    },
    {
      id: "cross-department-access",
      title: "Enterprise Cross-Department Access",
      icon: FiUsers,
    },
    {
      id: "steel-manufacturing",
      title: "Steel & Heavy Process Manufacturing",
      icon: FiSettings,
    },
    {
      id: "food-processing",
      title: "Food Manufacturing & Processing",
      icon: FiPackage,
    },
    {
      id: "aviation",
      title: "Airports & Aviation Infrastructure",
      icon: FiGlobe,
    },
    {
      id: "automotive",
      title: "Automotive Engineering & QA",
      icon: FiCpu,
    },
    {
      id: "exim-trade",
      title: "EXIM & International Trade Compliance",
      icon: FiFileText,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffeda0]/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <FiBriefcase className="w-4 h-4 text-[#f7c037]" />
            Enterprise Industry Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Tailored Solutions for{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Discover how Auggit solves specific compliance, data carving, and automation bottlenecks across India's leading industrial sectors.
          </p>
        </div>

        {/* Industry categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="min-h-36 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex items-center gap-4 p-6 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#41a0c8] to-[#1267a7] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#41a0c8]/10 text-[#1267a7] group-hover:bg-[#41a0c8] group-hover:text-white transition-colors">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-extrabold leading-snug text-[#062039] group-hover:text-[#41a0c8] transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-10 bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have a Custom Industry Requirement?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Our architects configure custom data slicing rules and workflow parameters tailored to your exact industry ERP schema.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#f7c037] text-[#062039] font-bold text-xs hover:bg-[#e5b02a] transition-all whitespace-nowrap cursor-pointer"
            >
              Talk to Our Experts →
            </Link>
            <Link
              to="/book-poc"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all whitespace-nowrap cursor-pointer"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
