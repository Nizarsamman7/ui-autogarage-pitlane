import type { Metadata } from "next";
export const metadata: Metadata = { title: "Maintenance" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Service"}</p>
      <h1>{"Oil, filters, brakes, and the list in the book."}</h1>
      <p className="lede">{"We follow the maker's interval unless the car is older and the oil is already black. You get the old parts back if you want them."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Small service"}</h2><p>{"Oil, filter, and a check of the common wear items."}</p></article>
<article className="panel"><h2>{"Large service"}</h2><p>{"Adds plugs or fuel filter where the book asks for them."}</p></article>
<article className="panel"><h2>{"Brakes"}</h2><p>{"Pads, discs, and fluid when the test says so."}</p></article>
</div>
      
      
      
    </article>
  );
}
