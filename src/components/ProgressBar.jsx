import PropTypes from "prop-types";

const ProgressBar = ({ title, value }) => {
	return (
		<>
			<div className="progress clear">
				<div className="skill-name">{title}</div>
				<div className="skill-bar">
					<div className="bar" style={{ width: value + "%" }}></div>
				</div>
				<div className="skill-lavel" data-skill-value={value + "%"}>
					{value + "%"}
				</div>
			</div>
		</>
	);
};

ProgressBar.propTypes = {
	title: PropTypes.string,
	value: PropTypes.node.isRequired,
};

export default ProgressBar;
