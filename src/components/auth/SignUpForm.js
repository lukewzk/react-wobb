import React, { Component } from "react";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container" style={{ marginTop: "3em", height: "100vh" }}>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label>First Name</label>
            <input
              value={this.state.firstname}
              name="firstname"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input
              value={this.state.lastname}
              name="lastname"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              value={this.state.email}
              name="email"
              type="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label>Username</label>
            <input
              value={this.state.username}
              name="username"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              value={this.state.password}
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light">
              Sign Up
              <i className="material-icons right">send</i>
            </button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
