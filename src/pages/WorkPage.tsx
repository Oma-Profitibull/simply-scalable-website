import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/LegacyButton';
import { CardTilt } from '../components/interactive/CardTilt';
import { CheckCircle } from 'lucide-react';

const categories = ['All', 'Apps', 'Portals', 'Dashboards', 'GHL', 'AI Agents', 'Integrations', 'Websites'];

const projects = [
  { name: 'OMS Matchpoint', tagline: "A recruiter's memory, reimagined as software.", description: 'A custom candidate matching matrix with list and kanban views, resume management, and a direct GoHighLevel import pipeline, built for a recruiting operation that had outgrown spreadsheets and needed a system their whole team could work inside.', stat: '88+ qualified professionals managed from day one', tags: ['CRM', 'GoHighLevel', 'Recruiting', 'Kanban'], category: 'GHL', imagePlaceholder: 'OMS Matchpoint - Kanban Interface' },
  { name: 'GEM Science Patient Portal', tagline: 'Five systems. One experience. Better outcomes.', description: 'Replaced five disconnected tools with a single HIPAA-conscious portal fully integrated with DrChrono EHR. Patients schedule, message, fill forms, and track their wellness journey in one branded experience. The practice manages everything from one place.', stat: '871 active patients onboarded at launch', tags: ['Healthcare', 'DrChrono', 'HIPAA', 'Scheduling', 'Integrations'], category: 'Portals', imagePlaceholder: 'GEM Science - Patient Portal' },
  { name: 'Sales Pipeline Dashboard', tagline: 'Dashboards show data. This one creates urgency.', description: 'A real-time sales analytics system tracking $1.9M in lead value across pipeline stages. Show rates, revenue reporting, and team-wide visibility, all live refreshed with no manual exports required. A scoreboard your sales team actually checks.', stat: '$1.9M in lead value tracked in real time', tags: ['Analytics', 'Sales', 'Reporting', 'Real-Time'], category: 'Dashboards', imagePlaceholder: 'Sales Pipeline - Real-Time Dashboard' },
  { name: 'Commanding Flow', tagline: 'A membership platform with an AI coach.', description: 'Full-stack community and membership app with live calls, course delivery, community channels, and an AI coach trained on the founder\'s own methodology. The owner updates the AI independently.', stat: 'AI coach owner-operated independently', tags: ['Membership', 'AI', 'Community', 'Courses'], category: 'Apps', imagePlaceholder: 'Commanding Flow - Membership Platform' },
  { name: 'VAHubPro', tagline: 'RevOps automation for customer success.', description: 'Custom onboarding app for a customer success team. Automated processes and tasks replaced spreadsheet-based workflows in less than 3 weeks.', stat: 'Spreadsheets to automation in 3 weeks', tags: ['RevOps', 'Automation', 'Onboarding'], category: 'Integrations', imagePlaceholder: 'VAHubPro - RevOps Platform' },
  { name: 'Simply Scrapable', tagline: 'Lead intelligence at scale.', description: 'Lead Intelligence, Signal Surfacing, Interactive Outreach, and Proactive Lead Research and Listening platform used by hundreds of businesses daily.', stat: 'Hundreds of active daily users', tags: ['AI Agents', 'Lead Gen', 'Research', 'Outreach'], category: 'AI Agents', imagePlaceholder: 'Simply Scrapable - Lead Intelligence' },
];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 rounded-full px-3 py-1 text-xs font-mono text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Systems
          </span>
          <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-white max-w-4xl">Not mockups. Not concepts. Production software running for real clients.</h1>
          <p className="font-body text-[18px] text-mist mt-4 max-w-2xl">Every system below is live, actively used, and solving a real problem today. We let the work speak.</p>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-chip font-mono text-[13px] min-h-[44px] transition-all duration-200 ${filter === c ? 'bg-gold/10 border border-gold text-gold' : 'bg-midnight border border-steel/60 text-mist hover:border-gold/40 hover:text-white'}`}>{c}</button>
            ))}
          </div>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.name} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
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
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-t border-steel/50 text-center" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.12), transparent 70%)' }}>
        <h2 className="font-display text-[32px] md:text-[52px] text-white max-w-2xl mx-auto">Have a project in mind?</h2>
        <div className="mt-8"><Button variant="primary" href="/about/start-a-project">Start a Project</Button></div>
      </section>
    </PageTransition>
  );
}
