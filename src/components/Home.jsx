import { Link } from "react-router";

const Home = () => {
	return (
		<main className="home-page">
			<section className="home-hero">
				<div className="hero-copy">
					<p className="eyebrow hero-eyebrow"><span className="status-dot" /> A CURATED LITTLE CORNER OF THE INTERNET</p>
					<h1>Good things,<br /><em>found here.</em></h1>
					<p className="hero-description">A thoughtful mix of everyday essentials and pieces that make the everyday feel special.</p>
					<Link className="hero-cta" to="/shop">Explore the collection <i className="ri-arrow-right-line" aria-hidden="true" /></Link>
					<div className="hero-caption"><span>01 — 24</span><span>GOOD THINGS, EVERY DAY</span></div>
				</div>
				<div className="hero-visual" aria-label="Online Shop collection" role="img">
					<div className="hero-image-label"><span>THE EVERYDAY EDIT</span><span>VOL. 01 / 2026</span></div>
					<div className="hero-stamp"><span>MADE FOR</span><strong>your<br />everyday</strong><i className="ri-arrow-down-right-line" /></div>
				</div>
			</section>
			<section className="home-note" aria-label="Shop values">
				<p><span>01</span> Thoughtful finds</p>
				<p><span>02</span> Everyday favourites</p>
				<p><span>03</span> A little joy, delivered</p>
				<Link to="/shop">Browse all <i className="ri-arrow-right-up-line" aria-hidden="true" /></Link>
			</section>
		</main>
	);
};

export default Home;