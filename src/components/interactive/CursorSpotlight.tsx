import { useRef, useState, useEffect, useCallback } from 'react';

interface CursorSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export function CursorSpotlight({ children, className = '' }: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [isTouch, setIsTouch] = useState(false);
  const target = useRef({ x: -1000, y: -1000 });
  const current = useRef({ x: -1000, y: -1000 });
  const raf = useRef<number>(0);

  useEffect(() => { setIsTouch(navigator.maxTouchPoints > 0); }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || isTouch) return;
    const rect = ref.current.getBoundingClientRect();
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      setPos({ ...current.current });
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [isTouch]);

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`relative ${className}`}>
      {!isTouch && (
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: `radial-gradient(circle 350px at ${pos.x}px ${pos.y}px, rgba(212,168,83,0.055), transparent)` }}
        />
      )}
      {children}
    </div>
  );
}
