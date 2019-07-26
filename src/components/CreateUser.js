import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.onChageUsername = this.onChageUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChageUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    console.log(user);

    this.setState({
      username: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Create new user</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChageUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="create user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
