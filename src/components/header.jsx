import Link from "next/link";
import image from "../assets/home/desktop/image-her.jpg";
import imaget from "../assets/home/tablet/image-header.jpg";
import Image from "next/image";

function Header() {
	return (
		<>
			<section className="bg-[#191919] py-4  ">
				<div className="lg:flex container  hidden  mx-auto justify-around">
					<div className="md:max-w-[30%] max-w-[60%] flex flex-col mt-24  space-y-4 text-center  md:text-left ">
						<h1 className="text-gray-400 font-semibold ">NEW PRODUCT</h1>
						<h3 className="pb-2  text-white  text-5xl font-semibold">
							XX99 MARK II HEADPHONES
						</h3>
						<p className="text-gray-400 text-xl  ">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
						<div className="pt-4 w-full  ">
							<Link
								className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
								href="/product/xx99-mark-two-headphones">
								SEE PRODUCT
							</Link>
						</div>
					</div>
					<div className="lg:max-w-[50%] ">
						<Image
							className="w-full"
							src={image}
							alt="product"
						/>
					</div>
				</div>
				{/* //SEPERATE */}
				<div className="bg">
					<div className="flex justify-center items-center     lg:hidden  mx-auto  ">
						<div className="md:max-w-[25%] max-w-[60%] z-50 absolute flex flex-col    ">
							<h1 className="text-gray-400 text-center  ">NEW PRODUCT</h1>
							<h3 className="pb-2 text-center text-white self-center  text-5xl">
								XX99 MARK II HEADPHONES
							</h3>
							<p className="text-gray-400 text-center   ">
								Experience natural, lifelike audio and exceptional build quality
								made for the passionate music enthusiast.
							</p>
							<div className="pt-4 text-center  ">
								<Link
									className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
									href="/product/xx99-mark-two-headphones">
									SEE PRODUCT
								</Link>
							</div>
						</div>
						<div className="max-w-[800px] mx-auto  ">
							<Image
								className="w-full "
								src={imaget}
								alt="product"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Header;
