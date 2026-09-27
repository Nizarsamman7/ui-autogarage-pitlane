import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Book a bay" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Appointment"}</p>
      <h1>{"Tell us the job and the plate."}</h1>
      <p className="lede">{"We call back the same working day. The form does not take payment."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Request the bay"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"plate","label":"Licence plate"},{"name":"job","label":"Job","type":"select","options":["Inspection","Maintenance","Tyres","Diagnostics"]},{"name":"note","label":"Notes","type":"textarea"}]} />
    </article>
  );
}
