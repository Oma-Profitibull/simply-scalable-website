import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Shield, Lock, Key, Map, Eye, Plus, X } from 'lucide-react';

const faqItems = [
  {q:'Do the tools in my stack need to have APIs for you to integrate them?',a:'An available API makes integration straightforward and reliable. Most modern SaaS platforms have APIs. For platforms without APIs, integration is sometimes possible through webhooks, file-based data exchange, or browser automation, depending on what the platform supports. We assess each platform during the discovery session and tell you exactly what integration approach is possible.'},
  {q:'How is a custom integration different from using Zapier or Make?',a:'Zapier and Make are the right tool for straightforward connections between supported platforms. Custom integrations are the right approach when the connection requires complex transformation logic, when the data volume exceeds what a middleware platform handles reliably, when the platforms involved are not supported, or when the reliability requirements are higher than a third-party automation tool can guarantee. We use Zapier or Make where they are the right tool and build direct integrations where they are not.'},
  {q:'Can you integrate platforms that are on-premise rather than cloud-based?',a:'Yes, though on-premise integrations require additional consideration around network access, firewall configuration, and authentication. We have built integrations with on-premise systems and assess the specific requirements during the discovery session. If the on-premise system has an available API or supports outbound webhooks, integration is generally achievable.'},
  {q:'What happens if one of the platforms we integrate changes its API?',a:'API changes are a normal part of maintaining integrations over time. At delivery, you receive full documentation of every API connection and the specific endpoints used. When an API change affects your integration, any developer with the documentation can assess the impact and make the required updates. We offer ongoing support for clients who want Simply Scalable to manage API maintenance over time.'},
  {q:'How do you handle data that is already inconsistent between our systems before we integrate?',a:'Data quality issues in the source systems are identified during the stack audit phase. Before the integration goes live, we define how inconsistencies are handled: which system is the source of truth for each field, how duplicates are resolved, and how records that do not match the expected format are flagged. Integrating dirty data does not clean it, it synchronizes the problem. We address data quality before the integration goes live.'},
  {q:'How long does an integration project take?',a:'A straightforward two-system integration typically takes two to four weeks from a signed agreement to a live, tested connection. A complex multi-system integration with a middleware layer, data migration, and monitoring infrastructure typically takes six to ten weeks. The exact timeline is defined in the project brief before any development begins.'}
];
const IntegrationsPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-[#050508]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your tools should talk to each other. Most of the time, they do not.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">The average business runs eight to twelve software tools. Each one does its job. None of them do it together. The gaps between them cost your team hours every week in manual work, duplicate entry, and decisions made on data that is already out of date. We build the connections that close those gaps and make your entire stack behave like one system.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/start" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">Fix My Stack <ArrowRight size={18} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-6 py-3 rounded-lg transition-colors">Book a Discovery Call</Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <span className="text-white/20 text-sm">Integration Architecture Diagram</span>
            </div>
          </div>
        </div>
      </section>
      {/* THE REAL COST */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Every gap between your tools is a tax your team pays every single day.</h2>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>Most software stacks were not planned. They grew. A CRM was added when the sales team got serious. A project management tool when the team grew. An accounting platform, a support tool, a scheduling app, an ecommerce platform. Each tool was the right decision at the time. None of them were chosen with the others in mind.</p>
              <p>The result is a stack where critical data lives in multiple places and is never fully synchronized. A sale closes in the CRM but the invoice does not generate automatically. A patient books an appointment but the record does not appear in the EHR. A new customer checks out on Shopify but the CRM does not know they exist until someone manually imports the export.</p>
              <p>Every one of those manual steps is a potential error. Every error costs time to find and more time to fix. Every piece of data that lives in two places with no sync is a liability waiting to become a problem.</p>
              <p>Integration is not a luxury for businesses at a certain scale. It is the difference between a team that can grow and a team that is permanently busy managing the friction between the tools they already have.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">How most teams work.</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Copy-paste data between tools multiple times per day</li>
                <li>Records that exist in one system but not another</li>
                <li>Decisions made on data that is hours or days out of date</li>
              </ul>
            </div>
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-6">
              <h4 className="text-[#D4AF37] font-semibold mb-3">What we build.</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Data flows automatically when something changes in any connected system</li>
                <li>Every tool in your stack reflects the same current state</li>
                <li>Your team acts on real-time information without manual reconciliation</li>
              </ul>
            </div>
            <blockquote className="border-l-4 border-[#D4AF37] pl-6 text-white/80 italic text-lg">"Every gap between your tools is a tax your team pays every single day."</blockquote>
          </div>
        </div>
      </section>
      {/* WHAT WE BUILD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Every type of integration your stack might need. Built with the reliability and documentation your business depends on.</h2>
            <p className="text-white/70 max-w-3xl leading-relaxed">Integration work ranges from a straightforward two-system connection to a complex multi-platform data orchestration layer. What stays consistent across every project: the integration is documented, tested against real data, and built to handle errors gracefully.</p>
          </div>
          <div className="space-y-8 mt-12">
            {[
              { title:'API Integrations', sub:'Direct connections between systems that speak to each other natively.', body:'Most modern software platforms expose an API, a structured interface that allows external systems to read from them, write to them, and trigger actions within them. A direct API integration is the most reliable type of connection because it does not depend on a third-party automation tool sitting between the two systems.', bullets:['REST API integrations between any two platforms with available API documentation','GraphQL API connections for platforms using the GraphQL query language','OAuth-based authentication setup for APIs requiring user-level authorization','API key management and secure credential handling','Read, write, create, update, and delete operations as the integration requires','Rate limit management to ensure the integration operates within platform limits','Error logging and alerting when API calls fail or return unexpected responses'] },
              { title:'Webhook-Based Real-Time Data Sync', sub:'Data that moves between systems the moment something changes.', body:'A webhook is an event-based trigger: when something happens in System A, System A sends a notification to System B immediately. No polling. No scheduled sync that is already outdated by the time it fires. Webhooks are the mechanism that makes real-time integration possible for any workflow where timing matters.', bullets:['Webhook endpoint creation to receive event data from source systems','Event filtering to process only events relevant to the integration workflow','Payload transformation to reformat incoming data for the destination system','Retry logic for failed webhook deliveries','Deduplication handling to prevent the same event triggering duplicate actions','Webhook security validation to ensure incoming data is from the expected source'] },
              { title:'ETL Pipelines for Data Transformation and Loading', sub:'The infrastructure that takes raw data from where it lives and puts it where it needs to be.', body:'ETL (Extract, Transform, Load) describes the process of pulling data from a source, reformatting it into the structure the destination requires, and loading it. ETL pipelines are the right approach for large data volumes, for data requiring significant transformation, and for migrations where source and destination have fundamentally different data models.', bullets:['Data extraction from source systems via API, database query, file export, or direct connection','Transformation logic to reformat, clean, deduplicate, and validate data in transit','Loading into destination systems via API write, direct database insert, or file delivery','Scheduled pipeline runs at defined intervals (hourly, daily, weekly)','Incremental processing to handle only records changed since the last run','Pipeline monitoring with logging and alerting for failed runs or data quality issues'] },
              { title:'Bi-Directional Sync', sub:'When both systems need to stay current and neither one is the single source of truth.', body:'Most integrations are one-directional. Bi-directional sync is more complex because changes in either system need to propagate to the other without creating conflicts, overwriting newer data with older data, or triggering loops where each system keeps updating the other in response to its own updates.', bullets:['Conflict resolution logic defining which system wins when both have updated the same record','Timestamp-based sync to ensure the most recently updated record takes precedence','Field-level sync rules defining which fields sync in which direction','Loop prevention to ensure updates do not cascade between systems indefinitely','Master record designation to establish a single source of truth for specific fields','Sync status logging showing which records are in sync and which have conflicts'] },
              { title:'Third-Party Platform Implementations', sub:'Getting a new platform running correctly in your existing environment.', body:'Implementing a new platform into an existing stack is not the same as setting up the platform in isolation. Every implementation involves connecting the new tool to existing systems, migrating data from whatever it is replacing, configuring it around your existing workflows, and training the team to use it effectively.', bullets:['CRM implementation and migration (GoHighLevel, HubSpot, Salesforce, and others)','EHR implementation and integration with existing patient management workflows','Ecommerce platform implementation (Shopify, WooCommerce) with fulfillment and inventory connections','Marketing automation platform implementation and migration from legacy tools','Data migration from the replaced platform with validation and reconciliation','Team training and documentation at handover'] },
              { title:'Middleware and Integration Layer Architecture', sub:'When the integration is too complex for a direct connection and needs its own layer.', body:'When five systems need to share data and the transformation logic between each pair is different, a middleware layer is the right architectural approach. The middleware sits between all systems, handles routing, transformation, and error management centrally, and gives the entire integration a single place to monitor and maintain.', bullets:['Middleware architecture design for complex multi-system integration scenarios','Message queue setup for high-volume data flows requiring reliable processing without loss','Data routing logic sending the right data to the right destination based on defined rules','Centralized error handling and retry management across all connected systems','Integration monitoring dashboard showing data flow status across the entire stack','Documentation of the full integration architecture for ongoing maintenance'] },
              { title:'Automation Trigger and Action Mapping', sub:'The logic that connects an event in one system to an action in another.', body:'Beyond data sync, integrations often need to trigger specific actions in downstream systems based on events in upstream ones. A deal closes in the CRM: create a project in the project management tool, send a Slack notification, generate a contract. None of that requires manual work if the trigger and action mapping is built correctly.', bullets:['Cross-system trigger mapping defining which events trigger which actions elsewhere','Action sequencing for multi-step workflows triggered by a single event','Conditional action logic (trigger this action if X, a different action if Y)','Delay and scheduling logic for actions that should fire after a defined interval','Error handling for actions that fail, with retry logic and fallback notifications','Audit logging of all triggered actions for troubleshooting and compliance'] }
            ].map((type, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-1">{type.title}</h3>
                <p className="text-[#D4AF37] font-medium mb-4">{type.sub}</p>
                <p className="text-white/70 leading-relaxed mb-6">{type.body}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/60 text-sm">
                  {type.bullets.map((b, j) => <li key={j} className="flex items-start gap-2"><span className="text-[#D4AF37]">→</span>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* EVERY INTEGRATION INCLUDES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The elements that make an integration reliable enough to run your business on.</h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">Integration work fails most often not because the initial connection was built incorrectly but because the integration was not built to handle the things that inevitably go wrong. We build integrations that are production-ready by default.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon:<Shield size={28} className="text-[#D4AF37]" />,title:'Error handling and retry logic',body:'Every integration includes defined behavior for when something fails. Errors are caught, logged, and retried according to the criticality of the data being moved. Nothing fails silently.'},
              {icon:<Eye size={28} className="text-[#D4AF37]" />,title:'Real-time monitoring and alerting',body:'Every integration runs with monitoring that alerts the right person when a failure occurs or when data flow falls outside defined parameters.'},
              {icon:<Key size={28} className="text-[#D4AF37]" />,title:'Complete documentation',body:'Every integration is documented at delivery: the systems connected, data fields mapped, transformation logic applied, error handling behavior, and authentication credentials.'},
              {icon:<Map size={28} className="text-[#D4AF37]" />,title:'Tested against real data',body:'Every integration is tested with actual data from your systems before it goes live. Edge cases are identified during testing, not discovered in production.'},
              {icon:<Lock size={28} className="text-[#D4AF37]" />,title:'Secure credential management',body:'API keys, OAuth tokens, and authentication credentials are handled securely and documented in a way that makes rotation straightforward without breaking the integration.'}
            ].map((item, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* USE CASES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Six scenarios where integration is the highest-leverage investment a business can make.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {num:'01',title:'The CRM That Does Not Talk to Anything Else',body:'A sales team using a CRM entirely disconnected from the marketing platform, accounting system, and delivery tools. Deals close in the CRM and information must be manually transferred to every other system. An integration layer connects the CRM to every downstream tool so information flows automatically when a deal progresses.'},
              {num:'02',title:'The Medical Practice With Five Disconnected Tools',body:'A healthcare practice running scheduling, EHR, intake forms, CRM, and patient messaging through five separate platforms with no connection between them. Staff reconcile data manually every day. A custom integration layer connects all five: patient data flows between systems automatically, no manual entry required.'},
              {num:'03',title:'The Ecommerce Brand Reconciling Data Across Platforms',body:'A brand selling across Shopify, Amazon, and TikTok Shop whose inventory, order, and customer data all live in separate places. Inventory updates on one platform do not reflect on others. A multi-platform integration connects all three channels and the CRM into one data layer.'},
              {num:'04',title:'The Agency Implementing a New Platform for a Client',body:'An agency migrating a client from one CRM to another or implementing a new marketing automation platform on top of an existing stack. The migration needs to be clean, the existing data needs to move correctly, and the new platform needs to be connected to everything the old one was connected to.'},
              {num:'05',title:'The Business Replacing a Legacy System',body:'A business running on a legacy platform that is no longer supported or no longer fits the way the business operates. The replacement needs to be implemented and integrated into the existing stack without losing historical data or disrupting the workflows that currently run on the old system.'},
              {num:'06',title:'The Operator Who Has Identified the Manual Step That Should Not Exist',body:'A founder or operator who knows exactly which manual step in their workflow should be automatic but has not been able to make it so because the two systems involved do not have a native connection. A direct integration between those two systems eliminates that step permanently.'}
            ].map((uc) => (
              <div key={uc.num} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[#D4AF37] text-3xl font-bold mb-3 block">{uc.num}</span>
                <h3 className="text-white font-semibold mb-3">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* LIVE PROOF */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Two integrations. Two completely different stack problems. Both solved at the architecture level.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="bg-white/5 rounded-xl p-6 aspect-video flex items-center justify-center mb-6">
                <span className="text-white/20 text-sm">GEM Science Integration Diagram</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GEM Science: Five-System Integration</h3>
              <div className="space-y-4 mt-4">
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">The problem</p><p className="text-white/60 text-sm leading-relaxed">Five disconnected platforms: scheduling, EHR, intake forms, CRM, and patient messaging, all operating in isolation. Staff manually transferred patient data between systems every day. Every gap required a human to close it.</p></div>
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">What we built</p><p className="text-white/60 text-sm leading-relaxed">A bi-directional integration between DrChrono EHR and the practice CRM. A patient registration and intake form system routing completed forms directly to the EHR record. An appointment scheduling integration syncing confirmed bookings across both clinical and marketing systems in real time.</p></div>
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">The result</p><p className="text-white/60 text-sm leading-relaxed">Zero manual data transfer between clinical and marketing systems. Patient records are current across all connected tools without staff intervention.</p></div>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="bg-white/5 rounded-xl p-6 aspect-video flex items-center justify-center mb-6">
                <span className="text-white/20 text-sm">VAHubPro Consolidation Diagram</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VAHubPro: Four-Tool Consolidation</h3>
              <div className="space-y-4 mt-4">
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">The problem</p><p className="text-white/60 text-sm leading-relaxed">A VA agency running its entire operation across four separate tools: spreadsheets for tracking, Notion for documentation, Slack for communication, and a CRM for client management. Nothing was connected. Information existed in multiple places and was never fully synchronized.</p></div>
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">What we built</p><p className="text-white/60 text-sm leading-relaxed">A unified rev ops system that consolidated all four tools into one platform. Onboarding workflows, sprint and task management, outreach tracking, and content strategy all live in one system with one data layer.</p></div>
                <div><p className="text-[#D4AF37] font-medium text-sm mb-1">The result</p><p className="text-white/60 text-sm leading-relaxed">Four tools consolidated into one. The agency went from manual processes to automated workflows in under three weeks.</p></div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">Book a Discovery Call to Talk About Your Integration <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      {/* HOW WE BUILD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">From a disconnected stack to a unified system. Here is exactly how we get there.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {phase:'01',title:'Stack Audit and Integration Mapping',body:'We map your current stack: every tool, every data flow that currently exists, and every gap that requires manual work to bridge. This audit produces the integration architecture document defining exactly what gets connected, what data moves in which direction, and what the transformation logic requires.'},
              {phase:'02',title:'Integration Architecture Design',body:'Phil designs the technical architecture for the full integration layer: connection methods for each system pair, the data model that normalizes information across platforms, the error handling approach, and the monitoring infrastructure. The architecture is reviewed before any development begins.'},
              {phase:'03',title:'Development and Connection Build',body:'Integrations are built system by system, with each connection tested individually before being connected to the full integration layer. This makes troubleshooting straightforward and ensures each connection is validated before it becomes part of a larger chain.'},
              {phase:'04',title:'Data Validation and Testing',body:'The full integration is tested with real data from your systems. Every data flow is validated against expected outputs. Edge cases are tested deliberately. Error handling is triggered intentionally to confirm it behaves correctly. Nothing goes into production without passing this phase.'},
              {phase:'05',title:'Migration Execution (if applicable)',body:'If the integration project includes migrating historical data from a legacy system, the migration is executed with a full validation pass comparing source and destination record counts and spot-checking data accuracy before cutover.'},
              {phase:'06',title:'Go-Live, Monitoring Setup, and Handover',body:'The integration goes live with monitoring active from day one. At handover you receive full documentation of every connection, every data mapping, every transformation rule, and every credential required to maintain the integration. You are not dependent on us to keep it running.'}
            ].map((phase) => (
              <div key={phase.phase} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[#D4AF37] text-3xl font-bold mb-3 block">{phase.phase}</span>
                <h3 className="text-white font-semibold mb-3">{phase.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHAT YOU OWN */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">When we deliver your integration, the architecture and everything inside it belongs to you.</h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">The integration codebase, data mapping documentation, API configurations, authentication credentials, monitoring setup, and full technical documentation are all yours at delivery. Any developer familiar with the systems involved can maintain, modify, or extend the integration. No proprietary layer. No dependency on Simply Scalable to keep data flowing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Key size={32} className="text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-3">Your integration code</h3>
              <p className="text-white/60 text-sm leading-relaxed">Full source code and documentation delivered at handover. Maintain it with any qualified developer.</p>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Map size={32} className="text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-3">Your data mapping</h3>
              <p className="text-white/60 text-sm leading-relaxed">Complete documentation of every field mapped between every system, every transformation applied, and the logic behind every routing decision.</p>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Eye size={32} className="text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-3">Your monitoring</h3>
              <p className="text-white/60 text-sm leading-relaxed">The monitoring and alerting infrastructure is delivered as part of the project. You see what is happening across your integration layer at all times.</p>
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tell us what your stack looks like and where the gaps are. We will close them.</h2>
          <p className="text-white/70 text-lg mb-8">Nine questions. Twenty-four hours. A detailed quote with integration scope, architecture approach, and a real number.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link to="/start" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-8 py-4 rounded-lg transition-colors text-lg">Get a Quote <ArrowRight size={20} /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-8 py-4 rounded-lg transition-colors text-lg">Book a Discovery Call</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/50 text-sm">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4AF37]" /> Response within 24 hours</span>
            <span className="flex items-center gap-2"><Shield size={16} className="text-[#D4AF37]" /> Production-ready error handling on every integration</span>
            <span className="flex items-center gap-2"><Lock size={16} className="text-[#D4AF37]" /> Full ownership and documentation at delivery</span>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-0">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-lg font-medium text-white pr-8 group-hover:text-[#D4AF37] transition-colors">{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {openFaq === i ? (
                      <X className="w-4 h-4 text-[#D4AF37]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 text-base leading-relaxed pb-6">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default IntegrationsPage;
