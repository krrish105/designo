import Image from "next/image";

const TextAreaElementGroup = ({
	name,
	id,
	placeholder,
	required,
	autoComplete,
	rows,
	cols,
	ariaRequired,
	errorMessage,
}: any) => {
	return (
		<div className='form-group'>
			<textarea
				name={name}
				id={id}
				placeholder={placeholder}
				required={required}
				rows={rows}
				cols={cols}
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
export default TextAreaElementGroup;
