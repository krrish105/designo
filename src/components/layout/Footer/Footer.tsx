import LogoLink from "@/components/atom/LogoLink/LogoLink";
import styles from "./Footer.module.scss";
import NavigationBar from "@/components/atom/NavigationBar/NavigationBar";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__top}></div>
				<div className={styles.footer__bottom}>
					<LogoLink theme='dark' />
					<NavigationBar />
				</div>
			</div>
		</footer>
	);
};
export default Footer;
