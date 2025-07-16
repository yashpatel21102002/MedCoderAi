import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MedCoder AI – Smart Clinical Note Analyzer & CPT/ICD Assistant",
  description:
    "MedCoder AI is an intelligent web tool for U.S. healthcare providers to analyze visit notes, validate entered ICD-10 and CPT codes, and suggest missing or more accurate codes based on AI insights. Upload or paste clinical notes and receive structured summaries, code recommendations, and explanations instantly.p",
  keywords:
    "medical coding, ICD-10, CPT codes, clinical note summarizer, healthcare AI, medical billing assistant, CMS compliant codes, AI EHR tool, SOAP note analysis, OpenAI medical",
  authors: [
    {
      name: "Yash Patel",
      url: "https://www.linkedin.com/in/yash-patel-468613210",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
