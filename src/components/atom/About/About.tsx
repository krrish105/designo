import Image from "next/image";
import style from "./About.module.scss";

const About = ({ image, heading, description }: any) => {
	return (
		<div className={style.about__card}>
			<Image src={image} alt='' width={202} height={202} />
			<h3>{heading}</h3>
			<p>{description}</p>
		</div>
	);
};
export default About;
