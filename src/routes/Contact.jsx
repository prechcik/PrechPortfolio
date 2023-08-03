import { NavLink } from "react-router-dom";

const Contact = () => {
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
								Get in <span className="primary">touch</span>{" "}
								<span className="title-bg">Contact</span>
							</h2>
							<p></p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-sm-5 col-md-4 col-lg-3">
						<div className="contact-block">
							<div className="media">
								<div className="media-left">
									<i className="tf-envelope2"></i>
								</div>
								<div className="media-body">
									<h4>Email</h4>
									<p>
										<a href="mailto:prechcik@gmail.com">prechcik@gmail.com</a>
									</p>
								</div>
							</div>
						</div>
						<div className="contact-block">
							<div className="media">
								<div className="media-left">
									<i className="tf-phone2"></i>
								</div>
								<div className="media-body">
									<h4>Phone</h4>
									<p>
										<a href="tel:+48731149670">+48 731 149 670</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2">
						<div className="section-title clear">
							<h3>Send me a meesage</h3>
							<span className="bar-dark"></span>
							<span className="bar-primary"></span>
						</div>

						<form
							id="contact-form"
							className="row contact-form no-gutter"
							action="#"
							method="post"
						>
							<div className="col-xs-12 col-sm-6">
								<div className="input-field name">
									<span className="input-icon" id="name">
										<i className="tf-profile-male"></i>
									</span>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your name"
										required
									/>
								</div>
							</div>
							<div className="col-xs-12 col-sm-6">
								<div className="input-field email">
									<span className="input-icon" id="email">
										<i className="tf-envelope2"></i>
									</span>
									<input
										type="email"
										className="form-control"
										name="email"
										placeholder="Your email address"
										required
									/>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12">
								<div className="input-field">
									<span className="input-icon" id="subject">
										<i className="tf-pricetags"></i>
									</span>
									<input
										type="text"
										className="form-control"
										name="subject"
										placeholder="Enter the discussion title"
										required
									/>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12">
								<div className="input-field message">
									<span className="input-icon">
										<i className="tf-pencil2"></i>
									</span>
									<textarea
										name="message"
										id="message"
										className="form-control"
										placeholder="Write your message"
										required
									></textarea>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12">
								<div className="input-field">
									<span className="btn-border">
										<button
											type="submit"
											className="btn btn-primary btn-custom-border text-uppercase"
											disabled
										>
											Send Message now
										</button>
									</span>
								</div>
								<div className="msg-success">
									Your Message was sent successfully
								</div>
								<div className="msg-failed">
									Something went wrong, please try again later
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
