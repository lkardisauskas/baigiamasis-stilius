import React, { Component } from "react";

//AI naudojau cia

class RegistrationValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    const errors = {};

    if (!username) {
      errors.username = "Username is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    this.setState({ errors }, () => {
      if (Object.keys(errors).length === 0) {
        // Call a function here to submit the form
        // For example: this.props.onSubmit(this.state);
      }
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit,
    });
  }
}

export default RegistrationValidation;
