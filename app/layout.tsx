import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deshna Jain · Software Developer",
  description:
    "Software Developer Intern at KatalX Technologies (Signalz). Building APIs, real-time systems, and full-stack web applications with Node.js, TypeScript, React and Next.js.",
  keywords: [
    "Deshna Jain",
    "Software Developer",
    "Full-Stack Developer",
    "Node.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Indore",
  ],
  authors: [{ name: "Deshna Jain" }],
  openGraph: {
    title: "Deshna Jain · Software Developer",
    description:
      "Building production-grade APIs, full-stack apps, and real-time systems. Node.js · TypeScript · React · PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans bg-[#F5F0E8] text-[#1A1A2E] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
