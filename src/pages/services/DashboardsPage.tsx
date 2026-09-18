import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Users, ShoppingCart, Package, DollarSign, Gauge, Clock, Target, Shield, KeyRound, Database, Settings, Plus, X, CheckCircle } from 'lucide-react';
import { PageTransition } from '../../components/layout/PageTransition';

const heroContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } }
};

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' as const },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' as const, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
};

const ecommerceFeatures = [
  "Multi-channel data aggregation from TikTok Shop, Amazon, Shopify, Meta, Google, and WooCommerce",
  "Gross and net revenue tracking by channel with fee and return deductions applied",
  "Contribution margin by product and by channel",
  "Ad spend consolidated across all platforms with ROAS and blended TACoS reporting",
  "Inventory and fulfillment visibility by SKU across all warehouses and fulfillment channels",
  "Customer acquisition and lifetime value tracking by acquisition source",
  "Days of inventory remaining based on current sales velocity with reorder alerts",
  "Automated daily, weekly, and monthly reports delivered by email or Slack",
  "Threshold-based alerts for revenue drops, stockouts, and ad spend anomalies",
];

const salesFeatures = [
  "Live pipeline value by stage with deal count and average deal size",
  "Show rates, connection rates, and stage conversion by rep and by team",
  "Revenue tracked against daily, weekly, and monthly targets",
  "Activity metrics by rep (calls, emails, meetings, proposals)",
  "Deal velocity tracking from first contact to close",
  "Lost deal analysis by reason and by stage",
  "Forecast modeling based on current pipeline and historical conversion rates",
  "Manager and rep views with role-based access",
  "Automated performance snapshots delivered on a defined schedule",
];

const agencyFeatures = [
  "Multi-account consolidation showing all clients in one admin view",
  "Per-client dashboards with account-specific KPIs and targets",
  "Automated client report generation on a weekly or monthly schedule",
  "Performance vs. target alerts for accounts that need attention",
  "Ad performance consolidation across Meta, Google, TikTok, and Amazon for each client",
  "Team assignment and workload visibility across accounts",
  "Client-facing dashboard access with branded, white-labeled reporting views",
  "Historical performance archive for each account",
];

const operationsFeatures = [
  "Inventory levels by SKU, location, and fulfillment channel in real time",
  "Reorder point tracking with configurable low-stock and stockout alerts",
  "Supplier lead time tracking and purchase order management visibility",
  "Fulfillment and shipping performance metrics",
  "Return and refund rates by product and channel",
  "Warehouse throughput and productivity tracking",
  "Custom operational KPIs defined during the scoping session",
  "Integration with inventory management systems, ERPs, and 3PL portals",
];

const financialFeatures = [
  "P&L tracking with real-time or daily refresh from connected finance systems",
  "Revenue vs. target with trend visualization",
  "Gross and net margin by business line or product category",
  "Customer acquisition cost and lifetime value by channel",
  "Cash flow and burn rate visibility for funded businesses",
  "Department-level cost tracking against budget",
  "KPI scoreboard with configurable targets and status indicators",
  "Board-ready reporting exports on a scheduled cadence",
  "Role-based access so executives, managers, and analysts each see the right view",
];

const scoreboardFeatures = [
  "Custom KPI selection built around your specific business model and goals",
  "At-a-glance status indicators showing each metric as green, yellow, or red against target",
  "Prior period comparison (yesterday vs. today, last week vs. this week)",
  "Team or individual performance ranking where relevant",
  "Large-format display mode for TV screens in offices or warehouses",
  "Mobile-responsive view for owners and managers checking numbers on the go",
  "Configurable targets that update as goals change",
];

