import type { Metadata } from 'next';
import Script from 'next/script';
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
  title: 'Igor Soares | Psicólogo Online para Burnout e Ansiedade | CRP 03/27924',
  description: 'Psicólogo clínico com foco em Burnout e Ansiedade. Atendimento online e sigiloso para todo o Brasil. CRP 03/27924.',
  icons: {
    icon: 'https://raw.githubusercontent.com/igorcsoares1/LANDING-IGOR/main/igor-foto-profissional.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18498026449"
        />
        <Script id="google-tag-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18498026449');
          `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18498026449/y5ziCJqVypsdENH3xfRE',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#fdfcfb] text-gray-900">
        {children}
      </body>
    </html>
  );
}
