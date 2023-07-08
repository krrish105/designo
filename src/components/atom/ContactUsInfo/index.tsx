const ContactUsInfo = ({ phone, mail, branchName, showBranch }: any) => {
	const heading = showBranch
		? `Contact Us ${branchName && `(${branchName} Office)`}`
		: "Contact";
	return (
		<div>
			<strong>{heading}</strong>
			<br />P : {phone}
			<br />M : {mail}
		</div>
	);
};
export default ContactUsInfo;
