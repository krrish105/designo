import styles from "./Header.module.scss";
import LogoLink from "@/components/atom/LogoLink/LogoLink";
import NavigationBar from "@/components/atom/NavigationBar/NavigationBar";

const Header = () => {
	return (
		<header className={`container ${styles.header}`}>
			<LogoLink theme='light' />
			<NavigationBar mobileNavAlso={true} />
		</header>
	);
};
export default Header;
