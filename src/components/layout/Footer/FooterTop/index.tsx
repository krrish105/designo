"use client";
import Link from "next/link";
import styles from "../Footer.module.scss";
import { usePathname } from "next/navigation";

const FooterTop = () => {
	const pathname = usePathname();
	if (pathname !== "/contact") {
		return (
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
		);
	}
};
export default FooterTop;
