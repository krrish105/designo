import parse from "html-react-parser";

const Address = ({ branchName, address }: any) => {
	return (
		<div>
			<strong>Designs {branchName} Office</strong>
			<address>{parse(address)}</address>
		</div>
	);
};
export default Address;
