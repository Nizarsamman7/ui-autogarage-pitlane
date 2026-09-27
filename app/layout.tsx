import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Pitlane Service", template: "%s · Pitlane Service" },
  description: "Independent garage template for maintenance, tyres, and inspections.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body>{children}</body>
    </html>
  );
}
