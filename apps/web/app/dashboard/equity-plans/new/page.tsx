import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";

import NewEquityPlanForm from "../components/NewEquityPlanForm";

const NewEquityPlanPage = async () => {
  return (
    <div className="h-full min-h-svh my-8 flex flex-col items-center gap-8">
      <Container className="max-w-xl">
        <Tile>
          <h1 className="text-2xl font-bold">Add Equity Plan</h1>
          <NewEquityPlanForm />
        </Tile>
      </Container>
    </div>
  );
};

export default NewEquityPlanPage;
