import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../../components/layout/PageTransition';
import { Button } from '../../components/ui/LegacyButton';

const communityFeatures = [
  "Member registration, profile management, and multi-tier access controls",
  "Content gating by membership level, with unlimited tier configurations",
  "Course and curriculum delivery with progress tracking and completion markers",
  "Community channels organized by topic, cohort, or access tier",
  "Member-to-member messaging and engagement tools",
  "Live call scheduling, automated reminders, and replay delivery",
  "Automated onboarding sequences for the first 7 and 14 days",
  "AI coach or assistant trained on your proprietary content (optional)",
  "Admin panel for member management, content updates, and platform analytics",
];

const mobileFeatures = [
  "Native iOS app development",
  "Native Android app development",
  "Cross-platform development using React Native",
  "App architecture and database design",
  "UX and UI design built mobile-first from the first wireframe",
  "Push notification systems with custom trigger logic",
  "In-app purchase and subscription billing integration",
  "Offline functionality where the use case requires it",
  "Camera, GPS, biometric, and device hardware integration",
  "App store submission for both Apple App Store and Google Play",
  "Analytics and crash reporting integration from day one",
  "Post-launch support and version update management",
];

const tiktokFeatures = [
  "TikTok Shop API integration and custom data pipelines",
  "Real-time order management systems for high-volume sellers",
  "Affiliate and creator performance tracking dashboards",
  "Inventory sync between TikTok Shop and external fulfillment systems (3PL, Shopify, Amazon)",
  "Return and refund workflow management",
  "Multi-account management for agencies managing multiple shops",
  "Creator collaboration portals with campaign briefing and performance reporting",
  "Revenue and margin reporting that accounts for TikTok-specific fee structures",
  "Automated alerts for stock levels, order anomalies, and performance drops",
];

const internalFeatures = [
  "Custom CRM and pipeline management tools built around your actual sales process",
  "Operations dashboards and KPI tracking tools for internal teams",
  "Onboarding and client management apps for agencies and service businesses",
  "Task management and project tracking tools built to your workflow",
  "Employee-facing tools for shift management, reporting, and communication",
  "RevOps systems that consolidate multiple internal tools into one",
  "Custom approval and review workflow applications",
  "Data entry and processing tools that replace manual spreadsheet workflows",
];

const useCases = [
  {
    num: "01",
    title: "The Course Creator or Coach Scaling Past Kajabi",
    desc: "A coach with a proven offer and a growing community. The course library is solid, the students are engaged, but Kajabi's community features are too limited, the access tier logic does not map to the actual offer structure, and there is no way to add an AI coaching layer without duct-taping three separate tools together. A custom membership app solves all three without compromise.",
  },
  {
    num: "02",
    title: "The SaaS Founder Who Validated on No-Code",
    desc: "A founder who built an MVP on Bubble or Glide, found product-market fit, and is now hitting the ceiling on performance, scalability, and custom feature development. The no-code tool did exactly what it was supposed to do. Now the product needs a real technical foundation to grow on.",
  },
  {
    num: "03",
    title: "The TikTok Shop Seller at Volume",
    desc: "A seller doing meaningful revenue on TikTok Shop who is managing orders manually, reconciling affiliate payments in spreadsheets, and has no real-time view of inventory across fulfillment channels. The native seller center got them to this point. A custom app gets them to the next level.",
  },
  {
    num: "04",
    title: "The Agency With a Client Experience Problem",
    desc: "A digital agency whose clients interact with the team across email, Slack, shared Google Docs, and a project management tool the client finds confusing. A custom client portal consolidates everything: deliverables, communication, status updates, approvals, and billing in one branded experience that reflects the quality of the agency's work.",
  },
  {
    num: "05",
    title: "The Operator Whose Team Runs on Spreadsheets",
    desc: "A business where critical operations depend on spreadsheets that one person maintains and that break when they are on vacation. A custom internal tool turns the spreadsheet logic into a proper application: role-based access, automated workflows, and data that does not live in a file on someone's desktop.",
  },
  {
    num: "06",
    title: "The Brand That Needs a Mobile Presence Worth Returning To",
    desc: "A brand with a strong web presence and a mobile site that technically works but feels like an afterthought. Customers open it, get what they need, and close it. A native mobile app with push notifications, a smoother UX, and device-level features turns one-time visitors into engaged users with a reason to come back.",
  },
];



