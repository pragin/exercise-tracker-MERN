import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeduration = this.onChangeduration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users").then(res => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username),
          username: res.data[0].username
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeduration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <h1>Create New Exercise Log</h1>
        <form onSubmit={this.onSubmit}>
          {/**Select user controls */}
          <label> Username:</label>
          <select
            ref="userInput"
            required
            className="form-control"
            value={this.state.username}
            onChange={this.onChangeUsername}
          >
            {this.state.users.map(user => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>

          {/**Description input */}
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.descrition}
              onChange={this.onChangeDescription}
            />
          </div>

          {/**Duration input */}
          <div className="form-group">
            <label> Duration (in minutes):</label>
            <input
              type="number"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeduration}
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Exercise Log{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
