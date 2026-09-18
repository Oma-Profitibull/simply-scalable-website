import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Discovery and Scoping', body: 'You share the idea. We turn it into a fully scoped project brief with a timeline, the tech stack, and clear deliverables. No vague estimates, no surprise invoices.', side: 'right' },
  { number: '02', title: 'Architecture and Design', body: 'We map the system architecture and design the user experience before a single line of code is written. You see the blueprint before the build starts.', side: 'left' },
  { number: '03', title: 'Build and Iterate', body: 'Rapid development with regular check-ins. You see real progress early and often, not just when we hand over the keys.', side: 'right' },
  { number: '04', title: 'Deploy and Scale', body: 'Production deployment, full documentation, and ongoing support. We stick around to make sure it grows with you.', side: 'left' },
] as const;

export function ProcessTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold -translate-x-1/2 hidden md:block" />
      <div className="space-y-12 md:space-y-16">
        {steps.map((step, i) => (
          <motion.div key={step.number} className={`relative flex flex-col md:flex-row items-center gap-6 ${step.side === 'left' ? 'md:flex-row-reverse' : ''}`} initial={{ opacity: 0, x: step.side === 'right' ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <div className={`flex-1 ${step.side === 'right' ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
              <div className="bg-midnight border border-steel rounded-card p-6 relative">
                <span className="font-mono text-[13px] text-gold uppercase tracking-wide">Step {step.number}</span>
                <h4 className="font-display text-[22px] text-white mt-2">{step.title}</h4>
                <p className="font-body text-[16px] text-mist mt-2">{step.body}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <motion.div className="w-3 h-3 rounded-full bg-gold border-4 border-near-black" whileInView={{ scale: [1, 1.3, 1] }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.2 }} />
            </div>
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
