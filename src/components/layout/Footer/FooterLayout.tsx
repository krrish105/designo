import styles from "./styles.module.scss";
import FooterBottom from "@/components/layout/Footer/FooterBottom";

const FooterLayout = ({ showFooterTop, children }: any) => {
	return (
		<footer
			className={`${styles.footer} ${
				showFooterTop ? styles.footer__hasFooterTop : ""
			}`}
		>
			<div>
				{children}
				<FooterBottom />
			</div>
		</footer>
	);
};
export default FooterLayout;
