import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Pitlane Service", template: "%s · Pitlane Service" },
  description: "Full garage website: inspection, tyres, maintenance, diagnostics, prices, fleet work, and bay booking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
