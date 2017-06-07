import React from "react";
import { ControlLabel, FormControl, HelpBlock } from "react-bootstrap";

const WhatChanged = props => (
  <div>
    <ControlLabel>
      What improvements did you make in this edit?
    </ControlLabel>
    <FormControl
      componentClass="textarea"
      className="what_changed"
      name="what_changed"
      placeholder="Example: Fixed a typo. It's grammer not grammar"
      value={props.value}
      onChange={props.onChange}
    />
    <HelpBlock>
      Keep it short and descriptive :)
    </HelpBlock>
  </div>
);

export default WhatChanged;