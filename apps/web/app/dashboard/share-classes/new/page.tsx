import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";

import NewShareClassForm from "../components/NewShareClassForm";

export const metadata = {
  title: "Add Share Class",
};

const NewShareClassPage = async () => {
  return (
    <div className="h-full flex flex-col items-center gap-8">
      <Container className="max-w-3xl ml-0">
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

export default NewShareClassPage;
