import Link from "next/link";

const bays = [
  ["01", "Inspection", "APK while you wait"],
  ["02", "Maintenance", "Oil, filters, brakes"],
  ["03", "Tyres", "Swap, balance, storage"],
  ["04", "Diagnostics", "Warning lights and electrical"],
];

export default function HomePage() {
  return (
    <>
      <div className="strip" />
      <div className="top"><span>Bays open 08:00–17:30</span><span>Industrieweg 12</span></div>
      <header className="nav">
        <Link className="logo" href="/">Pitlane</Link>
        <nav>
          <a href="#bays">Bays</a>
          <Link href="/services">Book a bay</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Service.<br />Not a showroom.</h1>
        <div className="plate">Independent garage<br />APK · Tyres · Maintenance</div>
      </section>
      <section className="bays" id="bays">
        {bays.map(([code, title, text]) => (
          <article className="bay" key={code}>
            <span className="code">{code}</span>
            <div><h2>{title}</h2><p>{text}</p></div>
            <Link href="/services">Book</Link>
          </article>
        ))}
      </section>
    </>
  );
}
