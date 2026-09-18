import { motion } from 'framer-motion';
import { ChevronDown, Key, Database, Blocks, Clock, Lock, CheckCircle } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { CursorSpotlight } from '../components/interactive/CursorSpotlight';
import { SplitText } from '../components/interactive/SplitText';
import { ParticleCanvas } from '../components/home/ParticleCanvas';
import { StatsBar } from '../components/home/StatsBar';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/LegacyButton';
import { AccordionItem } from '../components/ui/AccordionItem';
import { FlipCardGrid } from '../components/home/FlipCardGrid';
import { PortfolioGrid } from '../components/home/PortfolioGrid';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { EcosystemCards } from '../components/home/EcosystemCards';
import { IndustryCloud } from '../components/home/IndustryCloud';
import { BlogCards } from '../components/home/BlogCards';

const faqs = [
  { q: 'What exactly does Simply Scalable build?', a: 'Simply Scalable builds custom software from scratch for businesses that have outgrown off-the-shelf tools. That includes apps of any kind, custom portals, operations and analytics dashboards, GoHighLevel buildouts, AI-powered agentic applications, multi-system integrations, and custom websites. Every project is scoped individually. There are no templates and no two builds are the same.' },
  { q: 'How is Simply Scalable different from a regular software agency?', a: 'Two things stand out. First, Simply Scalable is not only a custom software shop, it is also the parent company of three live software products it built for itself: Profitibull, Simply Scrapable, and ProfitBot. That means the team builds from real operator experience, not just client briefs. Second, and more importantly, you own everything Simply Scalable builds for you. No lock-in, no dependency, no hidden retainer.' },
  { q: 'How much does a custom software project cost?', a: 'Every project is priced individually because every build is different. There is no public price list. The fastest way to get a real number is to fill out the 9-question quote form and receive a detailed estimate within 24 hours. For more complex builds, a 30-minute discovery call is the better starting point.' },
  { q: 'How long does it take to build a custom app or system?', a: 'Most projects move from a signed agreement to a working, tested build within 4 to 12 weeks. Simpler integrations can be faster. More complex platforms take longer. The timeline is defined clearly during the scoping phase, before any work begins.' },
  { q: 'Does Simply Scalable build mobile apps and TikTok Shop apps?', a: 'Yes. Mobile apps, TikTok Shop apps, and any app type fall under the Apps service. This includes native iOS and Android apps, cross-platform apps, TikTok Shop integrations, seller dashboards, order management systems, and custom internal tools. If you can describe what the app needs to do, we can scope and build it.' },
  { q: 'What happens after the project is delivered?', a: 'You own the software outright. Simply Scalable provides full documentation and post-launch support. After that, the code is yours to host, modify, extend, or hand to any developer you choose. There is no ongoing dependency. Ongoing support or development retainers are available but never required.' },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* HERO */}
      <CursorSpotlight className="relative min-h-screen overflow-hidden bg-near-black">
        <ParticleCanvas />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-[40px] md:py-[56px] lg:py-[80px] px-6">
          <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-white text-center max-w-4xl">
            <SplitText text='Every "it would be great if" is a product we can build.' type="word" delay={0.2} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="font-body text-[18px] text-mist max-w-2xl mx-auto mt-4 mb-8 text-center">
            Custom apps, dashboards, and software for businesses that have outgrown off-the-shelf tools. We scope it, we build it, you own it. Fast.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/about/start-a-project">Start a Project</Button>
            <Button variant="secondary" href="/work">See the Work</Button>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="font-body text-[13px] text-slate-muted text-center mt-4">
            No commitment required. Quote in your inbox within 24 hours.
          </motion.p>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-gold" />
          </motion.div>
        </div>
      </CursorSpotlight>

      {/* STATS BAR */}
      <StatsBar />

      {/* DIFFERENCE */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="font-display text-[32px] md:text-[52px] leading-[1.1] tracking-tight text-white max-w-xl">We started as a digital ads company. We kept thinking &ldquo;it would be great if.&rdquo; So we built it.</h2>
            <div className="space-y-4 mt-6 font-body text-[16px] text-mist leading-relaxed">
              <p>First for ourselves. Then for everyone else. That is how Simply Scalable became a custom software shop, and also the parent company of three live products, Profitibull, Simply Scrapable, and ProfitBot, that are used by hundreds of businesses every single day.</p>
              <p>Most software agencies have never shipped a product of their own. They build for clients, invoice, and move on. We are different. We have been inside the operator&apos;s seat. We have felt the exact frustration that comes from watching your business outgrow the tools you&apos;re paying for. That experience is in everything we build.</p>
              <p>When you hire Simply Scalable, you are not hiring a team that will hand you a product and disappear. You are hiring a team that builds software the same way they would build it for themselves: scoped properly, built to last, and fully yours the day it goes live.</p>
            </div>
            <div className="font-mono text-[13px] text-gold/80 mt-6 border-l-2 border-gold pl-4">
              5+ years. 2 people. 50+ custom systems shipped. 3 live products operating at scale.
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="bg-midnight/80 border border-steel/60 rounded-card backdrop-blur-sm p-8 relative">
              <div className="absolute inset-0 rounded-card" style={{ background: 'radial-gradient(ellipse at center, rgba(212,168,83,0.06), transparent)' }} />
              <div className="relative z-10">
                <h3 className="font-display text-[26px] text-white mb-6">We didn&apos;t just build for clients. We built for ourselves first.</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-profitibull/10 text-profitibull border border-profitibull/30 rounded-chip px-3 py-1 text-[12px] font-mono">Profitibull</span>
                  <span className="bg-scrapable/10 text-scrapable border border-scrapable/30 rounded-chip px-3 py-1 text-[12px] font-mono">Simply Scrapable</span>
                  <span className="bg-gold/10 text-gold border border-gold/30 rounded-chip px-3 py-1 text-[12px] font-mono">ProfitBot</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="Seven services. One shop that knows how to ship them." subhead="Every build is scoped from scratch. No templates, no guesswork, no hand-me-down code from a project that looked vaguely similar." align="center" />
          <FlipCardGrid />
          <div className="text-center mt-12">
            <Button variant="primary" href="/services">Explore All Services</Button>
          </div>
        </div>
      </section>

      {/* OWNERSHIP PROMISE */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-y border-steel/50 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.08), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-display text-[32px] md:text-[52px] leading-[1.1] tracking-tight text-white max-w-3xl">You own the app. You own the tool. You own the implementation. Every line of it.</h2>
          <div className="mt-8 space-y-4 max-w-3xl">
            <p className="font-body text-[16px] text-mist leading-relaxed">The custom software industry has a problem. Agencies build systems that keep you dependent on them. Need an update? Pay us. Want to move your data? Pay us. Want to hand the system to someone else? Good luck.</p>
            <p className="font-display text-[28px] md:text-[38px] text-white">That is not how we work.</p>
            <p className="font-body text-[16px] text-mist leading-relaxed">When Simply Scalable delivers your project, it is yours. The code, the database, the integrations, the documentation. You can take it to another developer, host it anywhere, modify it yourself, or build on top of it. We built it for you, not for a retainer.</p>
            <p className="font-body text-[16px] text-mist leading-relaxed">We built Commanding Flow, a full membership platform with an AI coach trained on the founder&apos;s methodology, specifically so the owner could update the AI independently, without ever having to come back to us. That is the standard we build to.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Key className="w-8 h-8 text-gold" />, title: 'You own the code', text: 'Everything is delivered with full documentation. No proprietary lock-in, no black boxes.' },
              { icon: <Database className="w-8 h-8 text-gold" />, title: 'You own the data', text: 'Your customer data, your pipeline, your analytics. Stored on your infrastructure, under your control.' },
              { icon: <Blocks className="w-8 h-8 text-gold" />, title: 'You own the future', text: 'Every build is designed to be extended. When your business grows, your software grows with it, with or without us.' },
            ].map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }} className="border border-gold/20 bg-near-black rounded-card p-6">
                {card.icon}
                <h4 className="font-display text-[20px] text-white mt-4 mb-2">{card.title}</h4>
                <p className="font-body text-[16px] text-mist">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE SYSTEMS */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="Not mockups. Not concepts. Production software running for real clients." subhead="Every system below is live, actively used, and solving a real problem today. We let the work speak." align="center" />
          <PortfolioGrid />
          <div className="text-center mt-12">
            <Button variant="primary" href="/work">View All Builds</Button>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="Built for the businesses that have outgrown the tools everyone else is using." align="center" />
          <p className="font-body text-[16px] text-mist max-w-3xl mx-auto text-center mb-10">Simply Scalable clients are not startups looking for the cheapest path to an MVP. They are operators, founders, and agency owners who have a real, specific problem that off-the-shelf software cannot solve. They have tried the SaaS tools. They have tried the workarounds. Now they want something built exactly the way their business actually works.</p>
          <IndustryCloud />
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }} className="relative py-16 text-center">
            <span className="absolute top-8 left-1/2 -translate-x-[120%] text-gold/20 text-[120px] font-display leading-none select-none">&ldquo;</span>
            <p className="font-display text-[28px] md:text-[42px] lg:text-[52px] text-white italic text-center max-w-4xl mx-auto leading-tight">&ldquo;If your business has a process that three different tools are partially solving, that is exactly the problem we build for.&rdquo;</p>
            <span className="absolute bottom-8 left-1/2 translate-x-[80%] text-gold/20 text-[120px] font-display leading-none select-none">&rdquo;</span>
          </motion.div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline='From "it would be great if" to shipped software. Here is how we get there.' align="center" />
          <ProcessTimeline />
          <div className="text-center mt-12">
            <p className="font-body text-[16px] text-mist max-w-xl mx-auto mb-6">Want to see what your project would look like scoped, costed, and planned? One 30-minute discovery call is all it takes.</p>
            <Button variant="primary" href="/about/start-a-project">Book a Discovery Call</Button>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 relative" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.10), transparent 70%)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="We did not just build for clients. We built products for ourselves." subhead="Simply Scalable is the parent company of three live software products that started as internal tools, grew into products that hundreds of teams now rely on, and are available to you today." align="center" />
          <EcosystemCards />
          <div className="text-center mt-12">
            <Button variant="ghost" href="/ecosystem">View the Full Ecosystem</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="Real words from real operators." subhead="We do not ask for reviews. These come from clients who had a problem, watched it get solved, and then told us what they thought." align="center" />
          <TestimonialCarousel />
        </div>
      </section>

      {/* BLOG */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader headline="The thinking behind the builds." subhead="Strategy, lessons from shipping 50+ custom systems, and the questions every operator should ask before they build." align="center" />
          <BlogCards />
          <div className="text-center mt-12">
            <Button variant="ghost" href="/blog">Visit the Blog</Button>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CursorSpotlight className="bg-midnight border-t border-steel/50 py-[40px] md:py-[56px] lg:py-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.14), transparent 60%)' }} />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-[36px] md:text-[52px] lg:text-[72px] leading-[1.05] tracking-tight text-white">
            <SplitText text="Tell us what you would build if you could build anything." type="word" />
          </h2>
          <p className="font-body text-[18px] text-mist mt-4 mb-10 max-w-2xl mx-auto">Answer 9 quick questions and we will send a detailed quote to your inbox within 24 hours. No commitment. No pressure. Just a number you can actually make a decision with.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/about/start-a-project">Get a Quote</Button>
            <Button variant="secondary" href="/about/start-a-project">Book a Discovery Call</Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mt-10">
            <span className="flex items-center gap-2 font-mono text-[13px] text-mist"><Clock className="w-4 h-4 text-gold" />Response within 24 hours</span>
            <span className="flex items-center gap-2 font-mono text-[13px] text-mist"><Lock className="w-4 h-4 text-gold" />You own everything we build</span>
            <span className="flex items-center gap-2 font-mono text-[13px] text-mist"><CheckCircle className="w-4 h-4 text-gold" />100% client satisfaction rate</span>
          </div>
        </div>
      </CursorSpotlight>

      {/* FAQ */}
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[32px] md:text-[52px] leading-[1.1] tracking-tight text-white mb-10">Frequently Asked Questions</h2>
          {faqs.map((faq) => <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />)}
        </div>
      </section>
    </PageTransition>
  );
}
