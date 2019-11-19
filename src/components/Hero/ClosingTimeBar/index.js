import React from "react";
import ClosingTimeBarContainer from "./styles/ClosingTimeBarContainer";
import ClosingTimeBarLabel from "./styles/ClosingTimeBarLabel";
import ClosingTimeBarDays from "./styles/ClosingTimeBarDays";
import FontLight from "../../FontLight";

const ClosingTimeBar = () => (
  <ClosingTimeBarContainer>
    <ClosingTimeBarLabel>CLOSING IN</ClosingTimeBarLabel>
    <ClosingTimeBarDays>
      22<FontLight> days</FontLight>
    </ClosingTimeBarDays>
  </ClosingTimeBarContainer>
);

export default ClosingTimeBar;
