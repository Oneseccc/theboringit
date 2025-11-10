import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-cal-sans",
  weight: "600",
});

export const metadata: Metadata = {
  title: "TheBoringIT - Automation & AI Engineer",
  description: "I'm automating TheBoringIT to take the boring and expensive manual work out of your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
