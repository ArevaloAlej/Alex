import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.fullName} | ${profile.title}`,
    template: `%s | ${profile.fullName}`,
  },
  description: profile.valueProposition,
  keywords: [profile.fullName, profile.title, ...profile.industries],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.fullName} | ${profile.title}`,
    description: profile.valueProposition,
    siteName: `${profile.fullName} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} | ${profile.title}`,
    description: profile.valueProposition,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.title,
    description: profile.summary,
    url: siteUrl,
    sameAs: [profile.linkedinUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
