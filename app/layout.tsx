import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Igor Soares | Psicólogo Especialista em Burnout',
  description: 'Atendimento psicológico especializado para profissionais enfrentando estresse extremo e Síndrome de Burnout.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%230d9488"/><path d="M50 75C35 60 25 50 25 40 25 30 33 25 40 25 45 25 48 28 50 30 52 28 55 25 60 25 67 25 75 30 75 40 75 50 65 60 50 75Z" fill="white"/></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lora.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#fdfcfb] text-gray-900">
        {children}
      </body>
    </html>
  );
}
