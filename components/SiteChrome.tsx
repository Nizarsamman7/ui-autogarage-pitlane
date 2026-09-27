import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="strip" />
      <div className="top"><span>Bays open 08:00–17:30</span><span>Industrieweg 12</span></div>
      <header className="nav">
        <Link className="logo" href="/">Pitlane</Link>
        <nav><Link href="/services">Book a bay</Link></nav>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Floor</Link>
        <Link href="/services">Book</Link>
        <Link href="/apk">Inspection</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/tyres">Tyres</Link>
        <Link href="/diagnostics">Diagnostics</Link>
        <Link href="/prices">Prices</Link>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/fleet">Fleet</Link>
        <Link href="/warranty">Warranty</Link>
        <Link href="/hours">Hours</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
