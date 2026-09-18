import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Lock, CheckCircle, Send, FileText, Calendar, List, Plug, Code, DollarSign, MessageCircle, Key, Database, Mail, MapPin, Linkedin, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is there a minimum project size or minimum budget to work with Simply Scalable?',
    a: 'Simply Scalable builds production-grade custom software for businesses that need it built properly. Projects that require a budget below what a production-quality build demands are not a fit, not because of an arbitrary minimum but because cutting corners on architecture creates a different set of problems than the ones the build was meant to solve. The estimate from the quote form or the discovery call will tell you whether the investment required matches where your business is.',
  },
  {
    q: 'How quickly can a project start after the brief is signed?',
    a: 'Start date depends on the team’s current project schedule. Current availability is discussed during the discovery call. Some projects can begin immediately. Others are scheduled a few weeks out. The estimate and the project brief include the proposed start date so you know exactly when work begins before you sign.',
  },
  {
    q: 'Do you require a deposit before starting?',
    a: 'Yes. A deposit is required before the project brief is signed and work begins. The deposit structure is included in the project estimate. The remainder is structured in milestone payments tied to project phases rather than billed as a single upfront amount. The specific payment structure is defined in the project brief.',
  },
  {
    q: 'What if I need to pause or stop the project after it has started?',
    a: 'Pause and termination terms are defined in the project agreement. If a project needs to pause, the work completed to that point is documented and the codebase is transferred to the client. If a project terminates, the client owns everything completed up to the termination point. The terms ensure that a pause or termination does not leave the client without access to the work already paid for.',
  },
  {
    q: 'Can I see the code during the project or only at delivery?',
    a: 'Yes. Version control is used throughout every project and clients can be given access to the repository at any point during the build. The preference for how much visibility the client wants into the development process is discussed during scoping.',
  },
  {
    q: 'What types of projects does Simply Scalable not take on?',
    a: 'Projects without a defined problem to solve. Projects where the requirement is met by an existing tool the client has not yet tried. Projects where the budget does not support a properly built system. Projects where the timeline expectations cannot be met without sacrificing quality. The discovery call or the scoping process identifies any of these conditions early. If a project is not a fit, that assessment is communicated clearly and quickly with a recommendation for what the right path forward is.',
  },
];

const serviceOptions = [
  'A custom app (mobile, web, or both)',
  'A portal (client, patient, partner, or other)',
  'A dashboard or analytics system',
  'A GoHighLevel buildout or customization',
  'An AI-powered or agentic application',
  'A multi-system integration',
  'A website',
  'I am not sure yet -- I need help figuring out the right approach',
];

const timelineOptions = [
  'As soon as possible',
  'Within the next 3 months',
  'Within the next 6 months',
  'Flexible -- quality matters more than speed',
];

