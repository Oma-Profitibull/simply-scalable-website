import { motion } from 'framer-motion';
import { Layers, Shield, BarChart3, Workflow, Bot, GitBranch, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const ease = [0.16, 1, 0.3, 1] as const;
const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const heroItem = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } };
const reveal = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const staggerParent = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const staggerChild = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } };

const services = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Apps',
    description: 'Custom applications for any business need. Community platforms, membership portals, mobile apps, TikTok Shop tools, internal tools, and everything in between.',
    tags: ['Mobile', 'Community', 'TikTok Shop', 'Internal Tools'],
    whoFor: 'Founders with an app idea that has outgrown a no-code tool.',
    proof: 'Commanding Flow: full-stack community app with AI coach. Mamba: custom TikTok Shop commerce tool.',
    link: '/services/apps',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Portals',
    description: 'Custom portals that give your users one secure, branded, connected place for everything they need. Patient portals, client portals, partner portals, and beyond.',
    tags: ['Patient', 'Client', 'HIPAA', 'Role-Based Access'],
    whoFor: 'Medical practices replacing five disconnected tools with one experience.',
    proof: 'GEM Science Patient Portal: HIPAA-conscious, DrChrono-integrated. 871 patients onboarded at launch.',
    link: '/services/portals',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Dashboards',
    description: 'Real-time operations and analytics dashboards for businesses managing complexity at scale. One view for every number that runs your operation.',
    tags: ['Ecommerce', 'Sales Pipeline', 'KPI', 'Real-Time'],
    whoFor: 'Ecommerce operators logging into five platforms every morning.',
    proof: 'Sales Pipeline Dashboard: $1.9M in live lead value tracked with real-time data refresh.',
    link: '/services/dashboards',
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'GoHighLevel Buildouts',
    description: 'End-to-end GoHighLevel architecture for agencies, coaches, and brands. We built our own CRM on GHL. We know exactly what it can do when configured properly.',
    tags: ['CRM', 'Automations', 'White-Label', 'Funnels'],
    whoFor: 'Agencies building on GHL for their clients, businesses setting up GHL for the first time.',
    proof: 'Profitibull: our own GHL white-label CRM with custom AI enhancements, used daily.',
    link: '/services/ghl-buildouts',
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'Agentic Software',
    description: 'AI-powered agents that handle research, outreach, data processing, and decision workflows autonomously. Repetitive operations become systems that run without anyone watching.',
    tags: ['AI Agents', 'Multi-Model', 'Automation', 'Orchestration'],
    whoFor: 'Operators who have identified repetitive processes that eat time.',
    proof: 'ProfitBot: multi-model AI orchestration for research and drafting at scale.',
    link: '/services/agentic-apps',
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: 'Integrations',
    description: 'Your tools should talk to each other. When they do not, your team pays the cost in manual work, duplicate entry, and decisions made on stale data.',
    tags: ['API', 'Webhooks', 'ETL', 'Bi-Directional Sync'],
    whoFor: 'Businesses running tools that partially solve different parts of the same problem.',
    proof: 'GEM Science: five disconnected tools integrated into one experience. Zero manual data transfer.',
    link: '/services/integrations',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Websites',
    description: 'Custom websites designed and built from scratch for businesses that need more than a template can offer. Multi-page marketing sites and high-converting web presences.',
    tags: ['Marketing Sites', 'SEO', 'CMS', 'Responsive'],
    whoFor: 'Businesses whose website does not match the quality of what they deliver.',
    proof: 'Marshall Duke Consulting and OMS Matchpoint: live, custom-designed brand properties.',
    link: '/services/websites',
  },
];

const steps = [
  { num: '01', title: 'The Quote Form', body: 'Answer 9 questions about your project. No technical knowledge required. Just describe the problem you are trying to solve. We reply within 24 hours with a detailed estimate.' },
  { num: '02', title: 'The Discovery Call', body: 'A 30-minute call where we go deep on requirements, tech stack, and architecture. You leave with a clear understanding of what will be built, how long it will take, and what it will cost.' },
  { num: '03', title: 'The Project Brief', body: 'Before any work starts, you receive a written brief that documents every deliverable, integration, feature, and timeline. This is your contract with us. No surprises.' },
  { num: '04', title: 'Build Starts', body: 'Once the brief is signed, the build begins. Regular check-ins, working prototypes early in the process, and a clear line to the team throughout.' },
];

