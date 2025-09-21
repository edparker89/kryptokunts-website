import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "KryptoKunts - NFT Collection",
  description:
    "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
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
        <meta property="og:title" content="KryptoKunts - NFT Collection" />
        <meta
          property="og:description"
          content="1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin."
        />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/b1a13dad-c448-47d3-adfd-86235d04a5df.jpg?token=hZXyGTEhC8kkp89UET75nwa6MgRLWr_x8gB06lbxXec&height=630&width=1200&expires=33270244782" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="whimsywolves.com" />
        <meta property="twitter:url" content="https://whimsywolves.com/" />
        <meta name="twitter:title" content="KryptoKunts - NFT Collection" />
        <meta
          name="twitter:description"
          content="1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin."
        />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/b1a13dad-c448-47d3-adfd-86235d04a5df.jpg?token=hZXyGTEhC8kkp89UET75nwa6MgRLWr_x8gB06lbxXec&height=630&width=1200&expires=33270244782" />
      </Head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
