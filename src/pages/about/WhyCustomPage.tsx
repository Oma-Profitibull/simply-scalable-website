import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingDown, Users, CheckCircle } from 'lucide-react';

export default function WhyCustomPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observerRef.current?.unobserve(entry.target);
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
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Off-the-shelf software was built for the average business. What happens when yours stops being average?
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              Most businesses start with SaaS tools. Most businesses eventually outgrow them. The question is not whether custom software makes sense. The question is whether your business has reached the point where off-the-shelf is costing you more than it is saving you.
            </p>
          </div>
          {/* Image placeholder */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-14">
            <div className="w-full h-64 md:h-80 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="flex items-center gap-8 md:gap-16 px-6">
                {/* Left: constrained */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full h-2 bg-red-500/30 rounded-full mb-2" />
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 border border-white/20" />
                    ))}
                  </div>
                  <span className="text-white/30 text-xs mt-2">Off-the-shelf ceiling</span>
                </div>
                {/* Divider */}
                <div className="w-px h-32 bg-white/10" />
                {/* Right: unconstrained */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex flex-col gap-2 items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/30" />
                    <div className="flex gap-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/25" />
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/25" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
                    </div>
                  </div>
                  <span className="text-white/30 text-xs mt-2">Custom, no ceiling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE CASE FOR OFF-THE-SHELF FIRST */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Off-the-shelf software is the right answer. Until it is not.
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                The default advice in the software industry is to start with existing tools. It is good advice. A SaaS product developed by a funded company with a full engineering team and years of iteration will outperform a custom build in the early stages of a business almost every time. The onboarding is faster. The cost is lower. The features are already built. The support exists.
              </p>
              <p>
                The argument for starting with off-the-shelf tools is not wrong. It is simply incomplete. It tells you what to do when you are starting. It does not tell you what to do when you have grown past it.
              </p>
              <p>
                At some point, for some businesses, the tools that enabled growth start to constrain it. The SaaS product that was perfect for the first hundred customers does not accommodate the workflows that emerged in the second hundred. The platform that handled the simple version of the operation cannot handle the complex version it has evolved into. The workarounds that were temporary become permanent, and the team that was supposed to use the software starts working around it every single day.
              </p>
              <p>
                That is the moment when the calculation changes. Not because custom software is inherently superior to off-the-shelf software. Because the specific off-the-shelf software available can no longer do what the specific business needs it to do.
              </p>
              <p>
                The question is how to recognize that moment clearly enough to act on it before the workarounds become load-bearing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE SEVEN SIGNALS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seven signals that your business has outgrown off-the-shelf software.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              None of these signals in isolation necessarily means a custom build is the right answer. All of them together almost certainly do. Read through the list and count how many are true for your business today.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                num: '01',
                title: 'Your team has built permanent workarounds',
                paras: [
                  'The workaround was supposed to be temporary. A spreadsheet to bridge two systems that did not connect. A manual step to transfer data between platforms. A Zapier automation that approximates a feature the tool does not natively support. Now the workaround has been running for six months and the team cannot operate without it.',
                  'Permanent workarounds are the most reliable signal that a tool has reached its limit for your specific use case. The workaround exists because the tool cannot do the thing your business needs done. That gap is not going to be filled by a product update. It is structural.',
                ],
              },
              {
                num: '02',
                title: 'New team members spend more time learning the system than using it',
                paras: [
                  'A well-designed tool should be learnable in a reasonable period of time. When onboarding a new team member to your software stack takes weeks instead of days, and when those weeks are spent understanding workarounds rather than the software itself, the system has become a liability. The complexity your team has absorbed over years is invisible to a new hire who encounters all of it at once.',
                ],
              },
              {
                num: '03',
                title: 'You are paying for features you do not use to get the one feature you need',
                paras: [
                  'The enterprise tier exists because the one capability your business requires is only available at the highest price point. The rest of the enterprise tier is irrelevant to you. You are paying for a capability bundle because you need one item from it. The cost-to-value ratio has inverted, and it will continue to invert as the platform raises prices and continues bundling features your business will never use.',
                ],
              },
              {
                num: '04',
                title: 'Your data lives in too many places and is never fully in sync',
                paras: [
                  'You have a CRM. You have a scheduling tool. You have a project management platform. You have a spreadsheet that someone built to reconcile all three. The data that matters to your business is distributed across systems that were never designed to share it, and someone on your team is the manual connector between them every single day. When that person is out, information gaps appear and mistakes happen.',
                ],
              },
              {
                num: '05',
                title: 'You cannot give customers or clients the experience your business deserves',
                paras: [
                  'The service you deliver is better than the software your clients interact with to receive it. You know this because clients comment on it, because the scheduling page looks like it belongs to a different business, because the document-sharing process involves three emails and a link to a shared drive. The gap between the quality of the work and the quality of the digital experience that surrounds it is costing you referrals and retention.',
                ],
              },
              {
                num: '06',
                title: 'You are asking a horizontal tool to do a vertical job',
                paras: [
                  'Your industry has specific requirements: compliance constraints, workflow patterns, data relationships, or user experience expectations that generic tools were not built to accommodate. You are using a horizontal product, one built for all businesses in all industries, and asking it to behave like a vertical product built for your specific context. The result is a tool that is technically functional but operationally wrong for how your business actually operates.',
                ],
              },
              {
                num: '07',
                title: 'The tool is making decisions for your business',
                paras: [
                  'The platform’s limitations have started to shape your business decisions rather than the other way around. You structured your offer to fit what the platform supports. You hired for a role that the tool requires rather than the role your business needs. You stopped offering a specific capability because the software cannot handle it cleanly. When the tool is driving decisions that should be driven by business strategy, you have ceded control of your own operation to a third-party product.',
                ],
              },
            ].map((signal) => (
              <div
                key={signal.num}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#D4AF37]/40 font-mono text-sm mt-1">{signal.num}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{signal.title}</h3>
                </div>
                <div className="pl-10 space-y-4">
                  {signal.paras.map((p, j) => (
                    <p key={j} className="text-white/70 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Checklist visual placeholder */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-14">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="space-y-4">
                {[
                  'Your team has built permanent workarounds',
                  'New team members spend more time learning the system than using it',
                  'You are paying for features you do not use to get the one feature you need',
                  'Your data lives in too many places and is never fully in sync',
                  'You cannot give customers or clients the experience your business deserves',
                  'You are asking a horizontal tool to do a vertical job',
                  'The tool is making decisions for your business',
                ].map((label, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border border-white/20 shrink-0" />
                    <span className="text-white/60 text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/70 leading-relaxed mb-6">
                  If four or more of these are true for your business today, a custom build is worth scoping. The scoping session is free and takes thirty minutes.
                </p>
                <Link
                  to="/about/start-a-project"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE REAL COST OF STAYING ON THE WRONG TOOL */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The cost of staying on the wrong tool is real. It is just distributed invisibly across the business.
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Most businesses that have outgrown their tools know it. They stay anyway because the cost of switching feels high and the cost of staying feels invisible. But the cost of staying is not invisible. It is just measured in different units.
              </p>
              <p>
                It is measured in the hours your team spends on manual work that a better system would automate. It is measured in the deals that slipped because the follow-up did not happen on time and the CRM did not surface it. It is measured in the clients who did not refer new business because the experience they had with your systems did not match the quality of your service. It is measured in the senior team members whose time is consumed by operational friction that should not exist.
              </p>
              <p>
                These costs do not appear on a line in the budget. They appear in headcount that should not need to exist, in retention metrics that are lower than they should be, in growth that is slower than it should be, and in the constant background noise of a team that knows its tools are working against it.
              </p>
              <p>
                Custom software does not eliminate all operational costs. It eliminates the operational costs that exist specifically because the tool was not built for your business. Those are the ones that compound most aggressively over time.
              </p>
            </div>
          </div>

          {/* Three cost categories */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-xl font-semibold text-white mb-8">
              Three cost categories that off-the-shelf creates:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Time cost',
                  text: 'Every manual step that exists because two systems do not connect is time your team could spend on the work that generates revenue. At scale, these minutes become hours per person per week, which becomes a headcount cost your tool vendor is charging you for.',
                },
                {
                  icon: TrendingDown,
                  title: 'Opportunity cost',
                  text: 'The capability you cannot offer because your tool does not support it. The client segment you cannot serve because your workflow does not accommodate it. The market you cannot enter because your infrastructure was not built for it.',
                },
                {
                  icon: Users,
                  title: 'Talent cost',
                  text: 'The team members who leave because the tools they work with make their jobs harder than they should be. The hires you make to manage tool complexity rather than to generate output. The senior time spent on tasks that should be automated.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#D4AF37]/70" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-3">{item.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHEN CUSTOM IS NOT THE ANSWER */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Custom software is not always the right answer. Here is when it is not.
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                The decision to build custom software is not always the correct one, and at Simply Scalable, we say so when it is not.
              </p>
              <p>
                If your business model has not yet been validated, a custom build is premature. The most valuable thing a no-code platform or an off-the-shelf tool gives an early-stage business is speed to proof. Build the custom system after you know the business model works, not before.
              </p>
              <p>
                If the problem you are trying to solve can be adequately addressed by an existing tool, building custom is expensive and unnecessary. The tool does not need to be perfect. It needs to be good enough for where the business is today. Custom is warranted when &ldquo;good enough&rdquo; stops being true.
              </p>
              <p>
                If the budget for a custom build does not match the scale of the problem being solved, the timing is wrong. A custom system built on a budget that requires cutting corners on architecture will create a different set of problems than the ones it solved. Better to stay on the current tool until the budget supports building it properly.
              </p>
              <p>
                And if the requirement is actually a configuration or integration problem rather than a software problem, the answer might be a better implementation of what already exists rather than a new build. Part of what the Simply Scalable scoping session does is determine which of these is true. If the answer is not a custom build, we will say so.
              </p>
            </div>
          </div>

          {/* When custom IS the right answer */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-xl font-semibold text-white mb-8">
              When custom software is the right answer:
            </h3>
            <div className="space-y-4">
              {[
                'Your business model is validated and you are scaling something that works.',
                'The off-the-shelf tool has a specific, documented limitation that is costing the business measurably.',
                'The workarounds have become permanent and the team is maintaining them daily.',
                'Your compliance, workflow, or client experience requirements exceed what generic tools accommodate.',
                'The cost of staying on the current tool (in time, talent, and opportunity) exceeds the cost of building the right system.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]/70 shrink-0 mt-0.5" />
                  <p className="text-white/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE BUILD VS. BUY FRAMEWORK */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              A practical framework for deciding when to build and when to buy.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              The build vs. buy decision is not binary and it is not permanent. It is a question of where your business is today relative to what the available tools can do. Here is a practical way to think through it.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                title: 'Start with what exists.',
                text: 'Before scoping a custom build, map what the available tools can do. Is there a SaaS product that handles eighty percent of the requirement? Is there a configuration or integration that closes the remaining twenty percent? If yes, stay on the tool and invest in making the existing solution work as well as it can. Custom software has a higher upfront cost and the ROI has to be justified by a genuine capability gap.',
              },
              {
                title: 'Identify the specific gap.',
                text: 'If the available tools cannot close the gap through configuration or integration, identify the gap precisely. Not “the CRM doesn’t work for us” but “the CRM cannot enforce the specific pipeline logic our sales process requires and there is no workaround that does not create a data reconciliation problem.” Precise gap definition is what makes a custom build scopeable. Vague dissatisfaction with existing tools is not a sufficient basis for a custom project.',
              },
              {
                title: 'Measure the cost of the gap.',
                text: 'How much is the gap costing today? Not hypothetically. In concrete terms: hours per week of manual work, number of team members affected, deals lost or delayed because of the limitation, client experiences that did not match the standard. This measurement is what justifies the build. A gap that costs the business twenty hours per week of senior time at a fully loaded rate compounds significantly over a year. A gap that is annoying but not materially costly probably does not justify the investment yet.',
              },
              {
                title: 'Scope the build before committing to it.',
                text: 'A scoping session with Simply Scalable produces a specific, documented project brief: what will be built, what the architecture is, what it will cost, and how long it will take. That brief is the basis for a real build vs. buy decision. The cost of the build is known. The cost of staying is measured. The decision follows from comparing them.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT CUSTOM SOFTWARE ACTUALLY DELIVERS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Four things a well-built custom system delivers that off-the-shelf never can.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'It works the way your business actually works',
                text: 'Not the way a platform’s product team designed it to work for the average user in your category. The workflows, the data structures, the access controls, and the user experience are built around the specific way your operation functions. There are no workarounds because there are no limitations that were not designed out.',
              },
              {
                num: '02',
                title: 'You own it outright',
                text: 'No subscription. No platform risk. No pricing tier that locks the feature you depend on behind a higher annual contract. The system belongs to your business. It can be hosted anywhere, modified by any developer, and extended in any direction without permission from a vendor.',
              },
              {
                num: '03',
                title: 'It grows with the business',
                text: 'A custom system is built with an architecture that accommodates growth. New features are added when the business needs them, not when a platform’s product roadmap gets to them. The system does not require replacement when the business evolves. It evolves with it.',
              },
              {
                num: '04',
                title: 'The experience reflects the standard of the business',
                text: 'The client portal that looks and feels like the brand it represents. The patient portal that reflects the quality of care behind it. The team dashboard that surfaces the right information in the right format for the people who need it. Generic software delivers a generic experience. Custom software delivers the experience your business is capable of.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <span className="text-[#D4AF37]/40 font-mono text-sm">{item.num}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: THE SIMPLY SCALABLE APPROACH */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Custom software built to be owned, not rented.
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Every system Simply Scalable builds is delivered with one non-negotiable: you own it. The code, the database, the integrations, the documentation. All of it belongs to your business at the moment of delivery. There is no proprietary platform that requires Simply Scalable&rsquo;s involvement to keep the system running. There is no subscription owed for access to something we already built for you.
              </p>
              <p>
                This matters because the economics of custom software only make sense if the asset you are building is genuinely yours. A custom system that creates dependency is a different kind of SaaS subscription. A custom system that you own outright is infrastructure your business controls indefinitely.
              </p>
              <p>
                That ownership principle is not a policy we adopted. It is the original conviction the business was built on. The portfolio of fifty-plus production systems that clients operate independently today is the evidence that it holds.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row gap-4">
            <Link
              to="/about/start-a-project"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about/start-a-project"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions &mdash; Why Custom Software?
            </h2>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 divide-y divide-white/10">
            {[
              {
                q: 'How do I know if my problem requires custom software or just a better implementation of what I already have?',
                a: 'The scoping session answers this question. Bring the specific problem, the tools you currently use, and the gap you have identified. Sometimes the answer is a better GoHighLevel buildout or a Zapier integration that closes the gap without a full custom build. Sometimes the gap is structural and only a custom system addresses it. The scoping session is the fastest and cheapest way to find out which is true for your situation.',
              },
              {
                q: 'Custom software sounds expensive. Is it?',
                a: 'Custom software has a higher upfront cost than a monthly SaaS subscription. The relevant comparison is not the upfront cost against a monthly subscription. It is the total cost of the custom system over its useful life against the total cost of the SaaS alternative including the operational cost of its limitations. When the right calculation is made, custom software is frequently the more economical choice over a three to five year horizon, particularly when the cost of the tool’s limitations is measured honestly.',
              },
              {
                q: 'What if my requirements change after the system is built?',
                a: 'A well-architected custom system is built to be extended. Because you own the codebase, changes and additions can be made at any time by any qualified developer. Requirements changing after delivery is normal. The custom system accommodates that change on your timeline and your budget rather than waiting for a platform’s product roadmap.',
              },
              {
                q: 'How long does a custom build take compared to deploying an off-the-shelf tool?',
                a: 'Off-the-shelf deployment is faster upfront. A SaaS tool can be live within days. A custom build typically takes four to twelve weeks depending on scope. The relevant comparison is not deployment time. It is how long each option requires before the business is operating at the level it needs to operate at. A SaaS tool deployed in three days that requires six months of workarounds and configuration to approximate the required workflow is not faster in practice than a custom build delivered in eight weeks that works correctly from day one.',
              },
              {
                q: 'Can I start with a simple version and build more features later?',
                a: 'Yes. Many of the best custom systems start with a focused first build that addresses the core problem and expands incrementally as the business validates what it needs. This is the right approach when the full scope is not yet clear or when a phased investment is preferable. The architecture of the initial build is designed with future expansion in mind so additions do not require rebuilding the foundation.',
              },
              {
                q: 'What makes Simply Scalable the right team to build custom software for my business?',
                a: 'Two things stand out. First, Simply Scalable is the parent company of three live software products built for its own operations: Simply Scrapable, Profitibull, and ProfitBot. The team builds from operator experience, not just from technical briefs. Second, the delivery standard is total ownership. Every client owns their system outright at delivery. No dependency, no lock-in, no ongoing fee for access to something we already built. The portfolio of fifty-plus systems running independently today is the evidence that this standard holds.',
              },
            ].map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex justify-between items-center w-full py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/60 leading-relaxed max-w-3xl">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
