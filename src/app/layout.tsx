import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whismy Wolves - NFT Collection",
  description:
    "Dive into a world where playfulness meets creativity, and every Whimsy Wolf is a ticket to vibes.✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://whimsywolves.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Whismy Wolves - NFT Collection" />
        <meta
          property="og:description"
          content="Dive into a world where playfulness meets creativity, and every Whimsy Wolf is a ticket to vibes.✨"
        />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/b1a13dad-c448-47d3-adfd-86235d04a5df.jpg?token=hZXyGTEhC8kkp89UET75nwa6MgRLWr_x8gB06lbxXec&height=630&width=1200&expires=33270244782" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="whimsywolves.com" />
        <meta property="twitter:url" content="https://whimsywolves.com/" />
        <meta name="twitter:title" content="Whismy Wolves - NFT Collection" />
        <meta
          name="twitter:description"
          content="Dive into a world where playfulness meets creativity, and every Whimsy Wolf is a ticket to vibes.✨"
        />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/b1a13dad-c448-47d3-adfd-86235d04a5df.jpg?token=hZXyGTEhC8kkp89UET75nwa6MgRLWr_x8gB06lbxXec&height=630&width=1200&expires=33270244782" />
      </Head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
