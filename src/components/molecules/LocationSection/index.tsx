import Location from "@/components/atom/Location";

const LocationSection = () => {
	return (
		<div className='flexComponent container'>
			<Location
				image='/assets/shared/desktop/illustration-canada.svg'
				location='Canada'
			/>
			<Location
				image='/assets/shared/desktop/illustration-australia.svg'
				location='Australia'
			/>
			<Location
				image='/assets/shared/desktop/illustration-united-kingdom.svg'
				location='United Kingdom'
			/>
		</div>
	);
};
export default LocationSection;
