import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/LegacyButton';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', children: [
    { label: 'Apps', href: '/services/apps' },
    { label: 'Portals', href: '/services/portals' },
    { label: 'Dashboards', href: '/services/dashboards' },
    { label: 'GoHighLevel Buildouts', href: '/services/ghl-buildouts' },
    { label: 'Agentic Applications', href: '/services/agentic-apps' },
    { label: 'Integrations and Implementations', href: '/services/integrations' },
    { label: 'Websites', href: '/services/websites' },
  ]},
  { label: 'Work', href: '/work' },
  { label: 'Ecosystem', href: '/ecosystem', children: [
    { label: 'Simply Scrapable', href: '/ecosystem/simply-scrapable' },
    { label: 'Profitibull', href: '/ecosystem/profitibull' },
    { label: 'GHL BuildOut', href: '/ecosystem/profitibull/ghl-buildout' },
    { label: 'ProfitLink', href: '/ecosystem/profitlink' },
    { label: 'ProfitMail', href: '/ecosystem/profitmail' },
    { label: 'ProfitBot', href: '/ecosystem/profitbot' },
  ]},
  { label: 'About', href: '/about', children: [
    { label: 'About Simply Scalable', href: '/about' },
    { label: 'The Process', href: '/about/process' },
    { label: 'Industries We Serve', href: '/about/industries' },
    { label: 'Why Custom Software?', href: '/about/why-custom' },
    { label: 'Start a Project', href: '/about/start-a-project' },
  ]},
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [location]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav role="navigation" aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 bg-near-black/95 backdrop-blur-md ${scrolled ? 'border-b border-steel/40' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Simply Scalable Home">
          <span className="text-gold font-display font-bold text-xl">SS</span>
          <span className="text-white font-display text-sm font-semibold tracking-wide hidden sm:inline">SIMPLY SCALABLE</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative" onMouseEnter={() => link.children && setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
              {link.children ? (
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-[14px] font-body transition-colors duration-200 ${location.pathname.startsWith(link.href) && link.href !== '/' ? 'text-white' : 'text-mist hover:text-white'}`}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label} <ChevronDown className="w-3 h-3" />
                </Link>
              ) : (
                <Link to={link.href} className={`px-3 py-2 text-[14px] font-body transition-colors duration-200 ${location.pathname === link.href ? 'text-white border-b-2 border-gold' : 'text-mist hover:text-white'}`}>
                  {link.label}
                </Link>
              )}
              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-midnight border border-steel rounded-inner shadow-xl p-2 min-w-[240px]">
                    {link.children.map((child) => (
                      <Link key={child.href} to={child.href} className="block px-4 py-2 text-[14px] text-mist hover:text-white hover:bg-steel/40 rounded transition">
                        {child.label}
                      </Link>
                    ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block"><Button variant="primary" href="/about/start-a-project">Start a Project</Button></div>
          <button className="lg:hidden p-2 text-white min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed inset-0 top-16 bg-near-black z-40 overflow-y-auto">
            <div className="flex flex-col px-6 py-8 gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link to={link.href} className="block py-3 text-[18px] font-body text-white border-b border-steel/30">{link.label}</Link>
                  {link.children && <div className="pl-4">{link.children.map((child) => (<Link key={child.href} to={child.href} className="block py-2 text-[15px] text-mist">{child.label}</Link>))}</div>}
                </div>
              ))}
              <div className="mt-8"><Button variant="primary" href="/about/start-a-project" className="w-full">Start a Project</Button></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
