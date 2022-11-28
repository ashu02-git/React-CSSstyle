import { React } from "react";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledCompornents } from "./components/StyledCompornents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledCompornents />
      <Emotion />
    </div>
  );
};
