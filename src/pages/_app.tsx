import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Jost } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${jost.className}`}>
			<Header />
			<main className='container'>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}
