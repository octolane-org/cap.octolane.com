import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";

import NewShareClassForm from "../components/NewShareClassForm";

const NewEquityPlanPage = async () => {
  return (
    <div className="h-full min-h-svh my-8 flex flex-col items-center gap-8">
      <Container className="max-w-xl">
        <Tile>
          <h1 className="text-2xl font-bold">Add Share Class</h1>
          <p className="text-xs text-zinc-600">
            Keep track of shares that were issued outside of this platform.
          </p>
        </Tile>
        <NewShareClassForm />
      </Container>
    </div>
  );
};

export default NewEquityPlanPage;
