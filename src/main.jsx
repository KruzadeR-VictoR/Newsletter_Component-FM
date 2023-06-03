import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PageRoute from "./Route.jsx";

const theme = extendTheme({
  colors: {
    Tomato: "hsl(4, 100%, 67%)",
    DarkSlateGrey: " hsl(234, 29%, 20%)",
    CharcoalGrey: " hsl(235, 18%, 26%)",
    Grey: " hsl(231, 7%, 60%)",
    White: "hsl(0, 0%, 100%)",
  },
  fontWeighgts: {
    normal: "400",
    bold: "700",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PageRoute/>
    </ChakraProvider>
  </React.StrictMode>
);
