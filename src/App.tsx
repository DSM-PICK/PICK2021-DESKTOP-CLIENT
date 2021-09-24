import { FC } from "react";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyles";
import RootRouter from "./router";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Global styles={reset} />
      <RootRouter />
    </>
  );
};

export default App;
