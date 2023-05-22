// import speaker from "../assets/shared/desktop/image-category-thumbnail-headphones.png";

// import headphones from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
// import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Image from "next/image";
import g from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
function features() {
	return (
		<section>
			<div className="container mx-auto flex lg:flex-row flex-col py-4 justify-around ">
				<div className="max-w-[60%] space-y-6 flex flex-col px-4">
					<h2 className="text-3xl">FEATURES</h2>
					<p className="text-gray-400">
						Experience unrivalled stereo sound thanks to innovative acoustic
						technology. With improved ergonomics designed for full day wearing,
						these revolutionary earphones have been finely crafted to provide
						you with the perfect fit, delivering complete comfort all day long
						while enjoying exceptional noise isolation and truly immersive
						sound. The YX1 Wireless Earphones features customizable controls for
						volume, music, calls, and voice assistants built into both earbuds.
						The new 7-hour battery life can be extended up to 28 hours with the
						charging case, giving you uninterrupted play time. Exquisite
						craftsmanship with a splash resistant design now available in an all
						new white and grey color scheme as well as the popular classic
						black.
					</p>
				</div>
				<div className="flex flex-col space-y-6 px-4 max-w-[30%]">
					<h2 className="text-3xl">IN THE BOX</h2>
					<ul className="text-md">
						<li className="flex flex-row space-x-3">
							<span className="text-[#D87D4A] ">2X</span>
							<p className="text-gray-400">Earphone Unit</p>
						</li>
						<li className="flex flex-row space-x-3">
							<span className="text-[#D87D4A] ">6X</span>
							<p className="text-gray-400"> Multi-size earplugs</p>
						</li>
						<li className="flex flex-row space-x-3">
							<span className="text-[#D87D4A] ">1X</span>
							<p className="text-gray-400">User manual</p>
						</li>
						<li className="flex flex-row space-x-3">
							<span className="text-[#D87D4A] ">1X</span>
							<p className="text-gray-400">USB-C charging cable</p>
						</li>
						<li className="flex flex-row space-x-3">
							<span className="text-[#D87D4A] ">1X</span>
							<p className="text-gray-400">Travel pouch</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto flex flex-row gap-x-5  justify-center my-6  border-red-700  border-2  px-12">
				<div className=" flex flex-col h-[250px] gap-y-2 w-[400px]">
					<Image
						className="h-[250px] w-[400px]"
						src={g}
						alt=""
					/>
					<Image
						className="h-[250px] w-[400px]"
						src={g}
						alt=""
					/>
				</div>
				<div className="h-[500px] w-[500px] ">
					<Image
						className="w-full h-full"
						src={g}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}
export default features;
