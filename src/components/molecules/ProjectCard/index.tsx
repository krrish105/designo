import Image from "next/image";
import style from "./styles.module.scss";

const ProjectCard = ({ image, heading, description }: any) => {
	return (
		<div className={style.card__container}>
			<Image src={image} alt='' width={350} height={320} />
			<div>
				<h2>{heading}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};
export default ProjectCard;
