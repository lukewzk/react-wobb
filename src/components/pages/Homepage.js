import React, { Component } from "react";
import ApplyButton from "../layout/ApplyButton";
import { connect } from "react-redux";

class Homepage extends Component {
  render() {
    const { auth } = this.props;
    const applyBtn = auth.uid ? <ApplyButton /> : null;
    const title = auth.uid ? <h1>Welcome {this.props.profile.firstname}!</h1> : <h1>Please Sign In to Apply for Jobs</h1>
    return (
      <div
        className="job-list container"
        style={{ marginTop: "2em", height: "100vh" }}
      >
        <h1>{title}</h1>
        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">ABC Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Junior Software Engineer</p>
            <p>Job details goes here.</p>
            <p className="grey-text">Posted on 3rd October, 2pm</p>
            {applyBtn}
          </div>
        </div>

        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">DEF Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Front Office Assistant</p>
            <p>Job details goes here.</p>
            <p className="grey-text">Posted on 9th October, 1pm</p>
            {applyBtn}
          </div>
        </div>

        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">GHI Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Project Engineer</p>
            <p>Job details goes here.</p>
            <p className="grey-text">Posted on 21rd October, 10am</p>
            {applyBtn}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Homepage);
