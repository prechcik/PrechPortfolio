import { NavLink } from "react-router-dom";

const Projects = () => {
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
								My <span className="primary">works</span>{" "}
								<span className="title-bg">works</span>
							</h2>
						</div>
					</div>
				</div>
				{/* TODO WORK LIST */}
				<div className="row isotope-gutter">
					<div className="col-xs-12 col-sm-6 col-md-4 Photoshop Illustrator">
						<figure className="works-item">
							<img src="images/works/1.jpg" alt="" />
							<div className="overlay"></div>
							<figcaption className="works-inner">
								<h4>WebAbacus</h4>
								<p style={{ whiteSpace: "break-spaces" }}>
									IT Service Technician field software that tracks statuses of
									tasks, gathers most crucial information in one place.
								</p>
								<p>
									<NavLink
										className="btn btn-primary"
										to="/webabacus"
										target="_self"
										rel="noreferrer"
									>
										More Screenshots
									</NavLink>
								</p>
								<p>
									<NavLink
										className="btn btn-primary"
										to="https://github.com/prechcik/react-abacus"
										target="_blank"
										rel="noreferrer"
									>
										Github Repository
									</NavLink>
								</p>
							</figcaption>
						</figure>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 Illustrator">
						<figure className="works-item">
							<img src="images/works/2.jpg" alt="" />
							<div className="overlay"></div>
							<figcaption className="works-inner">
								<h4>SP IP Changer</h4>
								<p style={{ whiteSpace: "break-spaces" }}>
									Simple C# Ethernet Adapter Switcher
								</p>
								<p>
									<NavLink
										className="btn-small btn-primary"
										to="https://github.com/prechcik/SP_IPChanger"
										target="_blank"
										rel="noreferrer"
									>
										Github Repository
									</NavLink>
								</p>
							</figcaption>
						</figure>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 Indesign Photoshop">
						<figure className="works-item">
							<img src="images/works/3.jpg" alt="" />
							<div className="overlay"></div>
							<figcaption className="works-inner">
								<h4>Dreambot Scripts</h4>
								<p
									style={{
										whiteSpace: "break-spaces",
										margin: 0,
										padding: 0,
									}}
								>
									Quite a few scripts made in Java for DreamBot Framework
								</p>
								<p style={{ margin: 0, padding: 0 }}>
									<NavLink
										className="btn-small btn-primary"
										to="https://dreambot.org/forums/index.php?/profile/106522-prechcik/content/&type=forums_topic&change_section=1"
										target="_blank"
										rel="noreferrer"
									>
										Dreambot Forums
									</NavLink>
								</p>
							</figcaption>
						</figure>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 Indesign Photoshop">
						<figure className="works-item">
							<img src="images/works/4.jpg" alt="" />
							<div className="overlay"></div>
							<figcaption className="works-inner">
								<h4>BotHeaven BotLog</h4>
								<p
									style={{
										whiteSpace: "break-spaces",
										margin: 0,
										padding: 0,
									}}
								>
									NodeJS Backend + React Frontend dashboard for Dreambot Scripts
								</p>
								<p style={{ margin: 0, padding: 0 }}>
									<NavLink
										className="btn-small btn-primary"
										to="/botlog"
										target="_self"
										rel="noreferrer"
									>
										More Screenshots
									</NavLink>
								</p>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
