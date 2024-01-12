import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";

import AddNewOptionForm from "../components/AddNewOptionForm/Form";

import { NewCapTableProvider } from "./context/new-cap-table";

export const metadata = {
  title: "Add to Cap Table",
};

const NewOptionCapTablePage = async () => {
  return (
    <div className="h-full flex flex-col gap-8">
      <Container className="max-w-3xl ml-0">
        <Tile className="mb-5">
          <h1 className="text-2xl font-bold">Record Options</h1>
          <p className="text-xs text-zinc-600">
            Keep track of options that were issued outside of Pulley.
          </p>
        </Tile>
        <NewCapTableProvider>
          <AddNewOptionForm />
        </NewCapTableProvider>
      </Container>
    </div>
  );
};

export default NewOptionCapTablePage;
