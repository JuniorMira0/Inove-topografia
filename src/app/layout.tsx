import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: "Inove Soluções em Topografia | Precisão em Goiás",
  description: "Serviços de topografia, georreferenciamento e agrimensura em Goiânia e região. Especialistas em obras civis, ferrovias e agricultura de precisão.",
  keywords: "topografia, georreferenciamento, agrimensura, goiânia, goiás, drone, obras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Inove Soluções em Topografia",
              "telephone": "+5562992874926",
              "email": "contato@inovesolucoestopografia.com.br",
              "url": "https://www.inovesolucoestopografia.com.br/",
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Goiás"
                },
                {
                  "@type": "State",
                  "name": "Tocantins"
                },
                {
                  "@type": "State",
                  "name": "Maranhão"
                },
                {
                  "@type": "State",
                  "name": "Mato Grosso"
                },
                {
                  "@type": "State",
                  "name": "Pará"
                },
                {
                  "@type": "State",
                  "name": "São Paulo"
                }
              ]
            }
          `}
        </script>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}