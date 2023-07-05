import Image from "next/image";
import Link from "next/link";

const LogoLink = ({ theme }: { theme: string }) => {
	return (
		<Link href='/'>
			<Image
				src={
					theme === "light"
						? "/assets/logo/logo-dark.png"
						: "/assets/logo/logo-light.png"
				}
				width={196}
				height={24}
				alt='Designo Logo'
			/>
		</Link>
	);
};
export default LogoLink;
