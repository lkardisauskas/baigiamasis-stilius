import styled from "styled-components";

export const Background = styled.div`
  padding: 3rem;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const MainContainer = styled.div`
  border: 3px solid #f2877d;
  border-radius: 15px;
  padding: 0;
  margin: auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    border: 0;
  }
`;

export const LeftSideformBackground = styled.div`
  background: #f2877d;
  border-radius: 10px 0 0 10px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    border-radius: 0;
  }
`;

export const StyledLogo = styled.img`
  height: 70px;
`;

export const H5color = styled.h5`
  color: white;
  margin-left: 50px;
  margin-right: 50px;
`;

export const PaddingText = styled.div`
  padding: 10.5rem;

  @media (max-width: 1024px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const RightSideformBackground = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledAnchor = styled.a`
  color: #f2877d;
  text-decoration: none;
`;
