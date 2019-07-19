import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
// import Student from "./components/pages/Student";
import Instructor from "./components/pages/Instructor";
import Add from "./components/pages/Add";

import Navbar from "./components/Navbar";
import Student from "./components/pages/Student"
// import Books from "./pages/Books"


function App() {
  return (
    <Router>
<div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/instructor" component={Instructor} />
          <Route exact path="/add" component={Add} />


        </Switch>
</div>
    </Router>
  );
}

export default App;

