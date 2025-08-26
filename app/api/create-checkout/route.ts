import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { tierId, amount, currency } = await request.json();

    // Since we're using direct Polar.sh checkout URLs,
    // this endpoint is mainly for fallback/testing purposes
    const fallbackCheckoutUrl = `https://polar.sh/checkout?amount=${amount}&currency=${currency}&tier=${tierId}`;
    
    return NextResponse.json({ 
      checkoutUrl: fallbackCheckoutUrl,
      sessionId: `fallback_session_${Date.now()}`,
      warning: 'Using fallback checkout URL'
    });
    
  } catch (error) {
    console.error('Checkout creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}