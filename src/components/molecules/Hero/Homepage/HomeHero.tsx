import Image from "next/image";
import Hero from "@/components/molecules/Hero/Hero";

const HomeHero = () => {
	return (
		<Hero
			heading='Award-winning custom designs and digital branding solutions'
			description='With over 10 years in the industry, we are experienced in creating
		fully responsive websites, app design, and engaging brand experiences.
		Find out more about our services.'
			location='home'
		>
			<picture>
				<Image
					src='/assets/home/desktop/image-hero-phone.png'
					width={500}
					height={753}
					alt=''
				/>
			</picture>
		</Hero>
	);
};
export default HomeHero;
