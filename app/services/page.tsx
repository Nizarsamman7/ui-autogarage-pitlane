import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Book a bay" };

export default function ServicesPage() {
  return (
    <>
      <div className="strip" />
      <header className="nav">
        <Link className="logo" href="/">Pitlane</Link>
        <nav><Link href="/">Floor</Link></nav>
      </header>
      <section className="pad">
        <h1>Book a bay</h1>
        <InquiryForm
          submitLabel="Request the bay"
          fields={[
            { name: "name", label: "Name" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "plate", label: "Licence plate" },
            { name: "job", label: "Job", type: "select", options: ["Inspection", "Maintenance", "Tyres", "Diagnostics"] },
            { name: "note", label: "Notes", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