const useCases = [
  {
    num: "01",
    title: "The Multi-Channel Ecommerce Brand",
    desc: "A brand selling on Amazon, TikTok Shop, and Shopify simultaneously. Each channel has strong native analytics. The brand has no single view of total revenue, blended margin, or which channel is driving the most profitable customers. A custom dashboard is the only way to see the business as a unified whole.",
  },
  {
    num: "02",
    title: "The Sales Team Managing Significant Pipeline",
    desc: "A sales operation with multiple reps, meaningful revenue at stake, and a manager who currently builds a weekly pipeline report manually from CRM exports. A custom sales dashboard replaces the manual report with a live view that creates accountability, surfaces problems early, and gives the manager back several hours every week.",
  },
  {
    num: "03",
    title: "The Ecommerce Agency Managing Multiple Client Accounts",
    desc: "An agency managing ten to fifty client accounts across Amazon, TikTok Shop, and Shopify. Each client has their own credentials, their own channels, and their own performance goals. A custom agency dashboard consolidates all clients into one view, tracks performance against goals, and generates reports automatically.",
  },
  {
    num: "04",
    title: "The Amazon Aggregator or Brand Portfolio",
    desc: "A firm that has acquired multiple Amazon brands and needs consolidated performance visibility across all of them. Native Seller Central does not support multi-brand views at scale. A custom aggregator dashboard shows portfolio-level performance, brand-by-brand comparison, and the metrics that matter for managing an aggregated portfolio.",
  },
  {
    num: "05",
    title: "The Operations Team Running on Spreadsheets",
    desc: "A fulfillment operation, manufacturing business, or supply chain team tracking inventory, throughput, or supplier performance across spreadsheets that one person maintains. A custom operations dashboard replaces the spreadsheets with a live, role-appropriate view that every relevant team member can access without the single point of failure.",
  },
  {
    num: "06",
    title: "The Founder Who Needs a Weekly Business Snapshot",
    desc: "A business owner running multiple revenue streams who currently pieces together a business overview from memory, from informal check-ins with the team, and from reports that take hours to pull. A custom executive dashboard delivers the full picture in one view, updated automatically, available on any device.",
  },
];

