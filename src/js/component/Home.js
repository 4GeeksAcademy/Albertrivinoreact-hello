import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

const Home = () => {
	const data = [
		{ image: { src: "https://pm1.aminoapps.com/6278/56b5628867155505e050e5720904d9d4276d59f8_hq.jpg", alt: "Vegeta" }, title: "Majin Vegeta", description: "Majin Vegeta es la forma malvada y más poderosa de Vegeta, después de que este en su ansia de igualar su poder al de Goku." },
		{ image: { src: "https://depor.com/resizer/QmKU5R1SDPCQbqaH_XfpR_MqqD0=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/I42DA7KK4NBX5C4EXXLDIHA3JI.jpg", alt: "Roshi" }, title: "Maestro Roshi", description: "Fue maestro de Son Goku y Krilin, como también el hombre más fuerte de la tierra en un tiempo." },
		{ image: { src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/dragon-ball-z-babidi-2299931.jpg?tf=3840x", alt: "Babidi" }, title: "Babidi", description: "Es un poderoso hechicero madoshi hijo del gran mago Babidi fundador de la familia de los villanos" },
		{ image: { src: "https://i.ytimg.com/vi/sBeCRM99qJE/maxresdefault.jpg", alt: "Hit" }, title: "Hit", description: "Hit es uno de los elegidos por Vados para participar en el Torneo de la Asociación Universal de las Artes Marciales" }
	];
	return (
		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="container">
					<div className="row">
						{data.map((value, index) => (
							<div key={index} className="col-md-3 mb-4">
								<Card image={value.image.src} title={value.title} description={value.description} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;


