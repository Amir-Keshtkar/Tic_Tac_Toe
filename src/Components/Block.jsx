import { Button } from "@mui/material";
import React, { Component } from "react";
import Style from './Style.css';

class Block extends Component {
  getBadgeClass = () => {
  };

  render() {
    return (
      <React.Fragment>
        <Button sx={{ border: 2 , fontSize: 70}} variant="outlined"  fontSize="inherit" Height={100} width={100} size="large" Style=" font_size:4em;  Width:100px; Height: 100px;"
          onClick={() => this.props.ChooseBlock(this.props.id)}
        >
          {(this.props.value === null) ? '' : this.props.value}
        </Button>

      </React.Fragment>
    );
  }
}

export default Block;
