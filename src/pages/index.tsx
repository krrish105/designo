import AboutSection from "@/components/molecules/About/AboutSection";
import Hero from "@/components/molecules/Hero/Hero";
import ServicesSection from "@/components/molecules/ServicesSection/ServicesSection";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Designo</title>
			</Head>
			<Hero />
			<ServicesSection />
			<AboutSection />
		</>
	);
}
