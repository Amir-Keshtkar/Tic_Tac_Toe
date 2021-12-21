import { Button } from "@mui/material";
import React, { Component } from "react";
import './Style.css';

class Block extends Component {
  getBadgeClass = () => {
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="outlined"  fontSize="inherit" Height={50} width={30} size="large" Style="Width:50px; Height: 50px;"
          onClick={() => this.props.ChooseBlock(this.props.id)}
        >

          {(this.props.value === null) ? '' : this.props.value}
        </Button>

      </React.Fragment>
    );
  }
}

export default Block;
