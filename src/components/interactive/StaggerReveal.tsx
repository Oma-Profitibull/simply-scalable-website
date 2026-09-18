import { motion } from 'framer-motion';
import { Children, type ReactNode } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

interface StaggerRevealProps {
  children: ReactNode;
  stagger?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const childVariants = (y: number, duration: number) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration, ease } },
});

export function StaggerReveal({
  children,
  stagger = 0.1,
  y = 32,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
}: StaggerRevealProps) {
  const variants = childVariants(y, duration);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={variants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
