import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hours" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Bays"}</p>
      <h1>{"When the doors are up."}</h1>
      <p className="lede">{"The office phone is answered while the bays are open."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Monday–Friday"}</b><span>{"08:00–17:30"}</span></div>
<div className="row"><b>{"Saturday"}</b><span>{"Closed, except booked tyres"}</span></div>
<div className="row"><b>{"Sunday"}</b><span>{"Closed"}</span></div>
</div>
      
      
    </article>
  );
}
