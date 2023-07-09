import LogoLink from "@/components/atom/LogoLink";
import NavigationBar from "@/components/atom/NavigationBar";

const Header = () => {
	return (
		<header className={`container header`}>
			<LogoLink theme='light' />
			<NavigationBar mobileNavAlso={true} />
		</header>
	);
};
export default Header;
