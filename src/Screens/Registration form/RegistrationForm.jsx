import React from "react";
import {
  Background,
  H5color,
  LeftSideformBackground,
  MainContainer,
  PaddingText,
  RightSideformBackground,
  StyledAnchor,
  StyledLogo,
} from "./registrationForm.style";

import phonePicture from "./img/illustration.svg";
import logo from "./img/logo.svg";
import facebookLogo from "../../Components/SignUpButton/img/facebook.svg";
import googleLogo from "../../Components/SignUpButton/img/google.svg";

import SignUpButton from "../../Components/SignUpButton/SignUpButton";
import { RegForm } from "../../Components/RegForm/RegForm";

export const RegistrationForm = () => {
  return (
    <Background>
      <MainContainer className="container d-flex">
        <LeftSideformBackground className="d-flex flex-column">
          <div className="mx-3">
            <StyledLogo className="m-4" src={logo} alt="logo" />
          </div>
          <img className="mx-4" src={phonePicture} alt="Phone picture" />
          <PaddingText className="d-flex justify-content-center text-center py-4">
            <H5color>Start free & Get Attractive offers Today !</H5color>
          </PaddingText>
        </LeftSideformBackground>

        <RightSideformBackground className="px-5 py-4">
          <div>
            <h1>Get Started</h1>
          </div>
          <div>
            <p className="m-0">Already have an account?</p>
            <StyledAnchor className="m-0" href="#">
              Log In
            </StyledAnchor>
            <div className="d-flex justify-content-center gap-5 my-3">
              <SignUpButton
                color="black"
                background="white"
                icon={googleLogo}
              />
              <SignUpButton
                color="white"
                background="#1877F2"
                icon={facebookLogo}
              />
            </div>
            <div className="py-3 text-center">
              <h1>Or</h1>
            </div>
            <RegForm />
          </div>
        </RightSideformBackground>
      </MainContainer>
    </Background>
  );
};
