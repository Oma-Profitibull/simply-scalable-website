import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Link2, Users, MessageSquare, Eye, Heart, Inbox, Phone, Building2, GitBranch } from 'lucide-react';

const ProfitLinkPage = () => {
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
              LinkedIn outreach automation that goes further than any tool you have tried before.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              ProfitLink connects your LinkedIn account without requiring your password and runs automated connection requests, message sequences, profile views, post engagement, and inbox management at scale. Built for agencies managing multiple LinkedIn accounts and sales teams running systematic LinkedIn campaigns alongside their email and CRM workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ecosystem/profitlink"
                className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#2AA8E0] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore ProfitLink <ArrowRight size={18} />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#38BDF8] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#38BDF8]/20 rounded-2xl aspect-video flex items-center justify-center">
            <Link2 className="w-16 h-16 text-[#38BDF8]/30" />
          </div>
        </div>
      </section>

      {/* THE LINKEDIN OUTREACH PROBLEM */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              LinkedIn is one of the highest-converting outreach channels available. Most teams are using a fraction of its potential.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>
                LinkedIn outreach works. The connection acceptance rates, the reply rates, and the quality of conversations that start on LinkedIn outperform most cold email campaigns when the outreach is done correctly. The problem is that doing it correctly at scale requires either significant manual time from a salesperson or a tool that can handle the volume, the personalization, and the multi-step sequencing without requiring constant supervision.
              </p>
              <p>
                Most LinkedIn automation tools handle connection requests and basic message sequences. That covers the beginning of the outreach workflow but not the full picture. What happens when a prospect does not have a LinkedIn profile and the campaign needs to move to email? What happens when you need to engage with a prospect's posts before sending a connection request to warm the relationship first? What happens when your team manages LinkedIn outreach for multiple clients and needs one place to see and manage all of it?
              </p>
              <p>
                ProfitLink was built to answer those questions. It goes beyond connection requests and message sequences into a full LinkedIn outreach infrastructure that handles every touchpoint in the LinkedIn channel and connects seamlessly to email, CRM, and AI workflows through the unified workflow builder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PROFITLINK DOES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Every LinkedIn outreach capability your operation needs. In one place.
            </h2>
          </div>

          {/* 3a - ACCOUNT CONNECTION WITHOUT PASSWORD */}
          <Subsection
            icon={<Link2 className="w-5 h-5 text-[#38BDF8]" />}
            title="Account Connection Without Password"
            subheading="Connect your LinkedIn account securely. No password required."
            details={[
              'ProfitLink connects to LinkedIn accounts using the li_at cookie and user agent, which means your LinkedIn credentials are never entered into the platform. The connection is secure, does not require sharing your LinkedIn password with a third party, and can be managed and revoked at any time.',
              'For agencies managing LinkedIn outreach across multiple client accounts, this is particularly important. Each client connects their own LinkedIn account through their own credentials without the agency ever having direct access to the account password. The agency manages the campaigns. The client retains control of the account.',
            ]}
            bullets={[
              'Secure account connection via cookie-based authentication',
              'No password required or stored',
              'Multiple account connection for agencies and teams',
              'Account status monitoring showing connection health for each connected account',
              'Easy account reconnection if the session expires',
              'Agency dashboard showing all connected accounts and their campaign status',
            ]}
          />

          {/* 3b - AUTOMATED CONNECTION REQUESTS */}
          <Subsection
            icon={<Users className="w-5 h-5 text-[#38BDF8]" />}
            title="Automated Connection Requests"
            subheading="Systematic connection building with personalized outreach at scale."
            details={[
              'Connection requests in ProfitLink are not blasts. They are targeted, personalized requests sent to contacts that match your defined criteria, at a volume and cadence that keeps the account within safe operating parameters. The connection note is personalized to each recipient using contact-level data pulled from Simply Scrapable profiles or manually defined variables, which means the first impression is specific rather than generic.',
            ]}
            bullets={[
              'Daily connection request volume management within safe limits',
              'Personalized connection note generation per recipient',
              'Target audience filtering by industry, job title, geography, and company size',
              'Connection request tracking with acceptance rate reporting',
              'Follow-up sequence triggered automatically on connection acceptance',
              'Blacklist management to exclude contacts who have previously declined',
              'Campaign-level settings for pacing and targeting adjustments',
            ]}
          />

          {/* 3c - MESSAGE SEQUENCES */}
          <Subsection
            icon={<MessageSquare className="w-5 h-5 text-[#38BDF8]" />}
            title="Message Sequences"
            subheading="Multi-step LinkedIn message campaigns that run on autopilot."
            details={[
              'Once a connection is accepted, ProfitLink runs the follow-up sequence. Not one message. A structured, multi-step sequence with defined timing between each step, conditional branching based on whether the contact has replied, and content that is personalized to each recipient based on their profile data.',
              'The sequence continues until a positive reply is received, at which point the automation stops and the conversation is handed to the human sales team. No automated message is ever sent to someone who has already replied and is waiting for a human response.',
            ]}
            bullets={[
              'Multi-step message sequences with custom timing between steps',
              'Conditional branching: different paths for recipients who have engaged vs. not responded',
              'Personalization variables using contact profile data',
              'Reply detection that stops automation when a human response is received',
              'Campaign-level performance tracking: delivery rate, reply rate, positive response rate',
              'A/B testing capability for different message variants',
              'Sequence templates for common outreach scenarios',
            ]}
          />

          {/* 3d - PROFILE VIEWS */}
          <Subsection
            icon={<Eye className="w-5 h-5 text-[#38BDF8]" />}
            title="Profile Views"
            subheading="One of LinkedIn's most underutilized warm-up signals. Now automated."
            details={[
              "Viewing a LinkedIn profile notifies the profile owner that someone looked at them. For outreach purposes, a profile view before a connection request is a low-friction way to put yourself on a prospect's radar before the request arrives. It signals genuine interest and differentiates your connection request from the batch that arrives with no prior context.",
              'In ProfitLink, profile views are automated as part of the outreach sequence and, when connected to Simply Scrapable, simultaneously capture the profile data without a separate scrape action.',
            ]}
            bullets={[
              'Automated profile views as a warm-up step before connection requests',
              'Profile view sequencing integrated into the full outreach workflow',
              'Simultaneous data capture on view when connected to Simply Scrapable',
              "View volume management within LinkedIn's safe operating parameters",
              'Profile view notification triggers follow-up actions based on who viewed back',
            ]}
          />

          {/* 3e - POST ENGAGEMENT AND COMMENTING */}
          <Subsection
            icon={<Heart className="w-5 h-5 text-[#38BDF8]" />}
            title="Post Engagement and Commenting"
            subheading="Building visibility before the outreach even starts."
            details={[
              "Commenting on a prospect's post before sending a connection request is one of the highest-converting warm-up tactics on LinkedIn. It puts your name in front of them in a context where you are adding value rather than asking for something. ProfitLink automates post engagement as a step in the outreach sequence, allowing you to like and comment on target posts at scale without the manual time cost of doing it individually.",
              'This capability goes beyond what most LinkedIn automation tools offer. The combination of post engagement, profile views, and a personalized connection request creates a multi-touchpoint warm sequence that significantly outperforms a cold connection request with no prior context.',
            ]}
            bullets={[
              "Automated post liking on target accounts' recent content",
              'Post comment automation with personalized or template-based comment content',
              'Engagement sequence timing: engage with post, wait defined interval, send connection request',
              'Comment quality controls to ensure automated comments are relevant and appropriate',
              'Engagement activity logging in the contact record',
            ]}
          />

          {/* 3f - LINKEDIN INBOX SYNC AND REPLY TRACKING */}
          <Subsection
            icon={<Inbox className="w-5 h-5 text-[#38BDF8]" />}
            title="LinkedIn Inbox Sync and Reply Tracking"
            subheading="Full visibility into every LinkedIn conversation across every connected account."
            details={[
              'ProfitLink syncs the LinkedIn inbox for every connected account so the full message history is visible inside the platform without requiring login to LinkedIn directly. For agencies managing outreach across multiple client accounts, this is the capability that makes multi-account management operationally viable. All conversations are in one place. Replies that need human follow-up are flagged and routed to the correct team member.',
            ]}
            bullets={[
              'Full LinkedIn inbox sync for all connected accounts',
              'Reply detection and routing to designated team members',
              'Conversation history visibility for all contacts across all accounts',
              'Unread message alerts and priority flagging',
              'Message history logging to the CRM contact record in Profitibull',
              'Team inbox management for agencies with multiple account managers',
            ]}
          />

          {/* 3g - WHATSAPP DIRECT CONNECTION */}
          <Subsection
            icon={<Phone className="w-5 h-5 text-[#38BDF8]" />}
            title="WhatsApp Direct Connection"
            subheading="Multi-channel outreach extended to WhatsApp, connected directly."
            details={[
              "For prospects and markets where WhatsApp is a primary business communication channel, ProfitLink includes a direct WhatsApp connection. This requires a WhatsApp Business account and extends the outreach workflow to include WhatsApp messaging as an additional channel step, without routing through GoHighLevel's WhatsApp connection at a significantly higher cost.",
            ]}
            bullets={[
              'Direct WhatsApp Business account connection',
              'WhatsApp message sequences integrated into the unified workflow',
              'Two-way WhatsApp messaging with inbox sync',
              'WhatsApp as a channel fallback when LinkedIn and email have not generated a response',
              'Message delivery tracking and reply detection for WhatsApp steps',
            ]}
          />

          {/* 3h - MULTI-ACCOUNT MANAGEMENT FOR AGENCIES */}
          <Subsection
            icon={<Building2 className="w-5 h-5 text-[#38BDF8]" />}
            title="Multi-Account Management for Agencies"
            subheading="All your client LinkedIn accounts, one campaign management interface."
            details={[
              'Agencies running LinkedIn outreach for multiple clients face a management problem that grows with every new account added. Each client has their own LinkedIn, their own target audience, their own messaging, and their own campaign goals. Managing this across separate tools and separate logins is a daily operational burden.',
              'ProfitLink provides an agency dashboard that shows every connected client account, every active campaign, and every performance metric in one interface. Client accounts are isolated from each other so campaign activity, contact lists, and messaging never cross between clients. The agency manages everything. The client owns their account and their data.',
            ]}
            bullets={[
              'Agency dashboard with all client accounts visible in one view',
              'Account-level isolation: separate campaigns, contacts, and messaging per client',
              'Campaign performance comparison across client accounts',
              'Team member assignment to specific client accounts',
              'Client-level reporting exports for agency reporting workflows',
              'Permission controls defining which team members can access which accounts',
            ]}
          />

          {/* 3i - CHANNEL FALLBACK IN UNIFIED WORKFLOWS */}
          <Subsection
            icon={<GitBranch className="w-5 h-5 text-[#38BDF8]" />}
            title="Channel Fallback in Unified Workflows"
            subheading="When LinkedIn is not an option, the workflow keeps moving."
            details={[
              'Not every contact has an active LinkedIn profile. In a unified workflow that includes both LinkedIn and email steps, ProfitLink handles the fallback automatically. When a contact does not have a LinkedIn profile, the system sends a false 200 response, the LinkedIn step is skipped, and the workflow moves to the next available channel without any manual intervention required.',
              'The outreach continues. No contact falls through the gap because one channel was unavailable.',
            ]}
            bullets={[
              'Automatic LinkedIn profile detection before any LinkedIn action fires',
              'Graceful fallback to email or next available channel when LinkedIn is unavailable',
              'False 200 response handling that keeps the workflow moving without errors',
              'Channel availability logging in the contact record',
              'Workflow configuration options for defining fallback channel priority',
            ]}
          />
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Five outreach profiles where ProfitLink creates immediate impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'The B2B Sales Team Running LinkedIn Alongside Email',
                body: 'A sales team that currently manages LinkedIn outreach manually while running email campaigns through a separate tool, with no connection between the two. A prospect who replies to LinkedIn gets a different follow-up than one who replies to email, and nothing is coordinated. ProfitLink inside the unified workflow connects LinkedIn and email into one sequence with conditional logic that responds correctly to engagement on either channel.',
              },
              {
                num: '02',
                title: 'The Agency Running LinkedIn Outreach for Multiple Clients',
                body: 'A lead generation agency managing LinkedIn campaigns for five to twenty clients simultaneously. Each client has a different audience, different messaging, and different campaign goals. ProfitLink’s agency dashboard and account isolation mean every client’s campaign runs independently from one management interface without any risk of campaigns crossing between accounts.',
              },
              {
                num: '03',
                title: 'The Founder Building Pipeline on LinkedIn',
                body: 'A founder who knows their ICP lives on LinkedIn and wants to run systematic outreach without spending two to three hours a day on manual connection requests and follow-up messages. ProfitLink automates the outreach volume so the founder’s daily LinkedIn activity is reviewing replies and having conversations, not sending the messages that got them there.',
              },
              {
                num: '04',
                title: 'The Recruiter Sourcing Candidates at Scale',
                body: 'A recruiting firm that uses LinkedIn as its primary candidate sourcing channel and currently relies on LinkedIn Recruiter and manual outreach. ProfitLink automates the connection and initial outreach workflow, handles follow-up for non-responders, and routes interested candidates into the recruiting platform workflow for the human team to take over.',
              },
              {
                num: '05',
                title: 'The Sales Team Targeting a Warm LinkedIn Audience',
                body: 'A sales team whose target audience is active on LinkedIn and responsive to genuine engagement. Rather than cold connection requests, they use a warm-up sequence: comment on a post, view the profile, then send a personalized connection note. ProfitLink automates this entire multi-step sequence, which outperforms a cold request significantly and requires no manual time beyond the initial campaign setup.',
              },
            ].map((uc, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-[#38BDF8] text-sm font-mono font-bold mb-3">{uc.num}</span>
                <h3 className="text-lg font-bold text-white mb-3">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFITLINK IN THE ECOSYSTEM */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ProfitLink is the LinkedIn channel inside a multi-channel outreach workflow.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-10">
              <p>
                Inside the unified workflow builder, ProfitLink's LinkedIn actions sit alongside ProfitMail email steps, Profitibull CRM actions, and ProfitBot AI assessments. A single workflow can move a contact from a LinkedIn connection request through a message sequence and, if there is no response on LinkedIn, transition automatically to email follow-up through ProfitMail without any manual handoff required.
              </p>
              <p>
                Every LinkedIn interaction is logged to the Profitibull contact record. A reply received in the LinkedIn inbox is visible in Profitibull alongside every other touchpoint in the relationship. The sales team works from one complete picture of every conversation regardless of which channel it happened on.
              </p>
            </div>
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#2AA8E0] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
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
              LinkedIn outreach that runs systematically, reaches the right people, and connects to everything else you do.
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Book a discovery call to see ProfitLink in the context of your specific outreach operation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#2AA8E0] text-black font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Book a Discovery Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ecosystem"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#38BDF8] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Explore the Ecosystem <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProfitLinkFAQ />
    </div>
  );
};

const profitLinkFaqs = [
  { q: 'Is ProfitLink safe to use with a LinkedIn account?', a: "ProfitLink is designed to operate within safe usage parameters for LinkedIn automation. Connection request volumes, message sending rates, and profile view activity are all managed within limits that minimize the risk of account restriction. No automation tool can guarantee that LinkedIn will never flag an account, as LinkedIn’s detection methods evolve continuously. ProfitLink is built to operate as naturally as possible within the platform’s expected usage patterns." },
  { q: 'Does ProfitLink require my LinkedIn password?', a: 'No. ProfitLink connects to LinkedIn accounts using the li_at cookie and user agent. Your LinkedIn password is never entered into or stored by ProfitLink. The cookie-based connection provides the account access the platform needs without credential sharing.' },
  { q: 'How is ProfitLink different from tools like HeyReach or Dripify?', a: 'ProfitLink goes beyond what standard LinkedIn automation tools provide. In addition to connection requests and message sequences, ProfitLink includes post commenting and engagement, profile views with simultaneous data capture when connected to Simply Scrapable, WhatsApp direct connection, full LinkedIn inbox sync, and the unified workflow builder that connects LinkedIn actions to email, CRM, and AI steps in a single workflow. Most LinkedIn automation tools manage LinkedIn in isolation. ProfitLink manages it as one channel inside a full multi-channel outreach system.' },
  { q: 'Can ProfitLink manage LinkedIn outreach for multiple clients from one account?', a: 'Yes. The agency dashboard in ProfitLink shows all connected client LinkedIn accounts in one interface. Each client’s campaigns, contacts, and messaging are fully isolated from every other account. The agency manages everything. The clients own their accounts and their data. Campaign performance is tracked separately per client account.' },
  { q: 'What happens if a contact does not have a LinkedIn profile?', a: 'When a contact in a workflow does not have a LinkedIn profile, ProfitLink returns a false 200 response and the workflow moves to the next available channel automatically. If the workflow includes an email step after the LinkedIn step, the contact transitions to email follow-up without any manual action required and without the workflow stalling on the missing LinkedIn profile.' },
  { q: 'Can ProfitLink be used without the rest of the Simply Scalable ecosystem?', a: 'Yes. ProfitLink works as a standalone LinkedIn outreach tool. You do not need Simply Scrapable, Profitibull, ProfitMail, or ProfitBot to run LinkedIn campaigns through ProfitLink. The additional value comes from connecting ProfitLink to the rest of the ecosystem through the unified workflow builder, where LinkedIn actions, email follow-up, CRM updates, and AI assessments all run inside one coordinated workflow.' },
];

const ProfitLinkFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Frequently Asked Questions: ProfitLink</h2>
        <div className="space-y-4">
          {profitLinkFaqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="text-[#38BDF8] shrink-0 text-xl font-light">{openFaq === i ? '×' : '+'}</span>
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
    <p className="text-[#38BDF8] font-medium mb-4">{subheading}</p>
    <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
      {details.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
    </div>
    <p className="text-white font-medium mb-2">What this covers:</p>
    <ul className="space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
          <span className="text-[#38BDF8] mt-1">&bull;</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProfitLinkPage;
