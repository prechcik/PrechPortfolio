import ImageGallery from "react-image-gallery";
import { NavLink } from "react-router-dom";

const BotLog = () => {
	const images = [
		{
			original: "/images/botlog/1.png",
			thumbnail: "/images/botlog/1.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/botlog/2.png",
			thumbnail: "/images/botlog/2.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/botlog/3.png",
			thumbnail: "/images/botlog/3.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/botlog/4.png",
			thumbnail: "/images/botlog/4.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/botlog/5.png",
			thumbnail: "/images/botlog/5.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
	];

	return (
		<>
			<NavLink to="/projects" className="page-close">
				<i className="tf-ion-close"></i>
			</NavLink>

			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<div className="page-title text-center">
							<h2>
								Bot<span className="primary">Log</span>
								<span className="title-bg">BotLog</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row" style={{ overflow: "hidden" }}>
					<ImageGallery items={images} />
				</div>
			</div>
		</>
	);
};

export default BotLog;