const portfolioRows = [
  { service: 'Apps', projects: 'Commanding Flow, Mamba TikTok Shop App', result: 'AI coach owner-operated, TikTok commerce at scale' },
  { service: 'Portals', projects: 'GEM Science Patient Portal', result: '871 patients onboarded at launch' },
  { service: 'Dashboards', projects: 'Sales Pipeline Dashboard', result: '$1.9M in lead value tracked live' },
  { service: 'GHL Buildouts', projects: 'OMS Matchpoint', result: '88+ professionals managed from day one' },
  { service: 'Agentic Apps', projects: 'Simply Scrapable and ProfitBot', result: 'Hundreds of active daily users' },
  { service: 'Integrations', projects: 'GEM Science and VAHubPro', result: '5 tools replaced, 4 tools consolidated' },
  { service: 'Websites', projects: 'Marshall Duke, OMS Matchpoint', result: 'Live, custom-built brand properties' },
];

const faqs = [
  { q: 'Do you only build the seven services listed, or can you build something outside these categories?', a: 'The seven categories cover the most common problems we solve. They are not a limit on what we can scope. If your idea does not fit neatly into one of them, describe it anyway in the quote form or on a discovery call. We will tell you honestly whether it is something we can build and whether we are the right shop to build it.' },
  { q: 'Can I combine multiple services into one project?', a: 'Yes, and many of the best builds we have shipped span multiple service areas. GEM Science combined a medical portal, five system integrations, and an EHR connection. Commanding Flow combined a membership platform with a custom AI agent. Describe the full scope of what you need, and we scope it as one project.' },
  { q: 'Do you use templates or start every build from scratch?', a: 'Every build starts from scratch. There are no templates. The architecture, the database schema, the user experience, and the integrations are designed specifically for your project during the scoping phase. This is the core reason clients come to Simply Scalable instead of buying another SaaS subscription.' },
  { q: 'What do I actually own when the project is delivered?', a: 'You own the application, the codebase, the database, the integrations, and the documentation. Everything. You can host it anywhere, hand it to another developer, modify it yourself, or build on top of it. There is no proprietary layer that keeps you dependent on us.' },
  { q: 'How do I know which service is right for my business?', a: 'You do not need to know before reaching out. The discovery call exists specifically to figure this out together. Describe the problem you are trying to solve and what you currently use to solve it. That conversation will determine which service category fits and what the right scope looks like.' },
  { q: 'Does Simply Scalable offer ongoing support after delivery?', a: 'Post-launch support is included during the handover period. Ongoing development retainers are available for clients who want to continue building on top of the delivered system. These are offered but never required. You will never be in a position where you have to keep paying us just to maintain access to something we already built for you.' },
];

const testimonials = [
  { quote: "It's incredible what you've been able to do with my idea. Your team was even able to finish the project before our website was complete.", name: 'Dr. Rob S.', project: 'OMS Matchpoint' },
  { quote: 'The app is amazing. It links our DrChrono EHR with our CRM, but it also acts as a buffer between our marketing and patient communication. Their team is very easy to work with.', name: 'Dr. B.', project: 'GEM Science' },
  { quote: 'The onboarding app they built for our customer success team is incredible. We went from spreadsheets to automated processes and tasks in less than 3 weeks.', name: 'Alex J.', project: 'VAHubPro' },
];

const crossServiceBuilds = [
  { name: 'OMS Matchpoint', tags: ['GHL Buildout', 'Apps', 'Integrations'], desc: 'CRM architecture with GoHighLevel integration and a custom kanban interface.' },
  { name: 'GEM Science', tags: ['Portals', 'Integrations', 'Apps'], desc: 'Medical portal development with five-system integration and EHR connectivity.' },
  { name: 'Commanding Flow', tags: ['Apps', 'Agentic Software'], desc: 'Membership app development with an AI agent trained on proprietary content.' },
];

