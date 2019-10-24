import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignupForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">First Name:</Label>
          <Input value={this.state.firstname} onChange={this.handleChange} type="text" name="firstname" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Last Name:</Label>
          <Input value={this.state.lastname} onChange={this.handleChange} type="text" name="lastname" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Username:</Label>
          <Input value={this.state.username} onChange={this.handleChange} type="text" name="username" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password:</Label>
          <Input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword" />
        </FormGroup>
        <FormGroup row>
          <FormGroup check row>
            <Button style={{ margin: "0.5em" }}>Log In</Button>
          </FormGroup>
          <FormGroup check row>
            <Button style={{ margin: "0.5em" }}>Sign Up</Button>
          </FormGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default SignupForm;
