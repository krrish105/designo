import string from "@/utils/strings/data.json";
import Services from "@/components/atom/Services";

const ServicesComponentArray = ({ data, imgHeight }: any) => {
	let servicesArray: any = [];
	data.map((el: string, i: any) => {
		string[0].serviceSection.map((service, i) => {
			if (service.name === el) {
				let serviceData = service.data;
				servicesArray.push(
					<Services
						key={serviceData.heading}
						heading={serviceData.heading}
						images={serviceData.images}
						imgWidth={serviceData.imgWidth}
						imgHeight={imgHeight}
						url={serviceData.url}
					/>
				);
			}
		});
	});

	return servicesArray;
};
export default ServicesComponentArray;
