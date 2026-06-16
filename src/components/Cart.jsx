import { Link } from 'react-router';
import useCartStore from '../store/useCartStore';
import CardToBuy from './CardToBuy';

const Cart = () => {
	const { items, clearCart, getTotalPrice } = useCartStore();

	if (items.length === 0) {
		return (
			<main className='container mx-auto py-8'>
				<h2 className='text-2xl font-bold mb-4'>Your cart</h2>
				<p className='text-gray-600 mb-4'>Your cart is empty</p>
				<Link to='/shop' className='bg-black text-white py-2 px-4 rounded-md'>
					Keep buying
				</Link>
			</main>
		);
	}

	return (
		<main className='container mx-auto py-8'>
			<h2 className='text-2xl font-bold mb-6'>Your cart</h2>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				<div className='lg:col-span-2'>
					<div className='space-y-4'>
						{
							items.map((item) => <CardToBuy quantity={item.quantity} price={item.price} image={item.image} id={item.id} title={item.title} />)
						}
					</div>
				</div>

				<div className='bg-gray-100 p-6 rounded-lg h-fit sticky top-4'>
					<h3 className='text-xl font-bold mb-4'>Order Summary</h3>
					<div className='space-y-2 Limpar Carrinhomb-4'>
						<div className='flex justify-between'>
							<span>Subtotal:</span>
							<span>${getTotalPrice().toFixed(2)}</span>
						</div>
					</div>
					<button className='w-full bg-black text-white py-3 rounded-md font-bold mb-2'>
						Finalize Purchase
					</button>
					<Link to='/shop' className='block text-center py-2 text-black border border-black rounded-md font-medium'>
						Continue Shopping
					</Link>
					<button
						onClick={clearCart}
						className='w-full mt-2 text-red-600 font-medium'
					>
						Clear Cart
					</button>
				</div>
			</div>
		</main>
	);
};

export default Cart;
