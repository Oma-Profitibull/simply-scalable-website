import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, ClipboardList, Clock, Shield, Target, Code, Database, Settings, Plus, X } from 'lucide-react';
import { PageTransition } from '../../components/layout/PageTransition';

const patientFeatures = [
  "Custom patient registration and digital intake with e-signature",
  "Appointment scheduling with provider-specific availability and real-time calendar sync",
  "Secure two-way messaging between patients and the care team with audit logging",
  "EHR integration (DrChrono and HL7/FHIR-compatible platforms)",
  "Lab result delivery, care plan visibility, and progress tracking inside the portal",
  "Wellness data dashboards where patients track their own metrics over time",
  "Automated appointment reminders, post-visit follow-up, and re-engagement sequences",
  "CRM integration so patient activity feeds into marketing and follow-up workflows",
  "HIPAA-conscious architecture including encrypted data, role-based access, and audit trails",
  "Branded patient-facing design built to your practice identity",
];

const clientFeatures = [
  "Branded client login with individual account management",
  "Project and task status visibility configured to your workflow",
  "Deliverable upload, review, and approval within the portal",
  "Secure document storage and version management",
  "Client messaging with team routing and response tracking",
  "Invoice and payment management integrated with your billing system",
  "Onboarding checklist and milestone tracking visible to the client",
  "Automated notifications when deliverables are ready or status changes",
  "Role-based access for client team members with different permission levels",
  "Admin view showing all client accounts, activity, and outstanding items in one place",
];

const partnerFeatures = [
  "Partner registration and onboarding workflow",
  "Deal registration and opportunity tracking for reseller networks",
  "Revenue share and commission reporting by partner",
  "Co-branded marketing asset library and content management",
  "Training and certification delivery for partner enablement",
  "Vendor contract management and document storage",
  "Order submission and fulfillment tracking for vendor relationships",
  "API access and integration documentation for technical partners",
  "Performance dashboards showing each partner their own metrics",
  "Admin view with full partner portfolio visibility and management controls",
];

const employeeFeatures = [
  "Employee directory and org chart",
  "Onboarding portal for new hires with checklist and document submission",
  "Policy and procedure library with version control and acknowledgement tracking",
  "Training and certification delivery for internal teams",
  "Time-off request and shift management integration",
  "HR form management with e-signature and routing",
  "Internal announcements and communication hub",
  "Benefits information and resource library",
  "Performance review workflow and feedback management",
  "Role-based access so each employee sees what is relevant to their position",
];

const sharedFeatures = [
  "Secure login with multi-factor authentication options",
  "Role-based access controls defining exactly what each user type can see and do",
  "Encrypted data transmission and storage",
  "Full audit logging on all user actions within the portal",
  "Mobile-responsive design across all screen sizes",
  "Custom domain setup (portal.yourbusiness.com)",
  "Admin panel for managing users, content, and portal configuration",
  "Integration layer connecting the portal to your existing systems",
  "Complete documentation delivered at handover",
];

const useCases = [
  {
    num: "01",
    title: "The Wellness Practice Running Five Tools Simultaneously",
    desc: "A functional medicine clinic or luxury wellness center managing scheduling, patient records, intake forms, secure messaging, and marketing through five separate platforms. Staff manually reconcile data between all of them. Patients navigate all of them. A custom patient portal consolidates everything into one experience and eliminates the manual work entirely.",
  },
  {
    num: "02",
    title: "The Agency Whose Clients Are Emailing for Updates",
    desc: "A growing digital agency with fifteen to fifty active clients. Every client relationship runs through a mix of email, Slack, shared folders, and project management tools the client has to be onboarded into. A client portal gives every client one login, one dashboard, and one place to see their project, their deliverables, and their next steps without sending a single email to ask.",
  },
  {
    num: "03",
    title: "The SaaS Company With a Customer Success Problem",
    desc: "A SaaS business whose customer success team is managing onboarding, renewals, feature adoption, and escalations through a CRM that was never designed for customer-facing interaction. A custom customer portal gives clients visibility into their own account, their usage, their upcoming milestones, and their support history without routing everything through a CS rep.",
  },
  {
    num: "04",
    title: "The Professional Services Firm Managing Sensitive Documents",
    desc: "A law firm, accounting firm, or financial advisory with clients who need secure access to sensitive documents, case status, and confidential communications. Generic file-sharing tools do not meet the security requirements. A custom portal provides the access controls, audit logging, and encrypted document management the relationship requires.",
  },
  {
    num: "05",
    title: "The Brand With a Dealer or Reseller Network",
    desc: "A manufacturer or brand with a network of dealers, resellers, or distributors who need access to pricing, inventory, marketing assets, and order management. Managing this through email and spreadsheets creates errors and delays. A partner portal gives every partner their own dashboard with the access and tools they need to operate without involving your internal team in every transaction.",
  },
  {
    num: "06",
    title: "The Membership Business That Needs More Than an App",
    desc: "A professional association, trade organization, or industry group whose members need a secure destination for resources, event management, certification tracking, and peer communication. The portal is not a community app. It is a secure, credentialed environment where members access what their membership entitles them to.",
  },
];


