import Image from "next/image";
import style from "./styles.module.scss";
import Link from "next/link";

const Hero = ({ heading, description, location, children }: any) => {
	const locationClass = `hero__${location}`;
	return (
		<div className={style.hero__pattern}>
			<div className={style.hero__container}>
				<div className={`${style.hero} ${style[locationClass]}`}>
					<div className={style.hero__content}>
						<h1 className='hero__heading'>{heading}</h1>
						<p className='hero__description'>{description}</p>
						{location === "home" && (
							<Link href='/company' className='btn btn-dark'>
								Learn more
								<span className='sr-only'>about Designo</span>
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
							priority
						/>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
