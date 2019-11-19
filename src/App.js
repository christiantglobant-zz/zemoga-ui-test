import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./themes";
import Routes from "./routes";
import { history, store } from "./helpers";

import Header from "./components/Header";

import "./normalize.css";
import Footer from "./components/Footer";

const AppWrapper = styled.div.attrs(() => ({
  id: "AppWrapper"
}))`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <AppWrapper>
          <Header />
          <Routes />
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
