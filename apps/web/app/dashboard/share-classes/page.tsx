import { configuration } from "@/core/constants/configs";

import Container from "@/components/ui/Container";
import Tile from "@/components/ui/Tile";
import { Button } from "@/components/ui/button";

import ShareClassesTable from "./components/ShareClassesTable";

export const metadata = {
  title: "Share Classes",
};

const ShareClassesPage = async () => {
  return (
    <div className="h-full flex flex-col items-center gap-8">
      <Container>
        <Tile>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">Share Classes</h1>
            <Button href={configuration.paths.shareClasses.new}>
              Add a Share Classes
            </Button>
          </div>
          <ShareClassesTable />
        </Tile>
      </Container>
    </div>
  );
};

export default ShareClassesPage;