function ServicesPage() {
  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-5xl mx-auto relative z-10">
          <motion.div variants={heroItem}>
            <h1 className="text-white max-w-3xl">
              Seven services. One shop that knows how to ship them.
            </h1>
          </motion.div>
          <motion.div variants={heroItem}>
            <p className="text-[17px] text-muted-foreground mt-5 max-w-2xl leading-relaxed">
              Every project is scoped from scratch. No templates. No off-the-shelf code dressed up as custom. If you can describe the problem, we can scope the build.
            </p>
          </motion.div>
          <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button size="lg" className="rounded-full bg-gold text-near-black hover:bg-gold-hover" asChild>
              <Link to="/about/start-a-project">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-gold/40 text-gold hover:bg-gold/10 hover:text-gold" asChild>
              <Link to="/about/start-a-project">Book a Discovery Call</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── WHY CUSTOM ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="lg:col-span-3">
              <h2 className="text-white mb-6">
                Most software is built for everyone. That means it is built for no one in particular.
              </h2>
              <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                <p>Off-the-shelf tools are designed to cover the most common use cases for the widest possible audience. When your business grows beyond what common looks like, those tools start to fight against you.</p>
                <p>That is exactly the gap Simply Scalable exists to fill.</p>
                <p>We build software that does one thing: exactly what your business needs it to do. Not a modified template. Not a workaround. A system built around how your operation actually works, owned by you outright from the day it goes live.</p>
                <p className="text-muted-foreground/60 text-sm">Seven service areas. Every build scoped from scratch. Every line of code owned by you.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { num: '7', label: 'Service areas' },
                { num: '100%', label: 'Custom built' },
                { num: '0', label: 'Templates used' },
                { num: '100%', label: 'You own it' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerChild}>
                  <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-5">
                      <div className="font-display text-3xl text-gold leading-none mb-1">{stat.num}</div>
                      <div className="text-xs text-muted-foreground font-mono tracking-wide">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── THE SEVEN SERVICES ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-12">
            <h2 className="text-white max-w-2xl">Pick the problem. We will scope the build.</h2>
          </motion.div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s) => (
              <motion.div key={s.title} variants={staggerChild}>
                <Card className="bg-card/50 border-border/50 hover:border-gold/30 transition-all duration-300 group h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                        {s.icon}
                      </div>
                      <CardTitle className="text-lg text-white">{s.title}</CardTitle>
                    </div>
                    <CardDescription className="text-[14px] leading-relaxed">{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gold/8 text-gold/80 border border-gold/15 text-[11px] font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="rounded-md bg-muted/30 border border-border/30 p-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="text-gold/70 font-medium">Proof:</span> {s.proof}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" size="sm" className="text-gold hover:text-gold hover:bg-gold/10 p-0 h-auto" asChild>
                      <Link to={s.link} className="inline-flex items-center gap-2 text-[13px]">
                        Explore {s.title}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── CROSS-SERVICE BUILDS ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <h2 className="text-white mb-4">
              Most of our best builds touch more than one service area.
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Real businesses have layered problems. Describe everything you need. We scope the whole thing and deliver it as one build.
            </p>
          </motion.div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {crossServiceBuilds.map((build) => (
              <motion.div key={build.name} variants={staggerChild}>
                <Card className="bg-card/50 border-border/50 hover:border-gold/25 transition-all duration-300 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-white">{build.name}</CardTitle>
                    <CardDescription className="text-[13px]">{build.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {build.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-gold/70 border-gold/20 text-[10px] font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <Button size="lg" className="rounded-full bg-gold text-near-black hover:bg-gold-hover" asChild>
            <Link to="/about/start-a-project">Start a Project</Link>
          </Button>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── HOW SCOPING WORKS ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <Badge variant="outline" className="mb-5 border-gold/30 text-gold bg-gold/5 text-xs tracking-wide">
              Our Process
            </Badge>
            <h2 className="text-white mb-10">
              Every build starts with a scope. Every scope starts with a conversation.
            </h2>
          </motion.div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.08, duration: 0.5, ease }}>
                <Card className="bg-card/30 border-border/40">
                  <CardContent className="flex gap-5 p-5">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
                      <span className="font-mono text-sm text-gold">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-[17px] text-white mb-1.5">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Button size="lg" className="rounded-full bg-gold text-near-black hover:bg-gold-hover" asChild>
              <Link to="/about/start-a-project">Get a Quote &mdash; 9 Questions, 24-Hour Response</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-gold/40 text-gold hover:bg-gold/10 hover:text-gold" asChild>
              <Link to="/about/start-a-project">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── PORTFOLIO PROOF TABLE ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <h2 className="text-white mb-2">
              Every service we offer has a live build behind it.
            </h2>
            <p className="text-[15px] text-muted-foreground mb-10 leading-relaxed">
              These are not hypothetical capabilities. Each one maps to a real system running for a real client today.
            </p>
          </motion.div>
          <Card className="bg-card/30 border-border/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3.5 text-[11px] uppercase tracking-wider text-gold/70 font-mono font-medium">Service</th>
                    <th className="px-5 py-3.5 text-[11px] uppercase tracking-wider text-gold/70 font-mono font-medium">Project</th>
                    <th className="px-5 py-3.5 text-[11px] uppercase tracking-wider text-gold/70 font-mono font-medium">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioRows.map((row, i) => (
                    <tr key={row.service} className={i < portfolioRows.length - 1 ? 'border-b border-border/30' : ''}>
                      <td className="px-5 py-4 text-sm text-white font-medium whitespace-nowrap">{row.service}</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{row.projects}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-deploy-green shrink-0" />
                          <span className="text-sm text-muted-foreground/80">{row.result}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-8">
            <Button variant="outline" className="rounded-full border-border/60 text-muted-foreground hover:text-white hover:border-border" asChild>
              <Link to="/work">See All Builds in the Work Section <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-12">
            <h2 className="text-white">
              The work speaks. So do the people who commissioned it.
            </h2>
          </motion.div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={staggerChild}>
                <Card className="bg-card/50 border-border/50 hover:border-gold/20 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex-1">
                    <p className="text-[15px] text-white/80 leading-relaxed italic">"{t.quote}"</p>
                  </CardContent>
                  <CardFooter className="border-t border-border/30 p-5 flex-col items-start gap-0.5">
                    <span className="text-sm text-white font-medium">{t.name}</span>
                    <Badge variant="secondary" className="bg-gold/8 text-gold/60 border-0 text-[11px] font-normal mt-1 px-0">
                      {t.project}
                    </Badge>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── BOTTOM CTA ── */}
      <section className="relative py-20 md:py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--primary)), transparent 70%)' }} />
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-white">Know what you want to build? Tell us.</h2>
          <p className="text-[16px] text-muted-foreground mt-4 leading-relaxed">
            Nine questions. Twenty-four hours. A detailed quote in your inbox with a real scope, a real timeline, and a real number.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button size="lg" className="rounded-full bg-gold text-near-black hover:bg-gold-hover" asChild>
              <Link to="/about/start-a-project">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-gold/40 text-gold hover:bg-gold/10 hover:text-gold" asChild>
              <Link to="/about/start-a-project">Book a Discovery Call</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
            {['Response within 24 hours', 'You own everything we build', 'No templates. No surprises.'].map((line) => (
              <span key={line} className="text-xs text-muted-foreground/60 font-mono">{line}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="bg-border/40" />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-10">
            <h2 className="text-white">Frequently Asked Questions</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/40 rounded-lg px-5 data-[state=open]:border-gold/20 transition-colors duration-200">
                <AccordionTrigger className="text-[15px] text-white hover:no-underline text-left py-5 [&>svg]:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageTransition>
  );
}

export default ServicesPage;
