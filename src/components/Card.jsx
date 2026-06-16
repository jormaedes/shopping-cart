import { useState } from "react";
import clsx from "clsx";
import useCartStore from "../store/useCartStore";

const Card = ({ id, title, price, description, image }) => {
	const [quantity, setQuantity] = useState(0);
	const { addItem, items } = useCartStore();
	return (
		<div className="shadow-md flex justify-between rounded-2xl bg-gray-100 h-55 w-90 p-3 mt-1.5">
			<div className="flex justify-center items-center w-[40%] bg-white rounded-md">
				<img className=" h-40" src={image} alt={title} />
			</div>
			<div className="w-[58%] flex flex-col justify-between gap-1">
				<div className="flex justify-between">
					<p className="line-clamp-2 font-medium text-balance">{title}</p>
					<p className="font-extrabold ">${price}</p>
				</div>
				<div>
					<p className="line-clamp-3"> {description} </p>
				</div>
				<div className="flex justify-between flex-col gap-1">
					<div className="flex justify-center items-center ">
						<button className={clsx(quantity === 0? "bg-gray-200 text-black": "bg-gray-600 text-white", "cursor-pointer px-2 rounded-md font-medium")} disabled={quantity <= 0} onClick={()=> setQuantity(quantity - 1)}>-</button>
						<input className="w-10 [appearance:textfield] text-center" type="number" name="number" id="" value={quantity} onChange={(e)=>{
							if (parseInt(e.target.value) <= 0)
								e.target.value = 0
							setQuantity(parseInt(e.target.value))}}/>
						<button className={clsx("bg-gray-600", "cursor-pointer px-1.5 rounded-md text-white font-bold")} onClick={()=> setQuantity(quantity + 1)}>+</button>
					</div>
					<div>
						<button onClick={()=> {
							if (quantity === 0) return ;
							addItem({id, title, price, image, quantity})
							setQuantity(0);
						}} className="bg-black text-white font-medium py-2 px-4 rounded-md cursor-pointer w-full">Add to Card</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;