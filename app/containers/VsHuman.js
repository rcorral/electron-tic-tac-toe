import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Board from "../components/Board";
import * as game from "../actions/game";

function mapStateToProps(state) {
	return {
		board: state.game.board
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(game, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
