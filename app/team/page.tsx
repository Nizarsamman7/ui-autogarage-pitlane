import type { Metadata } from "next";
export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"People"}</p>
      <h1>{"Who is on the floor."}</h1>
      <p className="lede">{"You will meet the person who worked on the car, not a handover desk."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Rami"}</h2><p>{"Inspections and brakes."}</p></article>
<article className="panel"><h2>{"Sofie"}</h2><p>{"Diagnostics and electrical."}</p></article>
<article className="panel"><h2>{"Noah"}</h2><p>{"Tyres and service."}</p></article>
</div>
      
      
      
    </article>
  );
}
