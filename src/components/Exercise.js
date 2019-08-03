import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Modal from "./Modal";

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      description: "",
      duration: "",
      date: ""
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.saveModalExercise = this.saveModalExercise.bind(this);
  }

  componentWillMount() {
    this.setState({
      id: this.props.exercise._id,
      username: this.props.exercise.username,
      description: this.props.exercise.description,
      duration: this.props.exercise.duration,
      date: this.props.exercise.date
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  saveModalExercise(exercise) {
    axios
      .post("http://localhost:5000/exercises/update/" + exercise.id, exercise)
      .then(res => {
        this.setState({
          id: res.data._id,
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: res.data.date
        });
      });
  }

  render() {
    return (
      <tr>
        <td>{this.state.username}</td>
        <td>{this.state.description}</td>
        <td>{this.state.duration}</td>
        <td>{this.state.date.substring(0, 10)}</td>
        <td>
          {/* <Link to={"/edit/" + this.props.exercise._id}> */}
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
            onClick={this.toggleModal}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          {/* </Link>{" "} */}|{" "}
          <button
            onClick={() => this.props.deleteExercise(this.props.exercise._id)}
            className="btn btn-outline-danger btn-sm"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <Modal
            // show={this.state.toggleModal}
            saveModalExercise={this.saveModalExercise}
            id={this.state.id}
            username={this.state.username}
            description={this.state.description}
            duration={this.state.duration}
            date={this.state.date}
          />
        </td>
      </tr>
    );
  }
}

export default Exercise;
