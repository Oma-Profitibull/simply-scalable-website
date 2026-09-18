import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, BarChart3, Workflow, Bot, GitBranch, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <Layers size={40} />, title: 'Apps', teaser: 'Custom applications for any business need.', body: 'Custom applications for any business need. Community platforms, membership portals, mobile apps, TikTok Shop tools, internal tools, and everything in between. If your idea runs on a screen, we scope and build it.', link: '/services/apps' },
  { icon: <Shield size={40} />, title: 'Portals', teaser: 'One secure, branded, connected place for your users.', body: 'Custom portals that give your users one secure, branded, connected place for everything they need. Patient portals, client portals, partner portals, and beyond. Built around how your users actually move through your business.', link: '/services/portals' },
  { icon: <BarChart3 size={40} />, title: 'Dashboards', teaser: 'Real-time operations and analytics at scale.', body: 'Real-time operations and analytics dashboards for businesses managing complexity at scale. One view for every number that runs your operation, whether that is ecommerce, sales, inventory, or team performance.', link: '/services/dashboards' },
  { icon: <Workflow size={40} />, title: 'GoHighLevel Buildouts', teaser: 'End-to-end GHL architecture that converts.', body: 'End-to-end GoHighLevel architecture, white-labeling, sub-account structure, and automation sequences that convert. Built by a team that runs its own GHL-based CRM every day.', link: '/services/ghl-buildouts' },
  { icon: <Bot size={40} />, title: 'Agentic Software Applications', teaser: 'AI agents that run your operations without you.', body: 'AI-powered agents that take over research, outreach, data processing, and decision workflows. Repetitive operations become autonomous systems that run without you.', link: '/services/agentic-apps' },
  { icon: <GitBranch size={40} />, title: 'Integrations and Implementations', teaser: 'Make your entire stack behave like one system.', body: 'Your tools should talk to each other. Multi-system integrations, API connections, webhooks, and real-time data pipelines that make your entire stack behave like one system.', link: '/services/integrations' },
  { icon: <Globe size={40} />, title: 'Websites', teaser: 'Custom websites built from scratch to convert.', body: 'Custom websites designed and built for businesses that need more than a template. Multi-page marketing sites, client-facing brand properties, and high-converting web presences built from scratch.', link: '/services/websites' },
];

function FlipCard({ icon, title, teaser, body, link }: typeof services[0]) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative min-h-[280px] cursor-pointer" style={{ perspective: 1000 }} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} onClick={() => setFlipped(!flipped)}>
      <motion.div className="relative w-full h-full min-h-[280px]" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ type: 'spring', stiffness: 260, damping: 30 }} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
        <div className="absolute inset-0 bg-midnight border border-steel rounded-card p-6 flex flex-col backface-hidden">
          <div className="text-gold mb-4">{icon}</div>
          <h4 className="font-display text-[22px] text-white mb-2">{title}</h4>
          <p className="font-body text-[14px] text-mist flex-1">{teaser}</p>
          <span className="text-slate-muted text-[11px] font-mono mt-4">hover to learn more</span>
        </div>
        <div className="absolute inset-0 bg-steel/80 border border-gold/30 rounded-card p-6 flex flex-col backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <h4 className="font-display text-[18px] text-gold mb-3">{title}</h4>
          <p className="font-body text-[13px] text-white/90 flex-1 leading-relaxed">{body}</p>
          <Link to={link} className="text-mist hover:text-white text-[13px] font-mono mt-3 inline-flex items-center gap-1">Learn More &rarr;</Link>
        </div>
      </motion.div>
    </div>
  );
}

export function FlipCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
          <FlipCard {...s} />
        </motion.div>
      ))}
    </div>
  );
}
