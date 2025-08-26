# Fakepixels Payment App

A beautiful, minimalistic NextJS application that allows fans to support the Fakepixels blog through Polar.sh payments.

## Features

- **Minimalist Design**: Clean black background with white text using Geist Mono font
- **Multiple Payment Tiers**: Coffee, lunch, dinner, and premium support options
- **Polar.sh Integration**: Secure payment processing with Polar.sh
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application

## Design Specifications

- **Colors**: Pure black (#000000) background with white (#ffffff) text
- **Typography**: Geist Mono font for a clean, technical aesthetic
- **Layout**: Centered, minimalist design with clean spacing
- **Mobile-first**: Responsive design optimized for all devices

## Tech Stack

- **Frontend**: NextJS 15 with App Router
- **Styling**: Tailwind CSS
- **Payment Processing**: Polar.sh SDK
- **Language**: TypeScript
- **Font**: Geist Mono

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file with your Polar.sh credentials:
   ```env
   POLAR_ACCESS_TOKEN=your_polar_access_token
   POLAR_ORGANIZATION_ID=your_organization_id
   NEXT_PUBLIC_POLAR_ENVIRONMENT=production
   ```

3. **Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Payment Tiers

The app includes four pre-configured payment tiers:

- **Buy me a coffee** - $5: A small token of appreciation
- **Buy me lunch** - $15: Support my content creation
- **Buy me dinner** - $30: Help me keep writing
- **Premium support** - $50: Become a premium supporter

## API Routes

- `POST /api/create-checkout`: Creates a Polar.sh checkout session

## Pages

- `/`: Main payment landing page with tier selection
- `/success`: Payment confirmation page with success animation

## Customization

To customize payment tiers, edit the `PAYMENT_TIERS` array in `lib/types.ts`:

```typescript
export const PAYMENT_TIERS: PaymentTier[] = [
  {
    id: 'custom',
    name: 'Custom Tier',
    description: 'Your custom description',
    amount: 25.00,
    currency: 'USD',
  },
  // ... more tiers
];
```

## Deployment

This app can be deployed to any platform that supports NextJS:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repository
- **Railway**: `railway deploy`

Make sure to set your environment variables in your deployment platform.

## Security Notes

- Environment variables are properly scoped (server-side only for sensitive data)
- Polar.sh handles all payment processing securely
- No sensitive payment data is stored in the application

## Support

For issues with the app, please check the Polar.sh documentation or contact support.