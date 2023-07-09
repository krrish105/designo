import LocationMap from "@/components/atom/LocationMap";

const LocationMapSection = () => {
	return (
		<>
			<LocationMap
				location='Canada'
				branchName='central'
				mapDirection='right'
			/>
			<LocationMap location='Australia' branchName='au' mapDirection='left' />
			<LocationMap
				location='United Kingdom'
				branchName='uk'
				mapDirection='right'
			/>
		</>
	);
};
export default LocationMapSection;
