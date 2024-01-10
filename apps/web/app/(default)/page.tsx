import { Fragment } from "react";

import HomepageContent from "./components/Content";
import HomepageHero from "./components/Hero";

export const metadata = {
  title: "ByeByeCarta.com",
  description: "Open Source Cap Table Manager",
};

export default function Home() {
  return (
    <Fragment>
      <HomepageHero />
      <HomepageContent />
    </Fragment>
  );
}
