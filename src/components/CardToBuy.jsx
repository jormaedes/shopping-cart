import useCartStore from "../store/useCartStore";
const CardToBuy = ({ id, title, image, price, quantity }) => {
	const { removeItem, updateItem } = useCartStore();

	return (
		<div className="cart-item">
			<div className="cart-item-image"><img src={image} alt={title} /></div>
			<div className="cart-item-info">
				<h3>{title}</h3>
				<p className="cart-item-price">${price.toFixed(2)}</p>
				<div className="cart-item-controls">
					<div className="quantity-control compact" aria-label={`Quantity ${quantity}`}>
						<button type="button" disabled={quantity <= 1} onClick={() => updateItem(id, -1)} aria-label="Decrease quantity">−</button>
						<span>{quantity}</span>
						<button type="button" onClick={() => updateItem(id, 1)} aria-label="Increase quantity">+</button>
					</div>
					<button className="remove-item" type="button" onClick={() => removeItem(id)}>Remove</button>
				</div>
			</div>
			<p className="cart-item-total">${(price * quantity).toFixed(2)}</p>
		</div>
	)
};

export default CardToBuy;