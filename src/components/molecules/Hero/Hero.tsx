import Image from "next/image";
import style from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={style.hero}>
			<div className={style.hero__content}>
				<p className={style.hero__heading}>
					Award-winning custom designs and digital branding solutions
				</p>
				<p className={style.hero__desc}>
					With over 10 years in the industry, we are experienced in creating
					fully responsive websites, app design, and engaging brand experiences.
					Find out more about our services.
				</p>
				<button className='btn btn-dark'>Learn More</button>
			</div>
			<div>
				<Image
					src='/assets/home/desktop/bg-pattern-hero-home.svg'
					width={640}
					height={640}
					alt=''
					className={style.hero__ovalImg}
				/>
				<Image
					src='/assets/home/desktop/image-hero-phone.png'
					width={500}
					height={753}
					alt=''
					className={style.hero__phoneImg}
				/>
			</div>
		</div>
	);
};
export default Hero;
