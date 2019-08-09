import React, { Component } from "react";
import DatePicker from "react-datepicker";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      description: "",
      duration: "",
      date: ""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      username: nextProps.username,
      description: nextProps.description,
      duration: nextProps.duration,
      date: nextProps.date
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

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date
    });
  }

  handleSaveChanges(e) {
    e.preventDefault();
    const exercise = this.state;
    this.props.saveModalExercise(exercise);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalScrollable"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Edit Exercise
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
              <form>
                <div className="form-group">
                  <label htmlFor="username" className="col-form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="col-form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="duration" className="col-form-label">
                    Duration:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date" className="col-form-label">
                    Date:
                  </label>
                  <br />
                  <DatePicker
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    selected={Date.parse(this.state.date)}
                    onChange={this.onChangeDate}
                  />
                </div>
              </form>
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
                onClick={this.handleSaveChanges}
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

export default Modal;
