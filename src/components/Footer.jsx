import { FaYoutubeSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
			<div>
				<h1 className="w-full text-3xl font-bold text-[#ffff00]">TAILWIND</h1>
				<p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis quam, mollitia consectetur.</p>
				<div className="flex md:w-[75%] my-6 justify-between">
					<FaTwitterSquare
						size={30}
						color="#ffff00"
					/>
					<FaGithubSquare
						size={30}
						color="#ffff00"
					/>
					<FaYoutubeSquare
						size={30}
						color="#ffff00"
					/>
					<FaFacebookSquare
						size={30}
						color="#ffff00"
					/>
					<FaInstagramSquare
						size={30}
						color="#ffff00"
					/>
				</div>
			</div>

			<div className="lg:col-span-2 flex justify-between mt-6">
				<div>
					<h6 className="font-bold text-gray-500">Solutions</h6>
					<ul>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Insights</li>
					</ul>
				</div>

				<div>
					<h6 className="font-bold text-gray-500">Support</h6>
					<ul>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guides</li>
						<li className="py-2 text-sm">API Status</li>
					</ul>
				</div>

				<div>
					<h6 className="font-bold text-gray-500">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
				</div>

				<div>
					<h6 className="font-bold text-gray-500">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Claim</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