export default function StartProjectPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    nameAndBusiness: '',
    email: '',
    problem: '',
    currentTools: '',
    users: '',
    integrations: '',
    services: [] as string[],
    timeline: '',
    anythingElse: '',
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const totalQuestions = 9;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observerRef.current?.unobserve(entry.target);
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

  const updateField = (field: keyof typeof formData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: formRef.current?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const inputBase =
    'w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 text-base focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors';

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Tell us what you want to build. We will tell you exactly what it would take.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              No commitment required. No technical knowledge needed. Just describe the problem you are trying to solve and we will come back with a detailed scope, timeline, and number within twenty-four hours.
            </p>
          </div>
          {/* Image placeholder */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-14">
            <div className="w-full h-64 md:h-80 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.3)]" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <div
                      key={angle}
                      className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent"
                      style={{
                        width: `${80 + Math.random() * 60}px`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        transformOrigin: '0 50%',
                      }}
                    />
                  ))}
                  {[30, 120, 210, 300].map((angle) => (
                    <div
                      key={`node-${angle}`}
                      className="absolute w-2 h-2 rounded-full bg-white/20"
                      style={{
                        top: `${50 - Math.sin((angle * Math.PI) / 180) * 60}px`,
                        left: `${50 + Math.cos((angle * Math.PI) / 180) * 60}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="absolute bottom-4 text-white/20 text-xs">
                Abstract visualization: a conversation beginning, a system being defined
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TWO WAYS TO START */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nine questions or thirty minutes. Either way you walk away knowing exactly what your build would look like.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Every Simply Scalable project starts with one of two conversations. The quote form is right for projects where the scope is reasonably clear and the main question is what it will cost. The discovery call is right for projects with complexity, multiple integrations, or where the full picture is not yet clear before the conversation. Both lead to the same place: a fully scoped project brief with a timeline, a tech stack, and a real number before any commitment is made.
            </p>
          </div>
        </div>
      </section>

      {/* OPTION 01 -- THE QUOTE FORM */}
      <section className="py-24 px-6" ref={formRef}>
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-white/10">01</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">The Quote Form</h3>
            </div>
          </div>

          {submitted ? (
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Your project brief is on its way.</h3>
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                Phil reads every submission personally and will respond within twenty-four hours with a detailed estimate. Check your inbox at{' '}
                <span className="text-[#D4AF37] font-medium">{formData.email}</span>. If you want to talk through the project before then, book a discovery call using the link below.
              </p>
              <Link
                to="/about/start-a-project#discovery-call"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
                <h4 className="text-xl font-bold text-white mb-2">
                  Answer 9 questions. Get a detailed quote in your inbox within 24 hours.
                </h4>
                <p className="text-white/50 text-sm">
                  No technical knowledge required. Describe the problem in plain language. We read every submission personally.
                </p>
              </div>

              {/* Progress indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/40 text-xs">
                    Question {currentQuestion + 1} of {totalQuestions}
                  </span>
                  <span className="text-white/40 text-xs">{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D4AF37] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: totalQuestions }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToQuestion(i)}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i <= currentQuestion ? 'bg-[#D4AF37]/60' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Question 1 */}
                <div className={currentQuestion === 0 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    What is your name and the name of your business?
                  </label>
                  <input
                    type="text"
                    value={formData.nameAndBusiness}
                    onChange={(e) => updateField('nameAndBusiness', e.target.value)}
                    placeholder="Your name and business name"
                    className={inputBase}
                    required
                  />
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => goToQuestion(1)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className={currentQuestion === 1 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    What is the best email address to reach you?
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="you@company.com"
                    className={inputBase}
                    required
                  />
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(0)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(2)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className={currentQuestion === 2 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    In your own words, what is the problem you are trying to solve? What does your business need that does not currently exist or that your current tools cannot do?
                  </label>
                  <textarea
                    value={formData.problem}
                    onChange={(e) => updateField('problem', e.target.value)}
                    placeholder="Describe the problem in as much detail as you can..."
                    className={`${inputBase} min-h-[160px] resize-none`}
                    minLength={400}
                  />
                  <p className="text-white/30 text-xs mt-2">400 character minimum suggested</p>
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(1)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(3)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 4 */}
                <div className={currentQuestion === 3 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    What tools or software do you currently use to manage this area of your business? What works about them and what does not?
                  </label>
                  <textarea
                    value={formData.currentTools}
                    onChange={(e) => updateField('currentTools', e.target.value)}
                    placeholder="List the tools you use and what works or doesn't..."
                    className={`${inputBase} min-h-[120px] resize-none`}
                  />
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(2)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(4)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 5 */}
                <div className={currentQuestion === 4 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    Who will use the system you want built? (For example: your internal team, your clients, your patients, your customers, your community members -- or a combination.)
                  </label>
                  <textarea
                    value={formData.users}
                    onChange={(e) => updateField('users', e.target.value)}
                    placeholder="Describe who will be using the system..."
                    className={`${inputBase} min-h-[120px] resize-none`}
                  />
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(3)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(5)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 6 */}
                <div className={currentQuestion === 5 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    Does the system need to connect to or integrate with any existing tools or platforms? If yes, which ones?
                  </label>
                  <textarea
                    value={formData.integrations}
                    onChange={(e) => updateField('integrations', e.target.value)}
                    placeholder="List any tools, platforms, or APIs that need to connect..."
                    className={`${inputBase} min-h-[120px] resize-none`}
                  />
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(4)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(6)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 7 -- Multi-select checkboxes */}
                <div className={currentQuestion === 6 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-4">
                    Which of the following best describes what you need? (Select all that apply.)
                  </label>
                  <div className="space-y-2">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                          formData.services.includes(option)
                            ? 'border-[#D4AF37]/40 bg-[#D4AF37]/5'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(option)}
                          onChange={() => toggleService(option)}
                          className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]/20 accent-[#D4AF37]"
                        />
                        <span className="text-white/80 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(5)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(7)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 8 -- Single select radio */}
                <div className={currentQuestion === 7 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-4">
                    Do you have a timeline in mind for when you need this live?
                  </label>
                  <div className="space-y-2">
                    {timelineOptions.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                          formData.timeline === option
                            ? 'border-[#D4AF37]/40 bg-[#D4AF37]/5'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          checked={formData.timeline === option}
                          onChange={() => updateField('timeline', option)}
                          className="w-4 h-4 border-white/30 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]/20 accent-[#D4AF37]"
                        />
                        <span className="text-white/80 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(6)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToQuestion(8)}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c5a233] transition-colors text-sm"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question 9 */}
                <div className={currentQuestion === 8 ? 'block' : 'hidden'}>
                  <label className="block text-white font-medium mb-2">
                    Is there anything else you want us to know about the project before we respond?
                  </label>
                  <textarea
                    value={formData.anythingElse}
                    onChange={(e) => updateField('anythingElse', e.target.value)}
                    placeholder="Optional -- anything else that would help us understand your project"
                    className={`${inputBase} min-h-[120px] resize-none`}
                  />
                  <p className="text-white/30 text-xs mt-2">Optional</p>
                  <div className="flex justify-between mt-6">
                    <button type="button" onClick={() => goToQuestion(7)} className="text-white/50 hover:text-white text-sm transition-colors">
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:bg-[#c5a233] transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send My Project Brief
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* OPTION 02 -- BOOK A DISCOVERY CALL */}
      <section id="discovery-call" className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-white/10">02</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Book a Discovery Call</h3>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-10">
            <h4 className="text-xl font-bold text-white mb-4">Prefer to talk it through?</h4>
            <p className="text-white/70 text-lg leading-relaxed">
              Book a thirty-minute discovery call with Phil. Come with your problem and as much or as little detail as you have. Phil will ask the questions that surface the full scope, identify the right architecture, and give you a clear picture of what it would take to build before the call ends.
            </p>
          </div>

          {/* Calendar embed placeholder */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <h4 className="text-lg font-bold text-white mb-6 text-center">
                Book a free 30-minute discovery call.
              </h4>
              <div className="w-full h-64 md:h-80 rounded-xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center mb-8">
                <div className="text-center">
                  <Calendar className="w-10 h-10 text-white/20 mx-auto mb-3" />
                  <p className="text-white/30 text-sm">Booking calendar embed</p>
                  <p className="text-white/20 text-xs mt-1">Timezone auto-detection &middot; Confirmation email on booking</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Thirty minutes. No obligation.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <FileText className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">You leave with a clear scope and a real number.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Phil runs every discovery call personally.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT HAPPENS AFTER YOU REACH OUT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Here is exactly what happens after you submit the form or book the call.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* If you submitted the quote form */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-lg font-bold text-white mb-6">If you submitted the quote form:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">Within 24 hours:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Phil reads your submission. He will respond by email with one of three things: a detailed estimate if the scope is clear from the form, a set of follow-up questions if more information is needed before estimating, or a suggestion to book a discovery call if the project complexity warrants it.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">Within 48 to 72 hours:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      If the estimate requires a follow-up exchange, the detailed quote arrives within two to three business days of the initial response.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">After the estimate:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      You review the estimate. If it works, a discovery call is scheduled to finalize the scope and produce the written project brief. If it does not work yet, that is a useful data point and the conversation does not have to end there.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* If you booked a discovery call */}
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                <h3 className="text-lg font-bold text-white mb-6">If you booked a discovery call:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">Before the call:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      No preparation required. Come with your problem described in whatever level of detail you have. A rough description is fine. Phil is trained to surface the details that matter through the conversation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">During the call:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Phil asks questions about the problem, the current tools, the users, the integrations, and the timeline. You answer in plain language. The call is a conversation, not an interview. By the end of the thirty minutes, the scope is defined well enough to produce a written estimate.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">After the call:</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      A written estimate arrives within twenty-four hours of the call. If the project moves forward, the estimate becomes the basis for the formal project brief which is the document the build is executed against.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT THE PROJECT BRIEF INCLUDES */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Every project starts with a written brief. No brief, no build.
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                The project brief is the document that defines every deliverable, every integration, every user type, the timeline, the tech stack, and the total project cost. It is written in plain language, not in technical specifications. It is reviewed and revised until both parties agree it accurately describes what will be built. It is signed before any development begins.
              </p>
              <p>
                The brief is not a formality. It is the mechanism that prevents the most common failure mode in custom software: a build that does not match expectations because the expectations were never precisely defined.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mt-14">
            <h3 className="text-xl font-bold text-white mb-8">What the project brief contains:</h3>
            <div className="space-y-4">
              {[
                {
                  icon: List,
                  title: 'Project scope',
                  desc: 'Every feature, every user type, every admin function, and every piece of functionality the system will include. And equally important: what is explicitly out of scope.',
                },
                {
                  icon: Plug,
                  title: 'Integration specifications',
                  desc: 'Every external system the build connects to, what data flows in which direction, and how each connection is technically implemented.',
                },
                {
                  icon: Calendar,
                  title: 'Timeline',
                  desc: 'Phase-by-phase timeline from signed brief to live system, with milestone dates defined before work begins.',
                },
                {
                  icon: Code,
                  title: 'Tech stack',
                  desc: 'The specific technologies, frameworks, and platforms the system will be built on, and the reasoning behind each decision.',
                },
                {
                  icon: DollarSign,
                  title: 'Total project cost',
                  desc: 'A single fixed number covering the full scope defined in the brief. No hourly billing, no surprise invoices, no scope creep billed at the end.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMMON QUESTIONS BEFORE REACHING OUT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The questions most people have before they fill out the form.
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '“I do not know if my idea is technically feasible.”',
                a: 'That is what the discovery call is for. Phil will tell you honestly whether what you are describing is buildable, what the right approach is, and whether a custom build is actually the right answer for where your business is. If it is not, he will tell you that too.',
              },
              {
                q: '“I have a rough idea but I cannot describe it precisely yet.”',
                a: 'That is fine. Most clients come to the first conversation with a problem description rather than a feature list. The scoping process converts the problem description into the feature list. Rough is the right starting point.',
              },
              {
                q: '“I am not sure if my budget is in the right range.”',
                a: 'Submit the form or book the call. The estimate will tell you whether the budget works. If it does not, that is useful information and the conversation does not have to end there. Some builds can be phased to fit a tighter budget without sacrificing the core functionality.',
              },
              {
                q: '“I have had bad experiences with developers before.”',
                a: 'That is the most common thing we hear from clients who eventually work with Simply Scalable. The bad experience almost always came from vague scoping, no written project brief, or a developer who disappeared after delivery. The process described on this site exists specifically to prevent all three. Read the Work page and the Process page. The evidence that this works differently is there.',
              },
              {
                q: '“I need this faster than your typical timeline.”',
                a: 'Timeline is discussed during scoping. Some projects can move faster than the typical range if the scope is tightly defined, if the client has high availability for reviews during the project, and if the team’s current workload accommodates an accelerated schedule. Book a call and discuss it directly.',
              },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-3">{item.q}</h3>
                    <p className="text-white/60 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: THE OWNERSHIP REMINDER */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Everything we build is yours. Completely and permanently.
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                The code. The database. The integrations. The documentation. Every piece of the system we deliver belongs to your business at the moment of handover. No subscription. No recurring fee for access. No proprietary layer that requires Simply Scalable&rsquo;s involvement to keep the system running.
              </p>
              <p>
                You can host it anywhere. You can hand it to any developer. You can build on top of it yourself. You own it the way you own any other asset your business has paid for and received.
              </p>
              <p>
                This is not a policy we revisit based on the size of the project or the type of client. It is the standard that applies to every build, every time.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: Key,
                title: 'Your code',
                desc: 'Full source code and documentation at delivery. No proprietary lock-in.',
              },
              {
                icon: Database,
                title: 'Your data',
                desc: 'All data stored on your infrastructure. Nothing sits on Simply Scalable servers after delivery.',
              },
              {
                icon: CheckCircle,
                title: 'Your future',
                desc: 'Add features, change direction, hand it to another team. The system grows with your business on your terms.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT DETAILS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Prefer to reach out directly?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <a href="mailto:info@simplyscalable.io" className="text-white font-semibold text-lg hover:text-[#D4AF37] transition-colors">
                info@simplyscalable.io
              </a>
              <p className="text-white/60 text-sm mt-2">Response within 24 hours.</p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <p className="text-white font-semibold text-lg">Grapevine, TX</p>
              <p className="text-white/60 text-sm mt-2">Serving clients across the United States and internationally.</p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <p className="text-white/70 leading-relaxed">
              Every inquiry receives a personal response. Not an automated reply. Not a form acknowledgement. A response from Phil within twenty-four hours on business days.
            </p>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/phil-murphy-03/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4 text-[#D4AF37]" />
              LinkedIn &mdash; Phil Murphy
            </a>
            <a
              href="https://www.linkedin.com/in/iheoma-nwanyanwu-4278a0184/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4 text-[#D4AF37]" />
              LinkedIn &mdash; Oma
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-24 px-6 bg-[#080810]">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions &mdash; Starting a Project
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-8 py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-semibold text-lg">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-white/60 leading-relaxed px-8 pb-6">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
