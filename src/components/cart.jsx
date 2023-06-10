import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
	calculateAmount,
	toggleCart,
	toggleProductCount,
	clearCart,
} from "../Features/Cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

function Cart() {
	const dispatch = useDispatch();
	const router = useRouter();

	const showCart = useSelector((state) => state.cart.showCart);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const amount = useSelector((state) => state.cart.amount);

	const decreaseBtn = (product) => {
		const data = () => {
			const test = cartItems.map((item) => {
				if (item.link === product && item.count > 0) {
					return { ...item, count: item.count - 1 };
				} else return { ...item };
			});
			const me = test.filter((a) => a.count > 0);
			return me;
		};

		dispatch(toggleProductCount(data()));
		dispatch(calculateAmount());
	};

	const increaseBtn = (product) => {
		const data = () => {
			const test = cartItems.map((item) => {
				if (item.link === product && item.count < item.available) {
					return { ...item, count: item.count + 1 };
				} else return { ...item };
			});
			return test;
		};

		dispatch(toggleProductCount(data()));
		dispatch(calculateAmount());
	};

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
						<span className="ml-1">({cartItems.length})</span>
					</div>
					<button
						onClick={() => dispatch(clearCart())}
						className="text-gray-500 hover:text-gray-700 duration-500">
						Clear Cart
					</button>
					<button
						onClick={toggleCartFn}
						className="text-gray-500 hover:text-gray-700 duration-500">
						Close
					</button>
				</div>
				<>
					{cartItems.length > 0 ? (
						<div className="flex flex-col gap-6">
							{cartItems.map((item) => (
								<div
									key={item.name}
									className="flex justify-between">
									<div className="h-20 aspect-square bg-gray-300">
										<Image
											className="h-20 aspect-square bg-gray-300"
											width={80}
											height={80}
											src={item.images[0]}
											alt="cart imagee"
										/>
									</div>
									<div className="flex flex-col justify-center">
										<p>{item.name}</p>
										<span className="text-gray-500">${item.price}</span>
									</div>
									<div className="flex gap-6 justify-center p-4 h-fit text-lg bg-gray-300 items-center">
										<button onClick={() => increaseBtn(item.link)}>+</button>
										<span>{item.count}</span>
										<button onClick={() => decreaseBtn(item.link)}>-</button>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="text-xl font-semibold text-center">
							No items in the Cart
						</div>
					)}
				</>
				<div className="flex justify-between p-4">
					<p className="text-gray-500">TOTAL</p>
					<span>${amount}</span>
				</div>
				<button
					disabled={cartItems.length === 0}
					onClick={() => {
						router.push("/checkout");
						toggleCartFn();
					}}
					className=" disabled:bg-orange-300  bg-[#d87d4a] text-white  duration-500 p-4 w-full font-medium ">
					CHECKOUT
				</button>
			</div>
		</section>
	);
}

export default Cart;
