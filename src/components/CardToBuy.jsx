import { useEffect, useState } from "react";
import useCartStore from "../store/useCartStore";
const CardToBuy = ({ id, title, image, price, quantity }) => {
	const { items, incrementProduct, removeItem, updateItem, clearCart, getTotalPrice } = useCartStore();
	const [qtd, setQtd] = useState(quantity);

	useEffect(() => {
		incrementProduct(id, qtd);
	}, [qtd])

	return (
		<div className='bg-gray-100 p-4 rounded-lg flex gap-4'>
			<img src={image} alt={title} className='w-24 h-24 object-cover rounded' />
			<div className='flex-1'>
				<h3 className='font-bold mb-2'>{title}</h3>
				<p className='text-gray-600 mb-3'>${price}</p>
				<div className='flex items-center gap-2'>
					<button disabled={qtd <= 1}
						onClick={() => {
							if (qtd <= 1) return;
							setQtd(qtd - 1)
						}
						}
						className='bg-gray-300 px-2 py-1 rounded'
					>
						-
					</button>
					<input
						min={1}
						type='number'
						value={qtd}
						onChange={(e) => {
							if (e.target.value === '' || parseInt(e.target.value) <= 0) {
								setQtd(1);
								return;
							}
							setQtd(parseInt(e.target.value))
						}}
						className='w-12 [appearance:textfield] text-center border rounded'
					/>
					<button
						onClick={() => { setQtd(qtd + 1) }}
						className='bg-gray-300 px-2 py-1 rounded'
					>
						+
					</button>
					<button
						onClick={() => {
							removeItem(id)
						}}
						className='ml-auto bg-red-500 text-white px-4 py-1 rounded'
					>
						Remove
					</button>
				</div>
			</div>
			<div className='text-right'>
				<p className='font-bold'>${(price * qtd).toFixed(2)}</p>
			</div>
		</div>
	)
};

export default CardToBuy;