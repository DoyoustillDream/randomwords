import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Wild Token",
  description: "Where the wild gains are",
  generator: "v0.dev",
  twitter: {
    card: "summary_large_image",
    title: "Wild Token",
    description: "Where the wild gains are",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr1-kKzQbejuSJ4W4Dt7f3a7nHPDz9W9WV.jpeg",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr3-Fco9t2Mx4ue9todYl2t4Wvt3HZgI4F.jpeg"
          type="image/jpeg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
