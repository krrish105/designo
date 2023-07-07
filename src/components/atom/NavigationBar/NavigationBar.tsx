"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavigationBar = ({ mobileNavAlso }: any) => {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<>
			{mobileNavAlso && (
				<button
					className='hamburger'
					onClick={() => setShowMobileNav((prev) => !prev)}
				>
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
					<li>
						<Link
							href='/company'
							onClick={() => mobileNavAlso && setShowMobileNav((prev) => !prev)}
						>
							Our Company
						</Link>
					</li>
					<li>
						<Link
							href='/locations'
							onClick={() => mobileNavAlso && setShowMobileNav((prev) => !prev)}
						>
							Locations
						</Link>
					</li>
					<li>
						<Link
							href='/contact'
							onClick={() => mobileNavAlso && setShowMobileNav((prev) => !prev)}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
export default NavigationBar;
