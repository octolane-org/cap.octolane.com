import { configuration } from "@/core/constants/configs";

import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";
import { Button } from "@/components/ui/button";

import DownloadCaptable from "./components/DownloadCaptable";
import OptionsTable from "./components/OptionsTable";

export const metadata = {
  title: "Cap Table",
};

const CapTablePage = async () => {
  return (
    <div className="h-full flex flex-col items-center gap-8">
      <Container>
        <Tile>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">Cap Table</h1>
            <div className="flex gap-2">
              <DownloadCaptable />
              <Button href={configuration.paths.capTables.new}>
                Add Signed Options
              </Button>
            </div>
          </div>
          <OptionsTable />
        </Tile>
      </Container>
    </div>
  );
};

export default CapTablePage;
