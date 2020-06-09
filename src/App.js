import React from "react";
import "./App.css";
import Date from "./components/date/date";
import Infotable from "./components/infotable/infotable";
import Overview from "./components/overview/overview";

function App() {
  return (
    <div className="App">
      <main className="task_main">
        <div>1841 - The Palo Alto Inn</div>
        <header className="task_header">Room Blocking / Work Orders</header>
        <Date />
        <Infotable />
      </main>
      <div className="task_sidebar">
        <Overview />
      </div>
    </div>
  );
}

export default App;
