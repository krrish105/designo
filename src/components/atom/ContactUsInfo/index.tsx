const ContactUsInfo = ({ phone, mail, branchName, showBranch }: any) => {
	const heading = showBranch
		? `Contact Us ${
				branchName &&
				`(${branchName.charAt(0).toUpperCase() + branchName.slice(1)} Office)`
		  }`
		: "Contact";
	return (
		<div>
			<strong>{heading}</strong>
			<br />P : <a href={`tel:${phone}`}>{phone}</a>
			<br />M : <a href={`mailto:${mail}`}>{mail}</a>
		</div>
	);
};
export default ContactUsInfo;
