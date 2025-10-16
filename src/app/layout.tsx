import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kryptokunts.com"),
  title: "KryptoKunts",
  description:
    "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
  themeColor: "#000000",
  openGraph: {
    title: "KryptoKunts",
    description:
      "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
    url: "https://kryptokunts.com/",
    type: "website",
    images: [
      {
        url: "https://gateway.irys.xyz/oKojIKmXSfwnRD7UamZTGvEdPUuvrIllw36A-rTyGQQ?ext=png",
        width: 1200,
        height: 630,
        alt: "KryptoKunts Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KryptoKunts",
    title: "KryptoKunts",
    description:
      "1,111 degens infected with the Kontagious (so-called due to an admin error) Undead Neuro Toxin.",
    images: [
      "https://gateway.irys.xyz/oKojIKmXSfwnRD7UamZTGvEdPUuvrIllw36A-rTyGQQ?ext=png",
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
        <link rel="icon" type="image/svg+xml" href="/favicon-v2.svg" />
        <link rel="icon" href="/favicon-v2.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-v2.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
