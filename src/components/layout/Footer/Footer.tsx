import LogoLink from "@/components/atom/LogoLink/LogoLink";
import styles from "./Footer.module.scss";
import NavigationBar from "@/components/atom/NavigationBar/NavigationBar";
import SocialMediaNavBar from "@/components/atom/SocialMediaNavBar/SocialMediaNavBar";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__top}>
					<div>
						<p>Let’s talk about your project</p>
						<p>
							Ready to take it to the next level? Contact us today and find out
							how our expertise can help your business grow.
						</p>
					</div>
					<Link href='/contact' className='btn btn-dark'>
						Get In Touch
					</Link>
				</div>
				<div className={styles.footer__bottom}>
					<div>
						<LogoLink theme='dark' />
						<NavigationBar mobileNavAlso={false} />
					</div>
					<div>
						<div>
							Designo Central Office
							<br />
							3886 Wellington Street
							<br />
							Toronto, Ontario M9C 3J5
						</div>
						<div>
							Contact Us (Central Office)
							<br />P : +1 253-863-8967
							<br />M : contact@designo.co
						</div>
						<SocialMediaNavBar />
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
