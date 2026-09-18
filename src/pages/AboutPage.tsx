import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Clock, Linkedin } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years' },
  { value: '2', label: 'People' },
  { value: '50+', label: 'Systems Shipped' },
  { value: '3', label: 'Products at Scale' },
  { value: '100%', label: 'Client Satisfaction' },
];

const teamMembers = [
  {
    name: 'Phil Murphy',
    role: 'Founder',
    initials: 'PM',
    title: 'Founder, Systems Architect, Database Solutions Expert, Integration Specialist',
    linkedin: 'https://www.linkedin.com/in/phil-murphy-03/',
    whatTheyDo: [
      'Phil designs the backbone of every system Simply Scalable builds. From database schema architecture to multi-platform integrations to the AI orchestration layer inside ProfitBot, Phil owns the technical foundation that every product and every client build runs on.',
      'Before Simply Scalable became a software shop, Phil was running outreach and sales operations and building the tools his teams needed when nothing on the market fit. That operator background is what separates his technical work from a pure developer’s approach. Phil does not build systems that are technically correct but operationally wrong. He builds systems he would use himself, because in most cases, he has.',
    ],
    whatItMeans:
      'When Phil scopes a build, he is not estimating from a requirements document. He is designing from the perspective of someone who has operated the kind of system you are trying to build. The architecture decisions he makes during scoping reflect both technical best practice and operational reality.',
    areas: [
      'Database architecture and schema design',
      'Multi-system integration and API architecture',
      'GoHighLevel platform architecture and customization',
      'AI and multi-model orchestration systems',
      'Workflow automation logic and implementation',
      'Data pipeline design and ETL architecture',
      'Production system deployment and infrastructure',
    ],
  },
  {
    name: 'Oma',
    role: 'Partner',
    initials: 'O',
    title: 'Partner, Graphic and Web Design, Journey Mapping, Conversion Specialist',
    linkedin: 'https://www.linkedin.com/in/iheoma-nwanyanwu-4278a0184/',
    whatTheyDo: [
      'Oma shapes every user-facing layer of every Simply Scalable product and every client build. Design systems, conversion flows, user journey architecture, and the interfaces that feel intuitive the moment you land on them. If Phil builds the engine, Oma builds everything the user actually touches.',
      'Her work starts before any design tool is opened. Journey mapping, understanding how a specific user type moves through a specific product with a specific goal, is the foundation every design is built on. A beautiful interface that routes users incorrectly is a failure regardless of how good it looks. A conversion flow that looks unremarkable but works exactly right is a success regardless of how plain it appears.',
      'The goal is always both: a product that looks exactly like the business it belongs to and works exactly the way the people using it need it to work.',
    ],
    whatItMeans:
      'Every screen in your build is designed by someone who started by understanding the person who will use it and the goal they are trying to accomplish. The design is not applied after the system is built. It is designed before the system is built, so the development is executed against a clear, approved visual and interaction standard.',
    areas: [
      'User journey mapping and conversion flow architecture',
      'Web and application interface design',
      'Brand identity translation into digital products',
      'Landing page and funnel design',
      'Mobile-first UX design',
      'Design system creation for consistent multi-page products',
      'Client-facing portal and dashboard design',
    ],
  },
];

const testimonials = [
  {
    quote: "It's incredible what you've been able to do with my idea. Your team was even able to finish the project before our website was complete.",
    name: 'Dr. Rob S.',
    company: 'OMS Matchpoint',
  },
  {
    quote: 'The app is amazing. It links our DrChrono EHR with our CRM, but it also acts as a buffer between our marketing and patient communication. Their team is very easy to work with, too.',
    name: 'Dr. B.',
    company: 'GEM Science',
  },
  {
    quote: 'The onboarding app they built for our customer success team is incredible. We went from spreadsheets to automated processes and tasks in less than 3 weeks.',
    name: 'Alex J.',
    company: 'VAHubPro',
  },
  {
    quote: 'The medical community they built for us receives more repeat orders for our monthly special than our monthly email ever did. They are so easy to work with, too.',
    name: 'Bo L.',
    company: 'Medical Community Platform',
  },
];

