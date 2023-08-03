import { NavLink } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

const About = () => {
	return (
		<>
			<NavLink to="/" className="page-close">
				<i className="tf-ion-close"></i>
			</NavLink>
			<div className="row">
				<div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
					<div className="page-title text-center">
						<h2>
							About <span className="primary">me</span>{" "}
							<span className="title-bg">Dawid Precht</span>
						</h2>
						<p>
							Hobbyist frontend/backend developer with passion for automation,
							data collecting, admin dashboards.
						</p>
					</div>
				</div>

				<div className="col-xs-12 col-md-6">
					<div className="about-author">
						<figure className="author-thumb">
							<img src="images/author.jpg" alt="" />
						</figure>
						<div className="author-desc">
							<p>
								<b>Date of birth:</b> 5 February, 1993
							</p>
							<p>
								<b>Language:</b> Polish, English (fluent)
							</p>
							<p>
								<b>Develops in:</b> PHP, C#, Java, JavaScript, NodeJS,
								TypeScript
							</p>
							<p>
								<b>Freelance:</b> Available
							</p>
						</div>
					</div>
				</div>

				<div className="col-xs-12 col-md-6">
					<div className="section-title clear">
						<h3>Skills</h3>
					</div>
					<div className="skill-wrapper">
						<ProgressBar title="Photoshop" value="60" />
						<ProgressBar title="After Effects" value="30" />
						<ProgressBar title="Word/Excel" value="75" />
						<ProgressBar title="HTML5" value="80" />
						<ProgressBar title="CSS" value="60" />
						<ProgressBar title="PHP" value="80" />
						<ProgressBar title="Laravel" value="60" />
						<ProgressBar title="Java" value="80" />
						<ProgressBar title="JavaScript" value="80" />
						<ProgressBar title="React" value="60" />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
