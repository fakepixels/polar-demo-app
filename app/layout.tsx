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
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            * { box-sizing: border-box; margin: 0; padding: 0; }
            html, body { 
              background-color: #000000 !important; 
              color: #ffffff !important; 
              font-family: var(--font-geist-mono), 'SF Mono', Monaco, monospace !important;
              min-height: 100vh;
            }
          `
        }} />
      </head>
      <body className="bg-black text-white font-mono antialiased" style={{backgroundColor: '#000000', color: '#ffffff', fontFamily: 'var(--font-geist-mono), SF Mono, Monaco, monospace'}}>
        {children}
      </body>
    </html>
  );
}