import React from "react";
import { Form } from "react-bootstrap";
import { StyledInput, StyledSubmitButton } from "./RegForm.style";
import RegistrationValidation from "../RegValidation/RegValidation"; // Import the RegistrationValidation component

export const RegForm = () => {
  return (
    <RegistrationValidation>
      {({
        username,
        email,
        password,
        errors,
        handleInputChange,
        handleSubmit,
      }) => (
        <div className="">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <div className="my-3">
                <Form.Label>Name</Form.Label>
                <StyledInput
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                {errors.username && (
                  <div className="error">{errors.username}</div>
                )}
              </div>
              <div>
                <Form.Label>Email</Form.Label>
                <StyledInput
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="my-3">
                <Form.Label>Password</Form.Label>
                <StyledInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
            </Form.Group>
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
          </Form>
        </div>
      )}
    </RegistrationValidation>
  );
};
