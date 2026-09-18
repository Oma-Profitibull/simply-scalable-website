import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Simply Scrapable', tag: 'Lead Intelligence', description: 'Lead Intelligence, Signal Surfacing, Interactive Outreach, and Proactive Lead Research and Listening.', color: 'scrapable', link: '/ecosystem/simply-scrapable' },
  { name: 'Profitibull', tag: 'CRM + Automation', description: 'Full stack marketing arm and CRM. Profitibull CRM, ProfitMail, ProfitLink, and ProfitBot.', color: 'profitibull', link: '/ecosystem/profitibull' },
  { name: 'ProfitBot', tag: 'AI Orchestration', description: 'The multi-model agentic AI system that routes tasks, maintains context, and handles research and drafting at scale.', color: 'gold', link: '/ecosystem/profitbot' },
];

const styles: Record<string, { border: string; tagBg: string; tagText: string; tagBorder: string; linkClass: string }> = {
  scrapable: { border: 'border-l-scrapable', tagBg: 'bg-scrapable/10', tagText: 'text-scrapable', tagBorder: 'border-scrapable/30', linkClass: 'text-scrapable hover:text-blue-400' },
  profitibull: { border: 'border-l-profitibull', tagBg: 'bg-profitibull/10', tagText: 'text-profitibull', tagBorder: 'border-profitibull/30', linkClass: 'text-profitibull hover:text-red-400' },
  gold: { border: 'border-l-gold', tagBg: 'bg-gold/10', tagText: 'text-gold', tagBorder: 'border-gold/30', linkClass: 'text-gold hover:text-gold-hover' },
};

export function EcosystemCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p, i) => {
        const s = styles[p.color];
        return (
          <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <div className={`bg-midnight border border-steel/60 rounded-card p-6 border-l-4 ${s.border} h-full flex flex-col`}>
              <div className="w-12 h-12 rounded-full bg-steel/50 flex items-center justify-center mb-4"><span className="font-display text-[18px] text-white font-bold">{p.name[0]}</span></div>
              <h4 className="font-display text-[22px] text-white mb-2">{p.name}</h4>
              <span className={`inline-block px-3 py-1 rounded-chip text-[12px] font-mono border ${s.tagBg} ${s.tagText} ${s.tagBorder} w-fit mb-3`}>{p.tag}</span>
              <p className="font-body text-[15px] text-mist flex-1">{p.description}</p>
              <Link to={p.link} className={`${s.linkClass} text-[13px] font-mono mt-4 inline-flex items-center gap-1 transition-colors`}>Explore {p.name} &rarr;</Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
