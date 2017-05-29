// @flow
import { PLAY_MOVE } from "../actions/game";

type playValueType = "x" | "o";

type rowValuesType = playValueType | "";

type boardRowType = [rowValuesType, rowValuesType, rowValuesType];

export type boardType = [boardRowType, boardRowType, boardRowType];

export type boardStateType = {
  board: boardType,
  playerTurn: playValueType
};

export type coordinatesType = [number, number];

export type actionType = {
  type: string,
  coordinates: ?coordinatesType
};

const initialState = {
  board: Array(3).fill(Array(3).fill("")),
  playerTurn: "x"
};

export default function board(
  state: boardStateType = initialState,
  action: actionType
) {
  switch (action.type) {
    case PLAY_MOVE:
      let { coordinates } = action;

      let newBoard = state.board.map((row, i): boardRowType => {
        if (i === coordinates[0]) {
          let newRow = row.slice(0);
          newRow[coordinates[1]] = state.playerTurn;

          return newRow;
        }

        return row;
      });

      return {
        board: newBoard,
        playerTurn: state.playerTurn === "x" ? "o" : "x"
      };
    default:
      return state;
  }
}
