import ImageGallery from "react-image-gallery";
import { NavLink } from "react-router-dom";

const WebAbacus = () => {
	const images = [
		{
			original: "/images/webabacus/1.png",
			thumbnail: "/images/webabacus/1.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/webabacus/2.png",
			thumbnail: "/images/webabacus/2.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/webabacus/3.png",
			thumbnail: "/images/webabacus/3.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/webabacus/4.png",
			thumbnail: "/images/webabacus/4.png",
			thumbnailWidth: "100px",
			thumbnailHeight: "100px",
			originalWidth: "800px",
			originalHeight: "600px",
		},
		{
			original: "/images/webabacus/5.png",
			thumbnail: "/images/webabacus/5.png",
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
								Web<span className="primary">Abacus</span>
								<span className="title-bg">Abacus</span>
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

export default WebAbacus;
