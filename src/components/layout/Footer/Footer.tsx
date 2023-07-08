import styles from "./Footer.module.scss";
import FooterBottom from "@/components/layout/Footer/FooterBottom";
import FooterTop from "@/components/layout/Footer/FooterTop";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<FooterTop />
				<FooterBottom />
			</div>
		</footer>
	);
};
export default Footer;
