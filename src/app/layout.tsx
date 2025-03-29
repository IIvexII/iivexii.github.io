import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zafeer Hafeez | React Native Developer & Software Engineer",
  description:
    "Zafeer Hafeez - An experienced React Native developer specialized in mobile app development, frontend, backend, and cybersecurity solutions. View my portfolio and projects.",
  keywords: [
    "Portfolio",
    "Zafeer",
    "Zafeer Name Meaning",
    "Zafeer Hafeez",
    "Zafeer Hafeez Portfolio",
    "Zafeer Developer",
    "Zafeer UpWork",
    "Zafeer Freelancer",
    "React Native Developer",
    "Mobile App Developer",
  ],

  authors: [{ name: "Zafeer" }],
  creator: "Zafeer",
  publisher: "Zafeer",
  robots: "index, follow",
  metadataBase: new URL("https://zafeer.pk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zafeer Hafeez | React Native & Web Development Portfolio",
    description:
      "Personal portfolio of Zafeer Hafeez, a React Native developer specializing in mobile app development with experience in frontend, and backend development.",
    url: "https://zafeer.pk",
    siteName: "Zafeer Portfolio",
    images: [
      {
        url: "/api/og", // Use our dynamic OG image API route
        width: 1200,
        height: 630,
        alt: "Zafeer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zafeer Hafeez | Mobile & Web Developer Portfolio",
    description: "Personal portfolio showcasing React Native and web development projects by Zafeer Hafeez",
    creator: "@Zafeer_Hafeez",
    images: ["/api/og"], // Also use the dynamic OG image here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zafeer",
              url: "https://zafeer.pk",
              email: "contact@zafeer.pk",
              jobTitle: "React Native Developer",
              sameAs: [
                "https://github.com/IIvexII",
                "https://www.linkedin.com/in/zafeer-hafeez/",
                "https://twitter.com/Zafeer_Hafeez",
                "https://www.instagram.com/zafeerhafeez/",
              ],
              knowsAbout: [
                "React Native",
                "TypeScript",
                "JavaScript",
                "Redux",
                "Tailwind",
                "Mobile App Development",
                "Next.js",
                "Performance Optimization",
                "SEO Friendly Websites",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
