import style from "./styles.module.scss";
import parse from "html-react-parser";

const TextImg = ({ heading, description, imgDirection, images }: any) => {
	return (
		<div className={style.textImg__container}>
			<div className={`${style.textImg} ${style[imgDirection]}`}>
				<div className={style.textImg__content}>
					<h2>{heading}</h2>
					<p>{parse(description)}</p>
				</div>
				<div>
					<picture>
						<source
							media='(min-width:320px) and (max-width:479px)'
							srcSet={images[0]}
						/>
						<source
							media='(min-width:480px) and (max-width:1200px)'
							srcSet={images[1]}
						/>
						<img src={images[2]} alt='' width={476} height={714} />
					</picture>
				</div>
			</div>
		</div>
	);
};

export default TextImg;
