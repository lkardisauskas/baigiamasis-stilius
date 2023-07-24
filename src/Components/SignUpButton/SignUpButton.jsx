import React from "react";
import { StyledButton, StyledLogo, StyledP } from "./SignUpButton.style";

const SignUpButton = ({ icon, background, color }) => {
  return (
    <div>
      <StyledButton
        className="py-2"
        style={{ background: background, color: color }}
      >
        <div className="d-flex gap-3 justify-content-center m-0 p-0 align-items-center">
          <StyledLogo src={icon} alt="prop Logo" />{" "}
          <StyledP className="m-0">sign up</StyledP>
        </div>
      </StyledButton>
    </div>
  );
};

export default SignUpButton;
