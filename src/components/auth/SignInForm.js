import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    const { authError } = this.props;
    return (
      <div className="container" style={{ marginTop: "3em", height: "100vh" }}>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label>Email</label>
            <input
              value={this.state.username}
              name="email"
              type="email"
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
            <button class="btn waves-effect waves-light">
              Sign In
              <i class="material-icons right">send</i>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
