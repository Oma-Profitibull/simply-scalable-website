import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Lock, CheckCircle } from 'lucide-react';

export default function ProcessPage() {
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
              From &ldquo;it would be great if&rdquo; to shipped software. Here is exactly how we get there.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              Every Simply Scalable project follows the same four-phase process. Not because it is a formula, but because the steps that produce reliable, well-built software in a reasonable timeframe are the same regardless of what is being built. No surprises. No vague timelines. No handoffs to people you have never spoken to.
            </p>
          </div>

          {/* Process diagram placeholder */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-14">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-12">
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/20 to-[#D4AF37]/40" />

                {[
                  { icon: '01', label: 'Discovery & Scoping' },
                  { icon: '02', label: 'Architecture & Design' },
                  { icon: '03', label: 'Build & Iterate' },
                  { icon: '04', label: 'Deploy & Scale' },
                ].map((phase, i) => (
                  <div key={i} className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                      <span className="text-[#D4AF37] font-mono text-sm font-semibold">{phase.icon}</span>
                    </div>
                    <span className="text-white/60 text-sm text-center">{phase.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BEFORE THE PROCESS STARTS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Two ways to start. One outcome either way: a fully scoped project brief before any commitment is made.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Every project with Simply Scalable starts in one of two places: the quote form or the discovery call. Both paths lead to the same destination: a documented project brief that defines exactly what will be built, how long it will take, what the tech stack is, and what it will cost. No work begins before that brief exists and has been agreed on.
            </p>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-6 mb-10">
            {/* Path 01 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <span className="text-[#D4AF37]/40 font-mono text-sm">01</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">The Quote Form</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Nine questions about your project. No technical knowledge required. You describe the problem you are trying to solve, what you have tried before, and what the ideal outcome looks like. The form takes fifteen minutes to complete. Phil reads every submission personally and responds within twenty-four hours with a detailed estimate. This is the right starting point for projects where the scope is reasonably clear and the main question is whether the cost works.
              </p>
            </div>

            {/* Path 02 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <span className="text-[#D4AF37]/40 font-mono text-sm">02</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">The Discovery Call</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                A thirty-minute call with Phil where the project is scoped in real time. You describe the problem. Phil asks the questions that surface what the system needs to do, what it needs to connect to, and what the architecture should look like. You leave the call with a clear understanding of what will be built, how long it will take, and what it will cost. This is the right starting point for projects with complexity, multiple integrated systems, or where the full scope is not yet clear before the conversation.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row gap-4">
            <Link
              to="/about/start-a-project"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
            >
              Get a Quote &mdash; 9 Questions, 24-Hour Response
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

      {/* SECTION: PHASE 01 -- DISCOVERY AND SCOPING */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Phase card header */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-bold text-white/10">01</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Discovery &amp; Scoping</h2>
                  <p className="text-[#D4AF37]/70 text-sm mt-1">One to two weeks depending on project complexity</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Discovery and Scoping: turning your idea into a fully documented project brief.
            </h3>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p className="font-semibold text-white/80">What happens in this phase:</p>
              <p>
                The discovery and scoping phase is the most important phase in the entire project. Everything that follows depends on how well it is done. A build that starts with a vague brief produces a delivered system that does not match expectations. A build that starts with a precise, documented scope produces a system that does exactly what was designed before work began.
              </p>
              <p>
                Phil leads the discovery session. The session covers the full scope of the project: what the system needs to do, who will use it, what data it manages, what systems it needs to connect to, what the admin and management layer requires, and what the success criteria look like at handover. The session also covers what the system does not need to do, which is often as important as what it does.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What the client does:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Describes the problem in plain language. Shares examples of what they have tried and where existing tools fell short. Describes the ideal outcome: what does it look like when the system is working exactly right? Identifies the stakeholders who will use the system and what each of them needs from it.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What Simply Scalable does:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Maps the full technical scope from the problem description. Identifies the architecture approach, the tech stack, the integration points, and the edge cases that will affect the build. Documents every decision in a written project brief. Identifies anything that is out of scope and confirms that with the client before the brief is finalized.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What is delivered:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                A written project brief covering every deliverable, every integration, every user type, the timeline, the tech stack, and the total project cost. This document is the contract the project is executed against. It is reviewed, revised if needed, and signed before Phase 02 begins.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Why this phase matters:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Changes during development cost significantly more than changes during scoping. A requirement discovered during development that should have been in the original scope means rework, which means time and cost that were not budgeted. The scoping phase exists specifically to find those requirements before the build starts rather than during it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PHASE 02 -- ARCHITECTURE AND DESIGN */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          {/* Phase card header */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-bold text-white/10">02</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Architecture &amp; Design</h2>
                  <p className="text-[#D4AF37]/70 text-sm mt-1">Two to three weeks depending on project size and design complexity</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Architecture and Design: the blueprint before the build.
            </h3>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p className="font-semibold text-white/80">What happens in this phase:</p>
              <p>
                Phase 02 runs in parallel. Phil builds the technical architecture. Oma designs the user experience. Neither waits for the other to finish. The architecture decisions inform the design. The design requirements inform the architecture. When the phase is complete, both the system&rsquo;s technical foundation and every screen the user will interact with are defined, documented, and approved.
              </p>
            </div>
          </div>

          {/* Phil's work */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Phil&rsquo;s work in this phase &mdash; Technical Architecture:</h4>
              <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                <p>
                  Phil designs the system architecture before writing a single line of code. This includes the database schema, the API structure, the integration architecture, the authentication and access control model, the data flow between systems, and the technical decisions that will determine how the system performs and scales. The architecture is documented and reviewed with the client before development begins.
                </p>
                <p>
                  A system built on a well-designed architecture is fundamentally different from one built without it. Architecture decisions made at the beginning of a project are expensive to change later. The time spent on architecture in Phase 02 prevents the rework that poor architectural decisions cause in Phase 03.
                </p>
              </div>
            </div>
          </div>

          {/* Oma's work */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Oma&rsquo;s work in this phase &mdash; UX and Visual Design:</h4>
              <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                <p>
                  Oma designs every screen in the system. Not wireframes. Not rough sketches. High-fidelity mockups that show exactly how the live product will look and behave on desktop and mobile. Every screen the user encounters and every view the admin uses is designed before development begins.
                </p>
                <p>
                  The design process starts with the user journey: who is the person who will use this screen, what are they trying to accomplish, and what does the design need to do to make that as clear and effortless as possible? Structure and hierarchy are established before visual styling is applied.
                </p>
                <p>
                  Client review and approval happens at the end of this phase. Every design is presented. Revisions are made here, not after the system is built. The designs the client approves in Phase 02 are the designs that go into development in Phase 03.
                </p>
              </div>
            </div>
          </div>

          {/* Client does / Delivered / Why it matters */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What the client does:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Reviews the technical architecture summary (presented in plain language, not in code). Reviews every design screen in a structured design review session. Provides feedback. Approves the final designs before Phase 03 begins.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What is delivered:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                A complete technical architecture document. High-fidelity design files for every screen in the system. Client sign-off on all designs before development begins.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Why this phase matters:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Every revision made during design costs a fraction of the same revision made during development. Every architecture decision made before code is written costs a fraction of the same decision made after it. Phase 02 is the phase that makes the build in Phase 03 fast, clean, and true to what was scoped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PHASE 03 -- BUILD AND ITERATE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Phase card header */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-bold text-white/10">03</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Build &amp; Iterate</h2>
                  <p className="text-[#D4AF37]/70 text-sm mt-1">Four to ten weeks depending on project scope</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Build and Iterate: rapid development with real progress visible early.
            </h3>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p className="font-semibold text-white/80">What happens in this phase:</p>
              <p>
                Development begins against the approved designs and the documented architecture. The build is iterative: working versions of the system are available for client review early in the process, not only at delivery. This is the phase that takes the longest and requires the most discipline to execute well.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">How the build is structured:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Development is organized into logical build sequences that produce working functionality at each milestone rather than a single delivery at the end. The core system foundation is built first: database, authentication, core data models, and the base application structure. From there, features are built in priority order with integration connections established and tested as each one is completed.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Check-in cadence:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Regular check-ins with the client throughout Phase 03. The frequency depends on the project scope and client preference, but typically includes a weekly or biweekly progress update showing what has been completed, what is in progress, and what is next. The client does not wait until delivery to see the system. They see real progress throughout.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Integration testing:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Each integration is built, connected to the relevant external system, and tested with real data before the development of dependent features begins. An integration that does not work correctly affects every feature that depends on it. Testing integrations early rather than at the end of Phase 03 means issues are found and resolved before they become blockers.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What the client does:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                Reviews working builds at defined milestones during Phase 03. Provides feedback on functionality as it is built. Confirms that each completed section matches the approved design and meets the requirements in the project brief. Surfaces any requirements that were not captured during scoping as early as possible so they can be evaluated against scope before they affect the timeline.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What is delivered at the end of Phase 03:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                A fully built, feature-complete system that matches the approved designs and meets every requirement in the project brief. All integrations are connected and tested. The system is ready for the final testing and validation phase before launch.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Why this phase matters:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                The iterative approach produces a better system than a waterfall build where the client sees nothing until the end. Early visibility into working software surfaces mismatches between the client&rsquo;s mental model and the built system while there is still time to address them without significant rework. It also builds confidence throughout the project rather than concentrating all the risk in a single delivery event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PHASE 04 -- DEPLOY AND SCALE */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          {/* Phase card header */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-bold text-white/10">04</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Deploy &amp; Scale</h2>
                  <p className="text-[#D4AF37]/70 text-sm mt-1">One to two weeks for testing, validation, and launch</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#D4AF37]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 2L12 8" /><path d="M8.5 8H15.5L18 20H6L8.5 8Z" /><circle cx="12" cy="5" r="1" /></svg>
              </div>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Deploy and Scale: launch, handover, and the system that keeps performing.
            </h3>

            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p className="font-semibold text-white/80">What happens in this phase:</p>
              <p>
                The build is complete. Phase 04 covers everything between a completed build and a live, documented, client-operated system. Testing, validation, data migration if applicable, launch execution, and the handover that transfers full ownership and operational knowledge to the client.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Testing and Quality Assurance:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                The complete system is tested against every user scenario, every device type, and every edge case identified during scoping. Forms are submitted and validated. Integrations are tested with real data flows. Every user role is logged in and tested against their defined access. Every admin function is verified. Performance is measured and optimized. The system does not go live until it passes the full testing protocol.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Data Migration:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                For projects that involve replacing an existing system, data migration is executed in this phase. Historical records, contact data, transaction history, and any other data the client needs in the new system are mapped from the source, migrated, and validated in the new system before the cutover. The migration plan is defined during scoping and executed against a specific checklist in Phase 04.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Launch Execution:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                The launch is planned, not improvised. DNS configuration, SSL certificates, production environment setup, and any app store submissions for mobile builds are all executed according to a defined launch checklist. For projects replacing an existing system, the cutover is timed to minimize disruption. For new systems launching for the first time, the launch is coordinated with any client-side announcement or user communication plan.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Handover and Documentation:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                At delivery, the client receives the complete handover package: Full technical documentation covering every component of the system, every integration configuration, every API credential, and the architecture decisions made during Phase 02. Admin and operational documentation covering every admin function, every workflow the system manages, and every configuration the client needs to operate the system independently. A handover session where Phil and Oma walk the client&rsquo;s team through the system: how to use every feature, how to manage the admin panel, how to update content or configuration, and how to handle the operational scenarios the team will encounter day to day.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">What the client receives at the end of Phase 04:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                A live, production system. Full codebase and documentation. Complete operational knowledge. And the confidence to run the system independently from day one.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Post-launch support:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                A defined post-launch support period is included in every project. During this period, any bugs or issues discovered after launch are addressed as part of the project. After the support period ends, ongoing development retainers are available for clients who want Simply Scalable to continue building on top of the delivered system. These are never required. The system runs independently of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT MAKES THIS PROCESS DIFFERENT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Four things the Simply Scalable process delivers that most custom software projects do not.
            </h2>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'No surprises at delivery',
                body: 'The designs were approved in Phase 02. The project brief was signed before Phase 03 began. The check-ins throughout Phase 03 showed real progress against both. When the system is delivered at the end of Phase 04, it matches what was approved, what was scoped, and what was built toward throughout the project. There is no delivery-day reveal where the client sees the system for the first time and realizes something is wrong.',
              },
              {
                title: 'You see progress throughout, not only at the end',
                body: 'The iterative build approach in Phase 03 means working software is visible to the client well before delivery. Progress is real and demonstrable at each check-in, not summarized in a status update. Clients who can see the system being built have more confidence in the outcome and surface mismatches between expectation and reality while they are still easy to correct.',
              },
              {
                title: 'The documentation is a first-class deliverable',
                body: "The documentation delivered at handover is not an afterthought. It is written to the standard that allows any qualified developer to maintain, extend, or modify the system without requiring Simply Scalable’s involvement. Clients who receive poorly documented custom software have exchanged one form of dependency for another. The documentation at handover is the mechanism that makes ownership real rather than theoretical.",
              },
              {
                title: 'You own it before we leave',
                body: 'Total ownership is transferred at the end of Phase 04. Not after a warranty period. Not after a maintenance agreement is signed. At handover. The code, the database, the integrations, the documentation. All of it belongs to the client the moment the project is delivered.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: THE TIMELINE OVERVIEW */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What the full project timeline looks like from first conversation to live system.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Project timelines vary based on scope, complexity, and the number of integrations involved. The ranges below reflect typical projects in each complexity tier.
            </p>
          </div>

          {/* Timeline tiers */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6 mb-12">
            {[
              {
                label: 'Simple integration or focused tool',
                detail: '2 to 4 integrations, single user type',
                timeline: '4 to 6 weeks from signed brief to live system',
                weeks: 6,
              },
              {
                label: 'Mid-complexity build',
                detail: 'Portal, dashboard, or app with 3 to 6 integrations, multiple user types',
                timeline: '6 to 10 weeks from signed brief to live system',
                weeks: 10,
              },
              {
                label: 'Complex multi-system build',
                detail: 'Multi-integration platform, AI components, data migration',
                timeline: '10 to 16 weeks from signed brief to live system',
                weeks: 16,
              },
            ].map((tier, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tier.label}</h3>
                    <p className="text-white/50 text-sm mt-1">{tier.detail}</p>
                  </div>
                  <span className="text-[#D4AF37] font-mono text-sm whitespace-nowrap">
                    Total timeline: {tier.timeline.replace('from signed brief to live system', '').trim()}
                  </span>
                </div>
                {/* Visual timeline bar */}
                <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37]/20"
                    style={{ width: `${(tier.weeks / 16) * 100}%` }}
                  />
                </div>
                <p className="text-white/40 text-xs mt-2 text-right">from signed brief to live system</p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4">Note on timeline accuracy:</h4>
              <p className="text-white/70 leading-relaxed text-sm">
                The timeline in the project brief is a commitment, not an estimate. If scope changes during the project, the timeline impact is communicated immediately and a revised timeline is agreed before the additional work begins. There are no surprise delays at the end.
              </p>
            </div>
          </div>

          {/* Timeline diagram placeholder */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-12">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
              <div className="space-y-6">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-6">Timeline Comparison</p>
                {[
                  { label: 'Simple', phases: [{ w: '15%', l: 'Discovery' }, { w: '15%', l: 'Design' }, { w: '45%', l: 'Build' }, { w: '15%', l: 'Deploy' }] },
                  { label: 'Mid', phases: [{ w: '12%', l: 'Discovery' }, { w: '18%', l: 'Design' }, { w: '50%', l: 'Build' }, { w: '12%', l: 'Deploy' }] },
                  { label: 'Complex', phases: [{ w: '10%', l: 'Discovery' }, { w: '15%', l: 'Design' }, { w: '55%', l: 'Build' }, { w: '10%', l: 'Deploy' }] },
                ].map((row, ri) => (
                  <div key={ri}>
                    <p className="text-white/50 text-xs mb-2">{row.label}</p>
                    <div className="flex gap-1 h-6">
                      {row.phases.map((p, pi) => (
                        <div
                          key={pi}
                          className="rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center"
                          style={{ width: p.w }}
                        >
                          <span className="text-[10px] text-[#D4AF37]/50 truncate px-1">{p.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to see what this looks like for your project?
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-10">
              The best way to know if this process fits your situation is to talk through your specific requirements. Book a free consultation and walk through what a realistic timeline, scope, and approach would look like for what you&rsquo;re building.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
              >
                Book Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Response within 24 hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                You own everything we build
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                100% client satisfaction rate
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
              Questions About Our Process
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'What if my project doesn’t fit neatly into one of the three complexity tiers?',
                a: 'Most projects don’t fit perfectly into a single tier, and that’s expected. The tiers are reference points, not rigid categories. During Phase 01, we scope your specific project and give you a timeline based on its actual complexity, not the nearest tier match.',
              },
              {
                q: 'What happens if I want to change something mid-project?',
                a: 'Scope changes are common and are handled directly. If a change affects the timeline, you’re told immediately, and a revised timeline is agreed before the additional work begins. Nothing is added silently, and nothing derails the project without your knowledge.',
              },
              {
                q: 'Do I need to know exactly what I want before starting Phase 01?',
                a: 'No. Part of Phase 01 is helping you get from a general idea to a specific, buildable scope. Most clients arrive with a problem they need solved, not a finished specification. That’s normal and it’s what Phase 01 is for.',
              },
              {
                q: 'What if I already have designs or a technical spec?',
                a: 'Great, that shortens Phase 01 and Phase 02 considerably. We’ll review what you have, validate it against technical feasibility, and move into Phase 03 faster.',
              },
              {
                q: 'Who owns the code and the system after delivery?',
                a: 'You do. Full ownership of the code, database, integrations, and documentation transfers to you at handover, at the end of Phase 04. There’s no dependency lock-in and no ongoing requirement to work with Simply Scalable.',
              },
              {
                q: 'What kind of support is available after the project is delivered?',
                a: 'Post-launch support is part of Phase 04 and covers the stabilization period immediately following launch. Beyond that, ongoing support and maintenance arrangements can be discussed based on your needs, but they are optional, not required, since you own the system outright.',
              },
            ].map((faq, i) => (
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
