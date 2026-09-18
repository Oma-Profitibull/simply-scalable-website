import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';

export function useCountUp(to: number, duration = 1.8) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const frameRef = useRef<number>(0);

  const easeOutQuart = useCallback((t: number) => 1 - Math.pow(1 - t, 4), []);

  useEffect(() => {
    if (isInView) {
      let start: number | null = null;
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(easeOutQuart(progress) * to));
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(0);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    }
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [isInView, to, duration, easeOutQuart]);

  return { count, ref };
}
