import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CardTilt } from '../interactive/CardTilt';
import { CheckCircle } from 'lucide-react';

const projects = [
  { name: 'OMS Matchpoint', tagline: "A recruiter's memory, reimagined as software.", description: 'A custom candidate matching matrix with list and kanban views, resume management, and a direct GoHighLevel import pipeline, built for a recruiting operation that had outgrown spreadsheets and needed a system their whole team could work inside.', stat: '88+ qualified professionals managed from day one', tags: ['CRM', 'GoHighLevel', 'Recruiting', 'Kanban'], imagePlaceholder: 'OMS Matchpoint - Kanban Interface' },
  { name: 'GEM Science Patient Portal', tagline: 'Five systems. One experience. Better outcomes.', description: 'Replaced five disconnected tools with a single HIPAA-conscious portal fully integrated with DrChrono EHR. Patients schedule, message, fill forms, and track their wellness journey in one branded experience. The practice manages everything from one place.', stat: '871 active patients onboarded at launch', tags: ['Healthcare', 'DrChrono', 'HIPAA', 'Scheduling', 'Integrations'], imagePlaceholder: 'GEM Science - Patient Portal' },
  { name: 'Sales Pipeline Dashboard', tagline: 'Dashboards show data. This one creates urgency.', description: 'A real-time sales analytics system tracking $1.9M in lead value across pipeline stages. Show rates, revenue reporting, and team-wide visibility, all live refreshed with no manual exports required. A scoreboard your sales team actually checks.', stat: '$1.9M in lead value tracked in real time', tags: ['Analytics', 'Sales', 'Reporting', 'Real-Time'], imagePlaceholder: 'Sales Pipeline - Real-Time Dashboard' },
];

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
          <CardTilt className="h-full">
            <div className="bg-midnight rounded-card border border-steel/60 overflow-hidden h-full flex flex-col hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(212,168,83,0.10)] transition-all duration-200">
              <div className="h-48 bg-steel/40 relative"><div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent z-10" /><div className="absolute inset-0 flex items-center justify-center"><span className="text-slate-muted text-[12px] font-mono text-center px-4">{p.imagePlaceholder}</span></div></div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-display text-[22px] text-white">{p.name}</h4>
                <p className="font-body text-[15px] text-gold italic mt-1">{p.tagline}</p>
                <p className="font-body text-[15px] text-mist mt-2 flex-1">{p.description}</p>
                <div className="flex items-center gap-2 mt-4"><CheckCircle className="w-4 h-4 text-deploy-green flex-shrink-0" /><span className="font-mono text-[13px] text-deploy-green">{p.stat}</span></div>
                <div className="flex flex-wrap gap-2 mt-4">{p.tags.map((t) => <span key={t} className="bg-steel rounded-chip px-3 py-1 text-[12px] text-mist font-mono">{t}</span>)}</div>
              </div>
              <div className="px-6 pb-6"><Link to="/work" className="text-mist hover:text-white text-[13px] font-mono inline-flex items-center gap-1 group">View Case Study <span className="group-hover:translate-x-[3px] transition-transform">&rarr;</span></Link></div>
            </div>
          </CardTilt>
        </motion.div>
      ))}
    </div>
  );
}
