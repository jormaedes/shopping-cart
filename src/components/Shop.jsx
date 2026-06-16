import { useEffect, useState } from "react";

const Shop = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState(null);

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

	if (loading) return (<h2>Loading</h2>);
	
	if (error) return (<h2>Error</h2>);

	return (
		<main>
			<h2>Shop</h2>
		</main>
	);
};

export default Shop;