const processPhases = [
  { num: "01", title: "Data Mapping and KPI Definition", desc: "Before any design or development begins, we map every data source your business operates on and define the metrics that matter to your specific model. What does a good day look like? What numbers does your team check first? What would an alert tell you that would change what you do today? This session determines the architecture before any code is written." },
  { num: "02", title: "API and Integration Architecture", desc: "Phil identifies every platform API we need to connect, the data structures those APIs return, and the normalization logic required to make data from five different platforms comparable in a single view. Different platforms measure the same thing differently. The integration architecture resolves those differences before the display layer is built." },
  { num: "03", title: "Dashboard Design and Layout", desc: "Oma designs every view in the dashboard: the scoreboard layer, the channel-level analytics, the team performance view, the inventory layer, and any reporting outputs. Every screen is designed and approved before development begins. You see the layout, the metric placement, and the visual hierarchy before a single line of code is written." },
  { num: "04", title: "Development, Integration, and Data Validation", desc: "Phil builds the dashboard and connects every integration. Data validation is a dedicated phase: every metric is tested against source platform data to confirm accuracy before the dashboard goes live. A dashboard with wrong numbers is worse than no dashboard. Accuracy is a non-negotiable requirement, not a nice-to-have." },
  { num: "05", title: "Alert Configuration and Automated Report Setup", desc: "Thresholds, alerts, and automated reports are configured for your specific operation before handover. You define what triggers an alert and who receives it. Scheduled reports are set up to deliver to the right people on the right cadence." },
  { num: "06", title: "Handover and Documentation", desc: "At delivery you receive full documentation covering every data connection, every metric definition, how each calculation works, and every admin function in the dashboard. The system is yours to operate and yours to hand to any developer who works on it after us." },
];

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' as const },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' as const, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function DashboardsPage() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-[90vh] bg-[#050508] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
            <motion.div variants={heroContainerVariants} initial="hidden" animate="visible">
              <motion.div variants={heroItemVariants}>
                <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase mb-6">Dashboards</p>
              </motion.div>
              <motion.div variants={heroItemVariants}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6">
                  Every number that runs your business. One place. Always current.
                </h1>
              </motion.div>
              <motion.div variants={heroItemVariants}>
                <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-10">
                  A dashboard is only useful if it shows you the right numbers at the right time without requiring manual work to get there. We build custom dashboards that pull from every system you operate, surface the metrics that actually matter to your business, and update in real time so the number you see is the number that is true right now.
                </p>
              </motion.div>
              <motion.div variants={heroItemVariants} className="flex flex-wrap gap-4">
                <a href="/about/start-a-project" className="rounded-full bg-[#C9A84C] text-[#050508] font-semibold px-7 py-3 text-sm hover:bg-[#d4b55c] transition-colors">Build My Dashboard</a>
                <a href="/work" className="rounded-full border border-[#C9A84C]/50 text-[#C9A84C] font-medium px-7 py-3 text-sm hover:border-[#C9A84C] transition-colors group">See a Live Example <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></a>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/10 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Dashboard Preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE REPORTING PROBLEM */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[02] The Problem We Solve</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ DATA FRAGMENTATION</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              You are not missing data. You are drowning in it with no unified place to see it clearly.
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <div className="max-w-3xl space-y-6">
              <p className="text-base text-white/60 leading-relaxed">
                Every platform your business operates on generates data. TikTok Shop has its seller center. Amazon has Seller Central. Shopify has its analytics tab. Meta has Ads Manager. Your CRM has its pipeline view. Your sales team has its own spreadsheet. Each one gives you a piece of the picture. None of them give you the whole thing.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                So the typical operator does something like this every morning: logs into the first platform, notes the number, opens the second platform, notes that number, opens a spreadsheet, manually enters both, repeats across three more platforms, and thirty to ninety minutes later has a picture of yesterday that is already becoming outdated. This is not a reporting process. It is a manual tax on your time that compounds every single day.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                The answer is not a faster version of the same process. The answer is a single system that pulls every relevant data point automatically, calculates the metrics your specific business model cares about, and surfaces the current state of your operation the moment you open a screen.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                That is a custom dashboard. Not a generic analytics tool with your channels plugged into it. A system built around the specific KPIs, the specific data sources, and the specific decision-making layer your business actually runs on.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                The difference between a dashboard and a scoreboard matters here too. A dashboard shows data. A scoreboard creates urgency. The best custom dashboards we build do both: the data layer for the analysts, the scoreboard layer for the operators. One system, two views, built for how your business actually makes decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILD - INTRO */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[03] Full Capability Breakdown</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ DASHBOARD TYPES</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              Every type of dashboard your operation might need. Each one built around the data your business actually runs on.
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed max-w-3xl">
              The dashboard category is broad because businesses are complex. An ecommerce brand needs different views than a sales team, which needs different views than an agency managing clients. What stays consistent is the architecture: custom data connections, real-time or scheduled refresh, and a display layer built around how your specific team makes decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TYPE 1: ECOMMERCE AND MULTI-CHANNEL DASHBOARDS */}
      <section className="bg-[#050508] pb-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">ECOMMERCE & MULTI-CHANNEL</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Ecommerce and Multi-Channel Dashboards</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">One view for every channel, every metric, and every decision your ecommerce operation requires.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Ecommerce operators managing volume across multiple channels face a specific data problem. Each platform gives you excellent native analytics for that platform. None of them give you the cross-channel view that tells you how the business is actually performing. Which channel is most profitable after fees? Which product has the best margin across all channels combined? Where is ad spend generating return and where is it leaking? A custom ecommerce dashboard answers all of these questions in real time without requiring a single manual export.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {ecommerceFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <ShoppingCart className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Ecommerce Dashboard</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TYPE 2: SALES PIPELINE AND REVENUE DASHBOARDS */}
      <section className="bg-[#08080f] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Sales Pipeline Dashboard</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-1 lg:order-2">
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">SALES PIPELINE & REVENUE</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Sales Pipeline and Revenue Dashboards</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The scoreboard your sales team checks before they check anything else.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Sales dashboards fail when they show too much. A CRM has hundreds of fields. A good sales dashboard surfaces the eight numbers that tell a manager immediately whether the team is on track and what needs attention. Show rate. Pipeline value by stage. Conversion rate by rep. Revenue against target. These are the numbers that drive behavior when they are visible and create blind spots when they are not. We build sales dashboards that pull live data from the CRM, calculate the metrics that matter for your specific sales model, and present them in a scoreboard format that creates accountability without requiring anyone to run a report.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {salesFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-[#C9A84C] bg-[#C9A84C]/5 px-4 py-3 rounded-r-lg">
                <p className="text-sm text-white/70 leading-relaxed">
                  <span className="text-[#C9A84C] font-medium">Proof:</span> The Sales Pipeline Dashboard we built tracks $1.9M in lead value across P2 and P3 pipeline stages with live data refresh. The team sees show rates, revenue reporting, and individual performance in real time without logging into the CRM and building a report. The number is always current.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TYPE 3: AGENCY AND CLIENT PERFORMANCE DASHBOARDS */}
      <section className="bg-[#050508] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">AGENCY & CLIENT PERFORMANCE</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Agency and Client Performance Dashboards</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The view that lets you manage twenty clients without losing visibility into any of them.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Agencies managing multiple client accounts face a reporting problem that scales with every new client they add. Each client has their own platforms, their own KPIs, and their own reporting expectations. Building client reports manually takes time that should be spent on the work. A custom agency dashboard consolidates every client account into one view, tracks performance against each client's goals, and generates client-ready reports automatically.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {agencyFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Agency Dashboard</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* TYPE 4: OPERATIONS AND INVENTORY DASHBOARDS */}
      <section className="bg-[#08080f] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <Package className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Operations Dashboard</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-1 lg:order-2">
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">OPERATIONS & INVENTORY</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Operations and Inventory Dashboards</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The view that tells you what is happening across your operation right now.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Operations dashboards exist at the intersection of data and decision-making. A warehouse manager needs to know stock levels and fulfillment velocity. A supply chain operator needs to see lead times and reorder points. A manufacturing operation needs to track throughput, downtime, and output by line. These are not the same as ecommerce analytics or sales reporting. They are operational data layers that require custom architecture to surface correctly.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {operationsFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TYPE 5: FINANCIAL AND EXECUTIVE DASHBOARDS */}
      <section className="bg-[#050508] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">FINANCIAL & EXECUTIVE</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Financial and Executive Dashboards</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The one view that tells the whole story of your business to the people who need to see it.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Executive dashboards are the highest-level view in any organization. They exist to answer one question in under ten seconds: is the business on track? Revenue against target. Margin against plan. Customer acquisition cost against lifetime value. Cash position against burn. These numbers pull from finance systems, CRM data, and operational metrics that typically live in separate places and never appear together in one view unless someone builds it.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {financialFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Executive Dashboard</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TYPE 6: CUSTOM KPI SCOREBOARDS */}
      <section className="bg-[#08080f] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <Gauge className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">KPI Scoreboard</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-1 lg:order-2">
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">CUSTOM KPI SCOREBOARDS</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Custom KPI Scoreboards</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">Stripped down to the numbers that drive behavior. Nothing else.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  A scoreboard is a dashboard with a specific purpose: to create urgency. It is not an analytics suite. It is not a reporting tool. It is the five to ten numbers your team checks first thing in the morning, during the day, and at the end of the shift to know whether they are winning or losing right now. We build scoreboards as a specific layer within broader dashboard systems or as standalone tools for teams that already have the analytics infrastructure and just need the daily accountability view.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {scoreboardFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: USE CASES */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[04] Who Builds This</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ USE CASES</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              Six operator profiles that consistently outgrow native platform analytics.
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardContainerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <motion.div
                key={uc.num}
                variants={cardVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group cursor-default bg-[#0d0d18] border border-white/[0.08] rounded-xl p-8 transition-all duration-300"
              >
                <p className="text-[#C9A84C] text-xs font-mono tracking-[0.15em] mb-3">{uc.num}</p>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">{uc.title}</h3>
                <p className="text-white/60 text-base leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION: LIVE PROOF */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[05] Built by Simply Scalable</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ LIVE PROOF</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              Not a dashboard. A scoreboard. $1.9M in lead value tracked in real time.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">What the client needed</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  A sales team managing a high-volume pipeline with multiple stages, multiple reps, and $1.9M in active lead value needed real-time visibility into what was actually happening across the pipeline. They were pulling reports manually from the CRM, working from data that was hours or days old, and had no reliable way to see which pipeline stages were converting and which were losing deals silently.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">What we built</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  A real-time sales analytics dashboard tracking $1.9M in lead value across P2 and P3 pipeline stages. The system pulls live data without a single manual export. The team sees show rates, stage conversion, revenue reporting, and individual rep performance at any moment without running a report or asking a manager. The number on the screen is the number that is true right now.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">The scoreboard distinction</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  A dashboard that requires interpretation is a reporting tool. A scoreboard that tells you immediately whether today is a good day or a problem day is a management tool. The difference in how a team responds to each is significant. This dashboard was designed to create urgency and surface accountability, not just to display data on request.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="space-y-4">
              {[
                { number: "$1.9M", label: "In lead value tracked and visible in real time" },
                { number: "0", label: "Manual data exports required by any team member" },
                { number: "100%", label: "Full rep and team performance visibility without individual reporting" },
                { number: "Live", label: "Pipeline stage conversion rates surfaced automatically" },
              ].map((stat, i) => (
                <div key={i} className="border border-white/[0.08] rounded-xl p-5">
                  <p className="text-3xl font-bold text-[#C9A84C] mb-1">{stat.number}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12">
            <a href="/about/start-a-project" className="inline-block rounded-full bg-[#C9A84C] text-[#050508] font-semibold px-7 py-3 text-sm hover:bg-[#d4b55c] transition-colors">Book a Discovery Call to Talk About Your Dashboard</a>
          </div>
        </div>
      </section>

      {/* SECTION: HOW WE BUILD YOUR DASHBOARD */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[06] The Process</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ HOW WE BUILD</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              From scattered data across multiple platforms to one unified, accurate system. Here is exactly how we get there.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/40 to-transparent" />
            <div className="space-y-0">
              {processPhases.map((phase) => (
                <motion.div
                  key={phase.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={cardVariants}
                  className="relative pl-12 md:pl-14 pb-12 last:pb-0"
                >
                  <div className="absolute left-0 md:left-1 top-1 w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-full bg-[#0d0d18] border-2 border-[#C9A84C] flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-mono font-bold text-[#C9A84C]">{phase.num}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2">{phase.title}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT YOU OWN */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[07] Ownership</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ WHAT YOU OWN</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              When we deliver your dashboard, the system belongs to you entirely.
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed max-w-3xl">
              The codebase, the database, the API integration configurations, the data pipeline logic, the alert system, and the full documentation. All of it is yours at delivery. You can host it on your own infrastructure, add new data sources with any developer you choose, or continue working with us to expand it. There is no recurring fee owed to Simply Scalable for access to a dashboard we already built. The system is built for you. It belongs to you.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardContainerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: KeyRound, title: "Your system, your infrastructure", desc: "Full source code and documentation delivered at handover. Host it anywhere. No dependency on our servers after delivery." },
              { icon: Database, title: "Your data pipelines", desc: "Every API connection and data pipeline is documented and transferred to you. Your business data does not pass through a Simply Scalable-controlled layer after delivery." },
              { icon: Settings, title: "Your thresholds, your alerts", desc: "Every alert, every threshold, and every automated report is configurable by you through the admin panel without developer involvement." },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-[#0d0d18] border border-white/[0.08] rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-white/60 text-base leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative bg-[#050508] py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
              Tell us what your operation looks like. We will build the dashboard it actually needs.
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed">
              Nine questions. Twenty-four hours. A detailed quote with scope, data connections, and a real number.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="/about/start-a-project" className="rounded-full bg-[#C9A84C] text-[#050508] font-semibold px-8 py-3.5 text-sm hover:bg-[#d4b55c] transition-colors">Get a Quote</a>
            <a href="/about/start-a-project" className="rounded-full border border-[#C9A84C]/50 text-[#C9A84C] font-medium px-8 py-3.5 text-sm hover:border-[#C9A84C] transition-colors">Book a Discovery Call</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <div className="flex items-center gap-2 justify-center">
              <Clock className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-white/50">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-white/50">Built for your channels, your KPIs, your team</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Shield className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-white/50">Full ownership at delivery. No lock-in.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </PageTransition>
  );
}

const faqItems = [
  {
    q: "What is the difference between a custom dashboard and a tool like Triple Whale or Northbeam?",
    a: "Tools like Triple Whale and Northbeam are SaaS products built for the most common ecommerce analytics use case. They do attribution and ad performance well for brands that fit their model. A custom dashboard is built around your specific business: your channels, your KPIs, your team structure, your margin model, and your operational workflows. It does not approximate what you need. It does exactly what you need. You also own it outright with no monthly subscription.",
  },
  {
    q: "How do you make sure the numbers in the dashboard are accurate?",
    a: "Data validation is a dedicated phase in the build process. Before the dashboard goes live, every metric is tested against the source platform data to confirm it is pulling and calculating correctly. We define exactly what each metric means during the scoping session so there is no ambiguity in how numbers are calculated. A dashboard with inaccurate data creates worse decisions than no dashboard at all. Accuracy is treated as a requirement, not an assumption.",
  },
  {
    q: "Which platforms and data sources can you connect to the dashboard?",
    a: "The most common connections we build are TikTok Shop, Amazon Seller Central, Amazon Advertising, Shopify, Meta Ads Manager, Google Ads, Google Analytics, GoHighLevel, Salesforce, HubSpot, and custom databases. If a platform has an available API, connection is generally possible. The specific connections for your dashboard are defined during the scoping session based on where your data actually lives.",
  },
  {
    q: "Can the dashboard support multiple team members with different access levels?",
    a: "Yes. Role-based access is part of the standard architecture. A sales rep sees their own numbers. A manager sees the full team. An executive sees the business-level view. An agency client sees their own account. Access levels are configured during the build and manageable through the admin panel after delivery without developer involvement.",
  },
  {
    q: "Can you add new data sources or metrics after the dashboard is live?",
    a: "Yes. Because you own the codebase, new data sources and metrics can be added at any time by us or by any other developer you work with. The most common post-launch addition is a new channel the business expands into after the initial build. We scope and price additions separately from the original project.",
  },
  {
    q: "How long does it take to build a custom dashboard?",
    a: "Most dashboard builds take between four and ten weeks from a signed agreement to a live, data-validated system. A focused sales scoreboard pulling from a single CRM can be ready in four to six weeks. A multi-channel ecommerce dashboard with five or more API connections, an inventory layer, and automated reporting typically takes eight to ten weeks. The exact timeline is defined in the project brief before any development begins.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-dashed border-white/10 pt-8 mb-12">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[08] FAQ</p>
            <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ QUESTIONS</p>
          </div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
            Frequently Asked Questions: Dashboards
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
                <span className="text-lg font-medium text-white pr-8 group-hover:text-[#C9A84C] transition-colors">{item.q}</span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === i ? (
                    <X className="w-4 h-4 text-[#C9A84C]" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/40 group-hover:text-[#C9A84C] transition-colors" />
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
