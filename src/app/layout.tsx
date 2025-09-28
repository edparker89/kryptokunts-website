import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KryptoKunts - NFT Collection",
  description:
    "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
  openGraph: {
    title: "KryptoKunts - NFT Collection",
    description:
      "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
    url: "https://kryptokunts.com/",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/b1a13dad-c448-47d3-adfd-86235d04a5df.jpg?token=hZXyGTEhC8kkp89UET75nwa6MgRLWr_x8gB06lbxXec&height=630&width=1200&expires=33270244782",
        width: 1200,
        height: 630,
        alt: "KryptoKunts Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KryptoKunts",
    title: "KryptoKunts - NFT Collection",
    description:
      "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
    images: [
      "https://opengraph.b-cdn.net/production/images/b1a13dad-c448-47d3-adfd-86235d04a5df.jpg?token=hZXyGTEhC8kkp89UET75nwa6MgRLWr_x8gB06lbxXec&height=630&width=1200&expires=33270244782",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* You can also add Apple touch icon / manifest if needed */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className="antialiased">
        {/* If you want the fog effect globally, uncomment: */}
        {/* <FogBackground /> */}
        {children}
      </body>
    </html>
  );
}
