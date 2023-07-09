import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Jost } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={`${jost.className}`}>
				<Header />
				<main>
					<Component {...pageProps} />
				</main>
				<Footer />
			</div>
		</>
	);
}
