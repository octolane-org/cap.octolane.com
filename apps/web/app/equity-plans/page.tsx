import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";
import { Button } from "@/components/ui/button";

import EquityPlansTable from "./components/EquityPlansTable";

const EquityPlansPage = async () => {
  return (
    <div className="h-full min-h-svh my-8 flex flex-col items-center gap-8">
      <Container>
        <Tile>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">Equity Plans</h1>
            <Button>Add Equity Plan</Button>
          </div>
          <EquityPlansTable />
        </Tile>
      </Container>
    </div>
  );
};

export default EquityPlansPage;
