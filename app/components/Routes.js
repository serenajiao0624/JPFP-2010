import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav> Welcome! </nav>
        <div id = "links">
            <Link to = "/">Home</Link>
            <Link to = "/campuses">Campuses</Link>
            <Link to = "/students">Students</Link>
        </div>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route path = "/campuses" component = { AllCampuses } exact/>
          <Route path = "/students" component = { AllStudents } exact/>
        </main>
      </div>
    </Router>
  );
};

export default Routes;