import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Layers, Sparkles, MessageSquare, Zap, Search, Users, Image, Settings, Filter, PenLine, GitBranch, CheckSquare } from 'lucide-react';

const ProfitBotPage = () => {
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
              Every AI model you need. One chat stream. A system that never forgets where you left off.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              ProfitBot is a multimodel AI system that lets you switch between AI models within one continuous conversation, stores persistent memory across every session, connects to the platforms your business runs on, and handles everything from business ideation to the images, videos, campaigns, and websites that bring an idea to market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ecosystem/profitbot"
                className="inline-flex items-center gap-2 bg-[#A78BFA] hover:bg-[#9575E6] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore ProfitBot <ArrowRight size={18} />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#A78BFA] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-[#A78BFA]/10 rounded-full blur-3xl" />
              <div className="absolute inset-8 bg-[#A78BFA]/5 rounded-full border border-[#A78BFA]/20 flex items-center justify-center">
                <div className="relative">
                  <Bot className="w-20 h-20 text-[#A78BFA]" />
                  <Brain className="w-8 h-8 text-[#A78BFA]/60 absolute -top-4 -right-6" />
                  <Layers className="w-7 h-7 text-[#A78BFA]/50 absolute -bottom-3 -left-6" />
                  <Sparkles className="w-6 h-6 text-[#A78BFA]/40 absolute top-0 -left-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PROFITBOT ACTUALLY IS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              One system. Every model. A memory that compounds. And it can act, not just respond.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                Most AI tools give you one model and a blank slate every time you open them. You explain your business. The model responds. The session ends and everything resets. The next time you open it, you start over. If you need a different model for a different task, you open a different tab, start a new session, and explain yourself again.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white font-semibold text-lg">
                ProfitBot removes every one of those friction points.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                It is a multimodel system. You are not locked into one AI. You can switch between models within the same chat stream without losing the conversation. If one model handles structured analysis better and another produces stronger copy, you use each for what it does best inside one continuous session.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                It has persistent memory. What you discussed yesterday is available today. What you decided two weeks ago is in context when you come back. The knowledge your business has shared with ProfitBot compounds over time rather than resetting every session.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                It is agentic. It connects to platforms via API, takes actions inside those platforms, and handles tasks that would otherwise require a manual step in a separate tool.
              </p>
              <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed">
                And it covers the full creative range a business needs to operate. From helping you establish an idea to producing the images and videos you use as marketing collateral, to the campaigns and websites built inside the platform. All from one chat interface.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: <Layers className="w-5 h-5 text-[#A78BFA]" />,
                  label: 'Multimodel access',
                  desc: 'Switch between AI models mid-conversation without losing context.',
                },
                {
                  icon: <Brain className="w-5 h-5 text-[#A78BFA]" />,
                  label: 'Persistent memory',
                  desc: 'Knowledge compounds across sessions instead of resetting.',
                },
                {
                  icon: <Zap className="w-5 h-5 text-[#A78BFA]" />,
                  label: 'Agentic actions',
                  desc: 'Connects to platforms and executes tasks, not just text.',
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-[#A78BFA]" />,
                  label: 'Full creative range',
                  desc: 'Ideas, images, video, campaigns, and websites from one chat.',
                },
                {
                  icon: <MessageSquare className="w-5 h-5 text-[#A78BFA]" />,
                  label: 'One chat stream',
                  desc: 'Everything stays in one continuous conversation thread.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PROFITBOT DOES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Six core capabilities. Built around how you actually work.
            </h2>
          </div>

          <Subsection
            icon={<Layers className="w-5 h-5 text-[#A78BFA]" />}
            title="Multimodel Chat in One Stream"
            subheading="Switch between AI models without switching conversations."
            details={[
              'ProfitBot connects to multiple AI models and lets you use them within one continuous chat stream. You do not need to open a separate tool to access a different model. You do not lose the conversation when you switch. The session carries forward and the system routes to the model that handles your current task best.',
              'Models available inside ProfitBot include options from the leading AI providers. As new models release and the platform evaluates their performance across task types, the roster updates. You are never locked into yesterday’s best option.',
            ]}
            bullets={[
              'Access to multiple AI models including GPT, Claude, Gemini, and others within one chat interface',
              'Model switching mid-conversation without losing context or starting over',
              'Fable model available for eligible subscribers',
              'No need to maintain separate subscriptions across multiple AI tools',
              'One interface for all AI-assisted work regardless of model',
            ]}
          />

          <Subsection
            icon={<Brain className="w-5 h-5 text-[#A78BFA]" />}
            title="Persistent Memory and Chat Recall"
            subheading="The context that carries forward. Every time."
            details={[
              'Every conversation in ProfitBot adds to a persistent memory store. When you return the next day, the next week, or the next month, ProfitBot has recall of what you discussed, what you decided, and what context is relevant to your current task. You do not re-explain your business. You do not re-upload your documents. You do not repeat yourself.',
              'The compounding value of this grows with every session. Over time ProfitBot builds a working knowledge of your business that no fresh-session AI tool can replicate.',
            ]}
            bullets={[
              'Persistent memory stored and accessible across all chat sessions',
              'Recall of previous conversations, decisions, and context on return',
              'Business context, ICP definitions, and persona data retained without re-entry',
              'Memory reviewable and editable by the user at any time',
              'Chat history searchable and referenceable within the platform',
            ]}
          />

          <Subsection
            icon={<Search className="w-5 h-5 text-[#A78BFA]" />}
            title="Model Guides"
            subheading="Not sure which AI model to use? ProfitBot tells you."
            details={[
              'The AI model landscape changes constantly. New models release. Existing models update. The model that performs best on writing may underperform on analysis. Most people default to one model for everything and get average performance across all task types as a result.',
              'ProfitBot includes model guides that recommend the best model for what you are trying to accomplish. Describe the task and ProfitBot points you to the model most likely to handle it well, with a plain language explanation of why. You get the benefit of a multi-model ecosystem without needing to research every model independently to know when to use which one.',
            ]}
            bullets={[
              'Model recommendation based on task type and requirements',
              'Guidance on which models perform best for writing, analysis, research, and image generation',
              'Plain language explanations accessible to non-technical users',
              'Updated guidance as new models are added to the platform',
            ]}
          />

          <Subsection
            icon={<Users className="w-5 h-5 text-[#A78BFA]" />}
            title="Personas and Avatars"
            subheading="The context that makes every output specific to your business."
            details={[
              'ProfitBot allows you to build and store personas and avatars that define your brand voice, your offer, your ideal customer, and how you want to communicate. When a persona is active, every output ProfitBot produces reflects that context. The content sounds like your brand. The outreach is written for your specific prospect.',
              'You can also import documents directly as persona context: a sales playbook, an existing framework, a methodology document. ProfitBot reads it, stores it, and applies it going forward without requiring you to re-paste it into every prompt.',
            ]}
            bullets={[
              'Persona creation with brand voice, offer description, ICP definition, and communication style',
              'Avatar management for different audience segments or offer tracks',
              'Document import for training ProfitBot on proprietary content and frameworks',
              'Multiple personas for businesses with different products or audiences',
              'Active persona selection within the chat stream',
            ]}
          />

          <Subsection
            icon={<Settings className="w-5 h-5 text-[#A78BFA]" />}
            title="Agentic Platform Integration"
            subheading="An AI that does not just respond. One that acts."
            details={[
              'ProfitBot connects to external platforms via API and can take actions within those platforms directly from the chat interface. Inside the Simply Scalable ecosystem it has native access to Profitibull CRM and the unified workflow builder. Beyond the ecosystem, it can connect to any platform with available API access.',
              'Tasks that previously required opening a separate tool, finding the right record, and making a manual update can be handled through a ProfitBot instruction from inside the chat.',
            ]}
            bullets={[
              'Native integration with Profitibull CRM and the ecosystem workflow builder',
              'API-based connection to external tools and platforms',
              'Actions taken inside connected platforms from within the chat',
              'Workflow updates, contact management, and campaign actions handled inside the chat',
              'Create ticket functionality routed through ProfitBot',
            ]}
          />

          <Subsection
            icon={<Image className="w-5 h-5 text-[#A78BFA]" />}
            title="Content and Creative Production"
            subheading="From the idea to the image, video, campaign, and website. All inside ProfitBot."
            details={[
              'ProfitBot handles the full range of content types a business needs to go from concept to market. It helps establish and develop a business idea. It generates marketing copy, outreach sequences, and campaign content. It produces images and videos for use as marketing collateral. It connects to website and landing page tools inside the ecosystem when the creative work needs to go live.',
              'This breadth means ProfitBot is not a specialized tool for one category. It is the AI layer across the full scope of what a business needs to create and communicate.',
            ]}
            bullets={[
              'Business ideation and concept development',
              'Marketing copy, campaign content, and outreach sequence generation',
              'Image generation for campaigns, social posts, and marketing collateral',
              'Video content production within supported model capabilities',
              'Website and landing page creation connected to platform tools',
              'Strategic planning, research, and analysis across any topic',
            ]}
          />
        </div>
      </section>

      {/* WHAT A SESSION LOOKS LIKE */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              One system. One session. A full day's AI work handled.
            </h2>
          </div>
          <div className="relative max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#A78BFA]/60 via-[#A78BFA]/20 to-transparent hidden md:block" />
            {sessionSteps.map((step, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 relative pl-0 md:pl-12 mb-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="hidden md:flex absolute left-0 top-5 w-8 h-8 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/30 items-center justify-center">
                  <span className="text-[#A78BFA] text-xs font-bold">{i + 1}</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white/70 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFITBOT INSIDE THE ECOSYSTEM WORKFLOW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ProfitBot also runs as the AI intelligence layer inside your outreach workflows.
            </h2>
          </div>
          <p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-white/70 leading-relaxed max-w-3xl mb-12">
            When ProfitBot is connected to the rest of the Simply Scalable ecosystem through the unified workflow builder, it takes on a specific role inside the outreach operation. This is ProfitBot working in its agentic mode: not responding to a question, but running a process, making decisions, and presenting them for human review before anything executes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflowCards.map((card, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <span className="text-white/40 text-sm font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFITBOT IN THE ECOSYSTEM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ProfitBot is the AI intelligence layer woven across the entire ecosystem.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-10">
              <p>
                ProfitBot is available as a standalone product and as the AI layer embedded across the Simply Scalable ecosystem. Inside the unified workflow builder, ProfitBot assessment and content generation steps sit alongside ProfitLink LinkedIn actions, ProfitMail email sequences, and Profitibull CRM updates. It operates as a chat interface inside the platform, as the routing intelligence inside workflows, and as the creative engine that drafts the content your campaigns deliver.
              </p>
              <p>
                The more of the ecosystem you use, the more deeply ProfitBot is connected to what happens automatically and what gets surfaced for your review.
              </p>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 bg-[#A78BFA] hover:bg-[#9575E6] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore the Full Ecosystem <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              One AI system. Every model. Persistent memory. Connected to everything your business runs on.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Book a discovery call to see ProfitBot in the context of your specific operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#A78BFA] hover:bg-[#9575E6] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call <ArrowRight size={18} />
              </Link>
              <Link
                to="/ecosystem"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#A78BFA] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />
    </div>
  );
};

const faqs = [
  {
    q: 'What does multimodel mean and why does it matter?',
    a: 'Multimodel means ProfitBot connects to multiple AI systems from different providers and lets you use them within one chat stream without switching tools or losing context. It matters because different AI models perform better on different task types. The model that writes excellent marketing copy may not produce the best structured data analysis. ProfitBot lets you use each model for what it does best inside one continuous conversation, without managing separate subscriptions or starting a new session each time you switch.',
  },
  {
    q: 'How does persistent memory work and what does it actually remember?',
    a: 'Persistent memory means ProfitBot stores the context of your conversations across sessions. When you return, it has recall of what you discussed, what you decided, and what context is relevant to your current request. This includes your business description, your ICP definition, your persona settings, and the decisions made in prior sessions. You do not re-explain your business. The memory accumulates and makes ProfitBot increasingly useful the more you use it.',
  },
  {
    q: 'Can ProfitBot produce images and videos or only text?',
    a: 'Yes. ProfitBot supports content production beyond text, including images and videos for use as marketing collateral. It can also help build campaigns and websites inside the platform. All of this happens within the same chat interface as research, writing, and strategic work, which means you move from ideation to creative production without switching tools.',
  },
  {
    q: 'Can ProfitBot take actions inside other platforms or does it only generate content?',
    a: 'ProfitBot is agentic, which means it connects to external platforms via API and can take actions inside those platforms from within the chat interface. Inside the Simply Scalable ecosystem it has native access to Profitibull CRM and the workflow builder. It can connect to any platform with available API access. The range of actions it can take depends on what that platform’s API supports.',
  },
  {
    q: 'Will ProfitBot ever send a campaign or take a consequential action without a human approving it first?',
    a: 'No. The approval checkpoint architecture is built into every workflow step where ProfitBot produces an output with real-world consequences. Content is generated and presented for review. Routing decisions are recommended and presented for review. The campaign does not fire until a human reviews and approves through the CRM task system. If the review deadline passes without action, the workflow holds rather than proceeding automatically.',
  },
  {
    q: 'Does ProfitBot work as a standalone product or does it require the other ecosystem products?',
    a: 'ProfitBot works as a standalone multimodel AI system with persistent memory, model guides, persona management, agentic integration, and full creative production capability. You do not need Simply Scrapable, ProfitLink, ProfitMail, or Profitibull to use it. The additional value comes from connecting ProfitBot to the rest of the ecosystem through the unified workflow builder, where its intelligence layer connects to lead data, outreach channels, and CRM management. Visit profitibull.com for current subscription details.',
  },
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-3xl mx-auto">
        <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked Questions &mdash; ProfitBot
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border border-white/10 rounded-xl overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="text-[#A78BFA] shrink-0 text-xl font-light">
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
  );
};

const sessionSteps = [
  'You open ProfitBot. Your persistent memory is already loaded with the context from your last session. You do not start from scratch.',
  'You ask it to help you develop the positioning for a new offer. It pulls up the persona you built for your core audience. It asks the right questions. The positioning takes shape in the conversation.',
  'You need a campaign image to go with the launch. You describe what you want. ProfitBot produces options. You pick one.',
  'You are about to write the email sequence and want to know which model handles long-form copy best. ProfitBot recommends one and explains why. You switch to that model inside the same chat stream. The conversation continues. The context carries with it.',
  'Later you instruct ProfitBot to update a contact status in Profitibull based on a call that just happened. It does it from the chat. You never open a separate tab.',
  'That is one session. One interface. One system that knew where you left off and handled the full range of what the day required.',
];

const workflowCards = [
  {
    icon: <Filter className="w-5 h-5 text-[#A78BFA]" />,
    title: 'Lead Scoring and ICP Qualification',
    body: 'Before outreach resources are spent on any contact, ProfitBot evaluates them against your defined ICP criteria. Firmographic data, signal profile, engagement history, and custom parameters all factor into a score and a routing recommendation. Contacts that do not qualify go into a review pool with reasoning, not into a campaign.',
  },
  {
    icon: <PenLine className="w-5 h-5 text-[#A78BFA]" />,
    title: 'Outreach Content Generation',
    body: 'For every qualified lead, ProfitBot drafts the full outreach sequence: LinkedIn connection note, message steps, email subject lines, and body copy. Each draft is personalized to the specific contact using their profile data and your active persona. None of it sends until a human reviews and approves.',
  },
  {
    icon: <GitBranch className="w-5 h-5 text-[#A78BFA]" />,
    title: 'Campaign Routing',
    body: 'ProfitBot evaluates each lead against the available campaign tracks and recommends the correct one based on score, profile, and defined routing rules. Strong ICP fits go to the high-touch sequence. Partial fits go to nurture. Competitive targets go to the competitive track. The routing decision is presented for human review before the lead is placed.',
  },
  {
    icon: <CheckSquare className="w-5 h-5 text-[#A78BFA]" />,
    title: 'Human Approval Checkpoints',
    body: 'Every ProfitBot output inside a workflow — content, scores, and routing decisions — goes through a human approval checkpoint before it executes. A task is created in Profitibull CRM with a defined deadline. A calendar reminder fires. The workflow pauses until the reviewer approves. The AI does not act without sign-off at every consequential step.',
  },
];

const Subsection = ({
  icon,
  title,
  subheading,
  details,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  subheading: string;
  details: string[];
  bullets: string[];
}) => (
  <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border-t border-white/10 pt-10 mb-10">
    <div className="flex items-center gap-3 mb-1">
      {icon}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-[#A78BFA] font-medium mb-4">{subheading}</p>
    <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
      {details.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
    </div>
    <p className="text-white font-medium mb-2">What this covers:</p>
    <ul className="space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
          <span className="text-[#A78BFA] mt-1">&bull;</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProfitBotPage;
