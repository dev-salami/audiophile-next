import Image from "next/image";
import Link from "next/link";

function productitem(props) {
	return (
		<section>
			<div className="flex flex-col  justify-center items-center space-y-4 max-w-[400px] max-h-[400px]">
				<div className="bg-[#f2f2f2]  max-w-[300px] max-h-[300px] flex justify-center items-center rounded-xl">
					<Image
						className="rounded-xl"
						src={props.image}
						alt=""
					/>
				</div>
				<div className="flex flex-col font-semibold justify-center items-center space-y-4">
					<p>{props.text}</p>
					<button>
						<Link
							className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white px-4 py-2"
							href="/">
							SEE PRODUCT
						</Link>
					</button>
				</div>
			</div>
		</section>
	);
}
export default productitem;
