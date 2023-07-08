import Hero from "@/components/molecules/Hero/About/AboutHero";
import LocationSection from "@/components/molecules/LocationSection/LocationSection";
import TextImg from "@/components/molecules/TextImg/TextImg";
import Head from "next/head";
import string from "@/utils/strings/data.json";

export default function Company() {
	return (
		<>
			<Head>
				<title>Company | Designo</title>
			</Head>
			<main>
				<Hero />
				<TextImg
					heading={string[0].company.worldClass.heading}
					description={string[0].company.worldClass.description}
					imgDirection='left'
					images={[
						"/assets/about/mobile/image-world-class-talent.jpg",
						"/assets/about/tablet/image-world-class-talent.jpg",
						"/assets/about/desktop/image-world-class-talent.jpg",
					]}
				/>
				<LocationSection />
				<TextImg
					heading={string[0].company.realDeal.heading}
					description={string[0].company.realDeal.description}
					imgDirection='right'
					images={[
						"/assets/about/mobile/image-real-deal.jpg",
						"/assets/about/tablet/image-real-deal.jpg",
						"/assets/about/desktop/image-real-deal.jpg",
					]}
				/>
			</main>
		</>
	);
}
