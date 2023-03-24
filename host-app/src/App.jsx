import React from "react";
import ReactDOM from "react-dom";
import Navbar from 'navbar/Navbar';

const App = () => (
  <div>
    <Navbar />
    Host app
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
