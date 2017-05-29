// @flow
import React, { Component } from "react";

import { boardType } from "../reducers/game.js";
import styles from "./Board.css";
import Cell from "./Cell.js";

class Board extends Component {
  props: {
    board: boardType,
    playMove: () => void
  };

  render() {
    const { board, playMove } = this.props;

    return (
      <div className={styles.board}>
        {board.map((row, x) => {
          return row.map((cell, y) => {
            let coordinates = [x, y];

            return (
              <Cell
                coordinates={coordinates}
                onClick={playMove.bind(null, coordinates)}
                value={board[x][y]}
              />
            );
          });
        })}
      </div>
    );
  }
}

export default Board;
