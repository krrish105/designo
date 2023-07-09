"use client";
import InputElementGroup from "@/components/formElements/InputElement";
import TextAreaElementGroup from "@/components/formElements/TextAreaElement";
import { useState } from "react";
import sendEmail from "@/components/molecules/ContactForm/sendEmail";

interface ErrorForm {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const ContactForm = () => {
	const [error, setError] = useState<ErrorForm>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [success, setSuccess] = useState<string | null>("");

	return (
		<form action='' onSubmit={(e) => sendEmail(e, setError, setSuccess)}>
			<InputElementGroup
				type='text'
				name='name'
				id='name'
				placeholder='Name'
				ariaRequired
				errorMessage={error.name}
			/>
			<InputElementGroup
				type='email'
				name='email'
				id='email'
				placeholder='Email Address'
				ariaRequired
				errorMessage={error.email}
			/>
			<InputElementGroup
				type='tel'
				name='phone'
				id='phone'
				placeholder='Phone'
				ariaRequired
				errorMessage={error.phone}
			/>
			<TextAreaElementGroup
				name='message'
				id='message'
				placeholder='Your Message'
				ariaRequired
				cols={30}
				rows={3}
				errorMessage={error.message}
			/>
			<div className='submit__btn__container'>
				{success && <span>Message Sent!</span>}
				<button className='btn btn-dark' id='submitMessage'>
					Submit
				</button>
			</div>
		</form>
	);
};
export default ContactForm;
