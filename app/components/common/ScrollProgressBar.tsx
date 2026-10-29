import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#f7c037] origin-left z-[100] shadow-[0_0_10px_rgba(65,160,200,0.6)] pointer-events-none transform-gpu"
    />
  );
}
