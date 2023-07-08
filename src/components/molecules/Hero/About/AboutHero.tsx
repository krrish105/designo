import Hero from "@/components/molecules/Hero/Hero";

const AboutHero = () => {
	return (
		<Hero
			heading='About Us'
			description='Founded in 2010, we are a creative agency that produces lasting
		results for our clients. We’ve partnered with many startups,
		corporations, and nonprofits alike to craft designs that make real
		impact. We’re always looking forward to creating brands, products, and
		digital experiences that connect with our clients’ audiences.'
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
