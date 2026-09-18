import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SplitTextProps {
  text: string;
  type?: 'char' | 'word';
  delay?: number;
  className?: string;
}

export function SplitText({ text, type = 'word', delay = 0, className = '' }: SplitTextProps) {
  const reduced = useReducedMotion();
  const items = type === 'char' ? text.split('') : text.split(' ');
  const stagger = type === 'char' ? 0.025 : 0.07;

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } }, hidden: {} }}
      aria-label={text}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: type === 'word' ? '0.25em' : undefined }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {item === ' ' ? ' ' : item}
        </motion.span>
      ))}
    </motion.span>
  );
}
