import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Fleet" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Vans"}</p>
      <h1>{"A few company vans, on a schedule."}</h1>
      <p className="lede">{"We keep a standing morning for fleets of up to eight vehicles. Larger accounts need a written list."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Ask about fleet"} fields={[{"name":"company","label":"Company"},{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"count","label":"How many vehicles"}]} />
    </article>
  );
}
