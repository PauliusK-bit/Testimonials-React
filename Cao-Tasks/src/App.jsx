import { useState } from "react";

import "./App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Cards from "./CardsContent";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <section>
        <Header></Header>
      </section>

      <section>
        <Cards />
      </section>
    </>
  );
}

export default App;