const faqs = [
  {
    q: 'How big is the Simply Scalable team?',
    a: 'Simply Scalable is Phil Murphy and Oma. Two people who have worked together for over five years. There is no larger team behind the work. When you hire Simply Scalable, you work directly with the people who scope, design, and build your project from start to finish. That is a deliberate choice, not a limitation.',
  },
  {
    q: 'Can Simply Scalable handle a large or complex project with just two people?',
    a: 'Yes. The project portfolio includes a five-system EHR-integrated patient portal onboarded by 871 patients at launch, a multi-product AI ecosystem used by hundreds of teams daily, and a custom recruiting platform delivered before the client\'s own website was finished. Complexity is managed through scoping, architecture, and parallel execution rather than through headcount.',
  },
  {
    q: 'Where is Simply Scalable based and do you work with clients remotely?',
    a: 'Simply Scalable is based in Grapevine, TX. All client work is handled remotely. Scoping sessions, design reviews, development check-ins, and handovers all happen through video calls and shared documentation. Clients across the United States and internationally are served through the same remote engagement model.',
  },
  {
    q: 'Does Simply Scalable take on every project that comes in?',
    a: 'No. Every project inquiry goes through a scoping conversation before any commitment is made. If a project is not a fit, either because it is outside the team\'s scope or because the timing does not work, that is communicated clearly and quickly. Simply Scalable does not take on work it cannot deliver at the standard the portfolio represents.',
  },
  {
    q: 'Is Simply Scalable the same company as Simply Scrapable or Profitibull?',
    a: 'Simply Scalable is the parent company. Simply Scrapable and Profitibull are products Simply Scalable built and operates. The three brands serve different functions: Simply Scalable builds custom software for external clients. Simply Scrapable is a lead intelligence platform available by subscription. Profitibull is a CRM and marketing automation platform available by subscription. The names are intentionally related but the brands serve distinct purposes.',
  },
  {
    q: 'What is the best way to start a project with Simply Scalable?',
    a: 'Two options. Fill out the nine-question quote form and receive a detailed estimate within twenty-four hours, or book a thirty-minute discovery call where Phil will scope the project, identify the right architecture, and give you a clear picture of what it would take to build. Both paths lead to the same place: a fully scoped project brief with a timeline, a tech stack, and a real number before any commitment is made.',
  },
];

