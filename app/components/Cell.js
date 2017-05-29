import React from "react";
import PropTypes from "prop-types";

import styles from "./Cell.css";

const Cell = ({ coordinates, onClick, value }) => {
	let status = value ? "" : styles["cell-unplayed"];

	return (
		<div
			onClick={onClick}
			className={`${styles.cell} ${status} cell-${coordinates[0]}-${coordinates[1]}`}
		>
			{value}
		</div>
	);
};

Cell.propTypes = {
	onClick: PropTypes.func.isRequired,
	coordinates: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired
};

export default Cell;
