 import type { Metadata } from "next";

 export const metadata: Metadata = {
   title: 'Amol Soans | Senior Frontend Developer',
   description: 'Frontend Developer with 3+ years of experience in React, Angular, and modern web technologies. Specializing in high-performance web applications and UI development.',
   keywords: ['frontend developer', 'web development', 'React', 'Angular', 'TypeScript', 'JavaScript', 'UI/UX', 'Next.js', 'performance optimization', 'responsive design'],
   authors: [{ name: 'Amol Soans' }],
   creator: 'Amol Soans',
   robots: {
     index: true,
     follow: true,
     googleBot: {
       'max-snippet': -1,
       'max-image-preview': 'large',
       'max-video-preview': -1
     }
   },
   alternates: {
     canonical: 'https://amoldericksoans.com'
   },
   openGraph: {
     type: 'profile',
     url: 'https://amoldericksoans.com',
     title: 'Amol Soans | Frontend Development Portfolio',
     description: 'Expert Frontend Developer specializing in building scalable web applications. View my projects and technical expertise.',
     siteName: 'Amol Soans - Web Development Portfolio',
     images: [
       {
         url: '/images/portfolio-preview.jpg',
         width: 1200,
         height: 630,
         alt: 'Frontend Development Projects by Amol Soans'
       }
     ]
   },
   twitter: {
     card: 'summary_large_image',
     title: 'Amol Soans - Frontend Development Portfolio',
     description: 'View my latest web development projects and technical skills',
     images: ['/images/portfolio-preview.jpg']
   },
   other: {
     'mobile-web-app-capable': 'yes',
     'apple-mobile-web-app-capable': 'yes',
     'application-name': 'Amol Soans Portfolio',
     'apple-mobile-web-app-title': 'Amol Soans',
   },
   verification: {
     google: 'google-verification-code',
     yandex: 'yandex-verification-code'
   },
   metadataBase: new URL('https://amoldericksoans.com'),
   applicationName: 'Amol Soans Portfolio',
   generator: 'Next.js',
   formatDetection: {
     telephone: true,
     date: true,
     address: true,
     email: true,
   },
   icons: {
     icon: '/favicon.ico',
     apple: [
       { url: '/apple-icon.png', sizes: '180x180' }
     ]
   }
 }
// }

import '../app/ui/global.css';

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}