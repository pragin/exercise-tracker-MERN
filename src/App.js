import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../src/components/Navbar";
import ExerciseList from "../src/components/ExerciseList";
import CreateExercise from "../src/components/CreateExercise";
import EditExercise from "../src/components/EditExercise";
import DeleteExercise from "../src/components/DeleteExercise";
import CreateUser from "../src/components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route exact path="/" component={ExerciseList} />
        <Route path="/create-exercise" component={CreateExercise} />
        <Route path="/edit-exercise" component={EditExercise} />
        <Route path="/delete-exercise" component={DeleteExercise} />
        <Route path="/create-user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
