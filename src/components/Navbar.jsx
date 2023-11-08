import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(true);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className="text-[#ffff00] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold text-[#ffff00]">DATA</h1>

			<ul className="hidden md:flex">
				<li className="p-4">Home</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">About</li>
				<li className="p-4">Contact</li>
			</ul>

			<div
				onClick={handleNav}
				className="block md:hidden">
				{!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			{/* MOBILE DEVICE */}
			<div className={!nav ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#080708] ease-in-out duration-500" : "fixed left-[-100%]"}>
				<h1 className="w-full text-3xl font-bold text-[#ffff00] m-4">TAILWIND</h1>

				<ul className="uppercase p-4">
					<li className="p-4 border-b border-gray-600">Home</li>
					<li className="p-4 border-b border-gray-600">Company</li>
					<li className="p-4 border-b border-gray-600">Resources</li>
					<li className="p-4 border-b border-gray-600">About</li>
					<li className="p-4">Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
