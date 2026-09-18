import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Heart,
  ShoppingCart,
  Handshake,
  UserCheck,
  BarChart3,
  Bot,
  LayoutDashboard,
  TrendingUp,
  ClipboardList,
  Lock,
  CheckCircle,
  MessageSquare,
} from 'lucide-react';

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              We have built for nine industries. The tenth might be yours.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-xl">
              Simply Scalable does not specialize in one vertical. The problems we solve, disconnected tools, outgrown platforms, manual workflows, and missing software, show up in every industry. What changes is the specific system. What stays consistent is the standard it is built to.
            </p>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="grid grid-cols-3 gap-6 relative z-10">
                  {[
                    { Icon: Heart, label: 'Healthcare' },
                    { Icon: ShoppingCart, label: 'Ecommerce' },
                    { Icon: Handshake, label: 'Recruiting' },
                    { Icon: UserCheck, label: 'Coaching' },
                    { Icon: BarChart3, label: 'Data' },
                    { Icon: Bot, label: 'AI' },
                    { Icon: LayoutDashboard, label: 'Agency' },
                    { Icon: TrendingUp, label: 'Sales' },
                    { Icon: ClipboardList, label: 'Operations' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                        <item.Icon className="w-5 h-5 text-[#D4AF37]/70" />
                      </div>
                      <span className="text-white/40 text-[10px] font-medium uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Building for healthcare is different from building for ecommerce. We know both.
            </h2>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 space-y-6">
            <p className="text-white/70 leading-relaxed">
              Every industry has its own compliance requirements, its own data sensitivities, its own workflow patterns, and its own set of tools that almost do the job but not quite. A patient portal for a wellness practice requires HIPAA-conscious architecture that an ecommerce dashboard does not. A recruiting platform needs a candidate matching logic that a sales CRM was never designed to produce. A TikTok Shop tool needs API access to data structures that no general analytics platform accounts for.
            </p>
            <p className="text-white/70 leading-relaxed">
              Industry experience does not mean Simply Scalable only builds in one or two verticals. It means the team has built production systems in enough different contexts to understand what each one specifically requires before scoping begins. No two builds are the same. But the patterns within an industry repeat, and recognizing them from the first session is the difference between a build that fits from day one and one that requires expensive revisions because the architecture did not account for an industry-specific constraint discovered late.
            </p>
            <p className="text-white/70 leading-relaxed">
              Below are the industries Simply Scalable has built for. If yours is not listed, describe your problem anyway. The constraint that does not fit a category is often the most interesting one to scope.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY 01: HEALTHCARE AND WELLNESS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Software that reflects the quality of the care behind it.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Healthcare and wellness businesses operate at the intersection of clinical precision and patient experience. The software has to serve both. A HIPAA-conscious patient portal that handles EHR integration, appointment scheduling, secure messaging, intake forms, and wellness tracking is a complex technical system. It also has to feel effortless to a patient logging in from their phone between appointments.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable has built for medical practices, functional medicine clinics, wellness centers, and health-focused communities. The GEM Science Patient Portal replaced five disconnected tools with one integrated experience and onboarded 871 active patients at launch. A medical community platform built for another client now generates more repeat orders for monthly wellness programs than the practice's email campaigns ever did.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'HIPAA-conscious patient portals with EHR integration',
                    'Appointment scheduling and care plan management systems',
                    'Secure patient-provider messaging platforms',
                    'Wellness progress tracking and biometric logging tools',
                    'Medical membership and subscription practice platforms',
                    'Healthcare community platforms for patient education and engagement',
                    'DrChrono and HL7/FHIR-compatible integration architecture',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-3">The compliance consideration</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every healthcare and wellness build we deliver uses HIPAA-conscious architecture as a design constraint from the first session: encrypted data at rest and in transit, role-based access controls, and audit logging on all interactions with protected health information. We are not a HIPAA compliance certifier. We are a technical team that treats compliance requirements as foundational, not optional.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> GEM Science Patient Portal, Medical Community Platform
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project in Healthcare
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 02: ECOMMERCE AND RETAIL */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The infrastructure that makes high-volume ecommerce manageable.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Ecommerce at scale generates more data than any native platform analytics layer was designed to handle coherently. Amazon, TikTok Shop, Shopify, and Meta each give you excellent visibility into their own channel. None of them give you the cross-channel view that tells you how the business is actually performing: blended margin, total customer acquisition cost, inventory velocity across all fulfillment channels, and the platform that generates the most profitable customers rather than just the most orders.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable builds the custom infrastructure that fills those gaps: unified dashboards that pull from every channel automatically, TikTok Shop apps built specifically for the commerce ecosystem's unique API architecture, order management systems for high-volume operations, and affiliate tracking platforms that handle the creator relationship management that native tools cannot.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Multi-channel ecommerce dashboards (TikTok Shop, Amazon, Shopify, Meta)',
                    'TikTok Shop apps and custom seller center replacements',
                    'Order management systems for high-volume operations',
                    'Affiliate and creator performance tracking platforms',
                    'Inventory management and reorder automation tools',
                    'Customer lifetime value and cohort analysis dashboards',
                    'Agency client reporting platforms for ecommerce agencies',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> Mamba TikTok Shop App, Sales Pipeline Dashboard
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project in Ecommerce
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 03: RECRUITING AND TALENT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">03</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The system that makes a recruiter's methodology scalable.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Recruiting operations live or die by the quality of their candidate management system. Off-the-shelf ATS platforms cover the most common recruiting workflow. They do not cover a proprietary matching methodology, a custom candidate scoring matrix, or a pipeline that needs to integrate directly with an existing CRM for contact import without manual data entry.
              </p>
              <p className="text-white/70 leading-relaxed">
                The businesses that come to Simply Scalable for recruiting software have a process that a standard ATS cannot accommodate. They need the matching logic, the pipeline view, and the candidate management built around how they actually evaluate and place people, not around how a generic platform assumes they should.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Custom candidate matching and scoring platforms',
                    'Recruiting pipeline management with list and kanban views',
                    'Resume management and candidate profile systems',
                    'GoHighLevel integration for contact import and CRM connectivity',
                    'Employer and client portal systems for agency recruiting',
                    'Candidate communication and outreach automation',
                    'Placement tracking and reporting dashboards',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> OMS Matchpoint Recruiting Platform
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project in Recruiting
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 04: COACHING AND EDUCATION */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">04</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The platform that puts your methodology inside the product.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Coaching and education businesses reach a specific ceiling with off-the-shelf platforms: the platform can deliver the content but cannot replicate the methodology. Kajabi can host a course. It cannot enforce the specific access logic a tiered program requires. Circle can host a community. It cannot train an AI coach on a proprietary framework and make it available to members on demand.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable builds custom membership and education platforms for coaches, course creators, and professional educators who have outgrown what generic platforms allow. The Commanding Flow platform is the clearest example: full membership app, community channels, live call integration, course library, and an AI coach trained on the founder's methodology that the founder updates independently.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Custom membership and community platforms with multi-tier access',
                    'Course and curriculum delivery systems with progress tracking',
                    'AI coach and assistant integration trained on proprietary content',
                    'Live call scheduling, reminders, and replay delivery',
                    'Member onboarding automation for the first 7 and 14 days',
                    'Certification and completion tracking',
                    'Professional network and association platforms',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> Commanding Flow Membership Platform
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project in Coaching and Education
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 05: DIGITAL AGENCIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">05</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The infrastructure that lets an agency operate like a product company.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Digital agencies have two software problems. The first is internal: managing client work, team tasks, onboarding workflows, and operational data across tools that were never designed for agency-scale coordination. The second is external: delivering a consistent, professional client experience that reflects the quality of the work rather than the limitations of the project management tool clients are invited to log into.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable builds for both sides of that problem. VAHubPro consolidated four separate tools into one unified rev ops system and had the full team operating on the new platform within three weeks. GoHighLevel buildouts for agency operations provide the white-labeled CRM and campaign infrastructure that agencies use to run client outreach from one place.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Unified rev ops systems replacing spreadsheets, Notion, and CRM combinations',
                    'Client portal systems for professional deliverable and communication management',
                    'GoHighLevel buildouts and sub-account architecture for client management',
                    'Agency reporting dashboards with automated client report generation',
                    'Outreach and lead generation infrastructure for agency business development',
                    'Team task and sprint management tools built around agency delivery workflows',
                    'White-labeled platforms agencies offer as products to their own clients',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> VAHubPro, GoHighLevel Agency Buildouts
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project for Your Agency
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 06: SALES TEAMS AND REVENUE OPERATIONS */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">06</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The scoreboard that tells your team where they stand before they ask.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Sales teams with meaningful pipeline value and multiple reps cannot afford to make decisions on data that is hours or days old. A CRM export, a manual spreadsheet, and a weekly reporting meeting are not a real-time sales management system. They are a system that tells you what happened after it has already happened.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable builds real-time sales dashboards, pipeline management systems, and RevOps infrastructure that gives sales leadership the visibility they need to act before a problem becomes a trend. The Sales Pipeline Dashboard tracks $1.9M in live lead value with zero manual data export. The number on the screen is the number that is true right now.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Real-time sales pipeline and revenue dashboards',
                    'KPI scoreboards with live data refresh and status indicators',
                    'CRM customization and pipeline architecture for specific sales processes',
                    'Sales activity and conversion rate tracking by rep and by stage',
                    'Revenue forecasting tools built on current pipeline data',
                    'Lead scoring and routing systems connected to outreach infrastructure',
                    'RevOps consolidation platforms replacing multiple tracking tools',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> Sales Pipeline Dashboard, VAHubPro
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project for Your Sales Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 07: SAAS AND TECHNOLOGY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">07</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The build behind the build.
              </h2>
              <p className="text-white/70 leading-relaxed">
                SaaS founders and technology companies come to Simply Scalable for two reasons. The first is that they have validated an idea on a no-code platform and need to rebuild it on a proper technical foundation before the platform limitations become customer experience limitations. The second is that they need specific integrations, data pipelines, or agentic applications that their internal team does not have the bandwidth or the specific expertise to build.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable has built integrations, data infrastructure, and AI systems for technology companies that operate their core product on an entirely different stack. The work is not always visible in the product. It is the layer underneath that makes the product reliable.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Migration from no-code platforms to production-grade codebases',
                    'Custom API integrations and multi-system data pipelines',
                    'AI-powered features and agentic workflow automation',
                    'Internal tooling for product, engineering, and operations teams',
                    'White-label product builds for companies expanding their platform',
                    'MVP development for funded startups transitioning to a technical foundation',
                    'Data transformation and ETL pipeline architecture',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project in SaaS and Technology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 08: MEDICAL AND PROFESSIONAL PRACTICES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">08</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Client-facing software that reflects the professionalism of the practice.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Law firms, accounting firms, financial advisors, and consulting practices all face a version of the same problem: the client experience they deliver in person or on a call is not reflected in the digital tools clients use to interact with them. A generic client portal, a shared Dropbox, and an email chain do not signal the same quality as the work being billed.
              </p>
              <p className="text-white/70 leading-relaxed">
                Custom client portals and professional services platforms built by Simply Scalable give practices one secure, branded destination where clients access documents, communicate with the team, view project status, and manage their relationship with the firm. The experience matches the standard of the service.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Secure client portals with document management and e-signature',
                    'Case or matter management systems for legal practices',
                    'Client communication platforms with full audit logging',
                    'Financial reporting and portfolio visibility tools for advisors',
                    'Engagement tracking and billing integration for professional firms',
                    'Onboarding workflows for new client relationships',
                    'Custom CRM and relationship management tools for practices',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project for Your Practice
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY 09: VA AGENCIES AND OUTSOURCING OPERATIONS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#D4AF37]/70" />
                </div>
                <span className="text-white/40 text-xs font-mono font-semibold tracking-wider">09</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The operations infrastructure that makes a service business scalable.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Virtual assistant agencies and outsourcing operations run on coordination. Client assignments, task management, quality review, outreach for new business, and content delivery for existing clients all happen simultaneously across a team that is often distributed across multiple time zones. The tools available for managing this are either too generic to fit the specific workflow or too expensive to justify for an operation that runs on tight margins.
              </p>
              <p className="text-white/70 leading-relaxed">
                Simply Scalable has built unified operations platforms for VA agencies that consolidate the coordination layer into one system. VAHubPro replaced four separate tools with one platform and had the team running on automated workflows within three weeks of delivery.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What we build for this industry</h3>
                <ul className="space-y-2">
                  {[
                    'Unified rev ops and operations management platforms',
                    'Client onboarding and task assignment automation',
                    'Team performance and output tracking dashboards',
                    'Outreach and business development infrastructure',
                    'Content strategy and deliverable management tools',
                    'Client communication portals for professional service delivery',
                    'Sprint and project management systems built around service delivery workflows',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <p className="text-white/40 text-sm">
                  <span className="text-white/60 font-medium">Relevant builds:</span> VAHubPro
                </p>
              </div>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#c5a233] transition-colors text-sm font-medium"
              >
                Start a Project for Your Operation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR INDUSTRY IS NOT LISTED */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-6 h-6 text-[#D4AF37]/70" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The best builds we have ever scoped started with &ldquo;I am not sure this fits any category.&rdquo;
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-4">
              The nine industries above represent the verticals Simply Scalable has built production systems for. They are not the only ones we build for. The categories are useful for pattern recognition. They are not a qualification gate.
            </p>
            <p className="text-white/70 leading-relaxed text-lg mb-10">
              If your business has a problem that off-the-shelf software cannot solve, that problem is worth a conversation regardless of what industry it lives in. The scoping session exists precisely to determine whether a custom build makes sense, what it would look like, and what it would cost. That conversation is free and takes thirty minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Custom Systems Shipped' },
              { value: '9+', label: 'Industries Served' },
              { value: '140+', label: 'Platforms Integrated' },
              { value: '100%', label: 'Client Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Whatever industry you are in, tell us what you are trying to build.
            </h2>
            <p className="text-white/70 leading-relaxed text-lg mb-10">
              Nine questions. Twenty-four hours. A detailed quote with scope, timeline, and a real number.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/start-a-project"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Response within 24 hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                You own everything we build
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                100% client satisfaction rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Frequently Asked Questions &mdash; Industries
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Do you specialize in one industry or build across multiple verticals?',
                a: 'Simply Scalable builds across multiple verticals. The team has shipped production systems for healthcare, ecommerce, recruiting, coaching, digital agencies, sales operations, SaaS, professional services, and VA agencies. The problems these industries face, disconnected tools, outgrown platforms, and missing software, are consistent even when the specific systems required are different. Industry experience allows the team to recognize vertical-specific constraints early in the scoping process rather than discovering them during development.',
              },
              {
                q: 'Does Simply Scalable have healthcare or HIPAA experience?',
                a: 'Yes. The GEM Science Patient Portal is a HIPAA-conscious patient portal that replaced five disconnected tools with one integrated system, fully connected to DrChrono EHR, and onboarded 871 active patients at launch. Healthcare builds use HIPAA-conscious architecture as a foundational design constraint: encrypted data, role-based access controls, and full audit logging on all interactions with protected health information.',
              },
              {
                q: 'Can Simply Scalable build for an industry that is not listed on this page?',
                a: 'Yes. The nine industries listed represent where the team has built production systems. They are not a limit on what can be scoped. Any business with a software problem that off-the-shelf tools cannot solve is worth a conversation. The scoping session determines whether a custom build makes sense for the specific situation.',
              },
              {
                q: 'How does Simply Scalable get up to speed on an industry it has not built for before?',
                a: 'The discovery and scoping session is designed specifically for this. The client describes how their operation works, what tools they currently use, where the gaps and friction points are, and what the ideal system would do. Phil maps the technical architecture to those requirements. The client’s operational knowledge combined with the team’s technical depth is how every build gets started, regardless of whether the industry is familiar or new.',
              },
              {
                q: 'Are there industries Simply Scalable does not build for?',
                a: 'There are project types that are not a fit regardless of industry: projects without a defined scope, projects that a standard SaaS tool could handle adequately, and projects where the budget does not support a properly built custom system. Industry is rarely the determining factor. Project fit is determined by the problem, the scope, and whether a custom build is actually the right answer for where the business is.',
              },
              {
                q: 'How do I know if my industry-specific compliance requirements can be handled?',
                a: 'Bring them to the scoping session. Compliance requirements are identified during discovery and factored into the architecture before any development begins. For healthcare, HIPAA-conscious architecture is standard. For financial services, data security and audit logging requirements are addressed at the architecture level. For any compliance context, the approach is the same: understand the requirement during scoping, design the architecture around it, and document how it was addressed at delivery.',
              },
            ].map((faq, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <span className="text-[#D4AF37] shrink-0 text-xl font-light">
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

    </div>
  );
}
