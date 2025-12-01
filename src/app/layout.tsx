import { QueryProvider } from "@/providers/query-provider";
import type { Metadata } from "next";
import { DM_Sans, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSA Portal",
  description: "CSA Portal is a platform for creating and sharing web citations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} ${ebGaramond.variable} antialiased`}
      >
        <QueryProvider>
          {children}
          <Toaster richColors position="bottom-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
