'use client';

import { useState } from 'react';
import { PaymentTier } from '@/lib/types';

interface PaymentCardProps {
  tier: PaymentTier;
}

export default function PaymentCard({ tier }: PaymentCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    
    // Directly redirect to the Polar.sh checkout URL
    window.location.href = tier.checkoutUrl;
  };

  return (
    <div className="border border-white/20 p-4 sm:p-6 hover:border-white/40 transition-colors cursor-pointer group">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-semibold">{tier.name}</h3>
            <p className="text-xs sm:text-sm opacity-70">{tier.description}</p>
          </div>
          {tier.priceDisplay && (
            <div className="text-left sm:text-right">
              <span className="text-xl sm:text-2xl font-bold">
                {tier.priceDisplay}
              </span>
            </div>
          )}
        </div>
        
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full bg-white text-black py-2 sm:py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Processing...' : 'Support'}
        </button>
      </div>
    </div>
  );
}