import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { NewsletterSignup } from '../components/blog/NewsletterSignup';
import { AccordionItem } from '../components/ui/AccordionItem';
import { Button } from '../components/ui/LegacyButton';
import { Clock, ArrowRight } from 'lucide-react';

type FeaturedArticle = {
  category: string;
  title: string;
  preview: string;
  topics: string[];
  readTime: string;
  imageNote: string;
};

const featuredArticles: FeaturedArticle[] = [
  {
    category: 'Custom Software',
    title: 'When to Build Custom Software and When to Buy Off-the-Shelf: A Practical Framework for Operators',
    preview:
      'The answer is not always build. Most businesses should start with off-the-shelf tools and move to custom software only when a specific, documented gap has emerged that existing tools cannot close. The problem is that most operators do not have a clear framework for recognizing when that moment has arrived. This article gives you one.',
    topics: [
      'The seven signals that your business has outgrown off-the-shelf software',
      'The build vs. buy calculation most teams get wrong',
      'How to measure the real cost of staying on the wrong tool',
      'The scoping session as a decision-making tool, not just a sales step',
    ],
    readTime: '8 min read',
    imageNote: 'Abstract tech / architecture visual',
  },
  {
    category: 'Ecommerce',
    title: 'Why TikTok Shop Sellers at Volume Need Custom Infrastructure (and What That Infrastructure Actually Looks Like)',
    preview:
      'The TikTok Shop native seller center is designed for the average seller. At volume, it becomes a liability. Order management gets manual. Affiliate performance has no consolidated tracking layer. Inventory sync between TikTok Shop and other fulfillment channels does not happen automatically. This article explains what a proper TikTok Shop infrastructure looks like and when the native tools stop being enough.',
    topics: [
      'The specific limitations of the TikTok Shop seller center at scale',
      'What a custom TikTok Shop app actually includes',
      'The Mamba build: what was needed, what was built, and why',
      'How TikTok Shop API architecture differs from general ecommerce platforms',
    ],
    readTime: '6 min read',
    imageNote: 'Dashboard or analytics visual',
  },
  {
    category: 'AI and Agents',
    title: 'What an Agentic Application Actually Does (and How to Know If Your Business Needs One)',
    preview:
      'The term AI agent has been applied to everything from a chatbot with a system prompt to a fully autonomous multi-model orchestration system. The distinction matters because they serve completely different purposes at completely different scales. This article defines what an agentic application actually is, what it replaces, and how to identify whether your business has a workflow that one would genuinely automate.',
    topics: [
      'The difference between a chatbot, an automation, and an agentic application',
      'The six workflow types that benefit most from agentic systems',
      'The human checkpoint principle: why the best agentic applications include human approval at consequential steps',
      'ProfitBot as a case study in multi-model orchestration',
    ],
    readTime: '7 min read',
    imageNote: 'AI or automation visual',
  },
  {
    category: 'Healthcare',
    title: 'Five Tools Replaced by One: How a Medical Practice Rebuilt Its Patient Experience From the Ground Up',
    preview:
      'GEM Science was not running a disorganized practice. They were running a well-managed one with the best tools available to them individually. The problem was the gaps between those tools: the EHR that did not talk to the CRM, the intake forms that arrived as PDFs, the scheduling data that never reached the marketing system. This is the full story of how one custom portal replaced all five.',
    topics: [
      'The five-tool problem most wellness practices do not recognize until it is deeply embedded',
      'The architecture decisions behind the GEM Science patient portal',
      'HIPAA-conscious architecture as a design constraint, not a checklist item',
      'What 871 active patients onboarded at launch actually required',
    ],
    readTime: '9 min read',
    imageNote: 'Portal or medical interface visual',
  },
  {
    category: 'Sales and Operations',
    title: 'Dashboards Show Data. Scoreboards Create Urgency. Here Is the Difference and Why It Matters.',
    preview:
      'Most sales teams have a dashboard. Very few have a scoreboard. A dashboard displays data. A scoreboard tells you immediately whether today is a good day or a problem that needs attention right now. The distinction changes how teams interact with the tool, how managers use it, and what it does to the culture of accountability on the floor.',
    topics: [
      'The specific design differences between a dashboard and a scoreboard',
      'Why the Sales Pipeline Dashboard was designed as a scoreboard rather than a reporting tool',
      'The five KPIs that belong on every sales scoreboard',
      'How to audit your current dashboard to find what it is missing',
    ],
    readTime: '5 min read',
    imageNote: 'Dashboard or scoreboard visual',
  },
  {
    category: 'Integrations',
    title: 'Your Stack Is Not the Problem. The Gaps Between Your Tools Are.',
    preview:
      'Most businesses do not have a tool problem. They have a coordination problem. The tools they use are individually good. The gaps between them are where the cost accumulates: in manual data transfer, in reconciliation time, in decisions made on stale data, and in team members who spend more time managing the friction between tools than doing the work the tools were supposed to support.',
    topics: [
      'How to identify whether your business has a tool problem or a gap problem',
      'The five most expensive gaps in a typical business software stack',
      'API integrations vs. Zapier vs. middleware: when each approach is right',
      'The GEM Science and VAHubPro integration case studies side by side',
    ],
    readTime: '7 min read',
    imageNote: 'Integration or data flow visual',
  },
];

