// src/components/common/SectionWrapper.tsx
import { ReactNode } from "react";

export default function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>
    </section>
  );
}
