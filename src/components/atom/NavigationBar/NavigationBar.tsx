import Link from "next/link";

const NavigationBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/company'>Our Company</Link>
				</li>
				<li>
					<Link href='/locations'>Locations</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};
export default NavigationBar;