const faqItems = [
  { q: "What types of apps does Simply Scalable build?", a: "Simply Scalable builds any type of app a business needs. The most common categories are community and membership apps, mobile apps for iOS and Android, TikTok Shop apps and commerce tools, and internal business tools. If your app does not fit a standard category, that is not a problem. The build starts with what your app needs to do, not with what category it fits into." },
  { q: "Can you build an app if I only have an idea and no technical specification?", a: "Yes. Most clients come to us with an idea, a problem, or a general picture of what they want, not a technical document. The discovery call and scoping session exist specifically to turn that idea into a fully documented project brief with a tech stack, a feature list, a timeline, and a cost. You do not need to know how to build it. You need to know what it needs to do." },
  { q: "What is the difference between a mobile app and a mobile-responsive website?", a: "A mobile-responsive website adjusts its layout for a smaller screen. A native mobile app is built specifically for the device: it uses hardware like the camera and GPS, works offline, sends push notifications, and feels native from the first tap because it was built for the phone, not adapted for it. If your users need notifications, offline access, or device integration, you need a native mobile app." },
  { q: "How long does it take to build a custom app?", a: "Timeline depends heavily on the type and complexity of the app. A focused internal business tool might take four to six weeks. A full membership platform with an AI component typically takes ten to fourteen weeks. A mobile app with a backend, payment integration, and app store submission typically takes eight to twelve weeks. The exact timeline is defined in the project brief before any development begins." },
  { q: "Can you build on top of an app that already exists, or do you only build from scratch?", a: "Both. If you have an existing codebase and need new features, a rebuilt section, or an integration added, we can assess what exists and scope the work accordingly. If starting from scratch is the cleaner option, we will say so. The decision is always based on what is best for the long-term health of the product." },
  { q: "What happens to the app after it is delivered?", a: "You own it outright. The code, the database, the design files, and the documentation are all yours at delivery. Simply Scalable offers ongoing development support for clients who want to continue adding features, but this is never required. You can take the codebase to any developer you choose at any time. There is no dependency and no recurring fee for access to what we already built." },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-3xl mx-auto mt-10 divide-y divide-white/[0.07]">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="py-5">
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="flex w-full justify-between items-center text-left group">
              <span className="text-white font-medium text-base group-hover:text-[#C9A84C] transition-colors duration-200">{item.q}</span>
              <span className="text-[#C9A84C] text-xl font-light ml-6 flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                  <p className="text-white/60 text-sm leading-relaxed pt-4 pb-2">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function AppsPage() {
  const heroContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center bg-[#050508] pt-32 pb-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-20 items-center">
          <motion.div variants={heroContainerVariants} initial="hidden" animate="visible">
            <motion.div variants={heroItemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
                If your business needs an app, we build it. Any platform. Any complexity. Delivered.
              </h1>
            </motion.div>
            <motion.div variants={heroItemVariants}>
              <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-xl">
                Community platforms. Mobile apps. TikTok Shop tools. Internal business apps. Membership portals. If you can describe what it needs to do, we can scope and build it. The category does not matter. The outcome does.
              </p>
            </motion.div>
            <motion.div variants={heroItemVariants} className="flex flex-wrap gap-4">
              <Button variant="primary" href="/about/start-a-project" className="!bg-[#C9A84C] !text-black font-semibold !px-7 !py-3.5 !rounded-lg hover:!bg-[#d4b85a] transition-all duration-200">Build My App</Button>
              <Button variant="secondary" href="/work" className="!border-white/20 !text-white font-medium !px-7 !py-3.5 !rounded-lg hover:!border-white/40 hover:!bg-white/[0.03] transition-all duration-200 group">See Live Examples <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-2xl bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
            <div className="absolute left-8 bottom-0 w-28 h-48 border-2 border-white/20 rounded-3xl bg-[#08080f] flex flex-col items-center pt-4 gap-2">
              <div className="h-1.5 w-3/4 bg-white/15 rounded-full" />
              <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
              <div className="h-1.5 w-2/3 bg-white/[0.08] rounded-full" />
              <div className="h-8 w-3/4 bg-[#C9A84C]/15 rounded-lg mt-2" />
            </div>
            <div className="absolute right-4 top-8 w-48 h-36 border-2 border-white/10 rounded-xl bg-[#08080f] flex flex-col p-3 gap-2">
              <div className="h-1.5 w-3/4 bg-white/15 rounded-full" />
              <div className="h-1.5 w-1/2 bg-white/[0.08] rounded-full" />
              <div className="h-12 w-full bg-white/5 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM WITH APPS BUILT FOR EVERYONE */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Every no-code app builder was designed for the most common use case. Yours is not common.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-5">
              Bubble, Glide, Webflow, Thunkable. The no-code ecosystem is genuinely impressive for what it can do. And for businesses in the early stages of validating an idea, these tools are the right starting point. Fast, affordable, and good enough to prove the concept.
            </p>
            <p className="text-white font-medium text-base md:text-lg leading-relaxed mb-5">
              But good enough to prove the concept is not the same as good enough to run the business.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-5">
              The ceiling shows up at different times for different apps. For a membership platform, it shows up when your access tier logic outgrows what the platform can enforce. For a mobile app, it shows up when you need device-level functionality the web wrapper cannot provide. For a TikTok Shop tool, it shows up when the native seller center cannot surface the data your operation needs to scale. For an internal business tool, it shows up when the spreadsheet workaround your team built has become a full-time job to maintain.
            </p>
            <div className="my-8 border-l-2 border-[#C9A84C] pl-5 py-1">
              <p className="text-white/80 italic text-xl leading-relaxed">If you can describe what it needs to do, we can scope and build it.</p>
            </div>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              That ceiling is the signal. Not that you chose the wrong starting point, but that your business has grown past it. A custom app does not have that ceiling because there is no predetermined model it has to conform to. The architecture is designed around your operation from the first session, not fitted to an existing platform's constraints after the fact.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="sticky top-32 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d18]">
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent" />
            <div className="p-6 pt-20 space-y-3">
              <div className="h-2 bg-white/[0.08] rounded-full w-3/4" />
              <div className="h-2 bg-white/[0.08] rounded-full w-1/2" />
              <div className="h-2 bg-white/[0.08] rounded-full w-2/3" />
              <div className="h-2 bg-white/[0.08] rounded-full w-1/3" />
              <div className="h-2 bg-white/[0.08] rounded-full w-3/5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILD */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Every type of app your business might need. Each one built around what your business actually does.
            </h2>
            <p className="text-white/65 text-lg mt-4 leading-relaxed max-w-3xl">
              There is no app category we default to and no type we avoid. The build starts with what your operation requires, not with what we happen to specialize in.
            </p>
          </motion.div>

          {/* A) Community and Membership Apps */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/[0.07] pt-12 pb-12 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Community and Membership Apps</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  Community and membership apps are among the most complex custom builds because they have to serve two audiences simultaneously: the members who live inside the platform and the operator who manages it. Generic tools like Kajabi, Circle, and Mighty Networks serve the most common version of a community. When your model is specific, your platform needs to be specific too.
                </p>
                <p className="text-white/70 leading-relaxed mb-5">
                  We build the full stack: the member-facing experience, the content delivery system, the access control layer, the community and engagement infrastructure, and the admin panel that lets you run all of it without developer involvement.
                </p>
                <ul className="space-y-2.5 mt-4">
                  {communityFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0 text-base leading-none">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-white/[0.06] text-sm text-white/45 italic">Proof: Commanding Flow is a full-stack membership app with course delivery, community channels, live calls, and Flo: an AI coach trained on the founder's own methodology. The owner updates Flo independently. No developers required after delivery.</p>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d18] relative">
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent" />
                <div className="p-6 pt-20 space-y-3">
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/4" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-1/2" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/3" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* B) Mobile Apps */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/[0.07] pt-12 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Apps</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  There is a meaningful difference between a mobile-responsive website and a native mobile app. A mobile-responsive website adapts its layout for a smaller screen. A native mobile app uses the device's hardware, stores data offline, sends push notifications, integrates with the camera and location services, and feels like it belongs on the phone because it was built for the phone.
                </p>
                <p className="text-white/70 leading-relaxed mb-5">
                  We build both native iOS and Android apps and cross-platform apps using React Native, depending on the scope, the budget, and what the app actually needs to do. The platform decision is made during the scoping session, not defaulted to without a conversation.
                </p>
                <ul className="space-y-2.5 mt-4">
                  {mobileFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0 text-base leading-none">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-white/[0.06] text-sm text-white/45 italic">Note: A web app opened on a phone is not a mobile app. If your users need to be notified, need to use the camera, need to work offline, or need an experience that feels native the moment they open it, you need a mobile app. That is what we build.</p>
              </div>
              <div className="bg-[#0d0d16] border border-white/[0.07] border-l-2 border-l-[#C9A84C] rounded-r-xl p-6">
                <p className="text-white/75 italic leading-relaxed">A real mobile app. Not a website opened on a phone.</p>
              </div>
            </div>
          </motion.div>

          {/* C) TikTok Shop Apps */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/[0.07] pt-12 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">TikTok Shop Apps</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  TikTok Shop is one of the fastest-growing commerce channels in the world. The native seller center gives you enough to get started. It does not give you what you need to operate at scale. Order management across high volume becomes manual and error-prone. Affiliate performance tracking lives across multiple screens and exports. Inventory sync between TikTok Shop and your other fulfillment channels does not happen automatically. Creator collaboration and campaign management has no proper infrastructure inside the platform.
                </p>
                <p className="text-white/70 leading-relaxed mb-5">
                  TikTok Shop apps are their own category because TikTok commerce has its own API ecosystem, its own data structures, and its own affiliate relationship model. A general dashboard does not account for how TikTok Shop actually works. A custom TikTok Shop app is built specifically for it.
                </p>
                <ul className="space-y-2.5 mt-4">
                  {tiktokFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0 text-base leading-none">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-white/[0.06] text-sm text-white/45 italic">Proof: We built a custom TikTok Shop app for Mamba, a high-volume operation that had outgrown the native seller center and needed purpose-built infrastructure to manage their commerce operation at scale.</p>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d18] relative">
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent" />
                <div className="p-6 pt-20 space-y-3">
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/3" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/4" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-1/2" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* D) Internal Business Tools and Operations Apps */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/[0.07] pt-12 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Internal Business Tools and Operations Apps</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  Not every app is customer-facing. Some of the most valuable software a business can have is the internal tool that makes the team 40% more effective: the custom CRM built around an unusual sales process, the project management system that reflects how the team actually works, the operations dashboard that replaces six spreadsheets, the onboarding app that turns a manual checklist into an automated workflow.
                </p>
                <p className="text-white/70 leading-relaxed mb-5">
                  These tools rarely fit inside any off-the-shelf product because they are too specific to your operation. But they are often the highest-return software investment a business can make because the team uses them every single day.
                </p>
                <ul className="space-y-2.5 mt-4">
                  {internalFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0 text-base leading-none">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-white/[0.06] text-sm text-white/45 italic">Proof: VAHubPro replaced four separate tools including spreadsheets, Notion, Slack, and a CRM with one unified rev ops system. The client went from manual processes to automated workflows in under three weeks.</p>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d18] relative">
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent" />
                <div className="p-6 pt-20 space-y-3">
                  <div className="h-2 bg-white/[0.08] rounded-full w-1/2" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/4" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/3" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-1/3" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/5" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* E) Any App You Can Describe */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/[0.07] pt-12 pb-12 border-b border-b-white/[0.07]">
            <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Any App You Can Describe</h3>
                <p className="text-white/70 leading-relaxed mb-5">
                  The four app types above are the ones we build most often. They are not the only ones we build.
                </p>
                <p className="text-white/70 leading-relaxed mb-5">
                  Simply Scalable started because Phil and Oma kept thinking "it would be great if" and building the thing when no existing tool could do it. That instinct is still the engine behind every project. If you have a specific problem that a custom app could solve and it does not fit cleanly into any category above, that is not a reason to stop the conversation. That is the reason to start it.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Bring the problem. We will figure out the build.
                </p>
              </div>
              <div className="bg-[#0d0d16] border border-white/[0.07] border-l-2 border-l-[#C9A84C] rounded-r-xl p-6">
                <p className="text-white/75 italic leading-relaxed text-xl">"Bring the problem. We will figure out the build."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: USE CASES */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Six operator profiles that consistently outgrow the tools they started with.
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardContainerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.num}
                variants={cardVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-[#0d0d16] border border-white/[0.07] rounded-xl p-6 transition-all duration-300"
              >
                <div className="text-[#C9A84C] font-mono text-xs tracking-wider mb-3">{uc.num}</div>
                <h3 className="text-white font-semibold text-base mb-2">{uc.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: TWO LIVE BUILDS */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Two apps. Two completely different problems. Both built from scratch.
            </h2>
          </motion.div>

          <div className="mt-12 space-y-10">
            {/* Commanding Flow */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="bg-[#0d0d16] border border-white/[0.07] rounded-2xl overflow-hidden">
              <div className="w-full aspect-[16/7] bg-[#050508] border-b border-white/[0.07] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent" />
                <div className="p-8 pt-20 space-y-3">
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/4" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-1/2" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/3" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/5" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/5" />
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">Commanding Flow: Membership and Community App</h3>
                <p className="text-white/70 leading-relaxed mb-5"><strong className="text-white font-semibold">The problem:</strong> A founder needed a full membership platform with courses, live community calls, organized discussion channels, and a way to deliver her coaching methodology to members on demand without being present for every conversation.</p>
                <p className="text-white/70 leading-relaxed mb-5"><strong className="text-white font-semibold">What we built:</strong> A complete custom membership app with tiered access controls, a live call calendar with automated reminders, a structured course library with individual progress tracking, community channels segmented by cohort and topic, and Flo: an AI coach trained on the founder's content. The founder updates Flo independently. No developer involvement required after delivery.</p>
                <p className="text-white/70 leading-relaxed mb-6"><strong className="text-white font-semibold">The ownership principle in practice:</strong> We built Commanding Flow specifically so the owner would never have to come back to us for routine updates. The AI is hers to manage. The platform is hers to grow. That is not an accident. That is the standard we build to.</p>
                <div className="pt-6 border-t border-white/[0.07] flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[#C9A84C] text-sm italic">Key result: 100% owner-operated. Zero ongoing dependency on the development team.</p>
                </div>
              </div>
            </motion.div>

            {/* Mamba */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="bg-[#0d0d16] border border-white/[0.07] rounded-2xl overflow-hidden">
              <div className="w-full aspect-[16/7] bg-[#050508] border-b border-white/[0.07] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#C9A84C]/[0.08] to-transparent" />
                <div className="p-8 pt-20 space-y-3">
                  <div className="h-2 bg-white/[0.08] rounded-full w-2/3" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/4" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-1/2" />
                  <div className="h-2 bg-white/[0.08] rounded-full w-3/5" />
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">Mamba: TikTok Shop App</h3>
                <p className="text-white/70 leading-relaxed mb-5"><strong className="text-white font-semibold">The problem:</strong> A high-volume TikTok Shop operation needed custom infrastructure that the native seller center could not provide. Order management, affiliate performance tracking, and inventory visibility across fulfillment channels all required a purpose-built solution.</p>
                <p className="text-white/70 leading-relaxed mb-6"><strong className="text-white font-semibold">What we built:</strong> A custom TikTok Shop application integrating directly with the TikTok Shop API. Real-time order management, affiliate and creator performance dashboards, and inventory sync across fulfillment systems. The operation now runs on data and automation the seller center never could have delivered.</p>
                <div className="pt-6 border-t border-white/[0.07] flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[#C9A84C] text-sm italic">Key result: Purpose-built infrastructure replacing manual processes at scale.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button variant="primary" href="/about/start-a-project" className="!bg-[#C9A84C] !text-black font-semibold !px-8 !py-4 !rounded-lg hover:!bg-[#d4b85a] transition-all duration-200">Book a Discovery Call to Talk About Your App</Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE BUILD YOUR APP */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              From the idea to a live, working app. Here is how we get there.
            </h2>
          </motion.div>

          <div className="relative mt-12 max-w-3xl mx-auto">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/60 via-[#C9A84C]/20 to-transparent" />
            <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {[
                { num: "01", title: "App Architecture Session", desc: "Before any design or development begins, we map the full scope of the app. What it needs to do, who uses it, what data it manages, what systems it connects to, and what the admin and management layer looks like. This session produces the blueprint the entire build is executed against." },
                { num: "02", title: "UX Design and User Journey Mapping", desc: "Oma designs every screen: the onboarding flow, the core app experience, the settings and profile systems, the admin panel, and any notification or email touchpoints. Every screen is approved before development starts. Revisions happen here, not after launch." },
                { num: "03", title: "Architecture and Development", desc: "Phil builds the backend: the database schema, the API layer, the integration connections, the authentication system, and any AI or automation components included in the scope. Development is iterative. You see working builds early, not just at the end." },
                { num: "04", title: "Testing Across Devices and Use Cases", desc: "The app is tested across every device type, every user role, and every core workflow before it goes live. For mobile apps, this includes submission testing for App Store and Google Play requirements. Nothing ships until it works the way it was designed to work." },
                { num: "05", title: "Launch, Submission, and Handover", desc: "For mobile apps, we handle the app store submission process. For all apps, launch is planned, not rushed. At delivery you receive full documentation, a working admin panel, and everything you need to operate the app independently from day one." },
              ].map((phase) => (
                <motion.div key={phase.num} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }} className="relative pl-16 pb-12 last:pb-0">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#C9A84C] text-black text-sm font-bold flex items-center justify-center z-10">{phase.num}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{phase.title}</h3>
                  <p className="text-white/65 leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT YOU OWN */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              When we deliver your app, it is yours. The code, the data, the design, all of it.
            </h2>
          </motion.div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
            No lock-in. No black box. No recurring fee owed to Simply Scalable for access to something we already built for you. The codebase is yours to host anywhere, hand to any developer, modify at any time, or build on top of indefinitely. If your app includes an AI component, the training data, the configuration, and the persona are yours to manage and update without our involvement.
          </p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardContainerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <motion.div variants={cardVariants} whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} transition={{ duration: 0.2, ease: 'easeOut' }} className="bg-[#0d0d16] border border-white/[0.07] rounded-xl p-7 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">Your codebase</h3>
              <p className="text-white/60 text-sm leading-relaxed">Full source code delivered with complete documentation. Host it on your infrastructure. Modify it with any developer you choose.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} transition={{ duration: 0.2, ease: 'easeOut' }} className="bg-[#0d0d16] border border-white/[0.07] rounded-xl p-7 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">Your data</h3>
              <p className="text-white/60 text-sm leading-relaxed">Every user record, every piece of content, every transaction sits on your infrastructure. No data lives on Simply Scalable servers after delivery.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} transition={{ duration: 0.2, ease: 'easeOut' }} className="bg-[#0d0d16] border border-white/[0.07] rounded-xl p-7 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">Your AI, if included</h3>
              <p className="text-white/60 text-sm leading-relaxed">Any AI feature in your app is trained on your content, reflects your methodology, and is yours to update without developer involvement.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: BOTTOM CTA */}
      <section className="py-24 lg:py-[100px] px-6" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%), #08080f' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tell us about the app you have been thinking about building.
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Nine questions. Twenty-four hours. A detailed quote with scope, timeline, and a real number in your inbox.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="primary" href="/about/start-a-project" className="!bg-[#C9A84C] !text-black font-semibold !px-8 !py-4 !rounded-lg hover:!bg-[#d4b85a] transition-all">Get a Quote</Button>
              <Button variant="secondary" href="/about/start-a-project" className="!border-white/20 !text-white font-medium !px-8 !py-4 !rounded-lg hover:!border-white/40 hover:!bg-white/[0.03] transition-all">Book a Discovery Call</Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
              <span className="flex items-center gap-2"><span className="text-[#C9A84C]">{'✓'}</span> Response within 24 hours</span>
              <span className="flex items-center gap-2"><span className="text-[#C9A84C]">{'✓'}</span> Full ownership at delivery</span>
              <span className="flex items-center gap-2"><span className="text-[#C9A84C]">{'✓'}</span> Built for your use case. Not for the average one.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-center">
              Frequently Asked Questions: Apps
            </h2>
          </motion.div>
          <FaqAccordion />
        </div>
      </section>
    </PageTransition>
  );
}
