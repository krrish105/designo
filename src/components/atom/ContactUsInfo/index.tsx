import Link from "next/link";

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
			<br />P : <Link href={`tel:${phone}`}>{phone}</Link>
			<br />M : <Link href={`mailto:${mail}`}>{mail}</Link>
		</div>
	);
};
export default ContactUsInfo;
