export interface PaymentTier {
  id: string;
  name: string;
  description: string;
  amount?: number;
  currency: string;
  checkoutUrl: string;
}

export interface PaymentSession {
  id: string;
  url: string;
  status: 'pending' | 'completed' | 'failed';
}

export const PAYMENT_TIERS: PaymentTier[] = [
  {
    id: 'vip',
    name: 'Fakepixels VIP',
    description: 'Become a VIP supporter with exclusive access',
    currency: 'USD',
    checkoutUrl: 'https://buy.polar.sh/polar_cl_Eu9EdygeRjJuWqeHil9PkYPIG6BSEAutV9xOw2zP3D5',
  },
  {
    id: 'pay-what-you-want',
    name: 'Pay what you want',
    description: 'Choose your own amount to support Fakepixels',
    currency: 'USD',
    checkoutUrl: 'https://buy.polar.sh/polar_cl_2AlqwgTBGiF2blIAmElQZaEcQ6KjZ4C4aHfz10JvF4M',
  },
];