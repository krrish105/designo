import Services from "@/components/atom/Services/Services";
import style from "./ServicesSection.module.scss";

const ServicesSection = () => {
	return (
		<div className={style.services}>
			<Services
				heading='Web Design'
				images={[
					"/assets/home/mobile/image-web-design.jpg",
					"/assets/home/tablet/image-web-design.jpg",
					"/assets/home/desktop/image-web-design-large.jpg",
				]}
				imgWidth={541}
				imgHeight={640}
				url='web-design'
			/>
			<Services
				heading='App Design'
				images={[
					"/assets/home/mobile/image-app-design.jpg",
					"/assets/home/tablet/image-app-design.jpg",
					"/assets/home/desktop/image-app-design.jpg",
				]}
				imgWidth={541}
				imgHeight={308}
				url='app-design'
			/>
			<Services
				heading='Graphic Design'
				images={[
					"/assets/home/mobile/image-graphic-design.jpg",
					"/assets/home/tablet/image-graphic-design.jpg",
					"/assets/home/desktop/image-graphic-design.jpg",
				]}
				imgWidth={541}
				imgHeight={308}
				url='graphic-design'
			/>
		</div>
	);
};
export default ServicesSection;