const principles = [
  {
    title: 'You Own What We Build',
    body: 'Every line of code, every design file, every integration configuration, and every piece of documentation delivered at the end of a project belongs to the client. Not to Simply Scalable. Not held in a platform that requires a subscription to access. Yours, outright, from the day it goes live. This is not a policy we adopted. It is the original conviction the business was built on.',
  },
  {
    title: 'We Build What We Would Use Ourselves',
    body: 'The standard for every build is not "does it meet the spec." The standard is "would we run our own business on this." That question changes the decisions made at every stage of the project: how the data is structured, how the edge cases are handled, how the admin panel is organized, how the documentation is written. The system has to work the way a real operator needs it to work, not just the way a technical document described it.',
  },
  {
    title: 'Small on Purpose',
    body: 'Simply Scalable is two people by design, not by accident. A larger team means more projects simultaneously, more project managers in the communication chain, and more distance between the people doing the work and the client who commissioned it. The decision to stay small means every client works directly with the people building their system. That is a trade-off we made deliberately and one we do not plan to change.',
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Two people. Five years. Fifty-plus systems shipped. Three products running at scale.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-xl">
              Simply Scalable is not a large agency. It is a small, focused team that has built more production software for more industries than most shops ten times its size. This is who we are, how we work, and why that matters for the project you are thinking about building.
            </p>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { initials: 'PM', name: 'Phil Murphy' },
                  { initials: 'ON', name: 'Oma' },
                ].map((person, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-4">
                      <span className="text-[#D4AF37] text-2xl font-bold">{person.initials}</span>
                    </div>
                    <span className="text-white font-semibold text-sm">{person.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs text-center mt-3 italic">Photography to be inserted at design stage</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SIMPLY SCALABLE STARTED */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
              We started as a digital ads company that kept thinking &lsquo;it would be great if.&rsquo; So we built it.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3 space-y-6">
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                The origin is simple. Phil Murphy was running digital advertising operations and kept running into the same friction: the tools available to manage outreach, track leads, run campaigns, and make sense of prospect data were not built for how the operation actually worked. The off-the-shelf options were close. None of them were right.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                The answer was not to find a better tool. The answer was to build one.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                That instinct, to build the thing rather than work around its absence, is what became Simply Scalable. First as a practice of building internal tools for a specific problem. Then as a recognized capability that other businesses started asking for. Then as a formal custom software shop that has now shipped over fifty production systems for clients across healthcare, recruiting, ecommerce, sales, operations, and beyond.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                Along the way, three of those internal builds became products of their own: Simply Scrapable, the lead intelligence platform. Profitibull, the full-stack CRM and marketing automation platform. And ProfitBot, the multi-model AI orchestration system. All three are used by hundreds of teams every day and were built first for the problems Simply Scalable itself needed solved.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                The business that exists today is the direct result of that original instinct applied consistently for five years. Build the thing. Build it right. Own it outright.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-32">
                <div className="space-y-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-4">
                      <span className="text-[#D4AF37] text-4xl md:text-5xl font-bold leading-none min-w-[100px]">
                        {stat.value}
                      </span>
                      <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK TOGETHER */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
              Architecture and design are not sequential. They happen simultaneously. That is why the builds are better.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                In most software shops, the project goes to design first, then to development. The designer produces screens. The developer builds against them. When a design decision has technical implications the designer did not anticipate, the developer adapts or pushes back and the revision cycle starts.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                At Simply Scalable, Phil and Oma work in parallel from the first session. The architecture decisions inform the design. The design requirements inform the architecture. The system is designed and engineered simultaneously rather than one after the other.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                The practical result is that by the time a client approves the designs, Phil has already been building the technical foundation for those designs to run on. Development does not start after design. It starts with design. The builds are faster and the surprises at handover are fewer because the two disciplines never operated in isolation.
              </p>
            </div>
            <div>
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">What clients experience</h3>
                <p className="text-white/70 leading-relaxed">
                  You work with both people. Phil leads the discovery and scoping session. Oma leads the design review. Phil leads the development check-ins. Oma leads the design feedback loops. Both people are available through the build. The project does not pass through a project manager to reach the people doing the work. You reach the people doing the work directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Team</h2>
          </div>
          <div className="space-y-20">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                  {/* Photo placeholder + meta */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                    <div className="w-48 h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <span className="text-4xl font-bold text-[#D4AF37]/60 select-none">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {member.name}
                      <span className="text-[#D4AF37] ml-2 text-lg font-medium">&mdash; {member.role}</span>
                    </h3>
                    <p className="text-white/50 text-sm mt-1 mb-4">{member.title}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>

                  {/* Copy */}
                  <div className="lg:col-span-8 space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        What {member.name.split(' ')[0]} Does
                      </h4>
                      <div className="space-y-4">
                        {member.whatTheyDo.map((p, j) => (
                          <p key={j} className="text-white/70 leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        What this means for your project
                      </h4>
                      <p className="text-white/70 leading-relaxed">{member.whatItMeans}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        {member.name.split(' ')[0]}&rsquo;s areas of depth
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {member.areas.map((area, j) => (
                          <li key={j} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                            <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {i < teamMembers.length - 1 && (
                  <div className="mt-16 border-t border-white/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PRINCIPLES WE BUILD BY */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
              Three principles that apply to every project, every client, and every product we have ever shipped.
            </h2>
          </div>
          <div className="space-y-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[#D4AF37] text-sm font-mono font-semibold tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed max-w-3xl ml-10">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ECOSYSTEM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The software we built because we needed it. Now used by hundreds of teams.
            </h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 max-w-3xl space-y-4 mb-16">
            <p className="text-white/70 leading-relaxed">
              The custom software Simply Scalable builds for clients is one side of the business. The other side is the product ecosystem the team built for its own operations: Simply Scrapable, Profitibull, and ProfitBot.
            </p>
            <p className="text-white/70 leading-relaxed">
              These products exist because Phil built them to solve real problems the team faced in its own outreach and sales operation. They were not conceived as products to sell. They became products because they worked well enough that other businesses started asking for access.
            </p>
            <p className="text-white/70 leading-relaxed">
              Today all three are live, commercially available, and used by hundreds of teams daily. They are also the most direct evidence of what Simply Scalable&rsquo;s software looks like when it runs in production at scale for an extended period of time. The products work because the people who built them depend on them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                initials: 'SS',
                name: 'Simply Scrapable',
                description: 'Lead Intelligence, Signal Surfacing, and Proactive Prospect Research.',
                domain: 'simplyscrapable.com',
                link: '/ecosystem/simply-scrapable',
              },
              {
                initials: 'P',
                name: 'Profitibull',
                description: 'Full-stack CRM and marketing automation. Profitibull CRM, ProfitMail, ProfitLink, and ProfitBot.',
                domain: 'profitibull.com',
                link: '/ecosystem/profitibull',
              },
              {
                initials: 'PB',
                name: 'ProfitBot',
                description: 'Multi-model AI orchestration for outreach, lead scoring, and content generation.',
                domain: null,
                link: '/ecosystem/profitbot',
              },
            ].map((product, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-[#D4AF37]/70 select-none">{product.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/60 leading-relaxed text-sm mb-1 flex-1">{product.description}</p>
                {product.domain && (
                  <p className="text-white/40 text-xs mb-6">{product.domain}</p>
                )}
                {!product.domain && <div className="mb-6" />}
                <Link
                  to={product.link}
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SIMPLY SCALABLE IS NOT */}
      <section className="py-24 px-6 bg-[#0a0a14]">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What you should know before you reach out.
            </h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6">
            <p className="text-white/70 leading-relaxed">
              Simply Scalable is not for everyone. Being honest about that is more useful than pretending it is.
            </p>
            <p className="text-white/70 leading-relaxed">
              Simply Scalable is not a good fit for businesses looking for the cheapest path to an MVP. The custom builds here are built to production standard, scoped properly, and priced accordingly. If you need something fast and disposable to test an idea, there are better options and we will tell you so.
            </p>
            <p className="text-white/70 leading-relaxed">
              Simply Scalable is not a marketing agency. The business does not run ads, manage social media accounts, or produce content strategy. Those services are not offered. If a client needs both software and marketing support, the right answer is Simply Scalable for the software and a separate partner for the marketing.
            </p>
            <p className="text-white/70 leading-relaxed">
              Simply Scalable is not a staffing company. The team is not available for hire as contractors or for placement on a client&rsquo;s internal team. The engagement model is project-based: we scope it, we build it, we deliver it.
            </p>
            <p className="text-white/70 leading-relaxed">
              Simply Scalable is the right fit for businesses that have a specific, scoped software problem and want it solved by a small team with a track record of doing exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              In the words of the people we have built for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <blockquote className="text-white/80 leading-relaxed text-lg italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-[#D4AF37] text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              If you have a project in mind, we would like to hear about it.
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-10">
              Nine questions. Twenty-four hours. A detailed quote with scope, timeline, and a real number. Or book a thirty-minute call and we will scope it together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                info@simplyscalable.io
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Response within 24 hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Grapevine, TX
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Frequently Asked Questions &mdash; About Simply Scalable
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <span className="text-[#D4AF37] shrink-0 text-xl font-light">
                    {openFaq === i ? '×' : '+'}
                  </span>
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
    </div>
  );
}
