import { useState } from "react";
import useCartStore from "../store/useCartStore";

const Card = ({ id, title, price, description, image, category, index = 0 }) => {
	const [quantity, setQuantity] = useState(1);
	const { addItem } = useCartStore();
	return (
		<div className="product-card" style={{ '--card-index': index }}>
			<div className="product-image-wrap">
				<span className="product-category">{category}</span>
				<img className="product-image" src={image} alt={title} loading="lazy" />
				<button className="quick-add" type="button" onClick={() => { addItem({ id, title, price, image, quantity }); setQuantity(1); }} aria-label={`Add ${title} to cart`}>
					<i className="ri-add-line" aria-hidden="true" />
				</button>
			</div>
			<div className="product-details">
				<div className="product-title-row">
					<h2>{title}</h2>
					<span className="product-price">${price.toFixed(2)}</span>
				</div>
				<p className="product-description">{description}</p>
				<div className="product-actions">
					<div className="quantity-control" aria-label="Quantity">
						<button type="button" disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)} aria-label="Decrease quantity">−</button>
						<span>{quantity}</span>
						<button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button>
					</div>
					<button className="add-button" type="button" onClick={() => { addItem({ id, title, price, image, quantity }); setQuantity(1); }}>
						Add to bag <i className="ri-arrow-up-right-line" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;