import Image from "next/image";
import style from "./Location.module.scss";
import Link from "next/link";

const Location = ({ image, location }: any) => {
	return (
		<div className={style.location}>
			<div className={style.location__image}>
				<Image src={image} width={200} height={200} alt='' />
				<Image
					src={"/assets/shared/desktop/bg-pattern-small-circle.svg"}
					width={200}
					height={200}
					alt=''
				/>
			</div>

			<span>{location}</span>
			<Link href='/locations' className='btn btn-light'>
				See Location
			</Link>
		</div>
	);
};
export default Location;