const categories = [
  'All Articles',
  'Custom Software',
  'Ecommerce',
  'AI and Agents',
  'Healthcare',
  'GoHighLevel',
  'Integrations',
  'Sales and Operations',
  'Membership and Community',
  'Websites',
  'Recruiting',
  'Agency Operations',
];

type Article = { title: string; category: string; date: string };

const allArticles: Article[] = [
  { title: 'When to Build Custom Software and When to Buy Off-the-Shelf: A Practical Framework for Operators', category: 'Custom Software', date: '2 days ago' },
  { title: 'What an Agentic Application Actually Does (and How to Know If Your Business Needs One)', category: 'AI and Agents', date: '5 days ago' },
  { title: 'Why TikTok Shop Sellers at Volume Need Custom Infrastructure', category: 'Ecommerce', date: '1 week ago' },
  { title: 'Five Tools Replaced by One: How a Medical Practice Rebuilt Its Patient Experience', category: 'Healthcare', date: '2 weeks ago' },
  { title: 'Dashboards Show Data. Scoreboards Create Urgency. Here Is the Difference.', category: 'Sales and Operations', date: '2 weeks ago' },
  { title: 'Your Stack Is Not the Problem. The Gaps Between Your Tools Are.', category: 'Integrations', date: '3 weeks ago' },
  { title: 'GoHighLevel Is Powerful. Most Businesses Use 30% of It. Here Is What the Other 70% Looks Like.', category: 'GoHighLevel', date: '3 weeks ago' },
  { title: 'The Ownership Question Every Custom Software Client Should Ask Before Signing', category: 'Custom Software', date: '1 month ago' },
  { title: 'How Simply Scrapable Uses Passive Signal Intelligence to Find Prospects at the Right Moment', category: 'AI and Agents', date: '1 month ago' },
  { title: 'What a Custom Membership Platform Can Do That Kajabi and Circle Cannot', category: 'Membership and Community', date: '1 month ago' },
  { title: 'The Seven Things That Go Wrong in Custom Software Projects (and How to Avoid All of Them)', category: 'Custom Software', date: '2 months ago' },
  { title: 'Why Your Recruiting Process Needs a Matching Matrix, Not Just a Pipeline', category: 'Recruiting', date: '2 months ago' },
  { title: 'How to Scope a Custom Software Project: What to Know Before the First Call', category: 'Custom Software', date: '2 months ago' },
  { title: 'The Agency Client Portal Problem: Why Email and Slack Are Costing You Referrals', category: 'Agency Operations', date: '3 months ago' },
  { title: 'ProfitBot and the Approval Checkpoint: How We Built AI Accountability Into Every Workflow', category: 'AI and Agents', date: '3 months ago' },
  { title: 'What a Professional Services Website Should Do That Most Do Not', category: 'Websites', date: '3 months ago' },
  { title: 'The Unified Workflow Builder: What Happens When Your CRM, LinkedIn Outreach, and Email All Live in One Place', category: 'GoHighLevel', date: '4 months ago' },
  { title: 'How the GEM Science Patient Portal Was Built: Architecture Decisions for a Five-System Integration', category: 'Healthcare', date: '4 months ago' },
];

