import { Link } from 'react-router';
import useCartStore from '../store/useCartStore';
const Header = () => {
	const { getTotalItems } = useCartStore();

	let lenProducts = getTotalItems();
	return (
		<header className='shadow-md'>
			<div className='flex justify-between container mx-auto items-center min-h-[6vh]'>
				<div>
					<h1 className='font-bold text-xl'>
						<i className="ri-store-2-fill"></i>
						<span>Online</span>
						<span className='text-red-600'>Shop</span>
					</h1>
				</div>
				<nav className='flex gap-1.5 items-center'>
					<Link className='hover:text-red-600 font-medium' to='/'>Home</Link>
					<Link className='hover:text-red-600 font-medium' to='shop'>Shop</Link>
					<Link className='bg-black text-white py-2 px-4 rounded-xl font-medium flex items-center gap-2 hover:text-white hover:bg-red-600' to='cart'>
						Cart
						{lenProducts > 0 && <span className='text-[11px] rounded-full px-1.5 bg-white text-black'>{lenProducts}</span>}
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;