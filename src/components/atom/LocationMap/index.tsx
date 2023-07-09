import Address from "@/components/atom/Address";
import ContactUsInfo from "@/components/atom/ContactUsInfo";
import string from "@/utils/strings/data.json";
import Image from "next/image";
import style from "./styles.module.scss";

const LocationMap = ({
	location,
	branchName,
	mapDirection,
}: {
	location: string;
	branchName: keyof (typeof string)[0]["location"];
	mapDirection: string;
}) => {
	return (
		<div className={`${style.location} ${style[mapDirection]}`}>
			<div>
				<h2>{location}</h2>
				<br />
				<div>
					<Address
						branchName={branchName}
						address={string[0].location[branchName].address}
					/>
					<ContactUsInfo
						branchName={branchName}
						phone={string[0].location[branchName].phone}
						mail={string[0].location[branchName].mail}
						showBranch={false}
					/>
				</div>
			</div>
			<div>
				<Image
					src='/assets/locations/desktop/image-map-australia.png'
					alt=''
					width={350}
					height={320}
				/>
			</div>
		</div>
	);
};
export default LocationMap;