const faqs = [
  {
    question: 'How often is new content published on the Simply Scalable blog?',
    answer:
      'New articles are published when they are ready, not on a fixed weekly schedule. The priority is content that is genuinely useful to operators and founders making software decisions, not content volume for its own sake. Subscribers to the newsletter are notified when new articles go live.',
  },
  {
    question: 'Who writes the content on this blog?',
    answer:
      'All content is written by the Simply Scalable team: Phil Murphy and Oma. The articles reflect direct experience building and operating production software across multiple industries, not outsourced content or AI-generated filler. When an article references a specific build, it is because the team built it.',
  },
  {
    question: 'Can I republish or share an article from this blog?',
    answer:
      'Individual articles can be shared via link. Reproduction of full article content on another website or publication requires permission. Reach out to info@simplyscalable.io for republication requests.',
  },
  {
    question: 'Are the case studies in the articles based on real client projects?',
    answer:
      'Yes. Every case study referenced in blog content is based on a real project in the Simply Scalable portfolio. Client names are used with permission. Where a client has requested anonymity, the case study describes the problem and the solution without identifying the specific business.',
  },
  {
    question: 'Can I request an article on a specific topic?',
    answer:
      'Yes. If there is a topic you want the team to cover, send the request to info@simplyscalable.io with the subject line "Blog topic request." Topic suggestions that are relevant to the site\'s audience and within the team\'s experience are considered for the publishing schedule.',
  },
  {
    question: 'Is there a podcast or video content alongside the blog?',
    answer:
      'Not currently. The blog is the primary content format. If audio or video content is added to the publishing schedule, newsletter subscribers will be notified.',
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-midnight border border-steel/60 rounded-card overflow-hidden flex flex-col hover:border-gold/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-40 bg-gradient-to-br from-steel/50 to-near-black overflow-hidden">
        <span className="absolute top-4 left-4 z-10 bg-near-black/80 border border-gold/40 text-gold text-[11px] font-mono rounded-chip px-3 py-1">
          {article.category}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-inner border border-gold/20" style={{ opacity: 0.3 + (i % 3) * 0.2 }} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-[18px] leading-snug text-white group-hover:text-gold transition-colors duration-300">
          {article.title}
        </h3>
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-steel/50">
          <span className="text-mist text-[13px] font-mono">{article.date}</span>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold text-[13px] font-mono hover:text-gold-hover transition-colors"
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedCard({ article, index }: { article: FeaturedArticle; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-midnight border border-steel/60 rounded-card overflow-hidden hover:border-gold/30 transition-all duration-300 flex flex-col lg:flex-row"
    >
      <div className="relative lg:w-2/5 min-h-[200px] bg-gradient-to-br from-steel/50 to-near-black overflow-hidden">
        <span className="absolute top-4 left-4 z-10 bg-near-black/80 border border-gold/40 text-gold text-[11px] font-mono rounded-chip px-3 py-1">
          {article.category}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-inner border border-gold/20" style={{ opacity: 0.3 + (i % 3) * 0.2 }} />
            ))}
          </div>
        </div>
        <span className="absolute bottom-3 left-4 text-mist/40 text-[10px] font-mono">{article.imageNote}</span>
      </div>

      <div className="p-8 lg:w-3/5 flex flex-col">
        <h3 className="font-display text-[22px] md:text-[24px] leading-snug text-white group-hover:text-gold transition-colors duration-300">
          {article.title}
        </h3>
        <p className="font-body text-[15px] text-mist leading-relaxed mt-4">{article.preview}</p>

        <ul className="mt-6 space-y-2">
          {article.topics.map((topic) => (
            <li key={topic} className="flex gap-3 font-body text-[14px] text-mist/90">
              <span className="text-gold mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-steel/50">
          <span className="flex items-center gap-2 text-mist text-[13px] font-mono">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </span>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold text-[13px] font-mono hover:text-gold-hover transition-colors"
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const visibleArticles =
    activeCategory === 'All Articles'
      ? allArticles
      : allArticles.filter((a) => a.category === activeCategory);

  return (
    <PageTransition>
      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight text-white max-w-4xl">
            The thinking behind the builds.
          </h1>
          <p className="font-body text-[18px] text-mist leading-relaxed mt-6 max-w-3xl">
            Strategy, lessons from shipping fifty-plus custom systems, and the questions every operator should ask
            before they build. Written by the team that builds and runs production software every day.
          </p>

          <div className="relative mt-12 h-56 md:h-72 rounded-hero overflow-hidden bg-gradient-to-br from-midnight via-steel/40 to-near-black border border-steel/60">
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-50">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-24 md:w-32 rounded-inner border border-gold/20 bg-near-black/40"
                  style={{ height: `${60 + (i % 3) * 40}px` }}
                />
              ))}
            </div>
            <span className="absolute bottom-4 left-6 text-mist/40 text-[11px] font-mono">
              Content and ideas, organized
            </span>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            Most custom software content is written by marketers. This is written by builders.
          </h2>
          <div className="space-y-5 font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-8">
            <p>
              The content on this page comes from direct experience shipping production software across healthcare,
              ecommerce, recruiting, coaching, agencies, and sales operations. Not from research reports. Not from
              aggregated industry surveys. From the specific decisions, surprises, and hard-won lessons that came from
              building real systems for real businesses.
            </p>
            <p>
              The goal is not to generate traffic for its own sake. It is to give operators and founders the
              information they need to make better decisions about software: when to build, when to buy, what to ask
              before scoping, what to watch for in a developer relationship, and how to think about the specific tools
              and categories that affect their business.
            </p>
            <p>
              If something on this page is useful to you, that is the point. If it prompts a question about your
              specific situation, the discovery call link is at the bottom of every article.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white max-w-3xl">
            The articles most relevant to where you are right now.
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-12">
            {featuredArticles.map((article, i) => (
              <FeaturedCard key={article.title} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white max-w-3xl">
            Find what is relevant to your business right now.
          </h2>
          <div className="flex flex-wrap gap-3 mt-10">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`font-mono text-[13px] rounded-chip px-4 py-2 border transition-all duration-200 ${
                    isActive
                      ? 'bg-gold text-near-black border-gold'
                      : 'bg-midnight text-mist border-steel/60 hover:border-gold/40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-[56px] md:pb-[72px] lg:pb-[96px] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white max-w-3xl">
            Every article, in reverse chronological order.
          </h2>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            New articles from the team that builds this software. In your inbox when they are ready.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-6">
            No weekly cadence for its own sake. No filler content to hit a publishing schedule. When something is
            worth reading, it goes out. When it is not, it does not.
          </p>
          <div className="mt-8">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <section className="py-[40px] md:py-[56px] lg:py-[80px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            Simply Scalable, Simply Scrapable, and Profitibull each publish content that supports the others.
          </h2>
          <div className="space-y-5 font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-8">
            <p>
              The Simply Scalable blog covers custom software, system architecture, and the decision-making process
              that operators face when their tools stop keeping up with their business.
            </p>
            <p>
              The Simply Scrapable blog covers lead intelligence, outreach strategy, passive signal monitoring, and
              the tactical side of building and using a prospect list effectively.
            </p>
            <p>
              The Profitibull blog covers CRM strategy, automation architecture, LinkedIn and email outreach best
              practices, and the operational side of running a marketing and sales stack.
            </p>
            <p>
              Each publication stands on its own. Together they cover the full spectrum of problems the ecosystem was
              built to solve. A reader who finds Simply Scalable through a custom software article may find Simply
              Scrapable relevant when they start thinking about outreach. A reader who finds Profitibull through a CRM
              article may realize they need something custom built that sits on top of it.
            </p>
            <p>The content feeds the ecosystem and the ecosystem feeds the content.</p>
          </div>
        </div>
      </section>

      <section className="py-[56px] md:py-[72px] lg:py-[96px] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[30px] md:text-[42px] leading-[1.15] tracking-tight text-white">
            Something you read prompt a question about your specific situation?
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-mist leading-relaxed mt-6 max-w-2xl mx-auto">
            The discovery call is free. Phil runs every one personally. Thirty minutes and you leave with a clear
            picture of what it would take to solve the problem you are thinking about.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button variant="primary" href="/about/start-a-project">
              Book a Discovery Call
            </Button>
            <Button variant="secondary" href="/about/start-a-project">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-[56px] md:pb-[72px] lg:pb-[96px] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] tracking-tight text-white">
            Frequently Asked Questions &mdash; Blog and Insights
          </h2>
          <div className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
