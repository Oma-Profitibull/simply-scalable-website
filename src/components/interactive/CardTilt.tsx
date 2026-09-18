import { motion } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTilt({ children, className = '' }: CardTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => { setIsTouch(navigator.maxTouchPoints > 0); }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8;
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -8;
    setTilt({ rotateX, rotateY });
  }, [isTouch]);

  const handleMouseLeave = useCallback(() => { setTilt({ rotateX: 0, rotateY: 0 }); }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformPerspective: 800, willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
