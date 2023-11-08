const Newsletter = () => {
	return (
		<section className="w-full py-16 text-white px-4">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
				<div className="lg:col-span-2 my-auto">
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimized your flow?</h1>
					<p className="">
						<span className="text-[#ffff00]">Sign up</span> to our newsletter and stay up to date.
					</p>
				</div>

				<div className="my-4">
					<div className="flex flex-col sm:flex-row items-center justify-between w-full">
						<input
							className="p-2 flex w-full rounded-md text-black focus:outline-none"
							type="email"
							placeholder="Enter your email"
						/>
						<button className="bg-[#ffff00] w-[200px] rounded-md font-medium ml-4 my-2 px-2 py-2 text-[#080708]">Notify Me</button>
					</div>
					<p>
						We care about the protection of your data. Read our <span className="text-[#ffff00]">Privacy Policy</span>.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
