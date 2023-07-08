import Hero from "@/components/molecules/Hero/Hero";
import string from "@/utils/strings/data.json";

const AboutHero = () => {
	return (
		<Hero
			heading={string[0].company.hero.heading}
			description={string[0].company.hero.description}
			location='about'
		>
			<picture>
				<source
					media='(min-width:320px) and (max-width:479px)'
					srcSet='/assets/about/mobile/image-about-hero.jpg'
				/>
				<source
					media='(min-width:480px) and (max-width:767px)'
					srcSet='/assets/about/tablet/image-about-hero.jpg'
				/>
				<source
					media='(min-width:768px) and (max-width:1024px)'
					srcSet='/assets/about/desktop/image-about-hero.jpg'
				/>
				<img
					src='/assets/about/desktop/image-about-hero.jpg'
					alt='Flowers'
					width={483}
					height={480}
					className='hero__phoneImg'
				/>
			</picture>
		</Hero>
	);
};
export default AboutHero;
