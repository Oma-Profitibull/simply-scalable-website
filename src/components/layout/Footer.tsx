import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { Button } from '../ui/LegacyButton';

const cols = [
  { title: 'COMPANY', links: [{ l: 'Home', h: '/' }, { l: 'About', h: '/about' }, { l: 'The Process', h: '/about/process' }, { l: 'Industries We Serve', h: '/about/industries' }, { l: 'Start a Project', h: '/about/start-a-project' }] },
  { title: 'SERVICES', links: [{ l: 'Apps', h: '/services/apps' }, { l: 'Portals', h: '/services/portals' }, { l: 'Dashboards', h: '/services/dashboards' }, { l: 'GoHighLevel Buildouts', h: '/services/ghl-buildouts' }, { l: 'Agentic Applications', h: '/services/agentic-apps' }, { l: 'Integrations and Implementations', h: '/services/integrations' }, { l: 'Websites', h: '/services/websites' }] },
  { title: 'THE ECOSYSTEM', links: [{ l: 'Simply Scrapable', h: '/ecosystem/simply-scrapable' }, { l: 'Profitibull', h: '/ecosystem/profitibull' }, { l: 'ProfitBot', h: '/ecosystem/profitbot' }, { l: 'ProfitLink', h: '/ecosystem' }, { l: 'ProfitMail', h: '/ecosystem' }] },
  { title: 'RESOURCES', links: [{ l: 'The Work', h: '/work' }, { l: 'Blog and Insights', h: '/blog' }, { l: 'Why Custom Software?', h: '/about/why-custom' }, { l: 'Contact', h: '/about/start-a-project' }] },
];

export function Footer() {
  return (
    <footer className="bg-near-black border-t border-steel/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="text-gold font-display font-bold text-xl">SS</span>
            <span className="text-white font-display text-sm font-semibold tracking-wide">SIMPLY SCALABLE</span>
          </Link>
          <p className="text-mist text-[16px] mt-3">Custom software for businesses that have outgrown off-the-shelf tools.</p>
        </div>

        <div className="border-t border-steel/40 my-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] uppercase text-gold mb-4 font-body font-semibold tracking-widest">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.l}><Link to={link.h} className="text-mist text-[14px] hover:text-white transition-colors duration-200">{link.l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-[12px] uppercase text-gold mb-4 font-body font-semibold tracking-widest">CONTACT</h3>
            <a href="mailto:info@simplyscalable.io" className="text-gold hover:text-gold-hover text-[14px] transition-colors duration-200 block mb-1">info@simplyscalable.io</a>
            <p className="text-mist text-[13px] mb-4">Response within 24 hours</p>
            <Button variant="ghost" href="/about/start-a-project">Book a Discovery Call</Button>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/phil-murphy-03/" target="_blank" rel="noopener noreferrer" aria-label="Phil Murphy on LinkedIn" className="inline-flex items-center justify-center w-10 h-10 text-mist hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-steel/40 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between text-slate-muted text-[13px] gap-2">
            <p>&copy; 2025 Simply Scalable LLC. All rights reserved. Grapevine, TX.</p>
            <p>Privacy Policy &middot; Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
