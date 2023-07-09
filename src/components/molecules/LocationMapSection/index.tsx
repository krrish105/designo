import LocationMap from "@/components/atom/LocationMap";
import string from "@/utils/strings/data.json";

const LocationMapSection = () => {
	return (
		<>
			<LocationMap
				location='Canada'
				branchName='central'
				mapDirection='right'
				map={string[0].location.central.map}
			/>
			<LocationMap
				location='Australia'
				branchName='au'
				mapDirection='left'
				map={string[0].location.au.map}
			/>
			<LocationMap
				location='United Kingdom'
				branchName='uk'
				mapDirection='right'
				map={string[0].location.uk.map}
			/>
		</>
	);
};
export default LocationMapSection;
