import Newsletter from "@/components/newsletter";

import Content from "./content";

export const metadata = {
  title: "Tutorials - Simple",
  description: "Page description",
};

export default function Tutorials() {
  return (
    <>
      <Content />
      <Newsletter />
    </>
  );
}
