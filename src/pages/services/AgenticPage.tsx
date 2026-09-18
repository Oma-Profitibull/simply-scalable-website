import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle, Lock, Key, Eye, Settings, Plus, X } from 'lucide-react';

const faqItems = [
  {q:'What is the difference between an agentic application and a regular automation or Zapier workflow?',a:'A Zapier workflow is rules-based: if this happens, do that. It does not make decisions. An agentic application uses AI reasoning to make decisions within the workflow, qualifying a lead against nuanced criteria, generating personalized content, or routing a case based on factors that cannot be reduced to a simple if-then rule.'},
  {q:'Will the agent make mistakes? How do you handle errors?',a:'Yes, agents make mistakes, and error handling is core to how we build them. Every agent includes fallback logic for outputs below a defined confidence threshold, human review checkpoints for decisions with significant consequences, and logging that makes every action traceable.'},
  {q:'Which AI models do you use to build agentic applications?',a:'We use the model that performs best for each specific task. That typically includes models from Anthropic (Claude), OpenAI (GPT), and Google (Gemini). For multi-agent systems, different steps may use different models. Model selection is part of the architecture phase and is documented at delivery.'},
  {q:'How does the human approval checkpoint work in practice?',a:'Before any agent action with real-world consequences fires, the agent generates its proposed output and routes it to the appropriate person for review, via a CRM task, Slack message, or dashboard queue. The agent does not proceed until approval is received. The reviewer sees what the agent produced and why.'},
  {q:'Can an agentic application integrate with the tools we already use?',a:'Yes. Integration with your existing stack is part of every agent build. We build the integration layer that connects the agent to your CRM, database, communication tools, and any other system it needs. If the tool has an available API, integration is generally possible.'},
  {q:'How long does it take to build a custom agentic application?',a:'A focused single-agent system typically takes four to eight weeks. A multi-agent orchestration system with several connected agents, multiple integrations, and a monitoring dashboard typically takes eight to fourteen weeks. The exact timeline is defined in the project brief before development begins.'}
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-lg font-medium text-white pr-8 group-hover:text-[#D4AF37] transition-colors">{item.q}</span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === i ? (
                    <X className="w-4 h-4 text-[#D4AF37]" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
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
  );
}

const AgenticPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6">
                The work your team does on repeat. Automated, accurate, and running without anyone watching.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-10">An agentic application is not a chatbot. It is a software system that takes input, runs a defined process, makes decisions along the way, and delivers an outcome without waiting for a human to prompt every step. If your business has a workflow that your team repeats every day, there is a version of that workflow that runs itself.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/start" className="rounded-full bg-[#D4AF37] text-[#050508] font-semibold px-7 py-3 text-sm hover:bg-[#B8963E] transition-colors">Build My Agent</Link>
                <Link to="/contact" className="rounded-full border border-[#D4AF37]/50 text-[#D4AF37] font-medium px-7 py-3 text-sm hover:border-[#D4AF37] transition-colors">Book a Discovery Call <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/10 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />
                <span className="text-white/20 text-sm relative z-10">Agent Workflow Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT MAKES AGENTIC DIFFERENT */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A chatbot responds when you ask it something. An agent acts whether you ask or not.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-white/70 leading-relaxed">The word AI has been applied to so many different tools over the last few years that it has become almost meaningless in a business context. Chatbots are AI. Autocomplete is AI. Image generators are AI. None of them describe what an agentic application is.</p>
              <p className="text-white/70 leading-relaxed">An agentic application is a software system that executes a workflow autonomously. It does not wait to be prompted. It takes input from a defined source, runs a defined process using AI reasoning and decision logic, interacts with external systems where needed, and delivers a result.</p>
              <p className="text-white/70 leading-relaxed">A research agent does not wait for your analyst to ask it a question. It monitors a list of companies you care about, identifies signals that match your defined criteria, runs its own research process, and delivers a formatted brief to your inbox before you start your morning.</p>
              <p className="text-white/70 leading-relaxed">That is the shift agentic applications create. Not replacing the team. Removing the ceiling on what the team can accomplish by taking the repetitive, rule-based, time-consuming work off their plate entirely.</p>
              <p className="text-white/70 leading-relaxed">We built ProfitBot as our own internal agentic system. It routes tasks across AI models, maintains context across sessions, assesses lead quality against defined ICP criteria, generates outreach content, and routes decisions to the right place.</p>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Without an agent.</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>Analyst spends 3-4 hrs/day researching and qualifying prospects manually</li>
                  <li>Data arrives in inconsistent formats requiring manual cleanup</li>
                  <li>Routing decisions require a human to read and classify every item</li>
                </ul>
              </div>
              <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-6">
                <h4 className="text-[#D4AF37] font-semibold mb-3">With an agent.</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Qualified prospect list with outreach drafts ready for review every morning</li>
                  <li>Clean, structured data loaded automatically</li>
                  <li>Routing runs automatically; human handles only the exceptions</li>
                </ul>
              </div>
              <blockquote className="border-l-4 border-[#D4AF37] pl-6 text-white/80 italic text-lg">"Not replacing the team. Removing the ceiling on what the team can accomplish."</blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT WE BUILD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Six types of agentic applications. Each one takes a specific category of work off your team's plate permanently.</h2>
            <p className="text-white/70 max-w-3xl leading-relaxed">Purpose-built autonomous systems designed around a specific workflow your business runs, the specific decisions that workflow requires, and the specific output your team needs to act on.</p>
          </div>
          <div className="space-y-8 mt-12">
            {[
              { title:'Research and Intelligence Agents', sub:'The analyst that never sleeps and never misses a signal.', body:'Research agents monitor defined sources, identify relevant information against your criteria, and deliver structured outputs on a schedule or trigger. The output is a structured brief, formatted report, or prioritized list of items requiring human attention, with the research already done.', bullets:['Competitive intelligence agents monitoring competitor websites, pricing pages, and job listings','Market monitoring agents tracking industry news, regulatory changes, and trend signals','Lead intelligence agents researching targets against ICP criteria before outreach begins','Social listening agents monitoring mentions and engagement signals across platforms','Custom research agents built around any information gathering workflow done manually today','Confidence scoring so your team knows which findings are high-signal vs. need verification'] },
              { title:'Outreach and Prospecting Agents', sub:'Personalized outreach at a scale no human team can match.', body:'Outreach agents take a list of contacts, research each one against defined criteria, generate personalized content based on that research, and execute across defined channels. The personalization is content generated from actual research on each specific prospect, not a mail merge.', bullets:['ICP research and qualification before any outreach begins','Personalized email content generation based on per-prospect research','LinkedIn outreach content generated from profile and activity data','Multi-step sequence management with conditional logic based on engagement','Reply detection and routing to human follow-up when a response requires it','CRM integration so outreach activity and responses are logged automatically'] },
              { title:'Data Processing and Enrichment Agents', sub:'The pipeline that cleans, transforms, and enriches your data without a data team.', body:'Data processing agents take raw input from one or more sources, apply defined transformation, enrichment, and validation logic, and load clean, structured data into the destination your business needs. For businesses receiving large volumes of raw data, a data processing agent eliminates the manual work entirely.', bullets:['Contact and company data enrichment from third-party sources','Data deduplication and merge logic for CRM contact management','Format transformation for data moving between incompatible systems','Validation logic to flag, quarantine, or reject records below quality standards','Batch processing pipelines for large data volumes on scheduled or triggered basis','Real-time enrichment triggered by form submissions, CRM record creation, or API events'] },
              { title:'Document Analysis and Processing Agents', sub:'The work of reading, extracting, and summarizing documents. Done automatically.', body:'Document analysis agents read contracts, applications, reports, invoices, RFPs, and support tickets, extracting the information your workflow requires, applying defined logic, and routing results to the right place. What previously required a person to read every document becomes a system that processes them in seconds.', bullets:['Contract review agents extracting key terms, dates, obligations, and risk clauses','Invoice and receipt processing extracting line items into accounting systems','Application and intake form analysis scoring submissions against defined criteria','RFP analysis agents identifying requirements, deadlines, and evaluation criteria','Support ticket classification and routing to the correct team automatically','Report summarization agents distilling long-form reports into executive summaries'] },
              { title:'Decision Routing and Workflow Agents', sub:'The logic layer that decides what happens next so your team does not have to.', body:'A decision routing agent applies defined criteria, makes the call, and routes the outcome. When decisions follow defined rules they do not need a human every time. Human review is reserved for the cases the criteria cannot resolve cleanly.', bullets:['Lead scoring and assignment evaluating incoming leads against ICP criteria','Support ticket escalation classifying severity and routing to the appropriate team','Approval workflow agents routing requests through a defined approval chain','Content moderation agents flagging submissions for review based on policy criteria','Order management agents identifying exceptions for human review','Quality assurance agents flagging low-confidence outputs from automated processes'] },
              { title:'Multi-Agent Orchestration Systems', sub:'When one agent is not enough and the workflow requires several working in sequence.', body:'Complex workflows require multiple types of intelligence working together. A research agent finds the signal. An enrichment agent builds the profile. A scoring agent qualifies. An outreach agent generates content. No single agent does all of that. A multi-agent orchestration system does. We built ProfitBot on this architecture.', bullets:['Orchestration layer connecting multiple specialized agents into one workflow','Multi-model routing sending tasks to the AI model best suited for each type','Context management so each agent has information from prior steps','Human-in-the-loop checkpoints where a human reviews before the workflow continues','Error handling and fallback logic for steps that do not produce a usable output','Monitoring dashboard showing status, output, and performance of every agent'] }
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
      {/* HUMAN CHECKPOINT PRINCIPLE */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The agent does the work. You approve before anything consequential happens.</h2>
          </div>
          <div className="space-y-5 text-white/70 leading-relaxed scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <p>Every agentic system we build includes human-in-the-loop checkpoints at the stages where the output has real-world consequences. An agent can research a thousand leads, score them, and generate personalized outreach for every one of them. Before any outreach is sent, it is presented to the right person for approval. The agent does not act until the human signs off.</p>
            <p>This is not a technical limitation. It is an architecture decision. AI systems that act without human review create two problems: errors that compound before anyone catches them, and organizational resistance from teams who do not trust systems they cannot see or control.</p>
            <p>The approval checkpoint solves both. The team sees what the agent produced. They approve what is correct, override what is not, and the system learns from both. Over time, the approval rate goes up because the agent gets better. The human workload goes down.</p>
            <p>We built this principle into ProfitBot from the start. Content is generated and presented for approval before any campaign fires. The system does not go rogue. Every output is traceable to a human decision.</p>
          </div>
        </div>
      </section>
      {/* USE CASES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Six operator profiles where agentic applications create the most immediate impact.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {num:'01',title:'The Sales Team Doing Manual Prospecting',body:'A sales team spending three to four hours per day on prospecting: finding companies, researching them, qualifying them against ICP criteria, and writing personalized outreach. A research and outreach agent does all of that automatically, delivering a prioritized list of qualified prospects with outreach drafts ready for review every morning.'},
              {num:'02',title:'The Agency Processing Large Volumes of Client Data',body:'A marketing or ecommerce agency receiving client data in inconsistent formats, manually cleaning and reformatting before analysis can begin. A data processing agent handles intake, transformation, validation, and loading automatically. The analyst gets clean data. The manual preprocessing disappears.'},
              {num:'03',title:'The Operations Team Routing Incoming Requests Manually',body:'A business where incoming requests, support tickets, or applications are read by a team member, classified, and routed to the right queue. A decision routing agent does the classification and routing automatically, flagging only items that do not fit a clear category for human review. Response time drops.'},
              {num:'04',title:'The Executive Team Receiving Information Too Late',body:'A leadership team making decisions based on weekly reports that are already days old. A research and monitoring agent delivers a daily or real-time intelligence brief covering the metrics, market signals, and operational data that matter to the decisions being made at the top of the organization.'},
              {num:'05',title:'The Business Handling High Volumes of Incoming Documents',body:'A business receiving contracts, applications, invoices, or intake forms in volume and needing each one reviewed, classified, and acted on. A document analysis agent reads every incoming document, extracts the relevant information, flags exceptions, and routes each to the correct workflow without a human reading it first.'},
              {num:'06',title:'The Founder Who Has Identified the Exact Bottleneck',body:'A founder who knows precisely which workflow is the bottleneck and has tried to hire around it without success. The task is too repetitive to keep good people engaged and too complex for simple automation. An agentic application is built specifically around that workflow at a fraction of the cost of any hire.'}
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
      {/* LIVE PROOF - PROFITBOT */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ProfitBot: the multi-model agentic AI system we built for ourselves and made available to everyone.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <span className="text-white/20 text-sm">ProfitBot Interface Screenshot</span>
              </div>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-5">
              <p className="text-white/70 leading-relaxed">As the Simply Scalable ecosystem grew, the manual work inside the outreach and lead management workflow became a bottleneck. Researching leads, scoring them, generating outreach content, routing to the right campaign, and maintaining context across sessions all required time and produced variable output. ProfitBot was built to take all of that off the plate.</p>
              <div className="space-y-3">
                {['Assesses incoming leads against ICP criteria before any outreach resources are spent','Generates full outreach sequences across email and LinkedIn for approved leads','Routes leads to the correct campaign or workflow based on score and profile','Creates approval tasks with a defined deadline before any campaign activates','Maintains context across sessions so the system remembers what it has done with each lead','Monitors outreach performance and flags underperforming sequences for review'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><span className="text-[#D4AF37] mt-1 flex-shrink-0">→</span><p className="text-white/70 text-sm">{item}</p></div>
                ))}
              </div>
              <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-5">
                <p className="text-white/80 text-sm"><span className="text-[#D4AF37] font-semibold">The architecture principle:</span> ProfitBot does not act without human approval at defined checkpoints. The agent produces the output. A human reviews and approves. The campaign fires only after sign-off.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">Book a Discovery Call <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
      {/* HOW WE BUILD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">From the workflow your team repeats every day to a system that runs it autonomously.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {phase:'01',title:'Workflow Mapping and Agent Design',body:'We map every step, every decision point, every input source, every output destination, and every place where a human needs to be in the loop. This produces the agent design document the entire build is executed against, including success criteria.'},
              {phase:'02',title:'Model Selection and Architecture',body:'Phil selects the AI models and architecture based on what the workflow requires. Different tasks perform better on different models. The orchestration logic, context management approach, and output formatting are defined at this phase.'},
              {phase:'03',title:'Integration and Data Connection',body:'The agent needs to talk to your existing systems: the CRM it logs to, the database it pulls from, the email system it routes through. Every integration is built before agent logic development so the agent has access to its data sources from the first test run.'},
              {phase:'04',title:'Agent Development and Logic Build',body:'The agent workflow is built step by step against the design document. Decision logic, branching conditions, error handling, and fallback behaviors are all built in. The agent is not finished until every defined scenario produces the correct output.'},
              {phase:'05',title:'Testing With Real Data',body:'The agent is tested using real data from your business before going live. Edge cases are identified and handled. Outputs are reviewed by the team who will use them daily. Nothing goes into production until output quality meets the required standard.'},
              {phase:'06',title:'Deployment, Monitoring, and Handover',body:'The agent is deployed with a monitoring dashboard showing its status, outputs, and any errors. At handover you receive full documentation of how the agent works, how to adjust its parameters, and how to modify logic as your workflow evolves.'}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">When we deliver your agentic application, the system and everything it produces belong to you.</h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">The agent codebase, workflow logic, integration configurations, model routing architecture, monitoring dashboard, and all documentation are yours at delivery. You can modify the agent or hand it to another developer at any time. No black box.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Key size={32} className="text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-3">Your workflow logic</h3>
              <p className="text-white/60 text-sm leading-relaxed">Complete documentation of every decision point, every integration, and every parameter the agent runs on. Modify it with any developer you choose.</p>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Eye size={32} className="text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-3">Full transparency</h3>
              <p className="text-white/60 text-sm leading-relaxed">Every agent output is logged with the input that produced it and the reasoning behind each decision. Nothing the agent does is invisible.</p>
            </div>
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Settings size={32} className="text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-3">Your parameters, your control</h3>
              <p className="text-white/60 text-sm leading-relaxed">ICP definitions, scoring thresholds, routing rules: all configurable without rebuilding from scratch.</p>
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tell us which workflow your team repeats every day. We will build the agent that runs it.</h2>
          <p className="text-white/70 text-lg mb-8">Nine questions. Twenty-four hours. A detailed quote with scope, architecture, and a real number.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link to="/start" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-8 py-4 rounded-lg transition-colors text-lg">Get a Quote <ArrowRight size={20} /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37] text-white px-8 py-4 rounded-lg transition-colors text-lg">Book a Discovery Call</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-white/50 text-sm">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4AF37]" /> Response within 24 hours</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-[#D4AF37]" /> Human approval checkpoints built into every agent</span>
            <span className="flex items-center gap-2"><Lock size={16} className="text-[#D4AF37]" /> Full ownership and transparency at delivery</span>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <FAQSection />
    </div>
  );
};
export default AgenticPage;
