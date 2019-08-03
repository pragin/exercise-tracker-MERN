import React, { Component } from "react";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date()
    };

    this.handleSave = this.handleSave.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeduration = this.onChangeduration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.exercise.username,
      description: nextProps.exercise.description,
      duration: nextProps.exercise.duration,
      date: nextProps.exercise.date
    });

    console.log(this.state);
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

  handleSave() {
    const exercise = this.state;
    this.props.saveEditedExercise(exercise);
  }

  render() {
    return (
      // <div
      //   className="modal display-block"
      //   id="exerciseEditModal"
      //   tabIndex="-1"
      //   role="dialog"
      //   aria-labelledby="exerciseEditModalLabel"
      //   aria-hidden="true"
      // >
      //   <div className="modal-dialog" role="document">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h5 className="modal-title">Edit Extercise"</h5>
      //         <button
      //           type="button"
      //           className="close"
      //           data-dismiss="modal"
      //           aria-label="Close"
      //         >
      //           <span aria-hidden="true">&times;</span>
      //         </button>
      //       </div>
      //       <div className="modal-body">
      //         Username:{" "}
      //         <input
      //           type="text"
      //           value={this.state.username}
      //           onChange={this.onChangeUsername}
      //         />
      //         <br />
      //         Description:{" "}
      //         <input
      //           type="text"
      //           value={this.state.description}
      //           onChange={this.onChangeDescription}
      //         />
      //       </div>
      //       <div className="modal-footer">
      //         <button
      //           type="button"
      //           className="btn btn-secondary"
      //           data-dismiss="modal"
      //         >
      //           Close
      //         </button>
      //         <button
      //           type="button"
      //           className="btn btn-primary"
      //           onClick={this.saveEditedExercise}
      //         >
      //           Save changes
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Jewel
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                <span className="modal-lable">Title:</span>
                <input
                  value={this.state.title}
                  onChange={e => this.titleHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Msg:</span>
                <input
                  value={this.state.msg}
                  onChange={e => this.msgHandler(e)}
                />
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
