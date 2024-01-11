import { configuration } from "@/core/constants/configs";

import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";
import { Button } from "@/components/ui/button";

import OptionsTable from "./components/OptionsTable";

const EquityPlansPage = async () => {
  return (
    <div className="h-full min-h-svh my-8 flex flex-col items-center gap-8">
      <Container className="max-w-4xl">
        <Tile>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">Cap Table</h1>
            <Button href={configuration.paths.capTables.new}>
              Add Signed Options
            </Button>
          </div>
          <OptionsTable />
        </Tile>
      </Container>
    </div>
  );
};

export default EquityPlansPage;
