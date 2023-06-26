import Advert from "@/components/Advert";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Ymalc from "@/components/ymalc";
import Image from "next/image";
import Link from "next/link";
import g from "../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import Data from "../../data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
	addtoCart,
	calculateAmount,
	increaseProductNumber,
	decreaseProductNumber,
	toggleCart,
	toggleProductCount,
} from "@/Features/Cart/cartSlice";

function Product() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { product } = router.query;
	const productpageData = Data.find((item) => item.link === product);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const productInCart = cartItems.find((item) => item.link === product);

	const [Count, setCount] = useState(
		productInCart?.count ? productInCart.count : 1
	);

	const cartData = { name: product, count: Count };
	const alreadyExist = cartItems.find((item) => item.link === product);

	const decreaseBtn = () => {
		if (Count > 1) {
			setCount((prev) => prev - 1);
		} else {
			setCount(Count);
		}
	};
	const increaseBtn = () => {
		if (Count < 20) {
			setCount(Count + 1);
		} else setCount(Count);
	};
	const addToCartFunction = () => {
		if (alreadyExist) {
			console.log("Product already in the Cart");
		} else {
			dispatch(addtoCart(cartData));
			dispatch(calculateAmount());
			// setTimeout(console.log(cartItems), 4000);
		}
	};

	return (
		<div>
			<Navbar />
			<section className="container mx-auto pt-28 px-6 ">
				<div className="flex justify-around items-center flex-col  lg:flex-row md:space-x-6 md:space-y-0 space-y-6">
					<div className="lg:max-w-[35%] max-w-[80%]">
						<Image
							className="rounded-xl"
							width={500}
							height={500}
							// src={`/../../assets/product-zx9-speaker/tablet/image-gallery-3.jpg`}
							src={productpageData?.images[0]}
							alt="product"
						/>
					</div>
					<div className="lg:max-w-[30%] flex flex-col  space-y-2 ">
						<h1 className="text-[#D87D4A] text-center  lg:text-left">
							NEW PRODUCT
						</h1>
						<h3 className="pb-2 text-center text-gray-800 lg:text-left text-5xl">
							{productpageData?.name}
						</h3>
						<p className="text-gray-400 text-center  md:text-left ">
							{productpageData?.details}
						</p>

						<div className="flex flex-row items-center justify-center pt-8 space-x-8">
							<button
								onClick={increaseBtn}
								className="text-2xl outline-none">
								+
							</button>
							<p className="text-xl">{Count}</p>
							<button
								onClick={decreaseBtn}
								className="text-2xl outline-none">
								-
							</button>
							<button
								onClick={addToCartFunction}
								className="outline-none bg-[#d87d4a] hover:bg-[#fbaf85] text-white ml-8 py-2 px-4 text-sm ">
								ADD TO CART
							</button>
						</div>
					</div>
				</div>
				<div className="flex gap-6 md:flex-row flex-col my-16">
					<div className="md:w-3/5">
						<h3 className="uppercase font-semibold text-3xl my-8">Features</h3>
						{productpageData?.features}
					</div>
					<div className="md:w-2/5 flex  items-center  flex-col">
						<h3 className="font-semibold text-3xl my-8">IN THE BOX</h3>
						<div>
							{productpageData?.box.map((item, index) => (
								<p key={index}>
									<span className="pr-4">{item.unit}</span>
									<span>{item.type}</span>
								</p>
							))}
						</div>
					</div>
				</div>
				<div className="h-fit gap-8 w-full flex">
					<div className="h-full w-2/5 gap-8 flex flex-col">
						<div className=" w-full flex items-end   h-1/2">
							<Image
								className="rounded-xl"
								width={500}
								height={500}
								src={productpageData?.images[2]}
								alt="product"
							/>
						</div>
						<div className=" flex items-start  w-full h-1/2">
							<Image
								className="rounded-xl"
								width={500}
								height={500}
								src={productpageData?.images[3]}
								alt="product"
							/>
						</div>
					</div>
					<div className=" w-3/5 flex items-center  h-full">
						<Image
							className="rounded-xl object-cover"
							// style={{ objectFit: "center", width: "100%" }}
							width={1000}
							height={1000}
							src={productpageData?.images[1]}
							alt="product"
						/>
					</div>
				</div>
			</section>{" "}
			<Ymalc />
			<Advert />
			<Footer />
		</div>
	);
}

export default Product;
