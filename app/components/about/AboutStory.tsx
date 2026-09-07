import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

interface CounterProps {
  from: number;
  to: number;
  label: string;
  suffix?: string;
}

// Animated counter for stats
const Counter = ({ from, to, label, suffix = "" }: CounterProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = from;
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = (to - from) / steps;
        let current = from;
        const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
                setCount(to);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, from, to]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#062039]">
                {count}
                {suffix}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#979797] font-semibold mt-1">
                {label}
            </div>
        </div>
    );
};

export default function AboutStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden bg-white/90 backdrop-blur-xl rounded-3xl border border-[#e3e3e3] shadow-[0_10px_35px_rgba(6,32,57,0.03)]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#9eddf7]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffeda0]/15 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left column: Text content */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#9eddf7] text-[#41a0c8] text-xs font-bold uppercase tracking-[0.15em]">
                            <span className="relative flex w-2 h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
                            </span>
                            Our Evolution
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#062039] leading-[1.15]">
                            From Document Management to{" "}
                            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
                                Enterprise Intelligence
                            </span>
                        </h2>

                        <p className="text-[#353535] text-sm sm:text-base leading-relaxed max-w-lg">
                            Auggit began in 2017 with a simple goal: make enterprise documentation
                            easier to manage, access, and audit. Over the years, that vision
                            expanded into a comprehensive platform that bridges data, compliance,
                            and operational efficiency.
                        </p>

                        <p className="text-[#353535] text-sm sm:text-base leading-relaxed max-w-lg">
                            We evolved from an on‑premise document management solution into a
                            cloud‑enabled eDMS, expanded into ERP‑integrated workflows, and
                            developed solutions that unify enterprise data with intelligent
                            compliance frameworks.
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e3e3e3]">
                            <Counter from={0} to={10} label="Years of Innovation" suffix="+" />
                            <Counter from={0} to={500} label="Enterprise Clients" suffix="+" />
                            <Counter from={0} to={99.9} label="Uptime" suffix="%" />
                        </div>

                        {/* CTA link */}
                        <motion.a
                            href="/product/slaice"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#41a0c8] hover:text-[#1267a7] transition-colors group"
                            whileHover={{ x: 5 }}
                        >
                            Learn more about our solutions
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Right column: Image with overlay and play icon */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-[#e3e3e3] bg-white">
                            <div className="aspect-[4/3] sm:aspect-[5/4] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                                    alt="Auggit team collaborating on digital strategy"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Gradient overlay with quote */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/90 via-[#062039]/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#41a0c8]/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold leading-tight">
                                            “Empowering 500+ enterprises
                                            <br />
                                            to achieve compliance with confidence.”
                                        </p>
                                        <p className="text-xs opacity-70 mt-0.5">
                                            – Auggit Leadership
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative floating badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-[#062039] shadow-lg border border-[#e3e3e3] flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e8b22] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5e8b22]" />
                                </span>
                                Live since 2017
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}