import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid grey;
  border-radius: 5px;
  width: 11vw;
  height: 7vh;

  @media (max-width: 1024px) {
    width: 28vw;
    height: 7vh;
    gap: 1rem;
  }
`;

export const StyledLogo = styled.img`
  width: 25px;
  height: 25px;

  @media (max-width: 700px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledP = styled.p`
  font-size: 2vh;
`;
