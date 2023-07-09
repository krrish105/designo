import Image from "next/image";
import Link from "next/link";

const SocialMediaNavBar = () => {
	return (
		<ul className='social'>
			<li>
				<Link href='/'>
					<Image
						src='/assets/shared/desktop/icon-facebook.svg'
						alt=''
						width={24}
						height={24}
					/>
					<span className='sr-only'>facebook</span>
				</Link>
			</li>
			<li>
				<Link href='/'>
					<Image
						src='/assets/shared/desktop/icon-youtube.svg'
						alt=''
						width={24}
						height={24}
					/>
					<span className='sr-only'>youtube</span>
				</Link>
			</li>
			<li>
				<Link href='/'>
					<Image
						src='/assets/shared/desktop/icon-twitter.svg'
						alt=''
						width={24}
						height={24}
					/>
					<span className='sr-only'>twitter</span>
				</Link>
			</li>
			<li>
				<Link href='/'>
					<Image
						src='/assets/shared/desktop/icon-pinterest.svg'
						alt=''
						width={24}
						height={24}
					/>
					<span className='sr-only'>pinterest</span>
				</Link>
			</li>
			<li>
				<Link href='/'>
					<Image
						src='/assets/shared/desktop/icon-instagram.svg'
						alt=''
						width={24}
						height={24}
					/>
					<span className='sr-only'>instagram</span>
				</Link>
			</li>
		</ul>
	);
};
export default SocialMediaNavBar;
