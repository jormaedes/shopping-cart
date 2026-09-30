import { useEffect, useMemo, useState } from "react";
import Card from "./Card";

const Shop = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState(null);
	const [activeCategory, setActiveCategory] = useState('All');
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then(data => setProducts(data))
			.catch((e) => setError(e))
			.finally(() => setLoading(false));
	}, [])

	const categories = useMemo(() => ['All', ...new Set((products || []).map((product) => product.category))], [products]);
	const visibleProducts = useMemo(() => (products || []).filter((product) => {
		const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
		const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
		return matchesCategory && matchesSearch;
	}), [products, activeCategory, search]);

	if (loading) return <main className="shop-page"><div className="shop-content"><div className="shop-heading"><p className="eyebrow">THE ONLINE SHOP EDIT</p><h1>Objects for <em>every day.</em></h1><p className="shop-intro">A considered collection of pieces made to be used, loved and lived with.</p></div><div className="product-grid">{Array.from({ length: 6 }, (_, index) => <div className="product-skeleton" key={index} />)}</div></div></main>;

	if (error) return <main className="shop-page"><div className="empty-results"><p className="eyebrow">A LITTLE PAUSE</p><h1>We couldn't load the collection.</h1><p>Check your connection and try again.</p><button className="text-button" onClick={() => window.location.reload()}>Try again <i className="ri-arrow-right-line" /></button></div></main>;

	return (
		<main className="shop-page">
			<div className="shop-content">
				<div className="shop-heading">
					<p className="eyebrow">THE ONLINE SHOP EDIT <span>—</span> {products.length} PIECES</p>
					<h1>Objects for <em>every day.</em></h1>
					<p className="shop-intro">A considered collection of pieces made to be used, loved and lived with.</p>
				</div>
				<div className="shop-toolbar">
					<div className="category-tabs" role="group" aria-label="Filter by category">
						{categories.map((category) => <button key={category} type="button" className={activeCategory === category ? 'category-tab active' : 'category-tab'} onClick={() => setActiveCategory(category)}>{category}</button>)}
					</div>
					<label className="search-field">
						<i className="ri-search-line" aria-hidden="true" />
						<input type="search" placeholder="Find something..." value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search products" />
					</label>
				</div>
				<div className="results-line"><span>Showing {visibleProducts.length} pieces</span><span>Thoughtfully selected <i className="ri-arrow-down-line" /></span></div>
				{visibleProducts.length > 0 ? <div className="product-grid">
					{visibleProducts.map((item, index) => <Card key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} image={item.image} category={item.category} index={index} />)}
				</div> : <div className="empty-results"><h2>No pieces found.</h2><p>Try another search or category.</p><button className="text-button" onClick={() => { setSearch(''); setActiveCategory('All'); }}>Clear filters <i className="ri-arrow-right-line" /></button></div>}
			</div>
		</main>
	);
};

export default Shop;