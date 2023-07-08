import Address from "@/components/atom/Address/Address";
import ContactUsInfo from "@/components/atom/ContactUsInfo";
import LogoLink from "@/components/atom/LogoLink/LogoLink";
import NavigationBar from "@/components/atom/NavigationBar/NavigationBar";
import SocialMediaNavBar from "@/components/atom/SocialMediaNavBar/SocialMediaNavBar";
import styles from "../Footer.module.scss";
import string from "@/utils/strings/data.json";

const FooterBottom = () => {
	return (
		<div className={styles.footer__bottom}>
			<div>
				<LogoLink theme='dark' />
				<NavigationBar mobileNavAlso={false} />
			</div>
			<div>
				<Address
					branchName='central'
					address={string[0].location["central"].address}
				/>
				<ContactUsInfo
					phone={string[0].location["central"].phone}
					mail={string[0].location["central"].mail}
					branchName='central'
					showBranch={true}
				/>
				<SocialMediaNavBar />
			</div>
		</div>
	);
};

export default FooterBottom;
