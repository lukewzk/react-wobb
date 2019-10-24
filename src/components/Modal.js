import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

class Modal extends Component {
  state = {
    isLogin: true
  };

  changeForm = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    return (
      <>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Log In!
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {this.state.isLogin ? "Log In" : "Sign Up"}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {this.state.isLogin ? <LoginForm /> : <SignupForm />}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  {this.state.isLogin ? "Log In" : "Sign Up"}
                </button>
                <button
                  onClick={this.changeForm}
                  type="button"
                  class="btn btn-primary"
                >
                  {this.state.isLogin ? "Sign Up" : "Cancel"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