const faqItems = [
  {
    q: "What is the difference between a portal and a regular website?",
    a: "A website is public-facing and accessible to anyone. A portal is a secure, authenticated environment where specific users log in to access information and tools that belong to them. A portal has user accounts, role-based access controls, and a private data layer. It is the difference between a storefront and a back office that only your clients, patients, partners, or employees can enter.",
  },
  {
    q: "Can you build a portal that connects to the systems we already use?",
    a: "Yes. Integration with your existing systems is almost always part of the scope. We have built portals that connect to EHR platforms, CRM systems, payment processors, calendar tools, document storage layers, and custom databases. The integration architecture is designed during the scoping session before any development begins. If your current system has an available API, integration is possible.",
  },
  {
    q: "We are a medical practice. How do you handle HIPAA requirements?",
    a: "We build patient portals with HIPAA compliance requirements embedded into the architecture from the start: encrypted data at rest and in transit, role-based access controls limiting who can see patient information, and audit logging on all interactions with protected health information. We are not a HIPAA compliance certification firm and do not provide legal compliance documentation. We build the technical architecture that supports your compliance posture. We recommend working with a HIPAA compliance consultant to ensure your operational policies align with the technical implementation.",
  },
  {
    q: "How many different user types can the portal support?",
    a: "As many as your business requires. Role-based access means the portal can support an unlimited number of distinct user types, each with their own view, their own permissions, and their own data. A medical practice might have patients, providers, front desk staff, and administrators all using the same portal with completely different experiences. The access rules are defined during the scoping session and enforced at the architecture level.",
  },
  {
    q: "Can you migrate our existing users and data to the new portal?",
    a: "Yes. User migration and data migration are part of the build scope for clients moving from an existing system. This includes mapping your current data structure to the new portal's data model, migrating user records and historical data, and a launch plan that ensures existing users can access the new portal without disruption. The migration is planned, not improvised.",
  },
  {
    q: "How long does it take to build a custom portal?",
    a: "Most portal builds take between six and fourteen weeks from a signed agreement to a live, tested system. The range depends on the number of user types, the complexity of the integrations, whether data migration is required, and the number of features included. A focused client portal for a service business might take six to eight weeks. A full patient portal with EHR integration and five connected systems typically takes ten to fourteen weeks. The exact timeline is defined in the project brief before any work begins.",
  },
];

const sharedScrollRevealVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' as const },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)' as const,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
  }
};

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-dashed border-white/10 pt-8 mb-12">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[09] FAQ</p>
            <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ QUESTIONS</p>
          </div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sharedScrollRevealVariants} className="mb-12">
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

