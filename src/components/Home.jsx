import { Link } from "react-router";

const Home = () => {
	return (
		<main className="min-h-[94vh] text-black flex justify-center items-center flex-col text-center gap-4">
			<h2 className="text-3xl md:text-5xl font-bold">Welcome to <span>Online</span>
				<span className='text-red-600'>Shop</span>
			</h2>
			<p>Your global grocery store — find anything and everything you need.</p>
			<div>
				<Link className="text-white font-medium bg-red-600 py-2 px-4 rounded-md hover:bg-red-800" to='shop'>Start Shopping</Link>
			</div>
		</main>
	);
};

export default Home;