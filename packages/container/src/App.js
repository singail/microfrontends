import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <h1>App</h1>
      <hr />
      <hr />
      <MarketingApp />
    </BrowserRouter>
  );
};
