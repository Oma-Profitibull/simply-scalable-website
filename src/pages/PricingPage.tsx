import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/LegacyButton';
import { AccordionItem } from '../components/ui/AccordionItem';
import { Layers, FileText, ShieldCheck, Check, Clock, Lock } from 'lucide-react';

const customIncludes = [
  'Full ownership of codebase and documentation at delivery',
  'Fixed price based on agreed scope, no hourly billing',
  'No surprise invoices for work within the documented scope',
  'Post-launch support period',
  'Direct access to Phil and Oma throughout every phase',
];

type EcosystemProduct = {
  name: string;
  tagline: string;
  price: string;
  notes: string[];
  cta: { label: string; href: string } | null;
};

const ecosystemProducts: EcosystemProduct[] = [
  {
    name: 'Simply Scrapable',
    tagline: 'Lead Intelligence, Signal Surfacing, and Proactive Prospect Research.',
    price: '$99 / month',
    notes: ['Visit simplyscrapable.com for current pricing and plans.'],
    cta: { label: 'Visit Simply Scrapable', href: '/ecosystem/simply-scrapable' },
  },
  {
    name: 'Profitibull CRM',
    tagline: 'Full-stack CRM and marketing automation on GoHighLevel white-label.',
    price: '$99 / month',
    notes: [
      'Custom CRM integration available for non-GoHighLevel businesses. Contact us for custom CRM pricing.',
      'Visit profitibull.com for current pricing and plans.',
    ],
    cta: { label: 'Visit Profitibull', href: '/ecosystem/profitibull' },
  },
  {
    name: 'ProfitLink',
    tagline: 'LinkedIn outreach automation for agencies and sales teams.',
    price: '$99 / month',
    notes: ['Visit profitibull.com for current pricing and plans.'],
    cta: { label: 'Visit Profitibull', href: '/ecosystem/profitlink' },
  },
  {
    name: 'ProfitMail',
    tagline: 'Email outreach and automation on Instantly infrastructure.',
    price: '$99 / month',
    notes: ['Visit profitibull.com for current pricing and plans.'],
    cta: { label: 'Visit Profitibull', href: '/ecosystem/profitmail' },
  },
  {
    name: 'ProfitBot',
    tagline: 'Multi-model AI orchestration for lead scoring, content generation, and campaign routing.',
    price: '$99 / month',
    notes: [
      'Available as standalone or as part of the full ecosystem stack.',
      'Visit profitibull.com for current pricing and plans.',
    ],
    cta: { label: 'Visit Profitibull', href: '/ecosystem/profitbot' },
  },
  {
    name: 'WhatsApp Direct (via ProfitLink)',
    tagline: 'Direct WhatsApp Business account connection for multi-channel outreach.',
    price: 'Add-on to ProfitLink',
    notes: ['Requires WhatsApp Business account. Contact us for current add-on pricing.'],
    cta: null,
  },
];

const stackProducts = [
  { name: 'Simply Scrapable', price: '$99 / month' },
  { name: 'Profitibull CRM', price: '$99 / month' },
  { name: 'ProfitLink', price: '$99 / month' },
  { name: 'ProfitMail', price: '$99 / month' },
  { name: 'ProfitBot', price: '$99 / month' },
];

const milestones = [
  {
    number: '01',
    title: 'Project kickoff deposit',
    body: 'Due on signing of the project brief. Required before work begins. Covers the initial project setup and Phase 01 work.',
  },
  {
    number: '02',
    title: 'Design approval',
    body: 'Due at the end of Phase 02 when all designs are approved and Phase 03 development begins.',
  },
  {
    number: '03',
    title: 'Build completion',
    body: 'Due when Phase 03 development is complete and the system enters Phase 04 testing.',
  },
  {
    number: '04',
    title: 'Delivery and handover',
    body: 'Due at final handover when the live system, documentation, and post-launch support period begin.',
  },
];

