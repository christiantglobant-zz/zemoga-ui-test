import React from "react";
import { Helmet } from "react-helmet";
import NotFoundContainer from "./styles/NotFoundContainer";
import NotFoundTitle from "./styles/NotFoundTitle";

const NotFound = () => (
  <div>
    <Helmet>
      <title>PageNotFound</title>
      <meta name="description" content="PageNotFound" />
    </Helmet>
    <NotFoundContainer>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
    </NotFoundContainer>
  </div>
);

export default NotFound;
