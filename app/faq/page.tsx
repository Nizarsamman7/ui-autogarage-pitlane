import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Floor"}</p>
      <h1>{"Before you drop the car."}</h1>
      <p className="lede">{"We need the key and a number that works."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Do I need an appointment?"}</summary><p>{"Yes for service and tyres. Inspections sometimes fit the same morning."}</p></details>
<details className="panel"><summary>{"Can I wait?"}</summary><p>{"Yes for inspection and a simple service. Not for a strip-down."}</p></details>
<details className="panel"><summary>{"Do you lend a car?"}</summary><p>{"No. We can point you at a hire desk."}</p></details>
<details className="panel"><summary>{"Which brands?"}</summary><p>{"Daily European and Japanese cars, and light vans."}</p></details>
</div>
      
    </article>
  );
}
