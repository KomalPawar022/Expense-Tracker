import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./context";

import App from "./App";
import theme from "./theme";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <GlobalState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobalState>,
);
