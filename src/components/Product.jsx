import { useSelector, useDispatch } from "react-redux";
import { increase } from "../Features/Cart/cartSlice";
import g from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import Link from "next/link";
import Image from "next/image";

function Product() {
	const { amount } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	return (
		<section className="container mx-auto pt-28 ">
			<div className="flex justify-around items-center flex-col  lg:flex-row md:space-x-6 md:space-y-0 space-y-6">
				<div className="lg:max-w-[35%] max-w-[80%]">
					<Image
						className="hidden lg:block"
						src={g}
						alt="product"
					/>
				</div>
				<div className="lg:max-w-[30%] max-w-[60%] flex flex-col  space-y-2 ">
					<h1 className="text-[#D87D4A] text-center  lg:text-left">
						NEW PRODUCT
					</h1>
					<h3 className="pb-2 text-center text-gray-800 lg:text-left text-5xl">
						XY1 headphones
					</h3>
					<p className="text-gray-400 text-center  md:text-left ">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
						placeat impedit nihil, minima architecto sint dolorem perspiciatis
						repudiandae veritatis ipsam et unde neque dicta cumque. Molestiae
						quibusdam velit aspernatur nam!
					</p>
					<button className="pt-4  lg:text-left">
						<Link
							className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
							href="/">
							SEE PRODUCT
						</Link>
					</button>
					<div className="flex flex-row items-center pt-8 space-x-8">
						<button className="text-2xl outline-none">+</button>
						<p className="text-xl">{amount}</p>
						<button className="text-2xl outline-none">-</button>
						<button className="outline-none hover:bg-[#d87d4a] bg-[#fbaf85] text-white ml-8 py-2 px-4 text-md">
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Product;
