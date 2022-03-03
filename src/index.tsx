import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {theme}  from "./utils";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App/>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
