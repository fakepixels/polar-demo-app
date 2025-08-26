import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import './styles.css';

export const metadata: Metadata = {
  title: 'Fakepixels - Support',
  description: 'Support the Fakepixels blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body className="bg-black text-white font-mono antialiased">
        {children}
      </body>
    </html>
  );
}