import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sun & Moon Personality Quiz',
  description: 'Fun bilingual personality quiz about moon and sun archetypes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
