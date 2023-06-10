import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	// callbacks: {
	// 	async session({ token, session }) {
	// 		if (token) {
	// 			session.user.id = token.id;
	// 			session.user.name = token.name;
	// 			session.user.email = token.email;
	// 			session.user.role = token.role;
	// 			session.user.image = token.image;
	// 		}
	// 		return session;
	// 	},
	// 	async signIn(user, account, profile) {
	// 		const { db } = await connectToDatabase();
	// 		const { additionalData } = JSON.parse(profile);
	// 		// user.additionalData = additionalData;

	// 		// console.log(user);
	// 		// user.user.add = "additionalData";
	// 		// const userData = user.user;

	// 		const collection = db.collection("users");
	// 		await collection.insertOne({ ...user });
	// 		return true;
	// 	},
	// 	async jwt({ token, user }) {
	// 		const testUser = {
	// 			id: "1234567890",
	// 			name: "salami",
	// 			email: "salamikhalil@example.com",
	// 			role: "admin",
	// 			picture:
	// 				"https://lh3.googleusercontent.com/a/AGNmyxbOlAE1_3I4Fa3diBgngE955B_d0Kq0Tu3nYLEn=s96-c",
	// 		};

	// 		return {
	// 			id: testUser.id,
	// 			name: testUser.name,
	// 			email: testUser.email,
	// 			role: testUser.role,
	// 			image: testUser.picture,
	// 		};
	// 	},
	// },
	// session: {
	// 	strategy: "database",

	// 	maxAge: 30 * 24 * 60 * 60, // 30 days

	// 	updateAge: 24 * 60 * 60, // 24 hours

	// 	generateSessionToken: () => {
	// 		return randomBytes(32).toString("hex");
	// 	},
	// },
	secret: process.env.JWT_SECRET,
	// adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);

// export default NextAuth({
// 	adapter: MongoDBAdapter(clientPromise),
// 	authOptions,
// });
