"use client";
import Link from "next/link";
import styles from "../styles.module.scss";
import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer/FooterLayout";
import Image from "next/image";

const FooterTop = () => {
	const pathname = usePathname();
	if (pathname !== "/contact") {
		return (
			<Footer showFooterTop={true}>
				<div className={styles.footer__top}>
					<Image
						src='/assets/shared/desktop/bg-pattern-three-circles.svg'
						width={640}
						height={640}
						alt=''
					/>
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
			</Footer>
		);
	} else {
		return <Footer showFooterTop={false}></Footer>;
	}
};
export default FooterTop;
