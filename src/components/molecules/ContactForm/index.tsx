import InputElementGroup from "@/components/formElements/InputElement";
import TextAreaElementGroup from "@/components/formElements/TextAreaElement";

const ContactForm = () => {
	return (
		<form action=''>
			<InputElementGroup
				type='text'
				name='name'
				id='name'
				placeholder='Name'
				required
			/>
			<InputElementGroup
				type='email'
				name='email'
				id='email'
				placeholder='Email Address'
				required
			/>
			<InputElementGroup
				type='tel'
				name='phone'
				id='phone'
				placeholder='Phone'
				required
			/>
			<TextAreaElementGroup
				name='message'
				id='message'
				placeholder='Your Message'
				required
				cols={30}
				rows={3}
			/>
			<button className='btn btn-dark'>Submit</button>
		</form>
	);
};
export default ContactForm;
