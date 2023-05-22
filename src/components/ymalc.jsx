import Ymalcitem from "./ymalcitem";
function Ymalc() {
	return (
		<section className="md:max-w-[1000px] w-fit mx-auto px-6 my-8 py-8 ">
			<p className=" text-3xl sm:text-4xl font-semibold text-center m-12">
				YOU MAY ALSO LIKE
			</p>
			<div className="flex md:flex-row md:space-x-12 md:space-y-0 space-y-12  my-8  flex-col">
				<Ymalcitem
					image={require("../assets/shared/desktop/image-xx99-mark-one-headphones.jpg")}
					text="XX99 MARK I"
				/>
				<Ymalcitem
					image={require("../assets/shared/desktop/image-xx59-headphones.jpg")}
					text="XX59 "
				/>
				<Ymalcitem
					image={require("../assets/shared/desktop/image-xx99-mark-two-headphones.jpg")}
					text="XX99 MARK II"
				/>
			</div>
		</section>
	);
}
export default Ymalc;
