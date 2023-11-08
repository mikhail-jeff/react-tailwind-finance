import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	return (
		<section className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full text-center h-screen mx-auto flex flex-col justify-center">
				<p className="text-[#ffff00] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-4xl sm:text-4xl text-xl font-bold pt-1">Fast and flexible financing for</p>
					<TypeAnimation
						className="md:text-4xl sm:text-4xl text-xl font-bold pl-4 text-[#ffff00]"
						sequence={[
							"BTB", //
							2000, //
							"BTC", //
							2000, //
							"SAAS", //
							2000, //
						]}
						wrapper="span"
						cursor={true}
						speed={30}
						repeat={Infinity}
						y
					/>
				</div>
				<p className="md:text-2xl text-xl font-bold text-gray-500 p-3">Monitor your data analytics to increase revenue for BTB, BTC, and SAAS platforms.</p>
				<button className="bg-[#ffff00] w-[200px] rounded-md font-medium mx-auto py-3 text-[#080708]">Get Started</button>
			</div>
		</section>
	);
};

export default Hero;
