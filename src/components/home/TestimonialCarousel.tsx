import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { quote: "It's incredible what you've been able to do with my idea. Your team was even able to finish the project before our website was complete.", initials: 'RS', name: 'Dr. Rob S.', project: 'OMS Matchpoint - Recruiting Platform' },
  { quote: 'The app is amazing. It links our DrChrono EHR with our CRM, but it also acts as a buffer between our marketing and patient communication. Their team is very easy to work with.', initials: 'DB', name: 'Dr. B.', project: 'GEM Science - Patient Portal' },
  { quote: 'The onboarding app they built for our customer success team is incredible. We went from spreadsheets to automated processes and tasks in less than 3 weeks.', initials: 'AJ', name: 'Alex J.', project: 'VAHubPro - RevOps Platform' },
  { quote: 'The medical community they built for us receives more repeat orders for our monthly special than our monthly email ever did. They are so easy to work with, too.', initials: 'BL', name: 'Bo L.', project: 'Medical Community Platform' },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => { setDir(1); setCurrent((p) => (p + 1) % testimonials.length); }, []);
  const prev = useCallback(() => { setDir(-1); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); }, []);

  useEffect(() => { if (paused) return; const id = setInterval(next, 5000); return () => clearInterval(id); }, [paused, next]);

  const t = testimonials[current];
  return (
    <div className="relative max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-live="polite" onTouchStart={(e) => {
      const startX = e.touches[0].clientX;
      const el = e.currentTarget;
      const end = (ev: TouchEvent) => { const d = ev.changedTouches[0].clientX - startX; if (Math.abs(d) > 50) { d < 0 ? next() : prev(); } el.removeEventListener('touchend', end); };
      el.addEventListener('touchend', end);
    }}>
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div key={current} custom={dir} initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -dir * 60 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="bg-midnight/60 backdrop-blur-[12px] border border-steel/50 rounded-card p-8">
          <span className="text-gold/30 text-[64px] font-display leading-none block mb-2">&ldquo;</span>
          <p className="font-body text-[18px] text-white italic leading-relaxed mb-6">{t.quote}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-steel flex items-center justify-center"><span className="font-display text-[14px] text-gold font-bold">{t.initials}</span></div>
            <div><p className="font-body font-semibold text-white text-[15px]">{t.name}</p><p className="font-mono text-[13px] text-mist">{t.project}</p></div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} aria-label="Previous testimonial" className="p-2 text-mist hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><ChevronLeft className="w-5 h-5" /></button>
        <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-gold' : 'bg-steel'}`} aria-label={`Testimonial ${i + 1}`} />)}</div>
        <button onClick={next} aria-label="Next testimonial" className="p-2 text-mist hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </div>
  );
}