export default function PortalsPage() {
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
      <section className="relative min-h-[90vh] bg-[#050508] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
            <motion.div variants={heroContainerVariants} initial="hidden" animate="visible">
              <motion.div variants={heroItemVariants}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6">
                  One destination for everything your users need. Built around how they actually move through your business.
                </h1>
              </motion.div>
              <motion.div variants={heroItemVariants}>
                <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-10">
                  Patient portals. Client portals. Partner portals. Vendor portals. Employee portals. Whatever your users need access to, they should be able to find it in one secure, branded place. Not across five logins, three tools, and an email chain.
                </p>
              </motion.div>
              <motion.div variants={heroItemVariants} className="flex flex-wrap gap-4">
                <a href="/about/start-a-project" className="rounded-full bg-[#C9A84C] text-[#050508] font-semibold px-7 py-3 text-sm hover:bg-[#d4b55c] transition-colors">Build my portal</a>
                <a href="/work" className="rounded-full border border-[#C9A84C]/50 text-[#C9A84C] font-medium px-7 py-3 text-sm hover:border-[#C9A84C] transition-colors group">See a live example <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></a>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/10 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Portal Preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE REAL COST OF NO PORTAL */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[02] THE REAL COST</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ HIDDEN PROBLEMS</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <div className="space-y-5">
                <p className="text-base text-white/60 leading-relaxed">
                  Every business has a version of this problem. The experience your users have of interacting with you is fragmented across tools that were never designed to work together. They schedule in one place, message you in another, access their documents somewhere else, fill out forms through a separate link, and check their status by emailing your team directly.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  Each one of those handoffs is a friction point. Each friction point is a place where trust erodes, where mistakes happen, where information falls through the gap between systems. For a medical practice, that gap means clinical data that does not reach the CRM, intake forms that have to be re-entered manually, and a patient experience that does not match the quality of care being delivered. For an agency, that gap means clients chasing updates across email threads and Slack messages that should never have been necessary.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  The fix is not a better scheduling tool or a new messaging app. The fix is a portal. A single, secure, branded destination where your users have everything they need and your team manages everything from one place.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  Generic portals exist. They cover the most common use case for the widest possible audience. If your users and your workflows fit that model, a generic portal is the right call. When they do not, a custom portal is the only option that actually works.
                </p>
              </div>
              <div className="mt-10 py-6 border-l-2 border-[#C9A84C] pl-6">
                <p className="text-xl md:text-2xl text-white/90 leading-[1.3] italic font-light">
                  "Each friction point is a place where trust erodes."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILD */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[03] WHAT WE BUILD</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ PORTAL TYPES</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              <span className="text-white">Every type of portal your business might need.</span>{' '}
              <span className="text-white">Each one built around your users and your workflows.</span>
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed max-w-3xl">
              The portal category is broad by design. The architecture we build for a medical practice is different from what we build for a digital agency, which is different from what we build for a B2B operation with a partner network. What stays consistent is the approach: one secure destination, built around how your specific users actually move through your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* A) Patient and Medical Portals - ODD: image RIGHT */}
      <section className="bg-[#050508] pb-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">PATIENT & MEDICAL PORTALS</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Patient and Medical Portals</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The patient experience your practice deserves, not the one a third-party tool approximates.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Medical and wellness practices run on complexity. Clinical records live in the EHR. Scheduling lives in a calendar tool. Patient communication happens through a separate messaging app. Intake forms are sent via email and returned as PDFs. Marketing runs through a CRM that has no visibility into what patients have actually done inside the practice. Each tool does its job in isolation. None of them share data. Staff spend significant time reconciling the gaps between them.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  A custom patient portal replaces all of that with one HIPAA-conscious experience. Every patient interaction, from initial registration through ongoing care, happens inside a single branded destination. Clinical data flows between systems automatically. Staff manage everything from one admin view. Patients stop navigating your tools and start experiencing your practice.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {patientFeatures.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-[#C9A84C] bg-[#C9A84C]/5 px-4 py-3 rounded-r-lg">
                <p className="text-sm text-white/70 leading-relaxed">
                  <span className="text-[#C9A84C] font-medium">Proof:</span> GEM Science Patient Portal replaced five disconnected tools with one HIPAA-conscious experience fully integrated with DrChrono EHR. 871 active patients were onboarded at launch. Zero data moves manually between clinical and marketing systems.
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Patient Portal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B) Client Portals - EVEN: image LEFT */}
      <section className="bg-[#08080f] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <ClipboardList className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Client Portal</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-1 lg:order-2">
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">CLIENT & AGENCY PORTALS</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Client Portals for Agencies and Service Businesses</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The one place your clients go instead of emailing you for an update.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Agencies and service businesses have a client communication problem that gets worse as they grow. Early on, email and Slack work well enough. As the client roster grows and projects multiply, the cost of fragmented communication becomes real: update requests that interrupt the team, deliverables sent across three different channels, approvals that sit in an inbox nobody checks, and a client experience that does not reflect the quality of the work being done.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  A custom client portal gives every client one login and one destination. They see their project status, their deliverables, their invoices, their communications, and their next steps without emailing anyone. Your team spends less time on status updates and more time on the work.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {clientFeatures.map((item, i) => (
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

      {/* C) Partner and Vendor Portals - ODD: image RIGHT */}
      <section className="bg-[#050508] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">PARTNER & VENDOR PORTALS</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Partner and Vendor Portals</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The infrastructure that makes complex business relationships manageable at scale.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Businesses with partner networks, reseller relationships, affiliate programs, or vendor ecosystems face a specific challenge: how to give external parties the access and visibility they need without giving them access to everything. A partner portal solves this at the architecture level. Partners see what is relevant to them, submit what you need from them, and track performance without emailing your internal team for reports.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {partnerFeatures.map((item, i) => (
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
                    <Target className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Partner Portal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* D) Employee and Internal Portals - EVEN: image LEFT */}
      <section className="bg-[#08080f] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/3] flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
                <div className="text-center px-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-white/30 text-sm font-mono">Employee Portal</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="order-1 lg:order-2">
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">EMPLOYEE & INTERNAL PORTALS</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Employee and Internal Portals</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">The central hub your team actually uses instead of the intranet nobody visits.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Internal portals are the category most often underestimated. A well-built employee portal is not a company intranet with a company logo on top. It is the operational hub your team goes to for everything: company policies, training materials, HR forms, shift management, internal announcements, benefits information, and the tools they use every day. Built well, it reduces the volume of internal questions your management team fields and gives every employee one place to find what they need.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {employeeFeatures.map((item, i) => (
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

      {/* E) The Architecture Every Portal Shares - ODD: image RIGHT */}
      <section className="bg-[#050508] py-20 px-6">
        <div className="max-w-7xl mx-auto border-t border-dashed border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <p className="text-xs font-mono tracking-[0.15em] text-[#C9A84C] uppercase mb-4">SHARED ARCHITECTURE</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">The Architecture Every Portal Shares</h3>
              <p className="text-sm text-[#C9A84C]/80 italic mb-6">Regardless of the portal type, the technical foundation is consistent.</p>
              <div className="space-y-4">
                <p className="text-base text-white/60 leading-relaxed">
                  Every portal we build is constructed on the same architectural principles: secure authentication, role-based access controls, encrypted data at rest and in transit, and a clean separation between what different user types can see and do. These are not features we add to a portal. They are the foundation we build from.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {sharedFeatures.map((item, i) => (
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
                <div className="absolute inset-4 border border-dashed border-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-12 h-12 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-3">
                      <Database className="w-5 h-5 text-[#C9A84C]" />
                    </div>
                    <p className="text-white/30 text-sm font-mono">Architecture Diagram</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: USE CASES */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[04] USE CASES</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ WHO THIS IS FOR</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              <span className="text-white">Six business types that consistently reach the point where a portal is the only answer.</span>
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed max-w-2xl">
              If you recognize your situation here, we can build what you need.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardContainerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.num}
                variants={cardVariants}
                whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group cursor-pointer bg-[#0d0d18] border border-white/[0.08] rounded-xl p-8 transition-all duration-300"
              >
                <p className="text-[#C9A84C] text-xs font-mono tracking-[0.15em] mb-3">{uc.num}</p>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">{uc.title}</h3>
                <p className="text-white/60 text-base leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: GEM SCIENCE CASE STUDY */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[05] GEM SCIENCE CASE STUDY</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ LIVE PROOF</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              <span className="text-white">GEM Science: five tools replaced, one portal delivered,</span>{' '}
              <span className="text-white">871 patients onboarded at launch.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
            <div className="w-full aspect-[16/7] rounded-2xl bg-[#0d0d18] border border-white/[0.08] flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <p className="text-white/30 text-sm font-mono">GEM Science Portal</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16 mt-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">What the practice was running</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  Five disconnected tools. A scheduling system that did not sync with the EHR. An EHR that required manual data entry from intake forms completed in a separate tool. A CRM for follow-up and marketing that had no visibility into actual patient activity. A form tool that delivered PDFs by email. A separate messaging app for patient communication. Staff reconciled all of it manually. Every day.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">What we built</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  A single HIPAA-conscious patient portal that replaced all five. The portal integrates directly with DrChrono EHR so patient records, appointment data, and clinical notes are always in sync. Patients register, complete intake, schedule appointments, message their care team, track their wellness progress, and receive practice communications all from one branded experience. The CRM receives patient data automatically. No manual export. No copy-paste. No reconciliation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3">Why this matters beyond GEM Science</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  GEM Science was not a disorganized practice. They were a well-run practice using the best tools available to them individually. The problem was architectural. Five good tools still create five sets of gaps between them. The portal eliminated those gaps at the level where they actually exist: the data layer, not the user interface.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="space-y-4">
              {[
                { number: "871", label: "Active patients onboarded at launch" },
                { number: "5→1", label: "Disconnected tools replaced by one system" },
                { number: "0", label: "Manual data transfers between clinical and marketing" },
                { number: "24/7", label: "Bi-directional DrChrono EHR integration running" },
              ].map((stat, i) => (
                <div key={i} className="border border-white/[0.08] rounded-xl p-5">
                  <p className="text-3xl font-bold text-[#C9A84C] mb-1">{stat.number}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mt-16 border-l-4 border-[#C9A84C] pl-8 py-2">
            <p className="text-2xl text-white/80 italic leading-[1.4] font-light">
              "The app is amazing. It links our DrChrono EHR with our CRM, but it also acts as a buffer between our marketing and patient communication. Their team is very easy to work with."
            </p>
            <p className="text-sm text-white/40 mt-4">- Dr. B., GEM Science</p>
          </motion.div>

          <div className="mt-12">
            <a href="/about/start-a-project" className="inline-block rounded-full bg-[#C9A84C] text-[#050508] font-semibold px-7 py-3 text-sm hover:bg-[#d4b55c] transition-colors">Book a Discovery Call to Talk About Your Portal</a>
          </div>
        </div>
      </section>

      {/* SECTION 6: SECURITY AND COMPLIANCE */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[06] SECURITY & COMPLIANCE</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ TRUST ARCHITECTURE</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white mb-8">
                <span className="text-white">Security is not a feature we add at the end.</span>{' '}
                <span className="text-white">It is a design constraint we start with.</span>
              </h2>
              <div className="space-y-5">
                <p className="text-base text-white/60 leading-relaxed">
                  Every portal we build handles data that belongs to the people who trust your business with it. Whether that is patient health information, client project files, partner revenue data, or employee records, the architecture we build treats that data with the seriousness it deserves.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  For medical and healthcare portals, this means HIPAA-conscious architecture embedded from the first line of the project brief: encrypted data at rest and in transit, role-based access controls, and audit logging on all interactions with protected health information.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  For all portal types, it means secure authentication, clearly defined access rules, and a data model that keeps each user's information separate and protected.
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  We are not a compliance certification firm. We do not provide legal compliance documentation. What we provide is technical architecture that treats security and data protection as foundational requirements, not afterthoughts.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="space-y-5">
              <div className="bg-[#0d0d18] border border-white/[0.08] rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-4">
                  <Lock className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Encrypted by default</h3>
                <p className="text-white/60 text-sm leading-relaxed">All data is encrypted in the database and during transmission. No plain-text records. No unencrypted communication channels between the portal and connected systems.</p>
              </div>
              <div className="bg-[#0d0d18] border border-white/[0.08] rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Access is earned, not assumed</h3>
                <p className="text-white/60 text-sm leading-relaxed">Every user type sees exactly what their role requires and nothing more. Access controls are defined at the architecture level and enforced by the system, not managed manually.</p>
              </div>
              <div className="bg-[#0d0d18] border border-white/[0.08] rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-4">
                  <ClipboardList className="w-4 h-4 text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Every action is logged</h3>
                <p className="text-white/60 text-sm leading-relaxed">All user interactions with sensitive data are logged with a timestamp, a user identifier, and the action taken. This is the audit trail compliance reviews require and incident response depends on.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW WE BUILD YOUR PORTAL */}
      <section className="bg-[#050508] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[07] HOW WE BUILD</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ THE PROCESS</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              <span className="text-white">From your current tool stack to one unified portal.</span>{' '}
              <span className="text-white">Here is exactly how we get there.</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/40 to-transparent" />
            <div className="space-y-0">
              {[
                { num: "01", title: "User Journey and Workflow Mapping", desc: "Before any design or development begins, we map the complete experience from the user's perspective and the complete workflow from your team's perspective. What does a user need to do from the moment they are given access to the portal? What does your team need to manage? What systems does the portal need to connect to? This session produces the architecture brief the entire build is executed against." },
                { num: "02", title: "Integration Architecture", desc: "Phil identifies every system the portal needs to connect to: the CRM, the EHR, the payment processor, the calendar system, the document storage layer. The integration architecture is designed before development begins so data flows correctly from day one, not retrofitted after the portal exists." },
                { num: "03", title: "UX Design and Screen-by-Screen Approval", desc: "Oma designs every user-facing and admin-facing screen. Every flow the user touches and every view the admin manages is designed, presented, and approved before development starts. Revisions happen at this phase. Not after the portal is built." },
                { num: "04", title: "Development and Integration", desc: "Phil builds the portal and connects every integration. Development is iterative with regular check-ins. You see a working portal during development, not only at delivery." },
                { num: "05", title: "Testing, Migration, and Launch Planning", desc: "The portal is tested across user roles, device types, and all core workflows before go-live. If you are migrating users from an existing system, the migration is planned and executed as part of the launch. The cutover is managed, not improvised." },
                { num: "06", title: "Handover, Documentation, and Admin Training", desc: "At delivery, your team receives complete documentation covering every admin function, every integration configuration, and every workflow the portal manages. A handover session walks your team through operating the portal from day one." },
              ].map((phase, i) => (
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

      {/* SECTION 8: WHAT YOU OWN */}
      <section className="bg-[#08080f] py-20 md:py-24 lg:py-[80px] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-dashed border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono tracking-[0.2em] text-[#C9A84C] uppercase">[08] WHAT YOU OWN</p>
              <p className="text-xs font-mono tracking-[0.1em] text-white/25 uppercase">/ FULL OWNERSHIP</p>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scrollRevealVariants} className="mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white max-w-4xl">
              <span className="text-white">When we deliver your portal, it belongs to your business.</span>{' '}
              <span className="text-white">Every part of it.</span>
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed max-w-3xl">
              The codebase, the database, the integration configurations, the user data, the document library, the admin panel, and the documentation. All of it is yours at delivery. You can host it on your own infrastructure, hand it to another developer at any time, or continue working with us to expand it. There is no subscription owed to Simply Scalable for access to a portal we already built and delivered. You own what you paid for.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardContainerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "Your code, your portal", desc: "Full source code delivered with documentation. Host it anywhere. No dependency on our infrastructure after delivery." },
              { icon: Database, title: "Your user data", desc: "Every record, every document, every interaction log lives on your infrastructure. No user data is stored on Simply Scalable servers." },
              { icon: Settings, title: "Your integrations", desc: "Every API connection and integration configuration is documented and transferred at delivery. You control every data flow between the portal and your connected systems." },
            ].map((card, i) => (
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
      <section className="relative bg-[#08080f] py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
              Tell us about the experience you want to give your users. We will build the portal that delivers it.
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed">
              Nine questions. Twenty-four hours. A detailed quote with scope, integration plan, and a real number.
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
              <Shield className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-white/50">Security-first architecture on every build</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Target className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-white/50">Full ownership at delivery. No lock-in.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <FAQSection />
    </PageTransition>
  );
}
