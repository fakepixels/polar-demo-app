'use client';

import { PAYMENT_TIERS } from '@/lib/types';
import PaymentCard from '@/components/PaymentCard';

export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{maxWidth: '800px', width: '100%'}}>
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '48px'}}>
          <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px', fontFamily: 'var(--font-geist-mono), SF Mono, Monaco, monospace'}}>
            FAKEPIXELS
          </h1>
          <p style={{fontSize: '1.125rem', opacity: '0.8', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6'}}>
            Support my <a href="https://fakepixels.substack.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline', color: 'inherit'}}>blog</a> and help me continue creating writings on philosophy, technology, and markets.
          </p>
        </div>

        {/* Payment Options */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '48px'}}>
          {PAYMENT_TIERS.map((tier) => (
            <PaymentCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Footer */}
        <div style={{textAlign: 'center', paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.2)'}}>
          <p style={{fontSize: '0.875rem', opacity: '0.6'}}>
            Powered by{' '}
            <a 
              href="https://polar.sh" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{textDecoration: 'underline', color: 'inherit'}}
            >
              Polar
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}