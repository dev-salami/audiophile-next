import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
	return (
		<section className="mt-10 flex justify-center items-center">
			<UserProfile />
		</section>
	);
};

export default ProfilePage;
