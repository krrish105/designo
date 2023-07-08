import Hero from "@/components/molecules/Hero/About/AboutHero";
import LocationSection from "@/components/molecules/LocationSection/LocationSection";
import TextImg from "@/components/molecules/TextImg/TextImg";
import Head from "next/head";

export default function Company() {
	return (
		<>
			<Head>
				<title>Company | Designo</title>
			</Head>
			<main>
				<Hero />
				<TextImg
					heading='World-class talent'
					description={`
				We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.

				Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`}
					imgDirection='left'
					images={[
						"/assets/about/mobile/image-world-class-talent.jpg",
						"/assets/about/tablet/image-world-class-talent.jpg",
						"/assets/about/desktop/image-world-class-talent.jpg",
					]}
				/>
				<LocationSection />
				<TextImg
					heading='The real deal'
					description={`
					As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

					We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`}
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
