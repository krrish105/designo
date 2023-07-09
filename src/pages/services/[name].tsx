import ProjectCard from "@/components/molecules/ProjectCard";
import style from "./styles.module.scss";
import string from "@/utils/strings/data.json";
import Head from "next/head";
import ServicesComponentArray from "@/components/molecules/ServicesSection";

const ServicesPage = ({ serviceData }: any) => {
	if (serviceData) {
		return (
			<>
				<Head>
					<title>{serviceData.header.heading} | Designo</title>
				</Head>
				<div className={style.services__headerContainer}>
					<div className={style.services__header}>
						<div>
							<h1 className='hero__heading'>{serviceData.header.heading}</h1>
							<p className='hero__description'>
								{serviceData.header.description}
							</p>
						</div>
					</div>
				</div>
				<div className={style.services__projectGrid}>
					{serviceData.projects.map((el: any, i: any) => {
						return (
							<ProjectCard
								key={el.heading}
								image={el.image}
								heading={el.heading}
								description={el.description}
							/>
						);
					})}
				</div>
				<div className={style.services__grid}>
					<ServicesComponentArray
						data={serviceData.nextProjects}
						imgHeight={320}
					/>
				</div>
			</>
		);
	}
};
export default ServicesPage;

export function getAllServiceNames() {
	const serviceNames = string[0].services;

	return serviceNames.map((serviceName) => {
		return {
			params: {
				name: serviceName.name,
			},
		};
	});
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = await getAllServiceNames();
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }: any) {
	// Fetch necessary data for the blog post using params.id
	const serviceData = string[0].services.filter((el, i) => {
		if (el.name === params.name) {
			return el.data;
		}
	});

	return {
		props: {
			serviceData: serviceData[0].data,
		},
	};
}
