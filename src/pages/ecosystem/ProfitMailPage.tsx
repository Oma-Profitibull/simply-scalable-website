import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Shield, Target, RefreshCw, Send, Inbox, Settings, Activity, Layers, Flame, Users, Linkedin, User, Database } from 'lucide-react';

const ProfitMailPage = () => {
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
              Email outreach that reaches the inbox. Every time.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              ProfitMail is the email outreach and automation arm of the Simply Scalable ecosystem. Built on Instantly's sending infrastructure with domain reputation management built in, it runs cold email campaigns, nurture sequences, and automated follow-up at scale without burning the domain your entire business depends on.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ecosystem/profitmail"
                className="inline-flex items-center gap-2 bg-[#34D399] hover:bg-[#2BB583] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore ProfitMail <ArrowRight size={18} />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#34D399] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#34D399]/20 rounded-2xl aspect-video flex items-center justify-center">
            <Mail className="w-16 h-16 text-[#34D399]/30" />
          </div>
        </div>
      </section>

      {/* THE EMAIL DELIVERABILITY PROBLEM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Most email tools will let you send anything to anyone. That is exactly the problem.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>
                Email is one of the highest-return outreach channels available. It is also the channel most teams quietly destroy by treating it like a volume game without any regard for the infrastructure underneath it.
              </p>
              <p>
                Sending cold email at scale from your primary business domain without proper setup will get that domain flagged. Once a domain's sender reputation is damaged, every email that goes out from that address, including your operational emails, your client communications, and your invoices, gets filtered to spam or rejected entirely. Recovering a damaged domain reputation takes months. Sometimes it does not recover at all.
              </p>
              <p>
                The teams that burn their domains do it the same way every time: they buy a list, load it into a tool with no sending infrastructure management, blast the campaign, and check the results. The results look fine at first. Open rates seem reasonable. Then deliverability drops. Then the replies stop. Then someone checks the domain reputation and finds out the damage has been done.
              </p>
              <p>
                ProfitMail is built to prevent that from happening. The sending infrastructure is managed. The domain is protected. The campaign volumes stay within parameters that keep deliverability high. And the email channel remains a reliable, performing asset for the business, not a liability that has to be rebuilt from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PROFITMAIL DOES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Every layer of a production email outreach operation. Built to perform and built to last.
            </h2>
          </div>

          {/* 3a - INSTANTLY-POWERED SENDING INFRASTRUCTURE */}
          <Subsection
            icon={<Mail className="w-5 h-5 text-[#34D399]" />}
            title="Instantly-Powered Sending Infrastructure"
            subheading="The engine that makes deliverability a feature, not an afterthought."
            details={[
              "ProfitMail runs on Instantly as its email sending infrastructure. Instantly is purpose-built for cold email at scale, with deliverability management, inbox rotation, and sending infrastructure that is designed for the volume and consistency that outreach campaigns require without damaging domain reputation.",
              "Using Instantly as the engine rather than a generic email provider means the sending infrastructure is maintained by a platform that has built deliverability management as its core product. The spam filters, the inbox placement algorithms, and the sending volume limits are all managed within a system designed specifically for outreach email, not for newsletters or transactional messages.",
            ]}
            bullets={[
              'Instantly-based email sending infrastructure for all ProfitMail campaigns',
              'Inbox rotation across connected email accounts for volume management',
              'Sending volume management within deliverability-safe parameters',
              'Domain warm-up management for new sending domains',
              'Spam trigger avoidance built into the sending layer',
              'Bounce handling and list hygiene management',
              'Deliverability monitoring and reporting',
            ]}
          />

          {/* 3b - DOMAIN REPUTATION PROTECTION */}
          <Subsection
            icon={<Shield className="w-5 h-5 text-[#34D399]" />}
            title="Domain Reputation Protection"
            subheading="The business asset most email tools put at risk. ProfitMail protects it."
            details={[
              "A domain's sending reputation is a business asset. Every email sent from a domain contributes to its reputation with email service providers. High bounce rates, high spam complaint rates, and sudden volume spikes all damage that reputation. Once damaged, every email from that domain suffers, not just the outreach campaigns.",
              "ProfitMail manages the sending activity of every connected domain within parameters that protect its reputation. Volume limits, sending cadence, list quality requirements, and bounce thresholds are all managed as part of the platform's standard operation rather than as settings the user has to configure and monitor manually.",
              "For outreach operations using dedicated sending domains separate from the primary business domain, ProfitMail also supports branded domain setup so the outreach activity never touches the reputation of the primary business domain at all.",
            ]}
            bullets={[
              'Sending volume limits that stay within safe reputation parameters',
              'Bounce rate monitoring with automatic pause triggers when thresholds are exceeded',
              'Spam complaint tracking and list management',
              'Dedicated sending domain setup separate from primary business domain',
              'Domain health monitoring with alerts for reputation changes',
              'Warm-up protocol management for newly created sending domains',
              'Branded domain configuration for outreach that preserves the primary domain reputation',
            ]}
          />

          {/* 3c - COLD EMAIL CAMPAIGN MANAGEMENT */}
          <Subsection
            icon={<Target className="w-5 h-5 text-[#34D399]" />}
            title="Cold Email Campaign Management"
            subheading="Systematic outreach campaigns built around the contacts your business needs to reach."
            details={[
              'A cold email campaign in ProfitMail is not a blast to a purchased list. It is a targeted sequence sent to a defined audience, personalized at the contact level, managed within deliverability parameters, and tracked against the metrics that matter: not just opens and clicks, but replies, positive responses, and meetings booked.',
              'Campaigns are built inside the unified workflow builder, which means a cold email campaign can be one step in a broader outreach sequence that also includes LinkedIn touchpoints from ProfitLink, lead intelligence from Simply Scrapable, and qualification from ProfitBot. Or it can be a standalone email campaign with its own complete multi-step sequence.',
            ]}
            bullets={[
              'Multi-step cold email sequence management with custom timing between steps',
              'Contact-level personalization using profile data from Simply Scrapable or imported lists',
              'A/B testing for subject lines, email body, and call-to-action variants',
              'Campaign scheduling and send time optimization',
              'Reply detection that stops the sequence when a contact responds',
              'Positive response routing to the CRM or designated team member for follow-up',
              'Campaign performance tracking: delivery rate, open rate, reply rate, meeting booked rate',
              'Campaign pause and resume controls for list management and scheduling',
            ]}
          />

          {/* 3d - NURTURE SEQUENCE MANAGEMENT */}
          <Subsection
            icon={<RefreshCw className="w-5 h-5 text-[#34D399]" />}
            title="Nurture Sequence Management"
            subheading="The emails that keep your list warm between active campaigns."
            details={[
              'Not every contact in your database is ready to buy right now. A nurture sequence maintains the relationship with contacts who are in the consideration phase, who have gone quiet after initial engagement, or who are in a longer sales cycle that requires consistent touchpoints over weeks or months.',
              'ProfitMail nurture sequences run on enrollment-triggered schedules: a contact enters the sequence when a defined event occurs, and the sequence delivers content at defined intervals without requiring manual management. The content builds the relationship, demonstrates expertise, and keeps your business top of mind until the contact is ready to take a next step.',
            ]}
            bullets={[
              'Enrollment-triggered nurture sequences based on CRM stage, tag, or behavior',
              'Long-form sequence management across weeks and months',
              'Content variation across sequence steps to avoid repetitive messaging',
              'Re-enrollment prevention to avoid sending the same sequence to a contact twice',
              'Sequence performance tracking: engagement rate per step, drop-off points, and conversion',
              'Conditional branching based on engagement during the sequence',
              'Exit triggers that remove contacts from the sequence when they take a qualifying action',
            ]}
          />

          {/* 3e - AUTOMATED FOLLOW-UP AND RE-ENGAGEMENT */}
          <Subsection
            icon={<Send className="w-5 h-5 text-[#34D399]" />}
            title="Automated Follow-Up and Re-Engagement"
            subheading="The follow-up that happens on time, every time, without anyone setting a reminder."
            details={[
              'Most deals are not lost because the prospect said no. They are lost because the follow-up did not happen. A contact expressed interest, the initial conversation happened, and then the rep forgot to follow up, or the follow-up arrived too late, or it was sent to a full inbox on a bad day and was never seen.',
              'ProfitMail automates the follow-up logic so the timing is always right and the message always arrives. A contact who opened the last email but did not reply gets a different follow-up than one who has not opened anything in two weeks. A contact who was active six months ago and has gone quiet gets a re-engagement sequence rather than being left in the database to age.',
            ]}
            bullets={[
              'Automated follow-up triggers based on contact behavior (opened, clicked, did not open, replied)',
              'Timing optimization for follow-up based on engagement patterns',
              'Re-engagement sequences for contacts who have been inactive for a defined period',
              'Last-touch campaigns for contacts at the end of a sequence who have not converted',
              'Internal notifications when a re-engaged contact takes a qualifying action',
              'Removal from sequence when a contact replies or converts to prevent awkward over-sending',
            ]}
          />

          {/* 3f - INBOX AND REPLY MANAGEMENT */}
          <Subsection
            icon={<Inbox className="w-5 h-5 text-[#34D399]" />}
            title="Inbox and Reply Management"
            subheading="Every reply, routed to the right person, with the full context of the conversation."
            details={[
              'When a campaign generates replies, those replies need to reach the right team member with enough context to continue the conversation meaningfully. ProfitMail routes incoming replies to the designated team member or CRM record automatically, with the full email thread visible so the human taking over the conversation has everything they need without asking for background.',
            ]}
            bullets={[
              'Reply detection across all active campaigns and sequences',
              'Automatic reply routing to designated team members',
              'Full conversation thread visibility for each reply',
              'CRM activity logging: reply recorded on the contact record in Profitibull',
              'Positive reply flagging for priority follow-up',
              'Out-of-office detection to avoid counting automatic replies as genuine engagement',
              'Unsubscribe processing with automatic list removal and compliance handling',
            ]}
          />
        </div>
      </section>

      {/* 3g - INTEGRATION WITH GHL AND EXISTING EMAIL INFRASTRUCTURE (continues "What ProfitMail Does" section) */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <Subsection
            icon={<Settings className="w-5 h-5 text-[#34D399]" />}
            title="Integration with GoHighLevel and Existing Email Infrastructure"
            subheading="ProfitMail works with the infrastructure you already have."
            details={[
              'ProfitMail runs on Instantly by default. For businesses already using GoHighLevel for their email marketing and automation, ProfitMail also connects to the GoHighLevel email infrastructure. When building a workflow in the unified builder, you choose which email system sends each step: Instantly for outreach and cold email, GoHighLevel for nurture and marketing emails that work better through the CRM’s native infrastructure.',
              'This flexibility means ProfitMail does not require abandoning existing email infrastructure. It works alongside what is already in place and routes each email type to the sending system best suited for it.',
            ]}
            bullets={[
              'Instantly-based sending for cold email and outreach campaigns',
              'GoHighLevel email integration for CRM-triggered marketing emails',
              'Per-workflow sending system selection',
              'Email authentication setup (SPF, DKIM, DMARC) for connected domains',
              'Sending system performance comparison to identify which delivers better results for each use case',
            ]}
          />
        </div>
      </section>

      {/* THE DOMAIN PROTECTION PRINCIPLE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your domain is the foundation of your email channel. We treat it that way.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-16">
              <p>
                Every business that does any volume of email outreach faces the same fundamental choice: send from the domain that represents the entire business, or send from a dedicated outreach domain that exists specifically for campaigns.
              </p>
              <p>
                The right answer depends on the volume, the audience, and the list quality. But in both cases, the infrastructure underneath the sending matters enormously. An unmanaged sending domain, regardless of whether it is the primary business domain or a dedicated outreach domain, will accumulate reputation damage at scale. The emails that get filtered to spam do not just miss their target. They tell every email service provider that receives them something negative about the domain they came from.
              </p>
              <p>
                ProfitMail manages this at the infrastructure level. Volume limits are enforced. Bounce thresholds trigger automatic pauses. Warm-up protocols are followed for new domains. The sending cadence is managed within parameters that maintain reputation rather than eroding it.
              </p>
              <p>
                The result is an email channel that performs consistently over time, not one that works for the first campaign and degrades with every subsequent one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-[#34D399]" />,
                title: 'Volume is managed, not maximized',
                body: 'Sending more emails is not always better. Sending the right volume at the right cadence, within deliverability-safe parameters, produces better outcomes and protects the domain that makes all future sending possible.',
              },
              {
                icon: <Activity className="w-6 h-6 text-[#34D399]" />,
                title: 'Reputation is monitored continuously',
                body: 'Domain health does not decline overnight. It declines gradually, then suddenly. Continuous monitoring catches the early signals before they become a serious problem.',
              },
              {
                icon: <Layers className="w-6 h-6 text-[#34D399]" />,
                title: 'Outreach and operational email are separated',
                body: 'The email that prospects receive in a cold campaign should never share a domain with the email your clients receive when you invoice them. ProfitMail supports dedicated outreach domain setup so your primary business domain stays clean regardless of campaign volume.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Five outreach profiles where ProfitMail creates immediate impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#34D399]/10 flex items-center justify-center shrink-0">
                    {uc.icon}
                  </div>
                  <span className="text-white/40 text-sm font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFITMAIL IN THE ECOSYSTEM */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ProfitMail is the email channel inside a multi-channel outreach workflow.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-10">
              <p>
                Inside the unified workflow builder, ProfitMail email steps sit alongside ProfitLink LinkedIn actions, Profitibull CRM updates, and ProfitBot AI assessments. A contact who does not respond on LinkedIn automatically transitions to email follow-up through ProfitMail without any manual action required. A contact who replies to a ProfitMail email is logged in Profitibull and routed to the appropriate team member for follow-up.
              </p>
              <p>
                The email channel does not operate in isolation. It is one part of a coordinated multi-channel outreach system where every touchpoint is visible in one workflow and every response is handled correctly regardless of which channel it came from.
              </p>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 bg-[#34D399] hover:bg-[#2BB583] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore the Full Ecosystem <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Email outreach that reaches the inbox, protects your domain, and connects to everything else you do.
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Book a discovery call to see ProfitMail in the context of your specific email outreach operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#34D399] hover:bg-[#2BB583] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call <ArrowRight size={18} />
              </Link>
              <Link
                to="/ecosystem"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#34D399] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProfitMailFAQ />
    </div>
  );
};

const useCases = [
  {
    icon: <Flame className="w-4 h-4 text-[#34D399]" />,
    title: 'The Sales Team That Has Already Burned a Domain',
    body: 'A sales team that ran an aggressive cold email campaign from the company’s primary domain, saw deliverability collapse, and is now rebuilding. ProfitMail handles the new sending infrastructure setup, the domain warm-up protocol, and the campaign management within parameters that prevent the same mistake from happening again.',
  },
  {
    icon: <Users className="w-4 h-4 text-[#34D399]" />,
    title: 'The Agency Running Cold Email for Multiple Clients',
    body: 'A lead generation agency managing email outreach for multiple clients simultaneously. Each client has a separate sending domain, a separate campaign, and a separate audience. ProfitMail manages all of them from one interface with full isolation between client campaigns and shared monitoring across all sending domains.',
  },
  {
    icon: <Linkedin className="w-4 h-4 text-[#34D399]" />,
    title: 'The B2B Company Adding Email to a LinkedIn-First Outreach Strategy',
    body: 'A sales team running LinkedIn outreach through ProfitLink that wants to add email as a follow-up channel for contacts who do not respond on LinkedIn. Inside the unified workflow, ProfitMail email steps fire automatically when a LinkedIn sequence reaches a defined point without a positive response, creating a true multi-channel outreach sequence with no manual handoff between channels.',
  },
  {
    icon: <User className="w-4 h-4 text-[#34D399]" />,
    title: 'The Founder Doing High-Volume Outreach Alone',
    body: 'A founder running all outreach personally who needs to send enough email to build a meaningful pipeline without risking the domain that all their business email runs through. ProfitMail handles the infrastructure so the founder can run volume-appropriate outreach on a dedicated domain without it affecting the primary business email reputation.',
  },
  {
    icon: <Database className="w-4 h-4 text-[#34D399]" />,
    title: 'The Business With a Large Inactive List',
    body: 'A business that has accumulated a contact database over years and has not been sending consistently. The list has aged and contains an unknown proportion of invalid addresses. ProfitMail’s bounce management and list hygiene protocols handle re-engagement campaigns and list cleaning in a way that does not trigger deliverability problems from the spike in bounce rates that typically accompanies outreach to an aged list.',
  },
];

const profitMailFaqs = [
  {
    q: 'What is Instantly and why does ProfitMail use it as its sending infrastructure?',
    a: 'Instantly is an email sending platform built specifically for cold email outreach at scale. It handles inbox rotation, deliverability management, and sending volume within parameters designed for outreach campaigns rather than newsletters or transactional email. ProfitMail uses Instantly as its sending engine because the deliverability infrastructure is purpose-built for the type of email outreach ProfitMail is designed to run, which produces better inbox placement and better campaign performance than a generic email sending service.',
  },
  {
    q: 'Can ProfitMail send from my existing business email domain?',
    a: 'Yes, but with an important recommendation: high-volume cold email outreach should ideally run from a dedicated sending domain separate from your primary business domain. This protects your primary domain’s reputation regardless of campaign volume or list quality. ProfitMail supports both configurations. If you choose to send from your primary domain, the infrastructure management and volume controls built into ProfitMail reduce the risk compared to unmanaged sending. A dedicated outreach domain eliminates the risk entirely.',
  },
  {
    q: 'How does ProfitMail handle contacts who unsubscribe?',
    a: 'Unsubscribe requests are processed automatically. When a contact unsubscribes from a ProfitMail campaign, they are removed from the active sequence immediately and added to a suppression list that prevents them from being enrolled in future campaigns. The suppression list is maintained at the account level and applied across all campaigns automatically.',
  },
  {
    q: 'Can ProfitMail work alongside GoHighLevel email campaigns?',
    a: 'Yes. ProfitMail supports both Instantly and GoHighLevel as sending options, and the choice can be made at the workflow step level. Cold outreach and prospecting campaigns run through Instantly for optimal deliverability. CRM-triggered nurture emails and marketing campaigns that perform better through the GoHighLevel infrastructure can be routed that way. The two systems complement each other rather than competing.',
  },
  {
    q: 'What happens when a contact in a ProfitMail sequence also receives a LinkedIn message from ProfitLink?',
    a: 'Inside the unified workflow builder, the timing and sequencing of LinkedIn and email touchpoints are defined by the workflow logic. A contact receives the right message through the right channel at the right time based on how the workflow is built. If a contact replies to either channel, the automation stops and the reply is routed to the team for human follow-up. The contact’s full interaction history across both channels is visible in Profitibull so the team has complete context regardless of which channel the response came through.',
  },
  {
    q: 'Does ProfitMail work as a standalone product or does it require other ecosystem products?',
    a: 'ProfitMail works as a standalone email outreach and automation platform. You do not need Simply Scrapable, ProfitLink, Profitibull, or ProfitBot to run email campaigns through ProfitMail. The additional value comes from connecting ProfitMail to the rest of the ecosystem through the unified workflow builder, where email steps, LinkedIn actions, CRM updates, and AI assessments all run inside one coordinated outreach sequence.',
  },
];

const ProfitMailFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Frequently Asked Questions &mdash; ProfitMail
        </h2>
        <div className="space-y-4">
          {profitMailFaqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="text-[#34D399] shrink-0 text-xl font-light">
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
    <p className="text-[#34D399] font-medium mb-4">{subheading}</p>
    <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
      {details.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
    </div>
    <p className="text-white font-medium mb-2">What this covers:</p>
    <ul className="space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
          <span className="text-[#34D399] mt-1">&bull;</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProfitMailPage;
