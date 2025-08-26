'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Simulate verification delay
      const timer = setTimeout(() => {
        setIsVerifying(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setIsVerifying(false);
    }
  }, [sessionId]);

  if (isVerifying) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-lg text-center space-y-6">
          <div className="animate-pulse">
            <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          </div>
          <h1 className="text-2xl font-mono font-bold">Verifying payment...</h1>
          <p className="opacity-70">Please wait while we confirm your payment.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-lg text-center space-y-6">
        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20 32l8 8 16-16"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-mono font-bold">Payment Successful!</h1>
          <p className="text-lg opacity-80">
            Thank you for supporting Fakepixels! Your contribution helps me continue creating content.
          </p>
          {sessionId && (
            <p className="text-sm opacity-60 font-mono">
              Session: {sessionId.slice(0, 8)}...
            </p>
          )}
        </div>

        <div className="space-y-4 pt-8">
          <button
            onClick={() => router.push('/')}
            className="bg-white text-black px-8 py-3 font-semibold hover:bg-white/90 transition-colors"
          >
            Back to Home
          </button>
          <p className="text-sm opacity-60">
            You should receive a confirmation email shortly.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-lg text-center space-y-6">
          <div className="animate-pulse">
            <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          </div>
          <h1 className="text-2xl font-mono font-bold">Loading...</h1>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}