const notIncluded = [
  {
    title: 'Third-party platform subscriptions',
    body: "If the build requires a subscription to a third-party platform (for example, a GoHighLevel subscription, a Vimeo account for video hosting, or an AWS account for infrastructure), that subscription cost is the client's direct responsibility and is not included in the Simply Scalable project price. Third-party costs are identified during scoping so the client has a complete picture of the total investment.",
  },
  {
    title: 'Domain and hosting costs',
    body: "Domain registration and hosting infrastructure for the delivered system are the client's direct responsibility after delivery. Hosting setup and domain configuration are included in the project scope. The ongoing costs of maintaining that infrastructure are not.",
  },
  {
    title: 'Third-party API usage costs',
    body: 'Some integrations involve APIs that charge based on usage volume. These costs belong to the client and are identified during scoping where usage estimates can be made.',
  },
  {
    title: 'Ongoing development after the post-launch support period',
    body: 'New features, capability expansions, and development requests outside the original scope that arise after the post-launch support period are scoped and priced separately. Development retainers are available for clients who want ongoing Simply Scalable involvement after delivery.',
  },
  {
    title: 'Content creation',
    body: "Website copy, imagery, video production, and other content for the delivered system are the client's responsibility unless explicitly included in the project scope. Copywriting can be included in the scope as an additional line item if needed.",
  },
];

const priceIncludes = [
  {
    icon: Layers,
    title: 'The full build',
    body: 'Design, development, integration, testing, and deployment. The complete system as scoped in the project brief.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    body: 'Technical documentation, admin and operational documentation, and the handover session. Written to the standard that allows any qualified developer to maintain the system independently.',
  },
  {
    icon: ShieldCheck,
    title: 'Post-launch support period',
    body: 'A defined period after launch during which bugs and issues discovered in the live system are addressed at no additional cost.',
  },
];

const faqs = [
  {
    q: 'Why does Simply Scalable not publish a standard price list for custom projects?',
    a: "Because a price list for custom software is not honest. A patient portal with five integrations and data migration from an existing system costs significantly more than a focused sales dashboard pulling from a single CRM. Quoting a flat price for both would either overprice the simpler project or underprice the complex one. The quote process exists to produce a price that reflects what your specific project actually requires, not an approximation of what projects in a general category tend to cost.",
  },
  {
    q: 'What is the range of investment for a typical custom project?',
    a: 'Custom projects at Simply Scalable are scoped and priced individually. Every build is different and every quote reflects exactly what the specific project requires. The fastest way to get a real number is to fill out the nine-question quote form. Phil responds within twenty-four hours with a detailed, project-specific estimate.',
  },
  {
    q: 'Is the quoted price fixed or can it change during the project?',
    a: 'The quoted price is fixed for the scope defined in the project brief. If the scope changes during the project, the cost impact is calculated and agreed before the additional work begins. Nothing is billed beyond the quoted price for work within the original scope. Changes outside that scope are handled through a change order process with client approval before any additional work proceeds.',
  },
  {
    q: 'Do you offer payment plans or financing?',
    a: 'The milestone payment structure described on this page distributes the project cost across the build timeline rather than requiring full payment upfront. Payment plan options beyond the standard milestone structure are discussed on a case-by-case basis during the discovery process.',
  },
  {
    q: 'Are the ecosystem product prices negotiable?',
    a: 'The ecosystem products are subscription-based at fixed price points: $99 per month per product, or $495 per month for the full five-product suite. Enterprise arrangements for high-volume or multi-seat subscriptions are available for discussion. Reach out to info@simplyscalable.io for enterprise inquiries.',
  },
  {
    q: 'What happens to the money I have paid if the project is cancelled?',
    a: 'Cancellation terms are defined in the project agreement. Work completed and deliverables produced up to the point of cancellation belong to the client. The portion of the total project cost attributable to completed work is retained. Unused portions beyond completed work milestones are addressed according to the cancellation terms in the signed agreement. Full cancellation terms are reviewed before the project brief is signed so there are no surprises if circumstances change.',
  },
];

