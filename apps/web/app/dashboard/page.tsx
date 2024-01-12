import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { configuration } from "@/core/constants/configs";

import Tile from "@/components/ui/Tile";

export const metadata = {
  title: "Dashboard",
};

const AboutPage = () => {
  return (
    <div className="max-w-2xl">
      <Tile>
        <h1 className="text-2xl font-bold mb-10">
          Welcome to your Open Source Cap Table Management!
        </h1>
        <Link
          className="flex justify-between items-center pb-3 border-b"
          href={configuration.paths.equityPlans.all}
        >
          Equity Plan(s)
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </Link>
        <Link
          className="flex justify-between items-center pb-3 border-b"
          href={configuration.paths.shareClasses.all}
        >
          Share Classes
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </Link>
        <Link
          className="flex justify-between items-center pb-3"
          href={configuration.paths.capTables.all}
        >
          Cap Table
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </Link>
      </Tile>
    </div>
  );
};

export default AboutPage;
