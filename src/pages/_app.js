import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<ClerkProvider
			{...pageProps}
			appearance={{
				baseTheme: dark,
			}}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ClerkProvider>
	);
}
