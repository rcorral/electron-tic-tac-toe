// @flow
import type { coordinatesType } from "../reducers/game";

export const PLAY_MOVE = "PLAY_MOVE";

export function playMove(coordinates: coordinatesType) {
	return {
		type: PLAY_MOVE,
		coordinates
	};
}
