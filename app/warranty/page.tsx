import type { Metadata } from "next";
export const metadata: Metadata = { title: "Warranty" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"After"}</p>
      <h1>{"What we stand behind."}</h1>
      <p className="lede">{"Parts we fit carry the maker's warranty. Our labour on that job is covered for six months. Wear items are not a warranty."}</p>
      <p>{"Come back if a noise we were meant to fix is still there. Do not wait until the next inspection."}</p>
      
      
      
      
    </article>
  );
}
