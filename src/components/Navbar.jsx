import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "./cart";
import { toggleCart } from "../Features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import { Link, Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Navbar() {
	const numberOfCartItems = useSelector((state) => state.cart.cartItems.length);
	const dispatch = useDispatch();
	const router = useRouter();

	const toggleCartFn = () => {
		dispatch(toggleCart("hello"));
	};
	const [Open, setOpen] = useState(false);

	const handleClick = () => setOpen(!Open);
	const tabs = [
		{ link: "/", name: "HOME" },
		{ link: "/headphones", name: "HEADPHONES" },
		{ link: "/speakers", name: "SPEAKERS" },
		{ link: "/earphones", name: "EARPHONES" },
	];
	const isActive = (pathname) => router.pathname === pathname;

	return (
		<section className="h-full w-full   z-50 ">
			<Cart />
			<main className="text-white   bg-black  w-full  py-8 px-4 h-[100px]  flex flex-row justify-around border-b-[1px]  ">
				<span className="font-bold text-2xl flex items-center ">
					Audiophile
				</span>

				<div className="items-center  text-sm mt-3 sm:flex flex-row font-semibold space-x-4 hidden">
					{tabs.map((item, index) => (
						<Link
							key={item.name}
							href={item.link}
							className={`transition ease-in-out duration-700  relative px-3 py-1 ${
								isActive(item.link) ? "" : ""
							}`}>
							{isActive(item.link) && (
								<motion.div
									transition={{ duration: 5 }}
									style={{ borderRadius: 9999 }}
									layoutId="active-pill"
									className=" bg-[#d87d4a] absolute inset-0"
								/>
							)}
							<span className="relative z-10">{item.name}</span>
						</Link>
					))}
				</div>
				<button
					className="transition ease-in-out duration-700 relative hover:text-[#d87d4a]"
					onClick={toggleCartFn}>
					<BsCart size={40} />
					<span className="absolute -top-1 -right-1 font-bold h-5 w-5 bg-white flex items-center justify-center text-black rounded-full text-center">
						{numberOfCartItems}
					</span>
				</button>

				<button
					onClick={handleClick}
					className="bg-orange sm:hidden focus:outline-none hover:text-[#d87d4a] transition ease-in-out duration-700 flex items-center  z-[999]">
					<span className="w-8 h-8   ">
						{/* {setOpen  <Menu /> : <Close />} */}
						{!Open ? <FaBars size={30} /> : <FaTimes size={30} />}
					</span>
				</button>
			</main>

			<aside>
				<div
					onClick={() => setOpen(false)}
					className={` duration-500 sm:hidden ${
						Open
							? "bg-black/60 fixed !top-0 z-[1000] inset-0 opacity-100"
							: "opacity-0"
					}`}></div>
				<div className="sm:hidden ">
					<div
						className={`z-[1000] duration-1000 p-10 bg-black    fixed top-0 left-0 right-1/3 bottom-0 ${
							Open ? "bg-white " : " bg-white -translate-x-full "
						}`}>
						<div className="flex flex-col justify-evenly h-full items-center text-lg gap-6 text-gray-500 font-semibold leading-tight ">
							{tabs.map((item, index) => (
								<Link
									onClick={() => setOpen(false)}
									key={item.name}
									href={item.link}
									className={`transition ease-in-out duration-700   px-3 py-1 ${
										isActive(item.link) ? "bg-[#d87d4a] text-white" : ""
									}`}>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
}
export default Navbar;
