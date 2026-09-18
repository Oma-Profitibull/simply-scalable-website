import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const scrapableFaqs = [
  { q: 'How is Simply Scrapable different from Apollo, ZoomInfo, or LinkedIn Sales Navigator?', a: 'Apollo, ZoomInfo, and Sales Navigator are database tools. They give you access to records that were captured and stored at some point in the past. Simply Scrapable pulls data in real time at the moment of search, which means the information you see reflects the current state of a company or contact rather than a cached snapshot. The Listener capability also has no direct equivalent in those platforms: it monitors your target accounts passively and surfaces signals without requiring you to run a new search to find them.' },
  { q: 'What does the Listener actually monitor and how does it surface signals?', a: 'The Listener monitors company social channels, public posts, and defined signal categories across the platforms Simply Scrapable indexes. You define the companies and the signal types you want monitored: funding announcements, hiring signals, competitive mentions, topic-specific posts. When a monitored company produces a signal that matches your criteria, the Listener surfaces it in the platform and routes it to the appropriate workflow or sends a notification to the team member responsible for that account.' },
  { q: 'How does the profile scraping on view work?', a: 'When you view a LinkedIn profile through Simply Scrapable, the platform captures the profile data automatically as part of the same action. You do not run a separate scrape step, export the data, or manually enter it into a contact record. The profile is captured and added to your Simply Scrapable database the moment you view it. From there, it can be enriched, routed to a workflow, or added to a list with a single action.' },
  { q: 'Can scheduled searches run for multiple different ICPs simultaneously?', a: 'Yes. You can configure multiple scheduled searches running on different cadences for different ICP definitions. A recruiting firm might run one scheduled search for a specific role type in a specific geography and a separate search for a different role type in a different market, both running automatically on independent schedules and routing results to different workflows.' },
  { q: 'Does Simply Scrapable integrate with CRMs and outreach tools outside the Simply Scalable ecosystem?', a: 'Simply Scrapable integrates natively with the Simply Scalable ecosystem through the unified workflow builder. Integration with external CRMs and outreach tools depends on the specific platform. Visit simplyscrapable.com for the current list of integrations and available connections.' },
  { q: 'Is Simply Scrapable a standalone product or does it require the other ecosystem products?', a: 'Simply Scrapable is a fully standalone product. You do not need Profitibull, ProfitLink, ProfitMail, or ProfitBot to use it. The platform provides value on its own as a lead intelligence and list-building tool. The additional value comes when Simply Scrapable is connected to the rest of the ecosystem through the unified workflow builder, at which point leads move automatically from discovery through outreach without any manual step between them.' },
];
const SimplyScrapableFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions: Simply Scrapable</h2>
        <div className="space-y-3">
          {scrapableFaqs.map((faq, i) => (
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
const SimplyScrapablePage = () => {
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
              Find the right people. Reach them at exactly the right moment.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Simply Scrapable is a lead intelligence platform that goes beyond list building. It finds the companies and contacts your business needs, builds a 360-degree profile on each one, and monitors them in real time so you know the moment something happens that makes today the right day to reach out.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://simplyscrapable.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#2AA8E0] text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                Explore Simply Scrapable <ArrowRight size={18} />
              </a>
              <a href="https://simplyscrapable.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#38BDF8] text-white px-6 py-3 rounded-lg transition-colors">
                Visit simplyscrapable.com
              </a>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-[#38BDF8]/20 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Search Interface to Company Profile Visualization</span>
          </div>
        </div>
      </section>
      {/* THE PROBLEM WITH STATIC LEAD LISTS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A list tells you who to reach. It does not tell you when or why right now.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>Most list-building tools give you a database. You search by industry, company size, and geography. You get a list. You export the list. You load it into your outreach tool. You start the sequence.</p>
              <p>The problem is that the list is a snapshot. It reflects what was true about those contacts when the data was last updated, which in most platforms means weeks or months ago. It does not reflect what is happening with those contacts right now. It does not tell you that the company you planned to reach next week just posted about the exact problem your product solves. It does not tell you that the contact you were going to cold email just changed roles and is now the decision maker you needed access to all along.</p>
              <p>Timing is one of the highest-leverage variables in any outreach operation. Reaching the right person at the wrong moment is almost indistinguishable from reaching the wrong person. Reaching them at the right moment, when a trigger event makes them more receptive, changes the response rate dramatically.</p>
              <p className="text-white font-medium">Simply Scrapable was built to close that gap. Not just a list. A live intelligence layer that tells you who to reach, what you know about them across multiple dimensions, and when something just happened that makes now the right time.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Static List vs Live Intelligence Comparison</span>
          </div>
        </div>
      </section>
      {/* WHAT SIMPLY SCRAPABLE DOES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Every capability the platform provides. Each one built around finding and reaching the right people at the right time.</h2>
          </div>
          {/* LEWIS AND CLARK */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border-t border-white/10 pt-10 mb-10">
            <h3 className="text-2xl font-bold text-white mb-1">Lewis and Clark: AI-Powered Search</h3>
            <p className="text-[#38BDF8] font-medium mb-4">The search engine that finds what a database query cannot.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>Lewis and Clark is the AI-powered search layer inside Simply Scrapable. Unlike a traditional database search that returns records matching exact field criteria, Lewis and Clark understands natural language search intent and surfaces company and contact results based on what you are actually looking for, not just the fields you typed.</p>
              <p>Search results pull from real-time data sources rather than cached records. The company or contact you see in your results reflects current information, not a snapshot from last quarter. This matters most for fast-moving signals: recent funding, executive changes, new job postings, and active hiring patterns that indicate growth or strategic shift.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1">
              {['Natural language company and contact search','Industry, geography, company size, and job title filtering','Real-time data retrieval at the moment of search','Company searches that surface the right organizations for a given ICP','Contact searches that find the right people within target companies','Search result refinement based on additional criteria','Export and workflow routing from search results'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* 360 DEGREE PROFILES */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border-t border-white/10 pt-10 mb-10">
            <h3 className="text-2xl font-bold text-white mb-1">360-Degree Company and Contact Profiles</h3>
            <p className="text-[#38BDF8] font-medium mb-4">Four perspectives on every prospect. Not one.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>Most lead intelligence tools show you one view of a company or contact: the LinkedIn profile, the company website, or a database record assembled from public sources. Simply Scrapable builds a 360-degree profile by pulling from four distinct intelligence sources, each one revealing a different dimension of the prospect.</p>
              <p>The four perspectives are: LinkedIn, which surfaces hiring patterns, team growth signals, and professional activity. Glassdoor, which reveals employee sentiment, internal culture signals, and organizational health. Crunchbase, which shows funding history, investor relationships, and growth trajectory. Social media, which captures public-facing communication, the topics a company engages with, and the problems they discuss openly.</p>
              <p>Together, these four views give you a picture of the company and the contact that no single platform can provide. You are not guessing at context. You are reading it directly.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1">
              {['LinkedIn view: hiring signals, team changes, executive activity, job posting patterns','Glassdoor view: employee sentiment, culture signals, leadership perception, organizational health','Crunchbase view: funding rounds, investor relationships, valuation signals, growth stage','Social media view: public posts, topics engaged with, problems discussed, audience interaction','Contact-level profiles showing individual professional history, activity, and signals','Profile data available at the point of search with no separate enrichment step required'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* THE LISTENER */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border-t border-white/10 pt-10">
            <h3 className="text-2xl font-bold text-white mb-1">The Listener: Passive Signal Monitoring</h3>
            <p className="text-[#38BDF8] font-medium mb-4">The intelligence that finds you before you have to go looking.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>The Listener is the passive monitoring layer inside Simply Scrapable. Rather than requiring you to run a new search every time you want to know what is happening with your target accounts, the Listener monitors those accounts continuously and surfaces relevant signals automatically.</p>
              <p>The power of the Listener is in indirect and passive signal detection. Not every buying signal is explicit. A company does not post "we are about to buy your product." They post about the problem your product solves. They hire for a role that indicates a strategic initiative your offering supports. They announce a funding round that means budget just became available. They express frustration with a competitor. Each one of those is a signal that the timing has shifted in your favor.</p>
              <p>The Listener identifies those signals and surfaces them so you can act on them before the window closes and before your competitors see the same thing.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1 mb-4">
              {['Continuous monitoring of target company social channels','Signal detection based on defined keywords, topics, and trigger categories','Hiring signal monitoring: job postings that indicate strategic direction','Funding and investment signal alerts','Competitor mention and sentiment monitoring','Industry event and announcement tracking','Signal delivery to email, Slack, or directly into outreach workflows','Signal prioritization by relevance and recency'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/70 text-sm leading-relaxed"><span className="text-white font-medium">Example of how this works: </span>A chiropractor's practice wants to reach people who have recently been in car accidents. Accident records are not public. But people post about accidents on social media. They post about buying a new car after totaling theirs. They post about physical therapy referrals. The Listener monitors for these indirect signals across defined platforms and surfaces the contacts who posted them, giving the practice a warm outreach opportunity that no static list could have provided.</p>
            </div>
          </div>
        </div>
      </section>
      {/* MORE CAPABILITIES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          {/* SCHEDULED SEARCHES */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 pb-10 mb-10 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white mb-1">Scheduled Searches</h3>
            <p className="text-[#38BDF8] font-medium mb-4">Your list builds itself. Without you running a new search every week.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>A lead list that is not refreshed is a lead list that ages. New companies that fit your ICP enter the market. Contacts move into roles you care about. Funding rounds happen that make previously out-of-reach companies suddenly viable. If your list is only as current as the last time you manually ran a search, you are always working with an incomplete picture.</p>
              <p>Scheduled searches in Simply Scrapable run automatically at defined intervals: daily, weekly, or on a custom cadence. When the search runs, it populates your list with fresh results based on the same criteria you defined originally. You do not have to be there. The list updates itself.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1">
              {['Scheduled search configuration with custom frequency settings','Automatic list population on each scheduled run','Deduplication to prevent existing contacts from appearing as new results','Change detection to surface contacts whose situation has evolved since the last run','Notification delivery when a scheduled search completes and new contacts are found','Multiple simultaneous scheduled searches for different ICPs or market segments'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* LEAD ROUTING */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 pb-10 mb-10 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white mb-1">Lead Routing and Workflow Integration</h3>
            <p className="text-[#38BDF8] font-medium mb-4">Leads go from search to outreach without a manual handoff.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>Finding a lead is the first step. Getting that lead into the right outreach workflow without a manual export and import is what separates a prospecting tool from a prospecting system. Simply Scrapable connects directly to the unified workflow builder so that leads found in a search, added from a list, or surfaced by the Listener can be routed into a defined campaign automatically.</p>
              <p>When a scheduled search runs and finds fifty new contacts who fit your ICP, those contacts do not sit in a list waiting for someone to export them. They enter the workflow you specified when the search was configured. By the time you check in the next morning, they are already moving through the outreach sequence.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1">
              {['Direct routing from search results to defined outreach workflows','Scheduled search routing: new results go automatically to a specified workflow on each run','Listener signal routing: contacts who trigger a signal are routed to a signal-specific campaign','List-based routing: manually select contacts from a list and send to any workflow','Workflow destination selection at the time of search or list configuration','CRM integration so routed contacts are created or updated in Profitibull automatically'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* PROFILE SCRAPING ON VIEW */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 pb-10 mb-10 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white mb-1">Profile Scraping on View</h3>
            <p className="text-[#38BDF8] font-medium mb-4">One action. Two results. No separate scrape step.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>When you view a LinkedIn profile through Simply Scrapable, the platform captures the profile data simultaneously. There is no separate step to scrape, no manual export, no copy-paste into a contact record. The act of viewing is also the act of capturing. The contact is in your system the moment you look at them.</p>
              <p>This matters most for teams doing active LinkedIn prospecting where the research and the capture are currently two separate actions. Simply Scrapable collapses them into one.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1">
              {['LinkedIn profile data capture on view with no additional action required','Contact record creation in Simply Scrapable from the captured profile','Enrichment of the captured profile with data from the other three intelligence sources','Routing of the captured contact to a workflow directly from the profile view','History of viewed and captured profiles accessible in the platform'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT ENRICHMENT */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-2xl font-bold text-white mb-1">Contact Enrichment</h3>
            <p className="text-[#38BDF8] font-medium mb-4">Better data going in means better outcomes coming out.</p>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl mb-4">
              <p>Enrichment adds depth to contact and company records before they enter your outreach workflow. An email address is confirmed. A phone number is appended. A company's current headcount is verified. A contact's current role is checked against the most recent data available. Enrichment ensures that the leads routing into your campaigns are the most complete and accurate versions of those records available, which improves deliverability, reduces bounce rates, and makes personalization more effective.</p>
            </div>
            <p className="text-white font-medium mb-2">What this covers:</p>
            <ul className="space-y-1">
              {['Email verification and validation','Phone number appending where available','Company firmographic enrichment (headcount, revenue range, industry, technology stack)','Contact role and title verification','Social profile linking across platforms','Enrichment triggered at the point of search or as a standalone action on existing lists','Enriched records routed to workflows or exported to CRM'].map((li,i)=>(
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-[#38BDF8] mt-1">•</span><span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* THE INDIRECT SIGNAL ADVANTAGE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The most powerful buying signals are almost never explicit.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>The highest-converting outreach does not happen because someone found the right contact. It happens because someone found the right contact at the right moment, when something was happening in their world that made the conversation relevant.</p>
              <p>The challenge is that most of those moments are not announced directly. A company does not publish a press release saying they are struggling with the exact problem your product solves. A contact does not update their LinkedIn headline to say they are actively evaluating solutions in your category.</p>
              <p>But they do post about their frustrations. They do hire for roles that reveal their strategic direction. They do announce funding that signals budget availability. They do engage with content about problems they are trying to solve. They do change roles, which means the decision-making landscape at a target company just shifted.</p>
              <p>These are indirect signals. Individually, none of them is conclusive. Together, they paint a picture of where a company is and what they are likely receptive to right now. Simply Scrapable's Listener is built to detect these signals passively, surface them to the right person, and create the outreach opportunity before the window closes.</p>
              <p className="text-white font-medium">The teams using Simply Scrapable are not just building bigger lists. They are building smarter timing into their outreach operation.</p>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Hiring Signal, Competitive Signal, Budget Signal Illustration</span>
          </div>
        </div>
      </section>
      {/* USE CASES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Five outreach profiles that get the most from a live intelligence platform.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {num:'01',title:'The B2B Sales Team Running Cold Outreach',body:'A sales team targeting a defined ICP across multiple industries that currently builds lists manually from LinkedIn, verifies emails through a separate tool, and loads contacts into the CRM by hand. Simply Scrapable automates the list building, enriches the contacts, and routes them directly into the outreach workflow without any manual step between search and sequence.'},
              {num:'02',title:'The Recruiting Firm Sourcing Candidates',body:'A recruiting operation that needs to find qualified professionals in specific roles, industries, and geographies continuously. Scheduled searches keep the candidate pipeline fresh without manual sourcing effort. The 360-degree profile gives recruiters the context they need to assess fit before the first outreach.'},
              {num:'03',title:'The Agency Running Outreach for Multiple Clients',body:'A marketing or lead generation agency managing prospecting for multiple clients simultaneously. Separate search configurations for each client ICP, separate scheduled searches running on client-specific cadences, and separate workflow routing ensure each client\'s pipeline is built and maintained independently within one platform.'},
              {num:'04',title:'The Founder Doing Their Own Prospecting',body:'A founder in the early stages of building pipeline who needs to do outreach efficiently without a full sales team. Simply Scrapable compresses the research, the list building, the enrichment, and the workflow routing into a single platform so the founder\'s prospecting time produces results rather than getting consumed by the process.'},
              {num:'05',title:'The Sales Team Targeting Trigger Events',body:'A team whose outreach performs best when it is timed to a specific trigger: a funding round, a new executive hire, a company expansion, or a competitive switch. The Listener monitors for those triggers automatically and surfaces the contacts who just experienced them, so the outreach reaches them within days of the signal rather than weeks later when the moment has passed.'}
            ].map((uc) => (
              <div key={uc.num} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[#38BDF8] text-3xl font-bold mb-3 block">{uc.num}</span>
                <h3 className="text-white font-semibold mb-3">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SIMPLY SCRAPABLE IN THE ECOSYSTEM */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simply Scrapable is the entry point. Everything else in the ecosystem runs on what it finds.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed max-w-3xl">
              <p>Simply Scrapable sits at the top of the funnel. It finds the leads. Every other product in the ecosystem works with those leads once they are found.</p>
              <p>Leads found in Simply Scrapable route directly into workflows that include ProfitBot for qualification, ProfitLink for LinkedIn outreach, ProfitMail for email follow-up, and Profitibull for CRM management and pipeline tracking. The lead goes from discovery to active outreach without leaving the ecosystem and without a manual handoff at any point.</p>
              <p className="text-white font-medium">The leads it finds do not sit in an export. They enter a workflow immediately and move through a fully automated multi-channel outreach process from the moment they are discovered.</p>
            </div>
            <div className="mt-8">
              <Link to="/ecosystem" className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8963E] text-black font-semibold px-6 py-3 rounded-lg transition-colors">Explore the Full Ecosystem <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start finding the right leads at the right moment.</h2>
          <p className="text-white/70 text-lg mb-8">Simply Scrapable is available at simplyscrapable.com. Explore the platform, start a trial, or reach out to learn how it fits into your outreach operation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://simplyscrapable.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#2AA8E0] text-black font-semibold px-8 py-4 rounded-lg transition-colors text-lg">Visit Simply Scrapable <ArrowRight size={20} /></a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 hover:border-[#38BDF8] text-white px-8 py-4 rounded-lg transition-colors text-lg">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <SimplyScrapableFAQ />
    </div>
  );
};
export default SimplyScrapablePage;
