import "../styles/globals.css";

// RAINBOW KIT IMPORTS
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// RAINBOW KIT IMPORTS

// RAINBOW KIT CONFIGURATIONS
const { chains, provider } = configureChains(
	[polygonMumbai],
	[
		alchemyProvider({
			apiKey: process.env.NEXT_PUBLIC_POLYGON_MUMBAI_API_URL,
		}),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: "Pushycat",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});
// RAINBOW KIT CONFIGURATIONS

export default function App({ Component, pageProps }) {
	return (
		<>
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider chains={chains}>
					<Component {...pageProps} />
				</RainbowKitProvider>{" "}
			</WagmiConfig>
		</>
	);
}
