import Career from "@/components/career";
import Cta from "@/components/cta-02";
import Process from "@/components/process";
import Stats from "@/components/stats";
import Team from "@/components/team";

import Intro from "./intro";
import Story from "./story";

export const metadata = {
  title: "About - Simple",
  description: "Page description",
};

export default function About() {
  return (
    <>
      <Intro />
      <Story />
      <Stats />
      <Team />
      <Career />
      <Process />
      <Cta />
    </>
  );
}
