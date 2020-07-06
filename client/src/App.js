import React from "react";
import Add from "./components/actions/Add";
import "./App.css";
import DatabaseDisplay from "./components/DatabaseDisplay";

function App() {
  return (
    <div className="App">
      <h1>Template Database</h1>
      <h2>Database</h2>
      <DatabaseDisplay />
      <h2>Add Record to Database</h2>
      <Add />
      <h2>Delete </h2>
    </div>
  );
}

export default App;
