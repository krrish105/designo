import Image from "next/image";
import Hero from "@/components/molecules/Hero";
import string from "@/utils/strings/data.json";

const HomeHero = () => {
	return (
		<Hero
			heading={string[0].home.hero.heading}
			description={string[0].home.hero.description}
			location='home'
		>
			<picture>
				<Image
					src='/assets/home/desktop/image-hero-phone.png'
					width={500}
					height={753}
					alt=''
					priority
					className='home__hero__img'
				/>
			</picture>
		</Hero>
	);
};
export default HomeHero;
