import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";

import Container from "./ui/Container";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const WorkInProgress = () => {
  return (
    <Container className="flex flex-col items-center justify-center h-[70vh] max-w-2xl">
      <Alert className="border-amber-400 bg-amber-50">
        <FontAwesomeIcon
          className="h-4 w-4 !text-amber-600"
          icon={faBarsProgress}
        />
        <AlertTitle className="text-amber-600">Work in progress!</AlertTitle>
        <AlertDescription className="text-amber-600">
          This page is still under construction. Please check back later.
        </AlertDescription>
      </Alert>
    </Container>
  );
};

export default WorkInProgress;
