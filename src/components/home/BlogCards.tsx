import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  { category: 'Custom Software', title: 'When to Build Custom Software and When to Buy Off-the-Shelf', preview: 'The answer is not always "build." Here is how to think through the decision before you spend a dollar.', readTime: '6 min read' },
  { category: 'Ecommerce', title: 'Why TikTok Shop Sellers Need Custom Dashboards (and What to Put In Them)', preview: 'The native analytics do not show you what you actually need to run a TikTok Shop at scale. This is what a real dashboard looks like.', readTime: '5 min read' },
  { category: 'AI Agents', title: 'What an Agentic Application Actually Does (and When You Need One)', preview: 'AI agents are not chatbots. Here is what they are, what they replace, and how to know if your workflow is ready for one.', readTime: '7 min read' },
];

export function BlogCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a, i) => (
        <motion.div key={a.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="bg-midnight border border-steel/60 rounded-card overflow-hidden h-full flex flex-col hover:border-gold/30 hover:-translate-y-1 transition-all duration-200">
            <div className="h-40 bg-steel/40 relative"><span className="absolute top-4 left-4 bg-near-black border border-gold/40 text-gold text-[11px] font-mono rounded-chip px-3 py-1">{a.category}</span></div>
            <div className="p-6 flex flex-col flex-1">
              <h4 className="font-display text-[18px] text-white leading-snug">{a.title}</h4>
              <p className="font-body text-[14px] text-mist mt-2 flex-1">{a.preview}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-mist text-[13px] font-mono">{a.readTime}</span>
                <Link to="/blog" className="text-gold text-[13px] font-mono hover:text-gold-hover transition-colors">Read Article &rarr;</Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
