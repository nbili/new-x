import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { Crumb, BreadcrumbsBlue } from "./components/Breadcrumbs";

import Quote, { TextLink } from "./components/Quote";

const HrWrapper = styled.hr`
  margin: 30px 0;
`;

function App() {
  return (
    <div>
      <Quote by="子曰" source="https://ctext.org/analects/xue-er/zhs">
        学而时习之，不亦说乎？有朋自远方来，不亦乐乎？
        <TextLink>人不知而不愠，不亦君子乎？</TextLink>
      </Quote>

      <HrWrapper />

      <TextLink>人不知而不愠，不亦君子乎？</TextLink>

      <HrWrapper />

      <BreadcrumbsBlue>
        <Crumb href={`/home`}>Home</Crumb>
        <Crumb href={`/course`}>Course</Crumb>
        <Crumb href={`/cache`}>Cache</Crumb>
        <Crumb href={`/session`}>Session</Crumb>
      </BreadcrumbsBlue>

      <HrWrapper />

      <GlobalStyles />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
