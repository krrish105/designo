import About from "@/components/atom/About/About";
import style from "./AboutSection.module.scss";

const AboutSection = () => {
	return (
		<div className={style.about}>
			<About
				image='/assets/home/desktop/illustration-passionate.svg'
				heading='Passionate'
				description='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
			/>
			<About
				image='/assets/home/desktop/illustration-resourceful.svg'
				heading='Resourceful'
				description='Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
			/>
			<About
				image='/assets/home/desktop/illustration-friendly.svg'
				heading='Friendly'
				description=' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
			/>
		</div>
	);
};
export default AboutSection;
