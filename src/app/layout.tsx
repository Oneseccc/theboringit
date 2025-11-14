import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
