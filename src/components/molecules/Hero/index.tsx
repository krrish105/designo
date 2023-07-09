import Image from "next/image";
import style from "./styles.module.scss";
import Link from "next/link";

const Hero = ({ heading, description, location, children }: any) => {
	const locationClass = `hero__${location}`;
	return (
		<div className={style.heroContainer}>
			<div className={`${style.hero} ${style[locationClass]}`}>
				<div className={style.hero__content}>
					<p className='hero__heading'>{heading}</p>
					<p className='hero__description'>{description}</p>
					{location === "home" && (
						<Link href='/company' className='btn btn-dark'>
							Learn More
						</Link>
					)}
				</div>
				<div>
					<Image
						src='/assets/home/desktop/bg-pattern-hero-home.svg'
						width={640}
						height={640}
						alt=''
						className={style.hero__ovalImg}
					/>
					{children}
				</div>
			</div>
		</div>
	);
};
export default Hero;
