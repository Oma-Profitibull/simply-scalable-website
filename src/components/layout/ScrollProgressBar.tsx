import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]">
      <motion.div className="h-full bg-gold origin-left" style={{ scaleX }} />
    </div>
  );
}
