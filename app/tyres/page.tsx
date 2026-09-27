import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tyres" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Rubber"}</p>
      <h1>{"Swap, balance, and a season of storage."}</h1>
      <p className="lede">{"We store a set if you have room nowhere else. Tell us the size or leave the car and we will read it."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Swap and balance"}</b><span>{"From €40"}</span></div>
<div className="row"><b>{"New tyre, fitted"}</b><span>{"Quoted from the size"}</span></div>
<div className="row"><b>{"Storage, one season"}</b><span>{"€50 a set"}</span></div>
<div className="row"><b>{"Puncture"}</b><span>{"If it can be repaired"}</span></div>
</div>
      
      
    </article>
  );
}
