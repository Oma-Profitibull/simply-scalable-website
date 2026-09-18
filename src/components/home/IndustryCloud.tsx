import { motion } from 'framer-motion';

const chips = ['Coaching and Courses', 'Medical Practices', 'Wellness Centers', 'Amazon Sellers', 'TikTok Shops', 'Shopify Brands', 'Recruiting Firms', 'Sales Teams', 'Digital Agencies', 'SaaS Founders', 'VA Agencies', 'RevOps Teams', 'Healthcare Networks', 'eCommerce Aggregators', 'AI Builders'];

export function IndustryCloud() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {chips.map((chip, i) => (
        <motion.span key={chip} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }} className="bg-midnight border border-steel/60 rounded-chip px-4 py-2 font-mono text-[13px] text-mist hover:border-gold/40 hover:text-white transition-all duration-200 min-h-[44px] flex items-center">
          {chip}
        </motion.span>
      ))}
    </div>
  );
}
