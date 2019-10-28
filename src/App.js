import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/pages/Homepage";
import JobDetails from "./components/pages/JobDetails";
import SignIn from "./components/auth/SignInForm";
import SignUp from "./components/auth/SignUpForm";
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ background: "#DBE2EF" }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/job-details/:id" component={JobDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
