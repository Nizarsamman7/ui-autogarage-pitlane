import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Yard"}</p>
      <h1>{"An independent garage on Industrieweg."}</h1>
      <p className="lede">{"Four bays, no showroom, no coffee machine with a queue. We work on daily cars and a few vans."}</p>
      <p>{"Pitlane is not a dealer. We do not sell you the next car. We keep the one you have legal and quiet."}</p>
      
      
      
      
    </article>
  );
}
