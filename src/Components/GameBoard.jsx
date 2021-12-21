import { Box, Grid } from "@material-ui/core";
import { Button, Alert } from "@mui/material";
import React, { Component } from "react";
import Block from "./Block";



class Board extends Component {

  state = {
    Blockss: Array(9).fill(null),
    Blocks: [
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null },
      { id: 9, value: null },
    ],
    lastId: 'X',
    winner: null,
  };

  render() {
    console.log("Rendered.");

    return (
      <React.Fragment>
        <Button
          variant="contained"
          onClick={this.handleResetAll}>
          Reset Game
        </Button>


        <Box sx={{
            display: 'grid',
            columnGap: 0,
            rowGap: 0,
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
        >
          <Grid>
            {this.renderBlock(this.state.Blocks[0])}
            {this.renderBlock(this.state.Blocks[1])}
            {this.renderBlock(this.state.Blocks[2])}</Grid>
          <Grid>
            {this.renderBlock(this.state.Blocks[3])}
            {this.renderBlock(this.state.Blocks[4])}
            {this.renderBlock(this.state.Blocks[5])}</Grid>
          <Grid>
            {this.renderBlock(this.state.Blocks[6])}
            {this.renderBlock(this.state.Blocks[7])}
            {this.renderBlock(this.state.Blocks[8])}</Grid>
        </Box>




        <Alert severity="info">{this.state.winner != null ? 'Winner is: ' + (this.state.lastId === 'X' ? 'O' : 'X') : ''}</Alert>
      </React.Fragment>
    );
  }
  renderBlock(block) {
    return (
      <Block
        key={block.id}
        id={block.id}
        value={block.value}
        ChooseBlock={this.ChooseBlock}
      />
    );
  };
  ChooseBlock = (id) => {
    let block = [...this.state.Blocks];
    let whoWone = this.state.winner;

    const idx = block.findIndex((block) => {
      return block.id === id;
    });

    let lastId = this.state.lastId;
    if (block[idx].value === null && whoWone === null) {
      block[idx].value = lastId;
      lastId = (lastId === 'X') ? 'O' : 'X';
    }

    let winner = this.IsGameOver(block);
    if (winner) {
      this.setState({ winner: (this.state.lastId === 'X' ? 'O' : 'X') });
    }
    this.setState({ block, lastId });
  };

  IsGameOver(blocks) {
    //let winner = this.state.winner;
    //let blocks = [...this.state.Blocks];
    for (let i = 0; i < 3; i++) {
      if (blocks[i * 3 + 1].value === blocks[i * 3].value &&
        blocks[i * 3 + 1].value === blocks[i * 3 + 2].value &&
        blocks[i * 3 + 1].value != null) {
        //winner = blocks[i * 3 + 1].value;
        return true;
      }
      if (blocks[i + 3].value === blocks[i + 3 - 3].value &&
        blocks[i + 3].value === blocks[i + 3 + 3].value &&
        blocks[i + 3].value != null) {
        //winner = blocks[i * 3].value;
        return true;
      }
    }
    if (((blocks[0].value === blocks[4].value && blocks[4].value === blocks[8].value) ||
      (blocks[2].value === blocks[4].value && blocks[4].value === blocks[6].value)) && blocks[4].value != null) {
      // winner = blocks[4].value;
      return true;
    }
    return false;
    //this.setState({ winner });
    //blocks[0].value = 0;
  };

  handleResetAll = () => {
    let blocks = [...this.state.Blocks];
    let winner = this.state.winner;
    for (let index = 0; index < blocks.length; index++) {
      blocks[index].value = null;
    }
    winner = null;
    this.setState({ blocks, winner });
  };
};

export default Board;