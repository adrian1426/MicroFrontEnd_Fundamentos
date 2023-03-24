import React from "react";
import ReactDOM from "react-dom";
import Navbar from 'navbar/Navbar';
import Counter from 'counter/Counter';

const App = () => (
  <div>
    <Navbar name="Adrian" />
    Host app

    <hr />
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
