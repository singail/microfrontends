import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <h1>App test</h1>
      <hr />
      <MarketingApp />
    </BrowserRouter>
  );
};
