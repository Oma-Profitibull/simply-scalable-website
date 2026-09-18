import { motion } from 'framer-motion';
import { PageTransition } from '../../components/layout/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/LegacyButton';
import { AccordionItem } from '../../components/ui/AccordionItem';
import { Workflow } from 'lucide-react';

const features = [
  "Full GHL account setup and configuration",
  "Sub-account architecture for agencies",
  "White-labeling and branded client portals",
  "Custom workflow and automation sequences",
  "Pipeline and opportunity management",
  "Two-way SMS and email campaign setup",
  "Funnel and landing page builds",
  "Snapshot creation and replication",
  "Third-party integrations via API and webhooks",
  "Ongoing buildout support and optimization",
];

const faqs = [
  { q: "Why should I hire someone to build my GHL instead of doing it myself?", a: "GHL is powerful but complex. A proper architecture from the start saves months of rework. We build the workflows, pipelines, and automations the way they should work from day one." },
  { q: "Do you white-label GHL for agencies?", a: "Yes. Full white-label setup including custom domains, branding, and client-facing portals." },
  { q: "Can you integrate GHL with other tools?", a: "Yes. API integrations, webhooks, Zapier connections, and custom middleware for complex data flows." },
  { q: "Do you offer ongoing GHL support?", a: "Yes. Ongoing optimization retainers are available. You can also take what we build and manage it yourself." },
];

export default function GHLPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(26,37,64,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,64,0.5) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-white max-w-4xl">GoHighLevel Buildouts</h1>
          <p className="font-body text-[18px] text-mist mt-4 max-w-2xl">End-to-end GoHighLevel architecture for agencies, coaches, and brands that want the platform built the right way from the start. We built our own CRM on GHL. We know exactly what it can do when it is set up properly.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="primary" href="/about/start-a-project">Start a Project</Button>
            <Button variant="secondary" href="/about/start-a-project">Book a Discovery Call</Button>
          </div>
        </div>
      </section>

      {/* What This Covers */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="Features" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-4 bg-midnight border border-steel/40 rounded-inner">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span className="font-body text-[15px] text-mist">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-y border-steel/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader headline="Built for agencies and operators on GoHighLevel" />
          <p className="font-body text-[16px] text-mist leading-relaxed">Agencies building on GHL for their clients, businesses setting up GHL for the first time, and operators who know GHL can do more but have not had the technical support to unlock it.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[32px] md:text-[42px] text-white mb-8">Frequently Asked Questions</h2>
          {faqs.map((f) => <AccordionItem key={f.q} question={f.q} answer={f.a} />)}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-t border-steel/50 text-center" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.12), transparent 70%)' }}>
        <h2 className="font-display text-[32px] md:text-[52px] text-white max-w-2xl mx-auto">Ready to scope your GHL buildout?</h2>
        <div className="mt-8"><Button variant="primary" href="/about/start-a-project">Start a Project</Button></div>
      </section>
    </PageTransition>
  );
}
