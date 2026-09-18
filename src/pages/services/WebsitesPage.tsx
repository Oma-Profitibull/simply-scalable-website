import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle, Lock, Key, Edit, BarChart2, Target, User, Layers } from 'lucide-react';
const faqs = [
  { q: 'What makes a custom website worth it over a well-designed template?', a: 'A template is built for the most common version of a business in a given category. It approximates your brand, your offer structure, and your conversion goals rather than reflecting them precisely. A custom website starts from your specific positioning, your specific audience, and the specific action you need visitors to take. The result is a site that communicates what makes your business different instead of looking like every other business that bought the same theme.' },
  { q: 'Do you handle copywriting for the website or does the client provide it?', a: 'Both options are available. We can write the website copy as part of the project scope, review and refine copy the client provides, or work with a combination of both depending on the pages involved. Copywriting is defined during the scoping session and included in the project brief before work begins. The most effective websites we build are ones where design and copy are developed together, not one after the other.' },
  { q: 'Can you build a website that also connects to a client portal, dashboard, or app?', a: 'Yes. One of the advantages of working with Simply Scalable on a website is that we can scope and build the connected software alongside it. OMS Matchpoint is an example: the marketing website and the recruiting platform were built as one project by the same team. If your website needs to connect to a portal, a dashboard, a booking system, or any other software layer, we scope and build all of it together.' },
  { q: 'Will we be able to update the website ourselves after it is launched?', a: 'Yes. Every website we build includes a CMS configuration that allows your team to add and edit content, publish blog posts, update page copy, and manage media without developer involvement. The CMS is chosen and configured based on your team\'s technical comfort level and the type of content management your site requires.' },
  { q: 'Do you handle SEO as part of the website build?', a: 'SEO architecture is built into every website we deliver: page titles, meta descriptions, heading hierarchy, URL structure, schema markup, site speed optimization, and mobile performance. This is the technical foundation that search engines use to evaluate and rank your site. Ongoing SEO content strategy and link building are separate from the website build but can be scoped as an additional service.' },
  { q: 'How long does it take to build a custom website?', a: 'A focused marketing website for a professional services firm or consulting practice typically takes four to six weeks from a signed agreement to a live, tested site. A larger multi-page site with a content hub, CMS integration, and connected software elements typically takes six to ten weeks. A full website plus platform combination project is scoped based on the full scope of both components. The exact timeline is defined in the project brief before any work begins.' },
];
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
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

const WebsitesPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
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
  const whatWeBuild = [
    {
      num: '01',
      title: 'Marketing and Brand Websites',
      sub: 'The website that does the selling before anyone picks up the phone.',
      body: 'A marketing website is the primary web presence for a business: the place where prospects land, learn what the business does, decide whether it is credible, and take an action. A well-built marketing website communicates the brand clearly enough that the right prospects feel understood, presents the offer in a way that makes the value obvious without requiring a sales call to explain, and converts at a rate that makes the traffic worth having.',
      items: [
        'Homepage and full multi-page marketing site design and development',
        'Brand identity translation into web design: typography, color system, visual language',
        'Conversion-focused page architecture and copywriting structure',
        'Service and offer pages built around specific audience segments',
        'About and team pages that build trust and communicate expertise',
        'Contact and inquiry pages with form integration and CRM connection',
        'Blog and content section with CMS for owner-managed publishing',
        'Testimonial, case study, and social proof integration throughout',
        'SEO architecture built in from the first wireframe',
        'Mobile-responsive design across all devices and screen sizes',
        'Performance optimization and analytics integration',
      ],
    },
    {
      num: '02',
      title: 'Professional Services and Consulting Websites',
      sub: 'The website that positions expertise before the first conversation.',
      body: 'Professional services firms, consultants, coaches, and advisory practices have a specific website challenge: the product is the person or the team, and the quality of that product cannot be fully communicated through features or specifications. A poorly designed consulting website signals that the person behind it does not invest in their own presentation. A well-designed one signals expertise before the first word is read.',
      items: [
        'Positioning and messaging architecture before design begins',
        'Credibility-focused design that signals expertise through layout and visual hierarchy',
        'Service offering pages structured around client outcomes rather than deliverable descriptions',
        'Case study and engagement overview pages that demonstrate proof',
        'Speaking, media, and thought leadership sections where relevant',
        'Discovery call and consultation booking integration',
        'Lead magnet and content offer landing pages',
        'Email capture and CRM integration',
      ],
    },
    {
      num: '03',
      title: 'Business and Platform Launch Websites',
      sub: 'The website that introduces something new to the world and makes the right people pay attention.',
      body: 'Launching a new business, a new product, or a new platform requires a website that does a specific job: communicate what the thing is, who it is for, why it matters, and what someone should do right now to be part of it. The launch website is the first impression at the moment of maximum attention. It has to be right.',
      items: [
        'Brand identity development if the launch is the first public expression of the brand',
        'Launch narrative and positioning architecture',
        'Hero section and value proposition design for maximum first-impression impact',
        'Waitlist and early access capture with CRM integration',
        'Feature or capability teaser sections without revealing IP prematurely',
        'Founder and team sections to establish credibility for new entities',
        'Press and media kit integration',
        'Post-launch transition plan from launch site to full marketing site',
      ],
    },
    {
      num: '04',
      title: 'Multi-Page Informational and Resource Sites',
      sub: 'The website that becomes the authoritative resource in your space.',
      body: 'Some websites are not primarily conversion tools. They are content destinations: places where an audience comes to learn, to research, to find answers, and to develop a relationship with a brand over time. These sites are typically deeper than a standard marketing website, with a larger page count, a more developed content architecture, and a heavier investment in SEO.',
      items: [
        'Full content architecture and page hierarchy design',
        'Topic cluster and pillar page structure for SEO authority building',
        'Resource library and content hub development',
        'Author and contributor pages for multi-voice content operations',
        'Newsletter and subscription integration',
        'Search functionality across the full site content',
        'Content tagging and category architecture',
        'Internal linking structure designed for both user experience and SEO',
        'CMS implementation for large-scale content operations',
      ],
    },
    {
      num: '05',
      title: 'Website Redesigns and Rebuilds',
      sub: 'Taking what exists and building what it should have been.',
      body: 'A website redesign is not a cosmetic refresh. It is a strategic decision to align a digital property with where a business actually is. The reasons vary: the brand has evolved beyond what the current site reflects, the conversion rate has declined as the audience has become more sophisticated, the site has accumulated technical debt that makes it slow and hard to maintain, or the business has grown into a new category that the existing site does not represent.',
      items: [
        'Current site audit covering design, performance, SEO, and conversion architecture',
        'Content audit identifying what to keep, what to update, and what to retire',
        'Redesign strategy defining the goals the new site needs to achieve',
        'New design built to current brand standards, not to an approximation of them',
        'Content migration with redirect mapping to preserve SEO equity',
        'Performance improvements addressing speed and Core Web Vitals',
        'Analytics continuity ensuring tracking is preserved across the transition',
        'Staged launch with testing before the new site replaces the existing one',
      ],
    },
    {
      num: '06',
      title: 'Website Plus Software Combination Builds',
      sub: 'The website and the system behind it, built together by the same team.',
      body: 'One of the advantages of working with Simply Scalable on a website is that the same team that builds the website can build the software behind it. Most website agencies hand off at the point where the marketing site ends and the product begins. We do not have that boundary. When OMS Matchpoint needed a website and a recruiting platform, we built both.',
      items: [
        'Combined website and portal builds',
        'Website and dashboard integration',
        'Marketing site connected to a client or member login area',
        'Website and CRM integration for lead capture and pipeline management',
        'Website and booking system integration',
        'Public-facing site connected to a private-facing product on the same domain',
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-[#050508]">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your website should reflect what your business has actually become.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              A template got you started. At some point, the template starts working against you. Your brand has evolved, your offer has sharpened, your clients are a different caliber than they were when you launched, and the website that exists today does not match any of that. We build custom websites from scratch that reflect exactly who you are right now and convert the people you are trying to reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/start" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                Build My Website <ArrowRight size={18} />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-6 py-3 rounded-lg transition-colors">
                See Our Work
              </Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Website Design Visualization</span>
          </div>
        </div>
      </section>
      {/* WHEN YOUR WEBSITE BECOMES THE PROBLEM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The website that launched your business is not always the website that grows it.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>Most websites start as templates. That is the right call early on. A template gets something live fast, at low cost, with acceptable quality for where the business is at the time. It does the job.</p>
              <p>But businesses grow and templates do not grow with them. The offer evolves and the website cannot accommodate the new structure. The brand matures and the template cannot reflect it properly. The client becomes more sophisticated and the design no longer signals the quality of what is being sold.</p>
              <p>The result is a website that is technically functional but strategically outdated. It still gets traffic. It might still generate some leads. But it is no longer doing the work it could be doing because it was never designed for the business it is trying to represent today.</p>
              <p>A custom website is not about aesthetics for their own sake. It is about building a digital property that accurately represents the business behind it, converts the right visitors at the right rate, and is architected to accommodate growth without requiring a rebuild every eighteen months.</p>
              <p>We have built websites for recruiting platforms, consulting firms, and medical organizations. Each one was built to match the specific positioning, the specific audience, and the specific conversion goal of the business it represents. None of them look like templates because none of them started as one.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Template vs Custom Website</span>
          </div>
        </div>
      </section>
      {/* WHAT WE BUILD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Every type of website your business might need. Each one designed and built from scratch to do a specific job.</h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">A website is not a single product. It is a conversion tool, a brand asset, a sales argument, and a trust signal all at once. The type of website your business needs depends on what job it is doing.</p>
          </div>
          <div className="space-y-6 mt-12">
            {whatWeBuild.map((item) => (
              <div key={item.num} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <span className="text-[#D4AF37] text-3xl font-bold block mb-2">{item.num}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#D4AF37] text-sm font-medium">{item.sub}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-white/70 leading-relaxed mb-4">{item.body}</p>
                    <ul className="space-y-1">
                      {item.items.map((li, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                          <CheckCircle size={14} className="text-[#D4AF37] mt-1 shrink-0" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HOW WE APPROACH DESIGN */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Design is not how it looks. It is how well it does the job it was built to do.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>Oma leads the design on every website Simply Scalable builds. Her background is in conversion design and journey mapping: understanding how a visitor moves through a page, where they make decisions, what builds trust at each stage, and what removes friction on the path to the action the page is designed to drive.</p>
              <p>A beautiful website that does not convert is an expensive piece of art. A converting website that looks mediocre undermines the brand it represents. The goal is both: a website that looks exactly like the business it belongs to and performs at the level the business needs it to.</p>
              <p>Every website design starts with three questions. Who is the person who lands on this page? What do they need to feel, believe, and understand before they take action? What is the single most important action this page needs them to take? The design answers all three before a single element is placed on the canvas.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon:<Target size={28} className="text-[#D4AF37]" />,title:'Conversion before decoration',body:'Every design decision is evaluated against whether it helps or hinders the visitor\'s path to the desired action. Visual elements that do not serve the conversion goal are removed, not added.'},
              {icon:<User size={28} className="text-[#D4AF37]" />,title:'Brand before template',body:'The design starts with your brand: your colors, your typography, your tone, your audience, and your competitive position. No template is used as a starting point. No default is left as a default.'},
              {icon:<Layers size={28} className="text-[#D4AF37]" />,title:'Structure before style',body:'The information architecture and the hierarchy of every page is defined before visual styling begins. What does the visitor need to know first? Structure answers those questions. Style communicates them.'}
            ].map((p,i)=>(
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-white font-semibold mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* LIVE PROOF */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Two websites. Two distinct businesses. Both built from scratch to represent exactly what is behind them.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="bg-white/5 rounded-xl p-6 aspect-video flex items-center justify-center mb-6">
                <span className="text-white/20 text-sm">Marshall Duke Consulting Website</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Marshall Duke Consulting</h3>
              <div className="space-y-4">
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">What they needed</p><p className="text-white/60 text-sm leading-relaxed">A professional services website that positioned Marshall Duke Consulting correctly for the caliber of engagement they pursue. The previous digital presence did not reflect the depth of the practice or the sophistication of the clients they work with.</p></div>
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">What we built</p><p className="text-white/60 text-sm leading-relaxed">A custom-designed consulting website built from the ground up around the firm's positioning, their service offerings, and the audience they are built to serve. Every design decision, from the typography to the layout to the proof architecture, was made to communicate expertise before a single word was read.</p></div>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="bg-white/5 rounded-xl p-6 aspect-video flex items-center justify-center mb-6">
                <span className="text-white/20 text-sm">OMS Matchpoint Website</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">OMS Matchpoint</h3>
              <div className="space-y-4">
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">What they needed</p><p className="text-white/60 text-sm leading-relaxed">A website that introduced OMS Matchpoint to its market and connected seamlessly with the custom recruiting platform Simply Scalable was building simultaneously.</p></div>
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">What we built</p><p className="text-white/60 text-sm leading-relaxed">A custom marketing website built in parallel with the OMS Matchpoint recruiting platform. The website and the platform share a design language and a data connection. A visitor moves from the public-facing marketing site to the private recruiting platform without a visual or experiential discontinuity. Both were delivered as one project.</p></div>
                <blockquote className="border-l-2 border-[#D4AF37] pl-4 mt-4">
                  <p className="text-white/70 text-sm italic leading-relaxed">"It's incredible what you've been able to do with my idea. Your team was even able to finish the project before our website was complete."</p>
                  <footer className="text-[#D4AF37] text-sm font-medium mt-2">Dr. Rob S., OMS Matchpoint</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">Book a Discovery Call to Talk About Your Website <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      {/* HOW WE BUILD */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">From where your brand is today to a website that represents where it is going. Here is how we get there.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {phase:'01',title:'Discovery and Positioning Session',body:'Before any design work begins, we establish the strategic foundation: who the website is for, what it needs to communicate, what action it is designed to drive, and how the current site (if one exists) is working or failing against those goals. This session is the difference between a website that looks good and a website that performs.'},
              {phase:'02',title:'Information Architecture and Page Map',body:'We define the full structure of the site: every page, the hierarchy between pages, and the content outline for each one. The sitemap is approved before design begins so no page is designed in isolation from the pages around it.'},
              {phase:'03',title:'UX and Visual Design',body:'Oma designs the full website starting from the homepage and working through every page in the sitemap. Designs are presented in high-fidelity mockups showing exactly how the live site will look on desktop and mobile. Revisions happen at this phase. Not after the site is built.'},
              {phase:'04',title:'Copywriting Review and Content Integration',body:'Website copy is reviewed and refined against the design. If copy is being produced alongside the design, this phase includes the full editorial pass. If the client is providing copy, this is where it is integrated into the approved layouts.'},
              {phase:'05',title:'Development',body:'Phil builds the website to the approved designs. The development process includes CMS implementation, form and CRM integration, analytics setup, performance optimization, and SEO architecture. The site is built for speed, for maintainability, and for the growth the business is planning.'},
              {phase:'06',title:'Testing, QA, and Launch',body:'The site is tested across browsers, devices, and screen sizes. Every form is tested. Every link is validated. Performance scores are measured and optimized. The launch is planned, including redirect mapping if an existing site is being replaced, and executed when every element passes the testing standard.'}
            ].map((ph)=>(
              <div key={ph.phase} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[#D4AF37] text-3xl font-bold mb-3 block">{ph.phase}</span>
                <h3 className="text-white font-semibold mb-3">{ph.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{ph.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHAT YOU OWN */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">When we deliver your website, it belongs to your business. The design, the code, all of it.</h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">The website files, the design assets, the CMS configuration, the analytics setup, and the full documentation are yours at delivery. You can host the site anywhere, make changes with any developer or designer, and add pages or features at any time without coming back to us. There is no proprietary platform that requires Simply Scalable's involvement to keep the site running. The site is yours to operate from day one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon:<Key size={32} className="text-[#D4AF37]" />,title:'Your code, your site',body:'Full website files and documentation delivered at handover. Host it anywhere. Modify it with any developer or designer you choose.'},
              {icon:<Edit size={32} className="text-[#D4AF37]" />,title:'Your CMS, your content',body:'The CMS is configured so your team can add and edit content without developer involvement. Blog posts, page updates, and new content are yours to manage.'},
              {icon:<BarChart2 size={32} className="text-[#D4AF37]" />,title:'Your analytics',body:'Analytics accounts are set up under your ownership. The data belongs to you and is accessible directly from your Google Analytics and any other connected tracking platforms.'}
            ].map((o,i)=>(
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">{o.icon}</div>
                <h3 className="text-white font-semibold mb-3">{o.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tell us about your business. We will build the website it actually deserves.</h2>
          <p className="text-white/70 text-lg mb-8">Nine questions. Twenty-four hours. A detailed quote with scope, timeline, and a real number.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link to="/start" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-8 py-4 rounded-lg transition-colors text-lg">Get a Quote <ArrowRight size={20} /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-8 py-4 rounded-lg transition-colors text-lg">Book a Discovery Call</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/50 text-sm">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4AF37]" /> Response within 24 hours</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-[#D4AF37]" /> Designed for conversion. Built for your brand.</span>
            <span className="flex items-center gap-2"><Lock size={16} className="text-[#D4AF37]" /> Full ownership at delivery. No lock-in.</span>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <FAQSection />
    </div>
  );
};
export default WebsitesPage;
