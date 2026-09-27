import type { Metadata } from "next";
export const metadata: Metadata = { title: "Diagnostics" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Lights"}</p>
      <h1>{"Warning lights and electrical faults."}</h1>
      <p className="lede">{"A scan is the start, not the invoice. We explain the code in plain language before we replace a part."}</p>
      <p>{"Some faults need a road test. Leave the car for the morning if the light is intermittent."}</p>
      
      
      
      
    </article>
  );
}
