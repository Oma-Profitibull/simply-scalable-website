import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, KeyRound, Copy, Plug } from 'lucide-react';

const ghlFaqs = [
  { q: 'Do I need to already have a GoHighLevel account to work with you?', a: 'No. We can set up a new GoHighLevel account from scratch as part of the buildout. If you already have an account, we work inside it. If you have an existing account that needs to be restructured or rebuilt, we assess the current state during the discovery session and scope the work accordingly.' },
  { q: 'Can you migrate our contacts and data from our current CRM into GoHighLevel?', a: 'Yes. CRM migration is a common part of GHL buildout projects. This includes mapping your existing contact and opportunity data to GoHighLevel’s data model, migrating records cleanly, and validating the migration before the new account goes live. The complexity of the migration depends on the volume of data and the structure of your current CRM.' },
  { q: 'What is a GHL snapshot and why does it matter for agencies?', a: 'A snapshot is a saved copy of a GoHighLevel account’s configuration: the pipelines, workflows, funnels, templates, custom fields, and automation logic. For agencies managing multiple clients on GHL, a snapshot allows you to deploy a proven, complete buildout to a new client account in hours rather than building from scratch each time. We create clean, documented snapshots that are designed for reliable replication across client accounts.' },
  { q: 'Can you build custom integrations between GoHighLevel and tools GHL does not natively connect to?', a: 'Yes. We build direct API integrations and webhook-based connections between GoHighLevel and external tools that are not available through native GHL integrations or Zapier. If the external tool has an available API, a direct integration is generally possible. The integration architecture is scoped during the discovery session.' },
  { q: 'How is a Simply Scalable GHL buildout different from hiring a GHL-certified consultant?', a: 'The core difference is that we build and operate a product on GoHighLevel every day. Profitibull, our own CRM and marketing automation platform, runs on a GHL white-label with custom AI enhancements. We understand the platform at an architectural level because we have stress-tested it at scale. Most GHL consultants configure accounts. We architect systems.' },
  { q: 'How long does a GoHighLevel buildout take?', a: 'A focused GHL buildout for a single business typically takes three to six weeks from a signed agreement to a fully tested, live account. Agency buildouts with sub-account architecture, snapshot creation, and multi-client configuration take longer depending on the number of client environments and the complexity of the automation required. The exact timeline is defined in the project brief before any work begins.' },
];

const GHLBuildoutFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Frequently Asked Questions: GoHighLevel Buildouts</h2>
        <div className="space-y-4">
          {ghlFaqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="text-[#E93D3D] shrink-0 text-xl font-light">{openFaq === i ? '×' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GHLBuildoutPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              GoHighLevel can do a lot more than most people ever get it to do.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              The platform is powerful. The problem is that most agencies and businesses never get past 30% of what it is actually capable of. We build GoHighLevel the right way from the start: the architecture, the automation, the white-labeling, and the workflows that actually convert. We know the platform because we built our own CRM on it and run it every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#E93D3D] hover:bg-[#D32F2F] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Build My GHL Setup <ArrowRight size={18} />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#E93D3D] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E93D3D]/20 via-transparent to-[#E93D3D]/5 border border-white/10" />
              <div className="absolute inset-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#E93D3D] mb-2">GHL</div>
                  <div className="text-white/40 text-sm tracking-wide">Built Right</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM WITH MOST GHL SETUPS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Most GoHighLevel accounts are set up fast. Fast is not the same as right.
            </h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6 text-white/70 leading-relaxed max-w-3xl">
            <p>GoHighLevel is sold as a platform that replaces everything. Funnel builder, CRM, email, SMS, booking, reputation management, memberships, and more. That list is accurate. The platform can genuinely do all of those things.</p>
            <p>The problem is not the platform. The problem is setup. GoHighLevel rewards operators who understand its architecture. When the account is structured correctly from the start, the automation works the way it was designed to work, the pipeline reflects how the business actually sells, and the sub-account model scales without creating chaos. When it is not, you end up with a powerful platform that underperforms because the foundation it is running on was built in a hurry.</p>
            <p>The other problem is the gap between what GHL does natively and what your specific operation actually needs. GoHighLevel gives you the building blocks. It does not give you the blueprint for your business. The difference between a GHL account that converts and one that sits half-configured and underused is almost always the quality of the buildout behind it.</p>
            <p>We have seen both. We built Profitibull on a GoHighLevel white-label with custom AI enhancements. That product is used by hundreds of teams and runs every day without developer intervention. That experience is what we bring to every GHL buildout we deliver for clients.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Every layer of a GoHighLevel account built to do exactly what your business needs.
            </h2>
          </div>

          {/* Subsection 1 - Full Account Setup and Architecture */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The foundation everything else runs on.</h3>
                <p className="text-white/70 leading-relaxed">
                  A GoHighLevel account set up correctly from the start performs differently than one configured under time pressure. The account-level settings, the user roles, the calendar configurations, the pipeline logic, the contact and opportunity data structure: all of these decisions compound over time. Getting them right at the beginning saves significant rework later and unlocks the automation layers that depend on clean underlying architecture.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Account-level configuration and settings',
                    'User roles and permission structure',
                    'Calendar types and availability rules configured to your booking model',
                    'Custom fields for contacts, opportunities, and companies',
                    'Tag architecture for segmentation and automation triggers',
                    'Pipeline stages mapped to your actual sales or delivery process',
                    'Dashboard configuration for your team’s daily use',
                    'Domain and subdomain setup and DNS configuration',
                    'Connected channels: email, SMS, calling, and social inbox',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Subsection 2 - Sub-Account Architecture for Agencies */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The structure that lets you manage every client without losing control of any of them.</h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>GoHighLevel's sub-account model is one of its most powerful features and one of the most commonly misconfigured. Agencies that manage multiple clients on GHL need a sub-account architecture that keeps client data isolated, makes it easy to replicate successful buildouts across new clients, and gives the agency a clean master account view without mixing client information.</p>
                  <p>Done correctly, the sub-account model scales. A new client gets onboarded into a properly structured environment in hours, not days. Snapshots replicate the buildout automatically. The agency operates like a platform company, not a service business scrambling to rebuild the same system from scratch for every new account.</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Agency account architecture and sub-account structure',
                    'Sub-account template design and snapshot creation',
                    'Client onboarding workflow from sub-account creation to handover',
                    'Data isolation and access controls between sub-accounts',
                    'Agency-level reporting across all sub-accounts',
                    'Reseller and white-label configuration for agencies building on GHL for their own clients',
                    'Sub-account provisioning automation for high-volume agency operations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Subsection 3 - White-Labeling and Branded Client Portals */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Your brand. Your platform. GoHighLevel running underneath it.</h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>White-labeling GoHighLevel means your clients never see GoHighLevel. They see your platform, your logo, your color scheme, and your domain. The underlying power of GHL runs the operation while your brand takes the front-facing position. For agencies and software companies building on top of GHL, this is the difference between a managed service and a product.</p>
                  <p>We built Profitibull this way. The platform runs on a GoHighLevel white-label with custom AI enhancements built on top. Profitibull users see Profitibull. They interact with Profitibull features. GoHighLevel is the infrastructure that powers it. That same architecture is available for your business.</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Full white-label configuration including logo, colors, and domain',
                    'Custom login page and branded portal experience',
                    'Branded email communications from the platform',
                    'Custom mobile app branding where applicable',
                    'White-label desktop and mobile app configuration',
                    'Custom domain setup for client-facing portals',
                    'Removal of all GoHighLevel branding from the client experience',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection 4 - Custom Workflows and Automation Sequences */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The automation that runs your follow-up, your nurture, and your client delivery without manual intervention.</h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>Automation is where GoHighLevel earns its reputation, and where poor buildouts lose the most value. A workflow that fires incorrectly, triggers at the wrong time, or sends the wrong message to the wrong contact does not just underperform. It creates problems that are harder to fix than if the automation had not existed at all.</p>
                  <p>We build workflows that are mapped to the actual logic of your sales or delivery process before a single trigger is set. What happens when a lead submits a form? What happens at each pipeline stage? What happens when a deal goes cold? What happens when a client onboards? Every workflow is documented before it is built and tested before it goes live.</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Lead capture and immediate follow-up sequences',
                    'Multi-step nurture campaigns across email, SMS, and voicemail',
                    'Pipeline stage-based automation triggers',
                    'Appointment booking confirmation and reminder sequences',
                    'No-show and cancellation re-engagement workflows',
                    'Post-sale client onboarding automation',
                    'Review request sequences timed to client satisfaction milestones',
                    'Re-engagement campaigns for cold or lapsed contacts',
                    'Internal notification workflows for team actions and pipeline changes',
                    'Conditional logic and if/else branching for complex automation paths',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection 5 - Funnel and Landing Page Builds */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The pages that do the work of converting traffic into booked calls and captured leads.</h3>
                <p className="text-white/70 leading-relaxed">
                  GoHighLevel's funnel and landing page builder is capable of producing high-converting pages when used by someone who understands both the platform and conversion design. We build funnels that are connected to the automation infrastructure behind them: when a lead submits a form, the workflow fires, the contact is created and tagged correctly, the follow-up starts, and the pipeline opportunity is created. The page and the back-end operate as one system.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Lead generation landing pages and opt-in funnels',
                    'Appointment booking pages integrated with calendar availability',
                    'Sales funnels with multi-step form sequences',
                    'Thank-you pages and post-conversion follow-up triggers',
                    'Webinar and event registration pages',
                    'Offer and VSL pages with checkout integration',
                    'A/B testing setup for conversion optimization',
                    'Mobile-optimized design across all page types',
                    'Pixel and tracking code integration',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection 6 - Snapshot Creation and Account Replication */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The system that lets you deploy a proven buildout to a new client in hours.</h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>A GHL snapshot captures an entire buildout: the pipelines, the workflows, the funnels, the calendars, the custom fields, the email templates, and the automation logic. Snapshots are the mechanism that allows agencies to scale. Instead of rebuilding from scratch for every new client, you deploy the snapshot and configure the client-specific details. The foundation is already built.</p>
                  <p>We create snapshots that are clean, well-documented, and designed for replication. We also audit and improve existing snapshots that have accumulated technical debt over time: outdated workflows, broken triggers, and redundant automation that fires when it should not.</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Full account snapshot creation from a completed buildout',
                    'Snapshot documentation describing every component and its purpose',
                    'Snapshot deployment process for new sub-accounts',
                    'Snapshot audit and cleanup for existing agency accounts',
                    'Version control for snapshots across different client types or verticals',
                    'Replication testing to confirm the snapshot deploys correctly in a new environment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection 7 - Third-Party Integrations via API and Webhooks */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">GoHighLevel connected to everything else your business runs on.</h3>
                <p className="text-white/70 leading-relaxed">
                  GoHighLevel does not operate in isolation in most businesses. It needs to talk to external tools: payment processors, scheduling software, fulfillment systems, analytics platforms, and custom applications. We build the integration layer that connects GHL to the rest of your stack using APIs, webhooks, and Zapier or Make where appropriate, and custom API connections where a more reliable, direct integration is required.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Stripe and payment processor integration for billing and subscription management',
                    'Calendly, Acuity, and third-party scheduling tool migration or integration',
                    'Zapier and Make workflow connections to external platforms',
                    'Direct API integrations for custom applications and databases',
                    'Webhook configuration for real-time data sync between GHL and external systems',
                    'CRM data migration from existing platforms into GoHighLevel',
                    'Analytics and reporting integrations for attribution and performance tracking',
                    'E-commerce platform connections for order and customer data sync',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection 8 - Ongoing Optimization and Support */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The buildout that keeps performing as your business grows.</h3>
                <p className="text-white/70 leading-relaxed">
                  A GoHighLevel buildout is not a set-it-and-forget-it project. Businesses grow, offers change, sales processes evolve, and automation that worked for a hundred leads a month may need to be restructured for a thousand. We offer ongoing optimization and support for clients who want the platform to grow with the business, not become a legacy system that the team works around.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What this covers</h4>
                <ul className="space-y-3">
                  {[
                    'Monthly automation audit and performance review',
                    'Workflow optimization based on conversion data',
                    'New funnel and sequence builds as offers evolve',
                    'Sub-account management for growing agency operations',
                    'Team training on new features and platform updates',
                    'Technical troubleshooting for workflows and integrations',
                    'Platform expansion as new GHL features are released',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Five GoHighLevel operator profiles we build for consistently.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'The Agency Setting Up GHL for the First Time',
                body: 'A marketing or coaching agency that has decided to move its operations onto GoHighLevel and needs the account built correctly from the start. They have seen what GHL can do, they understand why they want it, and they want a team that will build the foundation properly rather than configuring it piecemeal as they go.',
              },
              {
                num: '02',
                title: 'The Agency Managing Clients on GHL',
                body: 'An agency that has been on GoHighLevel for a while and is managing multiple client sub-accounts. The initial setup was done under time pressure and has accumulated technical debt: duplicate workflows, broken automation, inconsistent naming conventions, and no clean snapshot to replicate for new clients. A rebuild and restructure gets the operation onto a proper foundation.',
              },
              {
                num: '03',
                title: 'The Coaching Business or Course Creator',
                body: 'A coach or educator who has chosen GoHighLevel as their all-in-one platform for funnels, email, calendar, community, and CRM. They need the platform configured around their specific offer structure and client journey, not a generic setup that requires workarounds for everything that does not fit the default model.',
              },
              {
                num: '04',
                title: 'The SaaS or Software Company White-Labeling GHL',
                body: 'A software company that wants to offer a branded CRM and marketing automation platform to their clients or customers without building one from scratch. GoHighLevel’s white-label program makes this possible. The buildout and configuration determine whether the resulting product is something clients actually use or something they ignore.',
              },
              {
                num: '05',
                title: 'The Business Migrating From HubSpot, Salesforce, or Another CRM',
                body: 'A business that has outgrown its current CRM or found that GoHighLevel is a better fit for its sales and marketing model and needs the migration handled correctly: contact data transferred cleanly, pipelines rebuilt to match the new model, and automation rebuilt to replace what the old system was doing.',
              },
            ].map((uc, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#E93D3D]/40 transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-[#E93D3D] text-sm font-mono font-semibold">{uc.num}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-4">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE LIVE PROOF - PROFITIBULL */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-4xl">
              We did not just learn GoHighLevel. We built a product on it that hundreds of teams use every day.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What we built</h4>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>Profitibull is the full-stack CRM and marketing automation platform that Simply Scalable built for its own operation when no off-the-shelf tool did what was needed. It runs on a GoHighLevel white-label foundation with custom AI enhancements built on top. ProfitBot, the AI orchestration layer, is integrated directly into the workflow builder. The platform handles CRM, outreach, email, LinkedIn automation, and AI-assisted lead management in one unified system.</p>
                <p>Profitibull is used by hundreds of teams. It runs without developer intervention. It is the direct result of understanding GoHighLevel at the architectural level, not just at the feature level.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">Why this matters for your buildout</h4>
              <p className="text-white/70 leading-relaxed">
                When we build a GoHighLevel account for a client, we are not reading the documentation and configuring settings by trial and error. We are applying the same architectural thinking we used to build and operate a product that runs in production every day. That is a different level of expertise than most GHL agencies offer.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h4 className="text-sm font-semibold text-[#E93D3D] mb-4">What Profitibull demonstrates</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'GoHighLevel can be white-labeled into a fully branded product that users never recognize as GHL',
                'Custom AI features can be integrated into the GHL workflow builder',
                'A properly built GHL foundation scales from a small team to hundreds of users without architectural rework',
                'The platform can be the backbone of a product, not just a tool',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <a
              href="/start"
              className="inline-flex items-center gap-2 bg-[#E93D3D] hover:bg-[#d32f2f] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book a Discovery Call to Talk About Your GHL Build
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE BUILD YOUR GHL ACCOUNT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-5xl">
              From your current setup or a blank account to a fully operational GoHighLevel buildout. Here is exactly how it happens.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Discovery and Architecture Mapping',
                body: 'Before any configuration begins, we map your business: how you sell, how you deliver, how you communicate with leads and clients, what tools GHL will replace, and what it needs to connect to. This session produces the architecture document that every configuration decision is made against.',
              },
              {
                num: '02',
                title: 'Account Structure and Foundation',
                body: 'Phil configures the account foundation: user roles, custom fields, tag architecture, pipeline stages, calendar types, and connected channels. This is the layer that every automation and workflow runs on. Getting it right here prevents significant rework later.',
              },
              {
                num: '03',
                title: 'Design and Funnel Builds',
                body: 'Oma designs and builds the funnels, landing pages, and any branded portal elements. Every page is connected to the automation infrastructure behind it before it is considered complete. A landing page that does not trigger the right workflow on form submission is not a finished page.',
              },
              {
                num: '04',
                title: 'Automation and Workflow Build',
                body: 'Phil builds every workflow against the documented automation logic from the discovery session. Workflows are built, tested with real contacts in a staging environment, and validated before they go live in the main account.',
              },
              {
                num: '05',
                title: 'Integration and Migration',
                body: 'Third-party integrations are configured and tested. If the project includes a contact or data migration from an existing CRM, the migration is executed and validated before the new account goes live.',
              },
              {
                num: '06',
                title: 'Team Training and Handover',
                body: 'At delivery, your team receives a full walkthrough of the account: how to use every pipeline, how to manage automation, how to create new workflows, and how to operate the platform day to day. Documentation is provided for every component built.',
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group relative bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#E93D3D]/40"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-[#E93D3D] text-sm font-mono font-semibold">{phase.num}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-4">{phase.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU OWN */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-4xl">
              Everything we build inside your GoHighLevel account belongs to your business.
            </h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <p className="text-white/70 leading-relaxed max-w-3xl">
              Every workflow, every funnel, every snapshot, every automation sequence, every integration configuration, and every piece of documentation we produce is yours. If you choose to move to a different platform in the future, the documentation ensures you understand exactly what was built and why. If you choose to bring in another GHL specialist, they inherit a clean, documented account with no technical debt. There is no proprietary layer that requires Simply Scalable to be involved in order to operate what we built.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: KeyRound,
                title: 'Your account, your architecture',
                body: 'Complete documentation of every component built. Any qualified GHL specialist can pick up where we left off.',
              },
              {
                icon: Copy,
                title: 'Your snapshots',
                body: 'Every snapshot created is documented, versioned, and yours to deploy, modify, or hand to another team.',
              },
              {
                icon: Plug,
                title: 'Your integrations',
                body: 'Every third-party connection is documented with credentials, configuration details, and the logic behind every trigger and action.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon className="w-6 h-6 text-[#E93D3D] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tell us what you need GoHighLevel to do. We will build the account that actually does it.
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Nine questions. Twenty-four hours. A detailed quote with scope, timeline, and a real number.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 bg-[#E93D3D] hover:bg-[#d32f2f] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-sm">
              <span>Response within 24 hours</span>
              <span className="hidden sm:inline">·</span>
              <span>Built by a team that runs GHL in production every day</span>
              <span className="hidden sm:inline">·</span>
              <span>Full documentation at delivery. No lock-in.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <GHLBuildoutFAQ />
    </div>
  );
};

export default GHLBuildoutPage;
