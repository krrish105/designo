import Link from "next/link";
import style from "./Services.module.scss";

const Services = ({ heading, images, imgWidth, imgHeight }: any) => {
	return (
		<div className={style.services__card}>
			<div className={style.services__card__content}>
				<h2>{heading}</h2>
				<Link href='web-design'>{`View Projects >`}</Link>
			</div>
			<div>
				<picture>
					<source
						media='(min-width:320px) and (max-width:480px)'
						srcSet={images[0]}
					/>
					<source
						media='(min-width:481px) and (max-width:768px)'
						srcSet={images[1]}
					/>
					<source
						media='(min-width:769px) and (max-width:1024px)'
						srcSet={images[2]}
					/>
					<img
						src={images[2]}
						alt='Flowers'
						width={imgWidth}
						height={imgHeight}
					/>
				</picture>
			</div>
		</div>
	);
};
export default Services;
