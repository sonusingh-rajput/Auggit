import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#f7c037] origin-left z-[100] shadow-[0_0_10px_rgba(65,160,200,0.6)] pointer-events-none"
    />
  );
}
