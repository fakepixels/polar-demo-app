import { Polar } from '@polar-sh/sdk';

export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: process.env.NEXT_PUBLIC_POLAR_ENVIRONMENT === 'production' 
    ? 'production' 
    : 'sandbox',
});

export const ORGANIZATION_ID = process.env.POLAR_ORGANIZATION_ID!;