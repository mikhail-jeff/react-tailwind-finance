import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
	return (
		<section className="w-full py-[6rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full bg-gray-100  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
					<img
						className="w-20 mx-auto mt-[-3.5rem] bg-transparent"
						src={Single}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-4">Single User</h2>
					<p className="text-center text-4xl font-bold">$149</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b mx-8">1 Granted User</p>
						<p className="py-2 border-b mx-8">Send up to 2 GB</p>
					</div>
					<button className="bg-[#ffff00] w-[200px] rounded-md font-semibold mx-auto my-6 px-6 py-3 text-[#080708]">Start Trial</button>
				</div>

				<div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-200">
					<img
						className="w-20 mx-auto mt-[-3.5rem] bg-transparent"
						src={Double}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-4">Partnership</h2>
					<p className="text-center text-4xl font-bold">$199</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
						<p className="py-2 border-b mx-8">3 Users Allowed</p>
						<p className="py-2 border-b mx-8">Send up to 10 GB</p>
					</div>
					<button className="bg-[#080708] w-[200px] rounded-md font-semibold mx-auto my-6 px-6 py-3 text-[#ffff00]">Start Trial</button>
				</div>

				<div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200">
					<img
						className="w-20 mx-auto mt-[-3.5rem] bg-transparent"
						src={Triple}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-4">Group Account</h2>
					<p className="text-center text-4xl font-bold">$299</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
						<p className="py-2 border-b mx-8">10 Granted User</p>
						<p className="py-2 border-b mx-8">Send up to 20 GB</p>
					</div>
					<button className="bg-[#ffff00] w-[200px] rounded-md font-semibold mx-auto my-6 px-6 py-3 text-[#080708]">Start Trial</button>
				</div>
			</div>
		</section>
	);
};

export default Cards;
