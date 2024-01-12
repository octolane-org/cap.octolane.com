import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";

import NewEquityPlanForm from "../components/NewEquityPlanForm";

export const metadata = {
  title: "Add Equity Plan",
};

const NewEquityPlanPage = async () => {
  return (
    <div className="h-full flex flex-col items-center gap-8">
      <Container className="max-w-3xl ml-0">
        <Tile>
          <h1 className="text-2xl font-bold">Add Equity Plan</h1>
          <NewEquityPlanForm />
        </Tile>
      </Container>
    </div>
  );
};

export default NewEquityPlanPage;
