import Imgone from "../assets/shared/desktop/image-best-gear.jpg";
import Imgtwo from "../assets/shared/tablet/image-best-gear.jpg";
import Imgtre from "../assets/shared/mobile/image-best-gear.jpg";
import Image from "next/image";
function Advert() {
	return (
		<>
			<div>
				<div className="container mx-auto px-8  items-center lg:space-y-0 space-y-4 lg:justify-around flex lg:flex-row flex-col py-6 text-gray-400 ">
					<div className="flex flex-col space-y-4 max-w-[90%] sm:max-w-[90%]  lg:max-w-[40%]">
						<h1 className="font-medium text-gray-900 text-5xl">
							BRINGING YOU THE
							<span className="px-1 text-[#D87D4A]">BEST</span>
							AUDIO GEAR
						</h1>
						<p>
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
					<div className="max-w-[40%] hidden lg:block">
						<Image
							className=" rounded-xl"
							src={Imgone}
							alt="Advert"
						/>
					</div>
					<div className="max-w-[90%] lg:hidden sm:block hidden">
						<Image
							className=" rounded-xl"
							src={Imgtwo}
							alt="Advert"
						/>
					</div>
					<div className="max-w-[90%] sm:hidden block  ">
						<Image
							className="w-[100%] rounded-xl"
							src={Imgtre}
							alt="Advert"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default Advert;
