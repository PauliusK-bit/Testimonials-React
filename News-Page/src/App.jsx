import { useState } from "react";
import "./App.css";
import Main from "./MainSection/Main";
import SidebarContent from "./SidebarSection/SidebarContent";

function App() {
  return (
    <>
      <div className="container">
        <div className="content-wrapper">
          <Main />
          <SidebarContent />
        </div>
      </div>
    </>
  );
}

export default App;
