"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import string from "@/utils/strings/data.json";

const NavigationBar = ({ mobileNavAlso }: any) => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const toggleNav = () => {
		const hamburger = document.getElementById("hamburger");
		if (
			mobileNavAlso &&
			hamburger &&
			window.getComputedStyle(hamburger).display === "block"
		) {
			setShowMobileNav((prev) => !prev);
		}
	};

	return (
		<>
			{mobileNavAlso && (
				<button className='hamburger' onClick={toggleNav} id='hamburger'>
					{showMobileNav ? (
						<Image
							src='/assets/shared/mobile/icon-close.svg'
							alt=''
							width={24}
							height={20}
						/>
					) : (
						<Image
							src='/assets/shared/mobile/icon-hamburger.svg'
							alt=''
							width={24}
							height={20}
						/>
					)}
				</button>
			)}

			<nav className={showMobileNav ? "active" : ""}>
				<ul>
					{string[0].navlinks.map((el: any, i: any) => {
						return (
							<li key={el.name}>
								<Link href={el.url} onClick={toggleNav}>
									{el.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};
export default NavigationBar;
