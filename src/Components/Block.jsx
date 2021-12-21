import { Button } from "@mui/material";
import React, { Component } from "react";

class Block extends Component {
  getBadgeClass = () => {
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="outlined" size="large"
          onClick={() => this.props.ChooseBlock(this.props.id)}
        >

          {(this.props.value === null) ? 'null ' : this.props.value}
        </Button>

      </React.Fragment>
    );
  }
}

export default Block;
