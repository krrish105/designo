import AboutSection from "@/components/molecules/About/AboutSection";
import Hero from "@/components/molecules/Hero/Hero";
import ServicesSection from "@/components/molecules/ServicesSection/ServicesSection";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Designo</title>
				<meta name='description' content='Designo Multipage Website' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<ServicesSection />
			<AboutSection />
		</>
	);
}
