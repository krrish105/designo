import Image from "next/image";

const SocialMediaNavBar = () => {
	return (
		<ul className='social'>
			<li>
				<a href=''>
					<Image
						src='/assets/shared/desktop/icon-facebook.svg'
						alt=''
						width={24}
						height={24}
					/>
				</a>
			</li>
			<li>
				<a href=''>
					<Image
						src='/assets/shared/desktop/icon-youtube.svg'
						alt=''
						width={24}
						height={24}
					/>
				</a>
			</li>
			<li>
				<a href=''>
					<Image
						src='/assets/shared/desktop/icon-twitter.svg'
						alt=''
						width={24}
						height={24}
					/>
				</a>
			</li>
			<li>
				<a href=''>
					<Image
						src='/assets/shared/desktop/icon-pinterest.svg'
						alt=''
						width={24}
						height={24}
					/>
				</a>
			</li>
			<li>
				<a href=''>
					<Image
						src='/assets/shared/desktop/icon-instagram.svg'
						alt=''
						width={24}
						height={24}
					/>
				</a>
			</li>
		</ul>
	);
};
export default SocialMediaNavBar;
