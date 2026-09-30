import { Link, useNavigate } from 'react-router';
import useCartStore from '../store/useCartStore';
import CardToBuy from './CardToBuy';

const Cart = ({ isOpen, onClose }) => {
	const { items, clearCart, getTotalPrice, getTotalItems } = useCartStore();
	const navigate = useNavigate();
	const total = getTotalPrice();
	const shipping = total === 0 || total >= 75 ? 0 : 6;
	const remainingForFreeShipping = Math.max(75 - total, 0);

	const checkout = () => {
		alert('Thanks for shopping with us. Come back soon!');
		clearCart();
		onClose();
		navigate('/');
	};

	return (
		<div className={`cart-layer${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
			<button className="cart-backdrop" type="button" tabIndex={isOpen ? 0 : -1} onClick={onClose} aria-label="Close cart" />
			<aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" aria-hidden={!isOpen}>
				<div className="cart-drawer-header">
					<div>
					<p className="eyebrow">YOUR SELECTION</p>
					<h2 id="cart-title">Shopping bag <span>{getTotalItems()}</span></h2>
				</div>
					<button className="icon-button close-cart" type="button" onClick={onClose} aria-label="Close cart"><i className="ri-close-line" /></button>
				</div>

				{items.length === 0 ? (
					<div className="cart-empty">
						<div className="empty-bag-icon"><i className="ri-shopping-bag-3-line" /></div>
						<h3>Your bag is taking a little break.</h3>
						<p>Find something lovely to bring home.</p>
						<Link className="add-button empty-shop-link" to="/shop" onClick={onClose}>Explore the shop <i className="ri-arrow-right-line" /></Link>
					</div>
				) : (
					<>
						<div className="cart-items">
							{items.map((item) => <CardToBuy key={item.id} id={item.id} quantity={item.quantity} price={item.price} image={item.image} title={item.title} />)}
						</div>
						<div className="cart-summary">
							{remainingForFreeShipping > 0 && <div className="shipping-note"><p>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> for complimentary shipping</p><div className="shipping-track"><span style={{ width: `${Math.min((total / 75) * 100, 100)}%` }} /></div></div>}
							<div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
							<div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span></div>
							<div className="summary-row summary-total"><span>Total</span><span>${(total + shipping).toFixed(2)}</span></div>
							<button className="checkout-button" type="button" onClick={checkout}>Continue to checkout <i className="ri-arrow-right-line" /></button>
							<button className="clear-cart" type="button" onClick={clearCart}>Clear bag</button>
						</div>
					</>
				)}
			</aside>
		</div>
	);
};

export default Cart;