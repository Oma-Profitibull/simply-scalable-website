import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center px-4 py-2">
      <span ref={ref} className="font-display text-[32px] md:text-[38px] text-gold font-bold">
        {count}<span className="font-mono">{suffix}</span>
      </span>
      <p className="font-mono text-[13px] text-mist uppercase tracking-wide mt-1">{label}</p>
    </div>
  );
}

export function StatsBar() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }} className="w-full bg-midnight border-y border-steel/50 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{ value: 50, suffix: '+', label: 'Custom Systems Shipped' }, { value: 140, suffix: '+', label: 'Platforms Integrated' }, { value: 99, suffix: '.87%', label: 'Uptime Across All Platforms' }, { value: 100, suffix: '%', label: 'Client Satisfaction Rate' }].map((s, i) => (
          <div key={i} className={i < 3 ? 'md:border-r md:border-steel/40' : ''}><StatItem {...s} /></div>
        ))}
      </div>
    </motion.div>
  );
}
