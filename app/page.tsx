'use client';

import { PAYMENT_TIERS } from '@/lib/types';
import PaymentCard from '@/components/PaymentCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight">
            FAKEPIXELS
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-lg mx-auto leading-relaxed">
            Support my <a href="https://fakepixels.substack.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">blog</a> and help me continue creating writings on philosophy, technology, and markets.
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {PAYMENT_TIERS.map((tier) => (
            <PaymentCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-sm opacity-60">
            Powered by{' '}
            <a 
              href="https://polar.sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              Polar
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}