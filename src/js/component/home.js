import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5 d-flex justify-content-center bg-dark p-2 caja mx-auto rounded-lg">
			<div className="mr-2 ml-2 cajita p-2">
				<h1>
					<i className="far fa-clock"></i>
				</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.septimo}</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.sexto}</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.quinto}</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.cuarto}</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.tercero}</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.segundo}</h1>
			</div>
			<div className="mr-2 cajita p-2">
				<h1>{props.primero}</h1>
			</div>
		</div>
	);
}

Home.propTypes = {
	primero: PropTypes.number,
	segundo: PropTypes.number,
	tercero: PropTypes.number,
	cuarto: PropTypes.number,
	quinto: PropTypes.number,
	sexto: PropTypes.number,
	septimo: PropTypes.number
};
