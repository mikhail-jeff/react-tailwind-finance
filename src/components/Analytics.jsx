import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
	return (
		<section className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img
					className="w-[500px] mx-auto my-4"
					src={Laptop}
					alt="laptop image"
				/>

				<div className="flex flex-col justify-center">
					<p className="text-[#ffff00] font-bold text-xl md:text-2xl">DATA ANALYTICS DASHBOARD</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
					<p className="pb-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vellit autem eas ipsum ex ea quae magnam tenetur repellendus. Excepturi numquam fugiat ab quos! Modi itaque laboriosam totam temporibus maxime a.</p>
					<button className="bg-[#080708] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 text-[#ffff00]">Get Started</button>
				</div>
			</div>
		</section>
	);
};

export default Analytics;
