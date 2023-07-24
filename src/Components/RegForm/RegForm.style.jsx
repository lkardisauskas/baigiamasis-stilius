import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledInput = styled(Form.Control)`
  font-size: 20px;

  &:focus {
    border-color: #f2877d;
    box-shadow: 0 0 0 0.1rem #f2877d;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const StyledSubmitButton = styled.button`
  background: #f2877d;
  color: white;
  border: none;
  width: 100%;
  height: 4vh;
  border-radius: 5px;
  font-size: 2.5vh;
`;
