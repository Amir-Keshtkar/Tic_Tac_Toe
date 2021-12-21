import React, { Component } from "react";

const classes = {
  badgeFont: {
    fontSize: "1em",
  },
};

class Block extends Component {
  getBadgeClass = () => {
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-sm ml-2 btn-danger"
          onClick={() => this.props.ChooseBlock(this.props.id)}
        >
          
          {this.props.value===null?'null':this.props.value}
        </button>
      </React.Fragment>
    );
  }
}

export default Block;
