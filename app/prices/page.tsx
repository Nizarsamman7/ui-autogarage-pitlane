import type { Metadata } from "next";
export const metadata: Metadata = { title: "Prices" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Board"}</p>
      <h1>{"Starting prices. The car decides the rest."}</h1>
      <p className="lede">{"A quote is written before we open the toolbox for anything that is not on this list."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Inspection"}</b><span>{"From €45"}</span></div>
<div className="row"><b>{"Small service"}</b><span>{"From €149"}</span></div>
<div className="row"><b>{"Brake pads, axle"}</b><span>{"From €129"}</span></div>
<div className="row"><b>{"Diagnostic hour"}</b><span>{"€89"}</span></div>
</div>
      
      
    </article>
  );
}
