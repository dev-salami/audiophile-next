import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";

function Checkout() {
	const [Name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [Number, setNumber] = useState();
	const [Address, setAddress] = useState("");
	const [Zip, setZip] = useState();
	const [City, setCity] = useState("");
	const [Country, setCountry] = useState("");

	const Convamount = useSelector((state) => state.cart.amount);
	const amount = Math.ceil(Convamount * 700 * 1.05);

	// const test = {
	// 	Convamount,
	// 	Name,
	// 	Email,
	// 	Number,
	// 	Address,
	// 	Zip,
	// 	City,
	// 	Country,
	// };
	// const amount = 80000;
	// const email = "salamikhalil02@gamil.com";
	const phone = 87439880247;
	const publicKey = "pk_test_e8e19be8dbce15ef29c8d8cfc88c52b707488270";

	const componentProps = {
		email,
		amount,
		metadata: {
			Name,
			Number,
		},
		publicKey,
		text: "CONTINUE & PAY",
		onSuccess: ({ reference }) => {
			alert(
				`Your purchase was successful! Transaction reference: ${reference}`
			);
			resetForm();
		},
		onClose: () => alert("Payment has been canceled"),
	};
	return (
		<>
			<Navbar />
			<div className="flex lg:flex-row flex-col mt-8 justify-around gap-8 px-6 container mx-auto">
				<form className="lg:w-3/5 flex flex-col gap-8 p-8 rounded-xl border-2">
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
									required
									onChange={(e) => setName(e.target.value)}
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="text"
									value={Name}
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
									required
									onChange={(e) => setEmail(e.target.value)}
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="email"
									id="email"
									value={email}
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label
									className="font-semibold"
									htmlFor="number">
									Phone Number
								</label>
								<input
									required
									onChange={(e) => setNumber(e.target.value)}
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="number"
									id="number"
									value={Number}
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
									required
									onChange={(e) => setAddress(e.target.value)}
									className="border-gray-300 rounded-md px-2 py-1 w-full border"
									type="text"
									id="address"
									value={Address}
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
										required
										onChange={(e) => setZip(e.target.value)}
										className="border-gray-300 rounded-md px-2 py-1  border"
										type="number"
										id="zip"
										value={Zip}
									/>
								</div>
								<div className="flex flex-col gap-1 w-full">
									<label
										className="font-semibold"
										htmlFor="city">
										City
									</label>
									<input
										required
										onChange={(e) => setCity(e.target.value)}
										className="border-gray-300 rounded-md px-2 py-1  border"
										type="text"
										id="city"
										value={City}
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1 md:w-1/2">
								<label
									className="font-semibold"
									htmlFor="country">
									Country
								</label>
								<input
									required
									onChange={(e) => setCountry(e.target.value)}
									className="border-gray-300 rounded-md px-2 py-1  border"
									type="text"
									id="country"
									value={Country}
								/>
							</div>
						</div>
					</div>
					<div>
						<h1></h1>
						<div></div>
					</div>
				</form>
				<div className="lg:w-2/5 p-4 rounded-xl border-2  ">
					<h2 className="text-2xl font-semibold p-4">SUMMARY</h2>
					<div></div>
					<div className="sm:text-base text-sm flex flex-col gap-4 ">
						<div className="flex justify-between px-2">
							<span>TOTAL</span>
							<span className="font-semibold">$ {Convamount}</span>
						</div>
						<div className="flex justify-between px-2">
							<span>SHIPPING</span>
							<span className="font-semibold">
								$ {Math.ceil(Convamount * 0.05)}
							</span>
						</div>
						<div className="flex justify-between px-2">
							<span>GRAND TOTAL</span>
							<span className="text-[#d87d4a] font-semibold">
								$ {Math.ceil(Convamount * 1.05)}
							</span>
						</div>
						<div className="flex justify-between px-2">
							<span>GRAND TOTAL (Naira)</span>
							<span className="text-[#d87d4a] font-semibold">
								₦ {Math.ceil(Convamount * 1.05 * 700)}
							</span>
						</div>
						{/* <button className="bg-[#d87d4a] mt-4 font-semibold text-white w-full py-1">
							CONTINUE & PAY
						</button> */}
						<PaystackButton
							className="bg-[#d87d4a] mt-4 font-semibold text-white w-full py-1"
							{...componentProps}
						/>
						{/* <button className="uppercase bg-[#d87d4a] mt-4 font-semibold text-white w-full py-1">
							Continue and Pay
						</button> */}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Checkout;
