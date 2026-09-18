import { useRef, useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ variant = 'primary', children, href, onClick, className = '', type = 'button' }: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => { setIsTouch(navigator.maxTouchPoints > 0); }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(-8, Math.min(8, (e.clientX - rect.left - rect.width / 2) * 0.25));
    const y = Math.max(-5, Math.min(5, (e.clientY - rect.top - rect.height / 2) * 0.25));
    setPos({ x, y });
  }, [isTouch]);

  const handleMouseLeave = useCallback(() => { setPos({ x: 0, y: 0 }); }, []);

  const base = 'inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-6 py-3 rounded-btn transition-all duration-200 min-h-[44px]';
  const styles = {
    primary: 'bg-gold text-black hover:bg-gold-hover hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(212,168,83,0.35)]',
    secondary: 'bg-midnight text-white border border-gold/50 hover:border-gold hover:bg-steel/40',
    ghost: 'bg-transparent text-mist border border-steel/60 hover:text-white hover:border-mist group',
  };

  const inner = (
    <>
      {children}
      {variant === 'ghost' && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />}
    </>
  );

  const content = href ? (
    href.startsWith('http') ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>{inner}</a>
    ) : (
      <Link to={href} className={`${base} ${styles[variant]} ${className}`}>{inner}</Link>
    )
  ) : (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>{inner}</button>
  );

  return (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {content}
    </motion.div>
  );
}
