import Hero from "@/components/molecules/Hero/Homepage/HomeHero";
import Head from "next/head";
import string from "@/utils/strings/data.json";
import About from "@/components/atom/About/About";
import ServicesComponentArray from "@/components/molecules/ServicesSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Designo</title>
			</Head>
			<Hero />
			<div className={`homeServicesGrid container`}>
				<ServicesComponentArray
					data={string[0].home.services}
					imgHeight={600}
				/>
			</div>

			<div className='flexComponent container'>
				{string[0].home.about.map((el, i) => {
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
