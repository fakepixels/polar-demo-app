import { NextRequest, NextResponse } from 'next/server';
import { polar, ORGANIZATION_ID } from '@/lib/polar';

export async function POST(request: NextRequest) {
  let tierId = '';
  let amount = 0;
  let currency = 'USD';
  
  try {
    const body = await request.json();
    tierId = body.tierId;
    amount = body.amount;
    currency = body.currency;

    // Create a checkout session with Polar.sh
    const checkoutSession = await polar.checkouts.create({
      // Use your organization ID
      organizationId: ORGANIZATION_ID,
      // Set success URL with session parameter
      successUrl: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      // Optional: Add metadata for tracking
      metadata: {
        tierId,
        source: 'fakepixels-blog',
      },
      // Custom amount in cents
      amount: Math.round(amount * 100),
      currency: currency.toUpperCase(),
    });

    return NextResponse.json({ 
      checkoutUrl: checkoutSession.url,
      sessionId: checkoutSession.id 
    });
    
  } catch (error) {
    console.error('Checkout creation failed:', error);
    
    // Fallback to mock URL if Polar.sh fails
    const fallbackCheckoutUrl = `https://polar.sh/checkout?amount=${amount}&currency=${currency}&tier=${tierId}`;
    
    return NextResponse.json({ 
      checkoutUrl: fallbackCheckoutUrl,
      sessionId: `fallback_session_${Date.now()}`,
      warning: 'Using fallback checkout URL'
    });
  }
}