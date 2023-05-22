import speaker from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import icon from "../assets/shared/desktop/icon-arrow-right.svg";
import Link from "next/link";
import Image from "next/image";

function Productlink() {
	return (
		<>
			<div className="py-28">
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-[95vw] mx-auto pt-40 justify-items-center lg:space-y-0 space-y-40">
					<div className="relative w-[350px] h-[284px] bg-[#f2f2f2] rounded-lg ">
						<Image
							className="max-w-[400px] relative top-[-105%] left-[-66%] translate-x-[50%] hover:translate-y-[45%] duration-500 translate-y-[50%] "
							src={speaker}
							alt=""
						/>
						<div className="flex space-y-3 flex-col items-center ">
							<div className="text-gray-800 text-xl flex flex-col justify-center relative bottom-[156px] ">
								<h3>HEADPHONES</h3>
								<span className="flex justify-evenly pb-4">
									<Link
										href="/headphones"
										className="flex flex-row space-x-2 text-base text-gray-600">
										<span>shop</span>
										<Image
											className="h-4 self-center"
											src={icon}
											alt=""
										/>
									</Link>
								</span>
							</div>
						</div>
					</div>
					<div className="relative w-[350px] h-[284px] bg-[#f2f2f2] rounded-lg ">
						<Image
							className="max-w-[400px] relative top-[-105%] left-[-66%] translate-x-[50%] hover:translate-y-[45%] duration-500 translate-y-[50%] "
							src={headphones}
							alt=""
						/>
						<div className="flex space-y-3 flex-col items-center ">
							<div className="text-gray-800 text-xl flex flex-col justify-center relative bottom-[143px] ">
								<h3>SPEAKER</h3>
								<span className="flex justify-evenly pb-4">
									<Link
										href="/speaker"
										className="flex flex-row space-x-2 text-base text-gray-600">
										<span>shop</span>
										<Image
											className="h-4 self-center"
											src={icon}
											alt=""
										/>
									</Link>
								</span>
							</div>
						</div>
					</div>
					<div className="relative w-[350px] h-[284px] bg-[#f2f2f2] rounded-lg ">
						<Image
							className="max-w-[400px] relative top-[-105%] left-[-66%] translate-x-[50%] hover:translate-y-[45%] duration-500 translate-y-[50%] "
							src={Earphones}
							alt=""
						/>
						<div className="flex space-y-3 flex-col items-center ">
							<div className="text-gray-800 text-xl flex flex-col justify-center relative bottom-[116px] ">
								<h3>EARPHONES</h3>
								<span className="flex justify-evenly pb-4">
									<Link
										href="/earphones"
										className="flex flex-row space-x-2 text-base text-gray-600">
										<span>shop</span>
										<Image
											className="h-4 self-center"
											src={icon}
											alt=""
										/>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Productlink;
