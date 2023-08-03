import { ScrollContainer } from "react-nice-scroll";
import { NavLink } from "react-router-dom";

const Resume = () => {
	return (
		<>
			<NavLink to="/" className="page-close">
				<i className="tf-ion-close"></i>
			</NavLink>

			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<div className="page-title text-center">
							<h2>
								My <span className="primary">history</span>{" "}
								<span className="title-bg">Resume</span>
							</h2>
							<p>My short history of work</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-6">
						<div className="history-block">
							<div className="section-title light clear">
								<h3>Education</h3>
							</div>
							<ScrollContainer>
								<div className="history-scroller">
									<div className="history-item">
										<div className="history-icon">
											<span className="history-hex"></span>
											<i className="tf-documents5"></i>
										</div>
										<div className="history-text">
											<h5>
												Zespół Szkół Technicznych nr 1 w Tarnowie-Mościcach
											</h5>
											<span>2009 - 2013</span>
										</div>
									</div>
								</div>
							</ScrollContainer>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6">
						<div className="history-block">
							<div className="section-title light clear">
								<h3>Experiences</h3>
							</div>
							<ScrollContainer>
								<div className="history-scroller">
									<div className="history-item">
										<div className="history-icon">
											<span className="history-hex"></span>
											<i className="tf-documents5"></i>
										</div>
										<div className="history-text">
											<h5>Suntar Professional Services Sp. z. o. o</h5>
											<span>2021 - 2023</span>
											<p>IT Technician / Programmer</p>
										</div>
									</div>
									<div className="history-item">
										<div className="history-icon">
											<span className="history-hex"></span>
											<i className="tf-documents5"></i>
										</div>
										<div className="history-text">
											<h5>MetalMix Tarnów</h5>
											<span>2021 - 2021</span>
											<p>CNC Operator</p>
										</div>
									</div>
									<div className="history-item">
										<div className="history-icon">
											<span className="history-hex"></span>
											<i className="tf-documents5"></i>
										</div>
										<div className="history-text">
											<h5>PR Stone Corp</h5>
											<span>2016 - 2019</span>
											<p>CAD Drafter, CNC Operator</p>
										</div>
									</div>
								</div>
							</ScrollContainer>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume;
