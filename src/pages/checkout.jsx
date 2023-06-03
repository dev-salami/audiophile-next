import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function checkout() {
	return (
		<>
			<Navbar />
			<div className="flex md:flex-row flex-col mt-8 justify-around gap-8 px-6 container mx-auto">
				<form className="md:w-3/5 flex flex-col gap-8 p-8 rounded-xl border-2">
					<h1 className="text-3xl font-semibold p-4 uppercase">checkout</h1>
					<div>
						<h1 className="uppercase text-[#d87d4a] text-xl font-bold">
							billing details
						</h1>
						<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
							<div className="flex flex-col gap-1">
								<label
									className="font-semibold"
									htmlFor="name">
									Name
								</label>
								<input
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="text"
									id="name"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label
									className="font-semibold"
									htmlFor="email">
									Email Address
								</label>
								<input
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="email"
									id="email"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label
									className="font-semibold"
									htmlFor="number">
									Phone Number
								</label>
								<input
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="number"
									id="number"
								/>
							</div>
						</div>
					</div>
					<div>
						<h1 className="uppercase text-[#d87d4a] text-xl font-bold">
							shipping info
						</h1>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-1">
								<label
									className="font-semibold"
									htmlFor="address">
									Address
								</label>
								<input
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="text"
									id="address"
								/>
							</div>
							<div className="flex md:flex-row flex-col w-full gap-4">
								<div className="flex flex-col gap-1 w-full">
									<label
										className="font-semibold"
										htmlFor="zip">
										ZIP Code
									</label>
									<input
										className="border-gray-300 rounded-md px-2 py-1  border"
										type="number"
										id="zip"
									/>
								</div>
								<div className="flex flex-col gap-1 w-full">
									<label
										className="font-semibold"
										htmlFor="number">
										City
									</label>
									<input
										className="border-gray-300 rounded-md px-2 py-1  border"
										type="text"
										id="city"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1 md:w-1/2">
								<label
									className="font-semibold"
									htmlFor="number">
									Country
								</label>
								<input
									className="border-gray-300 rounded-md px-2 py-1  border"
									type="text"
									id="country"
								/>
							</div>
						</div>
					</div>
					<div>
						<h1></h1>
						<div></div>
					</div>
				</form>
				<div className="md:w-1/3 p-4 rounded-xl border-2  ">
					<h2 className="text-2xl font-semibold p-4">SUMMARY</h2>
					<div></div>
					<div className="sm:text-base text-sm flex flex-col gap-4 ">
						<div className="flex justify-between px-2">
							<span>TOTAL</span>
							<span className="font-semibold">$ 2999</span>
						</div>
						<div className="flex justify-between px-2">
							<span>SHIPPING</span>
							<span className="font-semibold">$ 50</span>
						</div>
						<div className="flex justify-between px-2">
							<span>GRAND TOTAL</span>
							<span className="text-[#d87d4a] font-semibold">$ 3049</span>
						</div>
						<button className="bg-[#d87d4a] mt-4 font-semibold text-white w-full py-1">
							CONTINUE & PAY
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default checkout;
