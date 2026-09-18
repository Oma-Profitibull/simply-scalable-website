import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const ecosystemFaqs = [
  { q: 'Do I have to use all five products or can I start with just one?', a: 'Every product in the ecosystem works as a standalone tool. Most clients start with the product that closes their most immediate gap and add others as their operation grows. Simply Scrapable is the most common starting point because it sits at the top of the funnel and generates the leads that every other product works with. But if your immediate need is LinkedIn automation, CRM setup, AI content generation, or email outreach, you can start there.' },
  { q: 'What makes the Simply Scalable ecosystem different from tools like HubSpot, Apollo, or Instantly?', a: 'The core difference is the unified workflow builder. Tools like HubSpot, Apollo, and Instantly are each excellent at what they individually do. None of them share a workflow with the others. When you need to coordinate a LinkedIn action with a CRM update and an email follow-up, you are managing three separate tools with three separate workflows and three separate places to troubleshoot. The Simply Scalable ecosystem puts all of that into one workflow builder so the entire multi-channel sequence runs from one place.' },
  { q: 'Is the Simply Scalable ecosystem only for agencies or can any business use it?', a: 'Any business that does outreach, manages leads, or runs marketing campaigns can use the ecosystem. The products are used by sales teams, recruiting firms, digital agencies, coaches, consultants, and founders running their own outreach. The unified workflow builder is particularly valuable for agencies managing outreach across multiple clients because all accounts can be managed from one place.' },
  { q: 'How does ProfitBot fit into the ecosystem and how does it work?', a: 'ProfitBot is the AI intelligence layer that connects to workflows across the ecosystem. It assesses leads against your ICP criteria before outreach begins, generates personalized content for each channel, and routes leads to the correct campaign based on their score and profile. Every action ProfitBot proposes goes through a human approval checkpoint before it executes. The AI handles the thinking and the content. The human reviews and approves. The campaign fires only after sign-off.' },
  { q: 'Are the ecosystem products connected to Simply Scalable\'s custom software services?', a: 'Yes. Simply Scalable built the ecosystem products and also builds custom software for external clients. The two offerings are related but separate. Clients who need a custom app, portal, dashboard, or integration work with Simply Scalable\'s custom development services. Clients who need outreach, CRM, LinkedIn automation, email, or AI tools use the ecosystem products. Some clients use both.' },
  { q: 'Where do I start if I want to learn more about a specific product?', a: 'Each product in the ecosystem has its own dedicated page with a full breakdown of capabilities, use cases, and how it works. Use the links below the product summaries above to go deeper on whichever product is most relevant to where your business is right now.' },
];
const EcosystemFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions: The Ecosystem</h2>
        <div className="space-y-3">
          {ecosystemFaqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="text-[#D4AF37] shrink-0 text-xl font-light">{openFaq === i ? '×' : '+'}</span>
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
const EcosystemPage = () => {
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
              We did not just build software for clients. We built an entire product ecosystem for ourselves.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Simply Scrapable finds the leads. Profitibull manages and nurtures them. ProfitLink automates the LinkedIn outreach. ProfitMail runs the email campaigns. ProfitBot handles the AI intelligence across all of it. Five products. One unified workflow. Built by the same team that builds software for businesses like yours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ecosystem#products" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                Explore the Products <ArrowRight size={18} />
              </Link>
              <Link to="/start" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-6 py-3 rounded-lg transition-colors">
                Start a Project
              </Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Connected Ecosystem Diagram</span>
          </div>
        </div>
      </section>
      {/* WHY THE ECOSYSTEM EXISTS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Every product in this ecosystem started as a problem we had ourselves.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>Simply Scalable started as a digital ads company. The team kept running into the same gap: the tools available to manage outreach, track leads, run campaigns, and make sense of prospect data were either too generic, too expensive, or required three separate platforms to accomplish what should have happened in one place.</p>
              <p className="text-white font-medium">So they built the tools themselves.</p>
              <p>Simply Scrapable was built because finding the right leads at the right moment required more intelligence than any list-building tool on the market was providing. Profitibull was built because the CRM and marketing automation tools available were designed for the average business and the average sales process, neither of which described how the team actually operated. ProfitBot was built because the research, content generation, and lead qualification work that consumed hours every week was exactly the kind of work an AI system should handle.</p>
              <p>Each product solved a real internal problem. Each one was refined by using it every day in a real outreach and sales operation. By the time any of them became available to clients, they had already been stress-tested by the team that built them.</p>
              <p>That is the difference between an ecosystem built to sell and an ecosystem built to use. The Simply Scalable ecosystem is both because it started as the second and became the first.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Internal Problem to Live Product Timeline</span>
          </div>
        </div>
      </section>
      {/* THE FIVE PRODUCTS */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Five products. Each one solves a specific problem. Together they replace an entire stack.</h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">Each product in the ecosystem can be used independently. Each one also connects to the others through a unified workflow builder, which means the more products you use, the more powerful each one becomes.</p>
          </div>
          <div className="space-y-6 mt-12">
            {/* SIMPLY SCRAPABLE */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#38BDF8]/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <span className="text-[#38BDF8] text-xs font-semibold tracking-wide uppercase mb-2 block">Simply Scrapable</span>
                  <h3 className="text-white text-xl font-bold mb-2">Lead Intelligence, Signal Surfacing, and Proactive Prospect Research</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-white/70 leading-relaxed mb-4">Simply Scrapable is the top of the funnel and the entry point into the ecosystem. It finds the right companies and contacts, builds 360-degree profiles across multiple intelligence sources, and monitors target accounts for the signals that tell you the right moment to reach out. Lewis and Clark, the AI-powered search engine inside Simply Scrapable, goes beyond a database lookup. It surfaces contact and company data in real time, not from cached records. Scheduled searches repopulate your lists automatically at defined intervals. The Listener monitors company social channels and surfaces relevant signals passively, without requiring a manual search to run.</p>
                  <p className="text-white/50 text-sm mb-4"><span className="text-white/70 font-medium">What it replaces:</span> Manual prospecting, static list purchases, and disconnected social listening tools.</p>
                  <ul className="space-y-1 mb-4">
                    {['AI-powered company and contact search','360-degree profiles across LinkedIn, Glassdoor, Crunchbase, and social media','Real-time data, not cached records','Scheduled searches that run and populate automatically','Passive signal monitoring via the Listener','Lead routing directly into defined outreach workflows','Profile scraping integrated into the browsing experience'].map((li,i)=>(
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://simplyscrapable.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#38BDF8] hover:underline text-sm font-medium">Explore Simply Scrapable <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            {/* PROFITIBULL */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#E93D3D]/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <span className="text-[#E93D3D] text-xs font-semibold tracking-wide uppercase mb-2 block">Profitibull</span>
                  <h3 className="text-white text-xl font-bold mb-2">The Full-Stack CRM and Marketing Automation Platform</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-white/70 leading-relaxed mb-4">Profitibull is the CRM at the center of the ecosystem. Built on a GoHighLevel white-label foundation with custom AI enhancements on top, it handles contact management, pipeline tracking, campaign delivery, and client relationship management in one place. The standard Profitibull setup covers everything a growing sales operation or marketing team needs: a fully configured CRM, pipeline stages mapped to the actual sales process, email and SMS campaign capability, calendar and booking integration, and workflow automation for follow-up and nurture sequences. For businesses not on GoHighLevel, a custom CRM integration is also available.</p>
                  <p className="text-white/50 text-sm mb-4"><span className="text-white/70 font-medium">What it replaces:</span> Generic CRMs, disconnected marketing tools, and the manual coordination between them.</p>
                  <ul className="space-y-1 mb-4">
                    {['Full CRM with pipeline and opportunity management','Contact segmentation and tagging','Email and SMS campaign delivery','Calendar and appointment booking integration','Automated workflow sequences for lead nurture and follow-up','Funnel and landing page capability','GoHighLevel white-label with custom AI enhancements','Custom CRM integration available for non-GoHighLevel businesses'].map((li,i)=>(
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#E93D3D] mt-1">•</span><span>{li}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/ecosystem/profitibull" className="inline-flex items-center gap-2 text-[#E93D3D] hover:underline text-sm font-medium">Explore Profitibull <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>
            {/* PROFITLINK */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-2 block">ProfitLink</span>
                  <h3 className="text-white text-xl font-bold mb-2">LinkedIn Outreach Automation Built for Agencies and Sales Teams</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-white/70 leading-relaxed mb-4">ProfitLink connects your LinkedIn account without requiring your password and enables automated connection requests, message sequences, profile views, and post engagement at scale. It is built for agencies managing LinkedIn outreach across multiple accounts and for sales teams running systematic LinkedIn campaigns alongside email and CRM workflows. ProfitLink goes beyond what most LinkedIn automation tools offer. Beyond connection requests and message sequences, it enables commenting on posts, syncing message history for full inbox visibility, and connecting WhatsApp directly for multi-channel outreach. When a lead does not have a LinkedIn presence and a combined workflow is running, ProfitLink passes the contact to the next available channel automatically.</p>
                  <p className="text-white/50 text-sm mb-4"><span className="text-white/70 font-medium">What it replaces:</span> Manual LinkedIn outreach, disconnected LinkedIn automation tools, and the time cost of managing multiple LinkedIn accounts separately.</p>
                  <ul className="space-y-1 mb-4">
                    {['LinkedIn account connection without password requirement','Automated connection requests with personalized messaging','Full message sequence management','Profile views that simultaneously capture prospect data','Post commenting for engagement-based outreach','LinkedIn inbox sync and reply tracking','WhatsApp direct connection for multi-channel campaigns','Multi-account management for agencies','Automatic channel fallback when LinkedIn profile is unavailable'].map((li,i)=>(
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#D4AF37] mt-1">•</span><span>{li}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/ecosystem/profitlink" className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline text-sm font-medium">Explore ProfitLink <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>
            {/* PROFITMAIL */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-2 block">ProfitMail</span>
                  <h3 className="text-white text-xl font-bold mb-2">Email Outreach and Automation That Protects Your Domain</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-white/70 leading-relaxed mb-4">ProfitMail is the email outreach arm of the ecosystem. It runs on Instantly as the sending infrastructure, which means the deliverability, the domain reputation management, and the sending volume are handled by an engine built specifically for cold email at scale. Inside a unified workflow, ProfitMail works in sequence with ProfitLink: LinkedIn actions run first, and if a contact does not have a LinkedIn profile, the system passes automatically to the email steps without manual intervention. The campaign continues down the available channels without requiring a human to redirect it. Domain protection is a built-in consideration. Email volume, sending cadence, and list quality are all managed within parameters that protect the sending domain from reputation damage that would affect not just the campaign but all email sent from that domain.</p>
                  <p className="text-white/50 text-sm mb-4"><span className="text-white/70 font-medium">What it replaces:</span> Generic email tools that damage domain reputation, disconnected cold email platforms, and the manual coordination between email and LinkedIn campaigns.</p>
                  <ul className="space-y-1 mb-4">
                    {['Email outreach powered by Instantly infrastructure','Multi-step email sequence management','Automatic channel fallback from LinkedIn to email in unified workflows','Domain reputation protection through managed sending infrastructure','Campaign analytics and deliverability monitoring','Branded domain setup and email infrastructure management','Workflow integration connecting email actions to CRM, ProfitLink, and ProfitBot'].map((li,i)=>(
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#D4AF37] mt-1">•</span><span>{li}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/ecosystem/profitmail" className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline text-sm font-medium">Explore ProfitMail <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>
            {/* PROFITBOT */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-2 block">ProfitBot</span>
                  <h3 className="text-white text-xl font-bold mb-2">The AI Intelligence Layer That Runs Across the Entire Ecosystem</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-white/70 leading-relaxed mb-4">ProfitBot is the decision-making and content generation layer that connects to workflows across the entire ecosystem. It assesses leads against your ICP before outreach resources are spent on them, generates personalized outreach content across every channel, routes leads to the correct campaign based on their profile, and creates approval checkpoints that ensure no campaign fires without human sign-off. The approval checkpoint architecture is central to how ProfitBot works in practice. Before any campaign activates, ProfitBot presents the generated content and the proposed routing for human review. A task is created in the CRM with a defined review deadline. The campaign does not proceed until the approval is received. The AI handles the thinking. The human controls the outcome.</p>
                  <p className="text-white/50 text-sm mb-4"><span className="text-white/70 font-medium">What it replaces:</span> Manual lead scoring, first-draft content generation, arbitrary campaign routing, and the time cost of reviewing and preparing outreach at scale.</p>
                  <ul className="space-y-1 mb-4">
                    {['Lead scoring against defined ICP criteria','Personalized content generation across every outreach channel','Automated campaign routing based on lead profile','Human approval checkpoints before any campaign fires','Document import for training on proprietary content and frameworks','Integration with CRM for approval task creation and campaign triggering'].map((li,i)=>(
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-[#D4AF37] mt-1">•</span><span>{li}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/ecosystem/profitbot" className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline text-sm font-medium">Explore ProfitBot <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* UNIFIED WORKFLOW BUILDER */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Every product. One workflow builder. One place to build, manage, and fix everything.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>Most outreach and marketing stacks require you to build in two places. Sequences in one tool. CRM automation in another. LinkedIn campaigns in a third. When something breaks, you troubleshoot in all three. When a contact moves between channels, you manage the handoff manually.</p>
              <p className="text-white font-medium">The Simply Scalable ecosystem does not work that way.</p>
              <p>Every product in the ecosystem connects to a single unified workflow builder. A workflow can start with a Simply Scrapable lead search, assess the lead through ProfitBot, send a LinkedIn connection request through ProfitLink, follow up with an email sequence through ProfitMail, create a CRM opportunity in Profitibull, and route the outcome to the next stage, all from one workflow, built in one place.</p>
              <p>When something needs to change, it changes in one place. When something breaks, there is one place to look. When a contact moves between channels, the system handles it automatically based on the logic you defined, not based on someone remembering to move it manually.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">What the workflow builder can do</h3>
              <ul className="space-y-1">
                {['If and else branching for conditional logic at any step','Timing delays from minutes to weeks between steps','Channel fallback when a contact is unreachable on the primary channel','CRM actions triggered by workflow events','ProfitBot assessment steps inserted at any point in the sequence','Lead routing to different campaigns based on assessment outcomes','Approval checkpoints that pause the workflow until a human signs off','Drag and drop step reordering without rebuilding the workflow from scratch','Templates for common workflow types to accelerate setup'].map((li,i)=>(
                  <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="text-[#D4AF37] mt-1">•</span><span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl aspect-video flex items-center justify-center">
              <span className="text-white/20 text-sm">Lead Journey Flow Diagram</span>
            </div>
          </div>
          <blockquote className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border-l-2 border-[#D4AF37] pl-6">
            <p className="text-white text-xl italic leading-relaxed">"One workflow. One place. Manages LinkedIn, email, CRM, AI assessment, and everything in between."</p>
          </blockquote>
        </div>
      </section>
      {/* HOW THE PRODUCTS WORK TOGETHER */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Each product is useful on its own. Together they replace an entire marketing and sales infrastructure.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>The entry point into the ecosystem is Simply Scrapable. Once you are finding the right leads and getting them into your workflow, every gap in your outreach stack becomes visible. No LinkedIn automation? ProfitLink closes that gap. No CRM or email system? Profitibull and ProfitMail close those gaps. No way to qualify leads before spending outreach resources on them? ProfitBot closes that gap.</p>
              <p>Each product reveals the next one. Each gap is a $99 question. And every product added makes the unified workflow more powerful because each new connection creates capabilities the individual products cannot produce alone.</p>
              <p>A lead found in Simply Scrapable that is assessed by ProfitBot, reached on LinkedIn through ProfitLink, followed up by ProfitMail, and managed in Profitibull is a lead that moved through an entire sales process without requiring a single manual step from the moment it entered the workflow to the moment it became an opportunity in the CRM.</p>
              <p className="text-white font-medium">That is the ecosystem working as designed.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Simply Scrapable to Profitibull Lead Journey Diagram</span>
          </div>
        </div>
      </section>
      {/* BUILT BY OPERATORS, USED BY OPERATORS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">These products were used by the Simply Scalable team before they were available to anyone else.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>Every product in this ecosystem was built to solve a problem the Simply Scalable operation faced directly. The lead generation problem. The outreach coordination problem. The AI content generation problem. Each tool was built, used internally, refined based on real use, and made available to clients only after it had been proven in an actual sales and outreach environment.</p>
              <p>The result is a product suite that reflects how a real outreach and marketing operation works, not how a product team imagined it might work. The edge cases are handled because the builder ran into them. The workflows make sense because the builder built them for his own use first.</p>
              <p className="text-white font-medium">Hundreds of teams now use the ecosystem every day. The internal origin is what makes the products work the way they do.</p>
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start with the product that closes your biggest gap. Expand from there.</h2>
          <p className="text-white/70 text-lg mb-8">Every product in the ecosystem can start as a standalone tool. Every standalone tool connects to the full workflow when you are ready. There is no wrong place to begin.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://simplyscrapable.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">Explore Simply Scrapable <ArrowRight size={18} /></a>
            <Link to="/ecosystem/profitibull" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-6 py-3 rounded-lg transition-colors">Explore Profitibull</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-6 py-3 rounded-lg transition-colors">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <EcosystemFAQ />
    </div>
  );
};
export default EcosystemPage;
