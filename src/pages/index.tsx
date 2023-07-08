import Hero from "@/components/molecules/Hero/Homepage/HomeHero";
import ServicesSection from "@/components/molecules/ServicesSection/ServicesSection";
import Head from "next/head";
import string from "@/utils/strings/data.json";
import About from "@/components/atom/About/About";

export default function Home() {
	return (
		<>
			<Head>
				<title>Designo</title>
			</Head>
			<Hero />
			<ServicesSection />
			<div className='flexComponent container'>
				{string[0].home.about.map((el: any, i: any) => {
					return (
						<About
							key={el.heading}
							image={el.image}
							heading={el.heading}
							description={el.description}
						/>
					);
				})}
			</div>
		</>
	);
}
