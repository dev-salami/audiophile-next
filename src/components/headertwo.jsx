import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import yx1 from "../assets/home/desktop/image-earphones-yx1.jpg";
import zx7 from "../assets/home/desktop/image-earphones-yx1.jpg";

import Link from "next/link";
import Image from "next/image";

function headertwo() {
	return (
		<section className="mx-auto container px-8">
			<div className="bg-[#d87d4a]  md:h-[650px] md:items-end rounded-lg md:my-12 mt-20 md:mt-0 items-center py-8 md:py-0  justify-around flex flex-col md:flex-row max-w-[1000px]  mx-auto">
				<div className="flex  md:items-end justify-center  md:max-w-[40%] mb-[-5px] max-w-[35%]">
					<Image
						src={zx9}
						alt=""
					/>
				</div>
				<div className="md:max-w-[30%] max-w-[50%] items-center self-center flex flex-col pt-4   space-y-8 ">
					<h3 className="pt-2 text-center text-white md:text-left text-3xl md:text-7xl">
						ZX9 SPEAKER
					</h3>
					<p className="text-gray-200 text-center  md:text-left ">
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<button className="pt-4  md:self-start ">
						<Link
							className="hover:text-black font-semibold hover:bg-white bg-black  duration-500   text-white px-4 py-2"
							href="/product/zx9-speaker">
							SEE PRODUCT
						</Link>
					</button>
				</div>
			</div>

			<div className=" bgn max-w-[1000px] mx-auto  sm:h-[320px]  justify-center  flex flex-col pl-12 py-6 rounded-3xl  md:space-y-3  my-12 ">
				<h3 className="pb-2  text-black md:text-left text-xl md:text-3xl relative top-">
					ZX7 SPEAKER
				</h3>

				<button className="pt-4 self-start ">
					<Link
						className="duration-500 bg-transparent font-semibold hover:text-white hover:bg-[#000] border-[1px] border-black  text-black px-4 py-2"
						href="/product/zx7-speaker">
						SEE PRODUCT
					</Link>
				</button>
			</div>
			{/* just a break */}
			<div className="max-w-[1000px] mx-auto flex md:flex-row flex-col md:space-y-0 space-y-8 mb-12 md:space-x-8">
				<div className="md:max-w-[50%] rounded-xl">
					<Image
						className="rounded-xl"
						src={yx1}
						alt="product"
					/>
				</div>
				<div className="bg-[#f1f1f1] md:w-[50%] py-8 rounded-xl md:items-center justify-center  flex flex-col">
					<h3 className="pb-2 text-center text-black md:text-left text-3xl relative top-">
						YX1 EARPHONES
					</h3>

					<button className="pt-4  ">
						<Link
							className="duration-500 font-semibold bg-transparent hover:text-white hover:bg-[#000] border-[1px] border-black  text-black px-4 py-2"
							href="/product/yx1-earphones">
							SEE PRODUCT
						</Link>
					</button>
				</div>
			</div>
		</section>
	);
}
export default headertwo;