export default function PricingPage() {
  return (
    <PageTransition>
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-white max-w-4xl">
            Custom software is priced by scope. Here is what that means in practice.
          </h1>
          <p className="font-body text-[18px] text-mist leading-relaxed mt-6 max-w-3xl">
            Every Simply Scalable project is quoted individually because every project is different. There are no
            fixed packages and no off-the-shelf tiers. The price for your build is determined by what it actually
            takes to build it, scoped precisely before any commitment is made.
          </p>

          <div className="relative mt-12 h-56 md:h-72 rounded-hero overflow-hidden bg-gradient-to-br from-midnight via-steel/40 to-near-black border border-steel/60">
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-24 md:w-32 rounded-inner border border-gold/25 bg-near-black/40"
                    style={{ height: `${60 + (i % 3) * 40}px` }}
                  />
                ))}
              </div>
            </div>
            <span className="absolute bottom-4 left-6 text-mist/40 text-[11px] font-mono">
              Scope, defined before commitment
            </span>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-y border-steel/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            One fixed number. Defined before work begins. No hourly billing. No surprise invoices.
          </h2>
          <div className="space-y-5 font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-8">
            <p>
              Simply Scalable does not bill hourly. Every project is quoted as a fixed price based on the scope
              defined in the project brief. That number covers everything in the brief: the design, the development,
              the integrations, the testing, and the handover. Nothing is billed additionally for work that falls
              within the documented scope.
            </p>
            <p>
              The fixed price model requires a precise scope. A vague scope produces a vague estimate, which produces
              surprises at billing. The scoping process that precedes every Simply Scalable project is what makes
              fixed-price billing reliable: the scope is documented with enough precision that the price is accurate
              to what the project actually requires.
            </p>
            <p>
              If scope changes during the project, the cost impact is calculated and agreed before the additional
              work begins. No scope change is billed without the client's agreement on what it costs and what it adds.
            </p>
          </div>

          <p className="font-display text-[20px] md:text-[22px] text-white mt-12">
            Three things the price always includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {priceIncludes.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-near-black border border-steel/60 rounded-card p-6">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-inner bg-gold/10 border border-gold/30">
                  <Icon className="w-5 h-5 text-gold" />
                </span>
                <h3 className="font-display text-[19px] text-white mt-5">{title}</h3>
                <p className="font-body text-[14px] text-mist leading-relaxed mt-3">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            Quoted per project. Fixed price. Delivered with full documentation and your complete ownership.
          </h2>
          <div className="space-y-5 font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-8">
            <p>
              Simply Scalable builds high-ticket custom software for businesses that need it done properly. Every
              project is scoped and quoted individually based on what the specific build actually requires. There are
              no preset tiers because no two builds are the same.
            </p>
            <p>
              The fastest way to get a number is to fill out the nine-question quote form. Phil reads every submission
              personally and responds within twenty-four hours with a project-specific estimate that reflects the real
              scope, the real timeline, and the real cost of your build.
            </p>
          </div>

          <p className="font-display text-[20px] md:text-[22px] text-white mt-12">
            Regardless of scope, every project includes:
          </p>
          <ul className="mt-6 space-y-3 max-w-2xl">
            {customIncludes.map((item) => (
              <li key={item} className="flex gap-3 font-body text-[16px] text-mist leading-relaxed">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button variant="primary" href="/about/start-a-project">
              Get a Quote, 9 Questions, 24-Hour Response
            </Button>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-y border-steel/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white max-w-3xl">
            Five products. Each one $99 a month. The entire stack for $495.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-6 max-w-3xl">
            Every product in the Simply Scalable ecosystem is available individually at $99 a month. The full suite,
            all five products running together through the unified workflow builder, is available for $495 a month.
            That is five standalone subscriptions for the price of five, or everything working together as one system
            for the same number.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ecosystemProducts.map((product) => (
              <div
                key={product.name}
                className="bg-near-black border border-steel/60 rounded-card p-6 flex flex-col hover:border-gold/30 transition-colors duration-300"
              >
                <h3 className="font-display text-[20px] text-white">{product.name}</h3>
                <p className="font-body text-[14px] text-mist leading-relaxed mt-3">{product.tagline}</p>
                <p className="font-mono text-[15px] text-gold mt-4">{product.price}</p>
                <div className="mt-3 space-y-2 flex-1">
                  {product.notes.map((note) => (
                    <p key={note} className="font-body text-[13px] text-mist/80 leading-relaxed">
                      {note}
                    </p>
                  ))}
                </div>
                {product.cta && (
                  <div className="mt-6">
                    <Button variant="secondary" href={product.cta.href}>
                      {product.cta.label}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white max-w-3xl">
            All five products. One unified workflow. An entire marketing and sales infrastructure.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-6 max-w-3xl">
            Each ecosystem product works as a standalone tool. Each one also connects to the others through the
            unified workflow builder. The more products in the stack, the more powerful each one becomes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-start">
            <div className="bg-near-black border border-steel/60 rounded-card p-8">
              <div className="space-y-3">
                {stackProducts.map((product, i) => (
                  <div key={product.name}>
                    <div className="flex items-center justify-between gap-4 py-3">
                      <span className="font-display text-[17px] text-white">{product.name}</span>
                      <span className="font-mono text-[14px] text-gold shrink-0">{product.price}</span>
                    </div>
                    {i < stackProducts.length - 1 && (
                      <div className="flex justify-center">
                        <span className="h-4 w-px bg-gradient-to-b from-gold/50 to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-steel/60 flex items-center justify-between gap-4">
                <span className="font-display text-[18px] text-white">Full stack total</span>
                <span className="font-mono text-[18px] text-gold">$495 / month</span>
              </div>
              <div className="mt-4 rounded-inner bg-gold/10 border border-gold/30 px-4 py-2 text-center">
                <span className="font-mono text-[12px] text-gold">
                  Five products working as one. No premium for the integration.
                </span>
              </div>
            </div>

            <div className="rounded-card border border-gold/25 bg-gradient-to-br from-midnight to-near-black p-8">
              <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed">
                An entire marketing and sales infrastructure. Find the leads, qualify them, reach them on LinkedIn,
                follow up by email, manage them in a CRM, and route decisions through AI. All from one workflow. All
                for $495 a month.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 bg-midnight border-y border-steel/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            What the project price does not cover.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-6">
            Being explicit about what is not included prevents the misunderstandings that damage client
            relationships. The items below are not included in the base project price and are either billed
            separately if needed or are the client's direct responsibility.
          </p>

          <div className="mt-10 space-y-4">
            {notIncluded.map(({ title, body }) => (
              <div key={title} className="bg-near-black border border-steel/60 rounded-card p-6">
                <h3 className="font-display text-[19px] text-white">{title}</h3>
                <p className="font-body text-[15px] text-mist leading-relaxed mt-3">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            Milestone-based payments. No single upfront lump sum.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-6">
            Projects are paid in milestones tied to project phases rather than as a single upfront payment. The
            specific milestone structure is defined in the project brief before work begins.
          </p>

          <p className="font-display text-[20px] md:text-[22px] text-white mt-12">Typical milestone structure:</p>
          <div className="mt-8 space-y-5">
            {milestones.map((milestone) => (
              <div key={milestone.number} className="flex gap-5 bg-near-black border border-steel/60 rounded-card p-6">
                <span className="font-mono text-[15px] text-gold shrink-0 mt-0.5">{`Milestone ${milestone.number}`}</span>
                <div>
                  <h3 className="font-display text-[18px] text-white">{milestone.title}</h3>
                  <p className="font-body text-[15px] text-mist leading-relaxed mt-2">{milestone.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-card border border-gold/25 bg-gold/[0.06] p-6">
            <p className="font-body text-[15px] text-mist leading-relaxed">
              <span className="text-white font-medium">Note:</span> The specific milestone amounts are defined in the
              project brief. The structure above is the typical model. Variations are available for larger projects or
              projects with longer development timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,83,0.12), transparent 70%)' }}>
        <h2 className="font-display text-[32px] md:text-[52px] leading-[1.1] text-white max-w-3xl mx-auto">
          The fastest way to get a real number is to describe the project.
        </h2>
        <p className="font-body text-[18px] text-mist mt-6 max-w-2xl mx-auto leading-relaxed">
          Nine questions and twenty-four hours gets you a detailed, specific quote for your build. No commitment
          required until the project brief is signed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/about/start-a-project">Get a Quote</Button>
          <Button variant="secondary" href="/about/start-a-project">Book a Discovery Call</Button>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4 justify-center">
          <span className="inline-flex items-center gap-2 font-body text-[14px] text-mist">
            <Clock className="w-4 h-4 text-gold shrink-0" /> Quote within 24 hours
          </span>
          <span className="inline-flex items-center gap-2 font-body text-[14px] text-mist">
            <Lock className="w-4 h-4 text-gold shrink-0" /> Fixed price. No surprise invoices.
          </span>
          <span className="inline-flex items-center gap-2 font-body text-[14px] text-mist">
            <Check className="w-4 h-4 text-gold shrink-0" /> Full ownership at delivery.
          </span>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[32px] md:text-[42px] text-white mb-8">Frequently Asked Questions, Pricing</h2>
          {faqs.map((f) => <AccordionItem key={f.q} question={f.q} answer={f.a} />)}
        </div>
      </section>
    </PageTransition>
  );
}
