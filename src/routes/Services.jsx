import { NavLink } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const Services = () => {
	return (
		<>
			<NavLink to="/" className="page-close">
				<i className="tf-ion-close"></i>
			</NavLink>
			<div className="col-xs-12 col-lg-offset-1 col-lg-10">
				<div className="page-title text-center">
					<h2>
						<span className="primary">Services</span>{" "}
						<span className="title-bg">Services</span>
					</h2>
					<p>Variety of services that I can provide</p>
				</div>

				<div className="hexagon-menu services clear">
					<div className="service-hex">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 372 424.5"
							xml:space="preserve"
						>
							<g>
								<polygon
									className="st0"
									points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"
								/>
								<polygon
									className="st1"
									points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"
								/>
							</g>
						</svg>

						<div className="content">
							<div className="icon">
								<i className="et-line icon-lightbulb"></i>
							</div>
							<h4>
								BackEnd <br /> Developement
							</h4>
							<p>
								Backend using Laravel <br />
								or custom frameworks.
							</p>
						</div>
					</div>
					<div className="service-hex">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 372 424.5"
							xml:space="preserve"
						>
							<g>
								<polygon
									className="st0"
									points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"
								/>
								<polygon
									className="st1"
									points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"
								/>
							</g>
						</svg>
						<div className="content">
							<div className="icon">
								<i className="et-line icon-mobile"></i>
							</div>
							<h4>
								FrontEnd <br /> Developement
							</h4>
							<p>
								Responsive and user
								<br /> friendly websites using
								<br /> React framework.
							</p>
						</div>
					</div>
					<div className="service-hex">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 372 424.5"
							xml:space="preserve"
						>
							<g>
								<polygon
									className="st0"
									points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"
								/>
								<polygon
									className="st1"
									points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"
								/>
							</g>
						</svg>
						<div className="content">
							<div className="icon">
								<i className="et-line icon-profile-male"></i>
							</div>
							<h4>C#</h4>
							<p>
								Management apps <br />
								using MySQL or PgSQL
							</p>
						</div>
					</div>
					<div className="service-hex">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 372 424.5"
							xml:space="preserve"
						>
							<g>
								<polygon
									className="st0"
									points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"
								/>
								<polygon
									className="st1"
									points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"
								/>
							</g>
						</svg>
						<div className="content">
							<div className="icon">
								<i className="et-line icon-heart"></i>
							</div>
							<h4>Java</h4>
							<p>
								Custom Java <br />
								applications
							</p>
						</div>
					</div>
					<div className="service-hex">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 372 424.5"
							xml:space="preserve"
						>
							<g>
								<polygon
									className="st0"
									points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"
								/>
								<polygon
									className="st1"
									points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"
								/>
							</g>
						</svg>
						<div className="content">
							<div className="icon">
								<i className="et-line icon-hotairballoon"></i>
							</div>
							<h4>DreamBot</h4>
							<p>
								Scripts for <br />
								Dreambot Framework
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
