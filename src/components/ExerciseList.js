import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Exercise from "./Exercise";
//  import EditExercise from "./EditExercise";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
    this.deleteExercise = this.deleteExercise.bind(this);
  }

  componentWillMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then(res => {
        this.setState({
          exercises: res.data
        });
        // console.log(this.state.exercises);
      })
      .catch(err => console.log("Error: " + err));
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(exercie => exercie._id !== id)
    });
  }

  exeriseList() {
    return this.state.exercises.map(currentExercise => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>{this.exeriseList()}</tbody>
        </table>

        {/* <EditExercise
          exercise={this.state.exercises[0]}
          saveModalDetails={this.saveModalDetails}
        /> */}
      </div>
    );
  }
}
