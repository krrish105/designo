import Address from "@/components/atom/Address";
import ContactUsInfo from "@/components/atom/ContactUsInfo";
import string from "@/utils/strings/data.json";
import style from "./styles.module.scss";

const LocationMap = ({
	location,
	branchName,
	mapDirection,
	map,
}: {
	location: string;
	branchName: keyof (typeof string)[0]["location"];
	mapDirection: string;
	map: string;
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
			<iframe
				src={map}
				width='350'
				height='320'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
};
export default LocationMap;
