import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../Features/Cart/cartSlice";
import Image from "next/image";

function Cart() {
	const showCart = useSelector((state) => state.cart.showCart);
	const dispatch = useDispatch();
	const toggleCartFn = () => {
		dispatch(toggleCart());
	};

	return (
		<section
			className={` z-[1000] duration-500 fixed inset-0 ${
				!showCart && "opacity-0 scale-0"
			}`}>
			<div
				onClick={toggleCartFn}
				className={`bg-black/70 fixed inset-0 duration-500 ${
					!showCart && "opacity-0 scale-0"
				}`}></div>
			<div
				className={`bg-white w-[30rem] max-h-[60vh] text-sm rounded-xl overflow-y-auto p-4 float-right mr-20 mt-20 duration-500 ${
					showCart ? "opacity-100 scale-100" : "opacity-0 scale-0"
				} `}>
				<div className="font-semibold flex justify-between p-4">
					<div>
						<span>CART</span>
						<span className="ml-1">(3)</span>
					</div>
					<button
						onClick={toggleCartFn}
						className="text-gray-500 hover:text-gray-700 duration-500">
						Clear Cart
					</button>
				</div>
				<div className="flex justify-between">
					{/* <Image
						className="h-20 aspect-square bg-gray-300"
						src=""
						alt="cart imagee"
					/> */}
					<div className="h-20 aspect-square bg-gray-300"></div>
					<div className="flex flex-col justify-center">
						<p>XX99 MARK II HEADPHONES</p>
						<span className="text-gray-500">$2.999</span>
					</div>
					<div className="flex gap-6 justify-center p-4  text-lg bg-gray-300 items-center">
						<button>+</button>
						<span>7</span>
						<button>-</button>
					</div>
				</div>
				<div className="flex justify-between p-4">
					<p className="text-gray-500">TOTAL</p>
					<span>$2.999</span>
				</div>
				{showCart ? (
					<button className="bg-orange-500 text-white hover:bg-orange-400 duration-500 p-4 w-full ">
						CHECKOUT
					</button>
				) : (
					<button className="bg-green-500 text-white hover:bg-green-400 duration-500 p-4 w-full ">
						CHECKOUT
					</button>
				)}
			</div>
		</section>
	);
}

export default Cart;
