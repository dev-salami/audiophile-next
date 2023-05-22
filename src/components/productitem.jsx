import Image from "next/image";
import Link from "next/link";
function productitem(props) {
	return (
		<section className="container mx-auto pt-28 ">
			<div
				className={`flex justify-around items-center flex-col   md:space-x-6 md:space-y-0 space-y-6 ${
					props.alt === "true" ? "lg:flex-row" : "lg:flex-row-reverse"
				}`}>
				<div className="lg:max-w-[35%] max-w-[80%]">
					<Image
						className="hidden lg:block"
						src={props.imageone}
						alt="product"
					/>
					<Image
						className="hidden sm:block lg:hidden"
						src={props.imagetwo}
						alt="product"
					/>
					<Image
						className="sm:hidden"
						src={props.imagetre}
						alt="product"
					/>
				</div>
				<div className="lg:max-w-[30%] max-w-[60%] flex flex-col  space-y-1 ">
					<h1 className="text-[#D87D4A] text-center  lg:text-left">
						NEW PRODUCT
					</h1>
					<h3 className="pb-2 text-center text-gray-800 lg:text-left text-5xl">
						{props.name}
					</h3>
					<p className="text-gray-400 text-center  md:text-left ">
						{props.detail}
					</p>
					<div className="pt-4 flex lg:justify-start justify-center">
						<Link
							className="bg-[#d87d4a] hover:bg-[#fbaf85]  w-fit text-center lg:text-left text-white px-4 py-2"
							href={`/product/${props.link}`}>
							SEE PRODUCT
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
export default productitem;
