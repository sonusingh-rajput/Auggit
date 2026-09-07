import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Simple SVG icons
const VisionIcon = () => (
    <svg className="w-8 h-8 text-[#41a0c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MissionIcon = () => (
    <svg className="w-8 h-8 text-[#5e8b22]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export default function VisionMissionCards() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="relative py-8 sm:py-10 md:py-14 bg-[#ffffff] border-b border-[#e3e3e3] rounded-3xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#9eddf7] text-[#41a0c8] text-xs font-bold uppercase tracking-[0.15em]">
                        <span className="relative flex w-2 h-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
                        </span>
                        Our Compass
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#062039] leading-[1.15]">
                        Vision &amp; Mission
                    </h2>
                    <p className="mt-3 text-[#353535] text-sm sm:text-base max-w-xl mx-auto">
                        Guided by a clear purpose, we shape the future of enterprise information management.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-white rounded-3xl shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#41a0c8]/15 transition-shadow duration-300 overflow-hidden border border-[#e3e3e3] hover:border-[#41a0c8]"
                    >
                        {/* Gradient accent bar */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

                        <div className="p-8 sm:p-10 flex flex-col h-full">
                            <div className="flex items-start justify-between">
                                <div className="p-3 rounded-2xl bg-[#f1f2f2] border border-[#e3e3e3]">
                                    <VisionIcon />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#41a0c8]">
                                    Aspiration
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#062039]">
                                Our Vision
                            </h3>

                            <p className="mt-4 text-[#353535] text-sm sm:text-base leading-relaxed flex-1">
                                We envision a future where enterprise information is not fragmented across systems, teams, and processes. Auggit is building toward a world where organizations can access the right information, maintain stronger governance, simplify compliance, and make better decisions—all through connected digital experiences.
                            </p>

                            <div className="mt-8 pt-6 border-t border-[#e3e3e3]">
                                <span className="text-xs font-semibold text-[#979797] uppercase tracking-wider">
                                    Governance &amp; Clarity
                                </span>
                            </div>
                        </div>

                        {/* Decorative floating element */}
                        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#41a0c8]/10 to-[#1267a7]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                    </motion.div>

                    {/* Mission Card (Green environmental aspect) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative bg-white rounded-3xl shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#5e8b22]/15 transition-shadow duration-300 overflow-hidden border border-[#e3e3e3] hover:border-[#5e8b22]"
                    >
                        {/* Gradient accent bar (Go-Green aspect) */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#5e8b22] via-[#93cb3a] to-[#41a0c8]" />

                        <div className="p-8 sm:p-10 flex flex-col h-full">
                            <div className="flex items-start justify-between">
                                <div className="p-3 rounded-2xl bg-[#93cb3a]/15 border border-[#5e8b22]/20">
                                    <MissionIcon />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#5e8b22]">
                                    Sustainable Action
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#062039]">
                                Our Mission
                            </h3>

                            <p className="mt-4 text-[#353535] text-sm sm:text-base leading-relaxed flex-1">
                                Our mission is to help organizations transform digitally while creating sustainable, measurable, and lasting impact. We focus on technology that helps businesses reduce physical documentation dependency, strengthen compliance, and enable smarter, sustainable ways of working.
                            </p>

                            <div className="mt-8 pt-6 border-t border-[#e3e3e3]">
                                <span className="text-xs font-semibold text-[#5e8b22] uppercase tracking-wider">
                                    Sustainable Paperless Impact
                                </span>
                            </div>
                        </div>

                        {/* Decorative floating element */}
                        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#5e8b22]/10 to-[#93cb3a]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}