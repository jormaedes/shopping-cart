import { Link, NavLink } from 'react-router';
import useCartStore from '../store/useCartStore';
const Header = ({ onOpenCart }) => {
	const { getTotalItems } = useCartStore();

	let lenProducts = getTotalItems();
	return (
		<header className="site-header">
			<div className="header-inner">
				<Link className="brand-mark" to="/" aria-label="Online Shop home">
					<span className="brand-icon"><i className="ri-store-2-fill" aria-hidden="true" /></span>
					<span>online<span className="brand-accent">shop</span></span>
				</Link>
				<nav className="main-nav" aria-label="Main navigation">
					<NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
					<NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Shop</NavLink>
				</nav>
				<button className="header-cart" type="button" onClick={onOpenCart} aria-label={`Open cart, ${lenProducts} items`}>
					<span className="cart-label">Bag</span>
					<i className="ri-shopping-bag-3-line" aria-hidden="true" />
					<span className="cart-count" aria-live="polite">{lenProducts}</span>
				</button>
			</div>
		</header>
	);
};

export default Header;