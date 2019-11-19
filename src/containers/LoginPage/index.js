import React from "react";
import { Helmet } from "react-helmet";
import LogInContainer from "./styles/LogInContainer";
import LogInTitle from "./styles/LogInTitle";

const LogIn = () => (
  <div>
    <Helmet>
      <title>Login</title>
      <meta name="description" content="Login page" />
    </Helmet>
    <LogInContainer>
      <LogInTitle>Log In</LogInTitle>
    </LogInContainer>
  </div>
);

export default LogIn;
