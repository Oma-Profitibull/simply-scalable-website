import { useState, FormEvent } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function NewsletterSignup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const inputBase =
    'w-full bg-near-black border border-steel/60 rounded-input px-4 py-3 font-body text-[15px] text-white placeholder-slate-muted focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-colors';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setMessage('');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ first_name: firstName.trim(), email: email.trim().toLowerCase() });

    if (error) {
      if (error.code === '23505') {
        setStatus('success');
        setMessage('You are already on the list. Thanks for being here.');
        return;
      }
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
      return;
    }

    setStatus('success');
    setMessage('You are subscribed. We will be in touch when the next article is ready.');
    setFirstName('');
    setEmail('');
  }

  if (status === 'success') {
    return (
      <div className="bg-midnight border border-gold/30 rounded-card p-8 flex flex-col items-center text-center">
        <CheckCircle className="w-10 h-10 text-gold" />
        <p className="font-display text-[20px] text-white mt-4">Thank you.</p>
        <p className="font-body text-[15px] text-mist mt-2">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-midnight border border-steel/60 rounded-card p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nl-first-name" className="block font-mono text-[12px] text-mist mb-2">
            First Name
          </label>
          <input
            id="nl-first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={inputBase}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="nl-email" className="block font-mono text-[12px] text-mist mb-2">
            Email Address
          </label>
          <input
            id="nl-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputBase}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-near-black font-mono text-[14px] rounded-btn px-6 py-3 hover:bg-gold-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
        Send Me the Articles
      </button>

      {status === 'error' && <p className="font-body text-[14px] text-profitibull mt-4">{message}</p>}

      <p className="font-body text-[13px] text-slate-muted mt-6">
        No spam. No sharing your email. Unsubscribe any time.
      </p>
    </form>
  );
}
