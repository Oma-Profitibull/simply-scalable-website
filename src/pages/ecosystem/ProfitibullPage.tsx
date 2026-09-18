import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const profitibullFaqs = [
  { q: 'Is Profitibull just GoHighLevel with a different name?', a: 'No. Profitibull is a GoHighLevel white-label with significant custom enhancements built on top, including the ProfitBot AI integration, the unified workflow builder that connects to ProfitLink and ProfitMail, and an implementation that is pre-configured rather than handed to the client as a blank account. GoHighLevel is the infrastructure underneath Profitibull. The platform the client uses is built, configured, and enhanced well beyond what a standard GHL account provides.' },
  { q: 'Can Profitibull replace my current CRM?', a: 'For most businesses using a lightweight CRM, a spreadsheet, or a disconnected set of tools, yes. Profitibull covers contact management, pipeline tracking, campaign delivery, automation, booking, and reporting in one platform. For businesses deeply invested in Salesforce or HubSpot with significant historical data and complex integrations, the custom CRM integration option connects Profitibull’s outreach and automation layer to the existing CRM rather than replacing it.' },
  { q: 'How does the GoHighLevel white-label work? Will my clients see GoHighLevel branding?', a: 'The white-label configuration removes all GoHighLevel branding from the client experience. Clients see the Profitibull interface, or for agencies using Profitibull as a client platform, they see the agency’s brand. GoHighLevel is the infrastructure. The client-facing product is Profitibull.' },
  { q: 'Does Profitibull work as a standalone product or does it require the other ecosystem products?', a: 'Profitibull CRM works as a fully standalone product. You do not need Simply Scrapable, ProfitLink, ProfitMail, or ProfitBot to use it. The additional value comes from connecting Profitibull to the rest of the ecosystem through the unified workflow builder, at which point contact management, outreach, and AI intelligence all operate from one place.' },
  { q: 'What is the difference between Profitibull and the full Profitibull Ecosystem?', a: 'Profitibull CRM is the core product: the GoHighLevel-based CRM with custom AI enhancements. The Profitibull Ecosystem refers to all four products together: Profitibull CRM, ProfitMail, ProfitLink, and ProfitBot. Each product can be used independently or as part of the full stack.' },
  { q: 'How long does it take to get set up on Profitibull?', a: 'Profitibull setup time depends on the complexity of the configuration required. A standard setup with pre-built workflow templates and a configured pipeline can be operational quickly. A fully custom buildout with bespoke automation sequences, custom CRM integration, and advanced workflow architecture takes longer and is scoped as a custom project. Visit profitibull.com for current onboarding details.' },
];

const ProfitibullFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Frequently Asked Questions — Profitibull</h2>
        <div className="space-y-3">
          {profitibullFaqs.map((faq, i) => (
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

const ProfitibullPage = () => {
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
              The CRM and marketing automation platform built by people who use it every day.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Profitibull is the full-stack marketing arm of the Simply Scalable ecosystem. CRM, email, LinkedIn outreach, and AI intelligence in one place, built on a GoHighLevel white-label foundation with custom enhancements on top. It was built because no off-the-shelf tool did what the team actually needed. It is used by hundreds of businesses because they have the same problem.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://profitibull.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E93D3D] hover:bg-[#D32F2F] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Explore Profitibull <ArrowRight size={18} />
              </a>
              <a href="https://profitibull.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#E93D3D] text-white px-6 py-3 rounded-lg transition-colors">
                Visit profitibull.com
              </a>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#E93D3D]/20 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Profitibull Platform Screenshot</span>
          </div>
        </div>
      </section>

      {/* WHY PROFITIBULL EXISTS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">We built Profitibull because we needed it and nothing on the market was it.</h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6 text-white/70 leading-relaxed max-w-3xl">
            <p>GoHighLevel is a powerful platform. Most businesses using it are getting 30% of what it can actually do because setting it up correctly, building the automation sequences that convert, and adding the AI intelligence layer on top requires expertise most teams do not have internally.</p>
            <p>Phil Murphy built Profitibull as an opinionated GoHighLevel implementation. Not a blank GHL account handed to a client. A fully configured, AI-enhanced, outreach-ready CRM platform built the way it should be from the start, with the workflow logic, the automation sequences, and the AI features that make the difference between a tool your team uses and one they ignore.</p>
            <p>The result is a CRM that reflects how a real sales and marketing operation works. The pipeline stages make sense. The automation fires when it should. The AI layer handles the work that was previously manual. And because it is built on GoHighLevel, it has the depth and the native integration ecosystem that took years for the platform to build.</p>
            <p>Profitibull is not GHL with a new logo. It is GoHighLevel built the right way, enhanced with capabilities the native platform does not provide, and delivered as a ready-to-use product rather than a blank configuration.</p>
          </div>
        </div>
      </section>

      {/* THE PROFITIBULL ECOSYSTEM */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Profitibull is not one product. It is a full marketing and outreach stack.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>The Profitibull ecosystem consists of four products that work together inside the unified workflow builder. Each one can be used independently. Together they replace the four to six separate tools most sales and marketing teams are currently managing across multiple dashboards, multiple subscriptions, and multiple places to troubleshoot.</p>
              <p>The four products are Profitibull CRM, ProfitMail, ProfitLink, and ProfitBot. Their dedicated pages go deep on each one. The overview below shows how they fit together as a stack.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-xl font-semibold text-white mb-6">What the stack covers:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Profitibull CRM', desc: 'Profitibull CRM handles contact management, pipeline tracking, opportunity management, campaign delivery, and the CRM automation that connects marketing actions to sales outcomes.' },
                { name: 'ProfitMail', desc: 'ProfitMail handles email outreach and cold email campaigns through Instantly infrastructure with domain reputation management built in.' },
                { name: 'ProfitLink', desc: 'ProfitLink handles LinkedIn outreach automation: connection requests, message sequences, post engagement, inbox management, and multi-account operations for agencies.' },
                { name: 'ProfitBot', desc: 'ProfitBot handles AI intelligence across the entire stack: lead scoring, outreach content generation, campaign routing, and the approval checkpoint system that ensures no campaign fires without human sign-off.' },
              ].map((product) => (
                <div key={product.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-3">{product.name}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFITIBULL CRM - DEEP DIVE */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">A CRM built around how your sales process actually works, not how a generic platform assumes it does.</h2>
          </div>

          {/* Pipeline and Opportunity Management */}
          <div className="mb-20">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The view that shows you exactly where every deal stands.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Profitibull's pipeline is not the default GoHighLevel pipeline with renamed stages. It is configured around the actual stages of your sales process during the buildout. What happens after a discovery call? What defines a qualified opportunity versus a contacted lead? What triggers a follow-up task and to whom? These decisions are made at setup, not improvised by the team as they go.</p>
                <p>The pipeline view gives your sales team one place to see the full state of the business: deal count by stage, value by stage, activity due today, and deals at risk of going cold. The view your manager sees is the view your team builds together.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Custom pipeline stages mapped to your actual sales or delivery process',
                  'Opportunity cards with contact details, deal value, and activity history',
                  'Task and follow-up management connected to pipeline stage',
                  'Deal value tracking across stages with aggregate reporting',
                  'Pipeline movement triggers that fire automation when a deal advances',
                  'Lost deal tracking with reason codes for pipeline analysis',
                  'Multi-pipeline support for businesses with different offer tracks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact and Relationship Management */}
          <div className="mb-20">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Every contact. Every interaction. One record.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Every contact in Profitibull has a complete record: their profile information, their communication history across every channel, their pipeline stage, the campaigns they have been added to, the tags that segment them, and the notes your team has logged. No matter which team member interacts with a contact, they see the same complete history.</p>
                <p>Contact segmentation through tags and custom fields means your list is not one undifferentiated database. It is a set of defined segments that automation, campaigns, and reporting can address precisely.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Full contact profiles with custom fields for your specific data needs',
                  'Complete communication history: email, SMS, calls, and LinkedIn in one timeline',
                  'Tag-based segmentation for targeting, filtering, and automation triggering',
                  'Company records connected to individual contacts',
                  'Duplicate detection and merge capability',
                  'Contact import from CSV, GoHighLevel, and connected platforms',
                  'Contact activity tracking showing every touchpoint in chronological order',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workflow and Automation */}
          <div className="mb-20">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The follow-up that fires correctly, every time, without someone remembering to do it.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Automation in Profitibull is built around the actual logic of your sales and marketing process. What happens when a lead submits a form? What happens when a deal reaches a specific pipeline stage? What happens when a client has not been contacted in 30 days? These trigger points are mapped during the buildout and built into the automation architecture before the platform goes live.</p>
                <p>The result is a CRM where the system does the follow-up so the team can focus on the conversations that require a human.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Form submission triggers with immediate follow-up sequences',
                  'Pipeline stage triggers that fire actions when a deal moves forward or backward',
                  'Time-based triggers for re-engagement and follow-up cadence management',
                  'SMS, email, and voicemail drop sequences',
                  'Internal task and notification triggers for team action items',
                  'Conditional logic branches for if-then automation paths',
                  'Multi-step nurture sequences that run over days, weeks, or months',
                  'Workflow templates for common sales and marketing scenarios',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Email and SMS Campaigns */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The campaigns that keep your list engaged and your pipeline warm.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Profitibull's native email and SMS capability handles the marketing and nurture layer of your contact database. Broadcast emails to segmented lists. Drip campaigns that run on enrollment-triggered schedules. SMS sequences for contacts who respond better to text than email. All of it managed inside the CRM so campaign activity is logged against the contact record it belongs to.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Email broadcast campaigns to full lists or filtered segments',
                  'Drip email sequences on enrollment-triggered schedules',
                  'SMS campaigns with two-way messaging capability',
                  'A/B testing for subject lines and email content',
                  'Campaign performance analytics: open rates, click rates, reply rates, and conversion tracking',
                  'Unsubscribe management and compliance handling',
                  'Template library for campaigns, nurture sequences, and transactional emails',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Calendar and Appointment Booking */}
          <div className="mb-20">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Booked calls that show up in your CRM automatically.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Calendar integration in Profitibull connects your booking availability to the CRM so that when a prospect books a call, a contact record is created or updated, a pipeline opportunity is created at the appropriate stage, and any follow-up automation triggered by a booking fires automatically. The booking is not a separate event that someone has to manually log. It is a CRM event from the moment it happens.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Calendar type configuration for different appointment categories',
                  'Availability rules and buffer times between appointments',
                  'Booking page design and embed capability',
                  'Automatic contact record creation on new booking',
                  'Pipeline opportunity creation triggered by booking',
                  'Reminder sequences delivered before the appointment',
                  'No-show and cancellation re-engagement workflows',
                  'Round-robin assignment for teams with multiple booking members',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reporting and Analytics */}
          <div className="mb-20">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">The numbers that tell you how the business is actually performing.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Profitibull reporting covers the metrics that matter for a sales and marketing operation: pipeline value by stage, campaign performance by channel, contact growth over time, and conversion rates at each stage of the funnel. Reports are built around your specific pipeline configuration so the numbers you see reflect your actual sales process, not a generic CRM template.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Pipeline value and deal count by stage and by rep',
                  'Campaign performance: delivery, open, click, reply, and conversion rates',
                  'Contact database growth and source tracking',
                  'Conversion rate by pipeline stage',
                  'Activity reporting: calls, emails, tasks, and meetings by rep',
                  'Revenue tracking for closed opportunities',
                  'Custom report configuration for business-specific metrics',
                  'Dashboard widgets for at-a-glance performance visibility',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Custom CRM Integration */}
          <div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Already on a different CRM? We can work with that.</h3>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
                <p>Profitibull is built on GoHighLevel. Most clients who use it are either new to CRM or migrating from a simpler tool. For businesses already deeply invested in a different CRM platform, Salesforce, HubSpot, or a custom database, a custom CRM integration option is available. This connects the Profitibull outreach and automation layer to your existing CRM so your contact data stays where it lives while the campaign and workflow infrastructure connects to it.</p>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-lg font-semibold text-white mb-4">What this covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Bi-directional sync between Profitibull and an existing CRM',
                  'Contact and opportunity data mapping between platforms',
                  'Workflow triggers that update both systems when a contact\'s status changes',
                  'Campaign activity logged in the external CRM alongside native campaign data',
                  'Custom integration architecture scoped based on the specific CRM and data requirements',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE UNIFIED WORKFLOW BUILDER IN PROFITIBULL */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">One workflow builder. Every product in the ecosystem. One place to build, manage, and fix all of it.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>The most important thing to understand about Profitibull is how it connects to the rest of the ecosystem through the unified workflow builder.</p>
              <p>A workflow in Profitibull is not limited to email and SMS. It can start with a Simply Scrapable lead search, run the lead through a ProfitBot ICP assessment, send a LinkedIn connection request via ProfitLink, follow up with a ProfitMail email sequence, and create a Profitibull CRM opportunity when a positive response is received. That entire sequence lives in one workflow, built in one place, managed from one interface.</p>
              <p>Previously, doing this required building in GoHighLevel, building separately in a LinkedIn automation tool, managing the two independently, and manually coordinating when a contact moved between them. The unified workflow eliminates that entirely.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-xl font-semibold text-white mb-6">What this means in practice:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'CRM actions are triggered by LinkedIn responses from ProfitLink',
                'Email follow-up from ProfitMail fires based on CRM stage changes in Profitibull',
                'ProfitBot assessments appear as steps inside Profitibull workflows',
                'Approval checkpoints pause the entire workflow until a human reviews the output',
                'All activity across every channel is logged to the Profitibull contact record',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E93D3D] mt-2 shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Five business profiles that get the most from a fully connected CRM and outreach stack.</h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'The Sales Team Replacing Three Separate Tools', desc: 'A sales team currently managing a CRM in one tool, email campaigns in another, and LinkedIn outreach manually or through a disconnected automation tool. Three logins, three workflows, and three places to troubleshoot when something breaks. Profitibull plus ProfitLink plus ProfitMail replaces all three with one workflow and one place to manage everything.' },
              { num: '02', title: 'The Agency Needing a White-Label CRM for Clients', desc: 'A marketing agency that wants to provide clients with a branded CRM experience as part of their service offering. Profitibull’s GoHighLevel foundation supports full white-labeling: the client sees the agency’s brand, not GoHighLevel or Profitibull. The agency manages the configuration and the automation. The client gets a polished, branded platform.' },
              { num: '03', title: 'The Coach or Course Creator Managing a Client Base', desc: 'A coaching business or course creator with a contact database that spans leads, active clients, past clients, and prospects. Email sequences run at different stages. Calls are booked through the platform. Client progress is tracked. Follow-up is automated. Profitibull handles all of it inside one CRM without requiring three separate subscriptions.' },
              { num: '04', title: 'The Founder Running Their Own Outreach', desc: 'An early-stage founder who does not have a sales team yet and needs to run a systematic outreach operation solo. Profitibull provides the CRM structure, the pipeline visibility, and the automation that a larger team would typically require multiple tools to replicate.' },
              { num: '05', title: 'The Business Graduating from Spreadsheets', desc: 'A business that has been tracking leads and clients in spreadsheets or a lightweight tool like Notion and has reached the point where the lack of automation, the lack of pipeline visibility, and the lack of campaign capability is costing deals. Profitibull is the step up that does not require a six-month implementation project or an enterprise contract.' },
            ].map((uc) => (
              <div key={uc.num} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col">
                <span className="text-[#E93D3D] font-bold text-sm mb-3">{uc.num}</span>
                <h3 className="text-white font-bold text-lg mb-3">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFITIBULL IN THE ECOSYSTEM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Profitibull is the CRM layer everything else flows into.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
              <p>Every lead found by Simply Scrapable, qualified by ProfitBot, reached by ProfitLink, and followed up by ProfitMail ends up in Profitibull as a CRM contact with a full activity history across every touchpoint. The pipeline tracks their progress. The automation manages the next steps. The reporting shows what is working.</p>
              <p>Profitibull is where the outreach operation becomes a sales operation. It is the layer that turns lead activity into pipeline and pipeline into revenue.</p>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 bg-[#E93D3D] hover:bg-[#d32f2f] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore the Full Ecosystem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Profitibull for yourself.</h2>
            <p className="text-white/70 leading-relaxed mb-10">Visit profitibull.com to explore the platform, or book a discovery call to see how Profitibull fits into your specific operation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://profitibull.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E93D3D] hover:bg-[#d32f2f] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Visit Profitibull
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProfitibullFAQ />
    </div>
  );
};
export default ProfitibullPage;
