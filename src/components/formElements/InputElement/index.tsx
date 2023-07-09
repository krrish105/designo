import Image from "next/image";

const InputElementGroup = ({
	type,
	name,
	id,
	placeholder,
	required,
	autoComplete,
	ariaRequired,
	errorMessage,
}: any) => {
	return (
		<div className='form-group'>
			<input
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				required={required}
				autoComplete={autoComplete}
				aria-required={ariaRequired}
			/>
			<div className='error'>
				<span>{errorMessage}</span>
				<Image
					src='/assets/contact/desktop/icon-error.svg'
					alt=''
					width={20}
					height={20}
				/>
			</div>
		</div>
	);
};
export default InputElementGroup;
