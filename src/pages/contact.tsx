import Head from "next/head";
import Image from "next/image";
import ContactForm from "@/components/molecules/ContactForm";
import LocationSection from "@/components/molecules/LocationSection";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact | Designo</title>
			</Head>
			<div className='contactHeaderContainer'>
				<div className='contactgrid'>
					<div>
						<h1>Contact Us</h1>
						<p>
							Ready to take it to the next level? Let’s talk about your project
							or idea and find out how we can help your business grow. If you
							are looking for unique digital experiences that’s relatable to
							your users, drop us a line.
						</p>
					</div>
					<Image
						src='/assets/contact/desktop/bg-pattern-hero-desktop.svg'
						width={640}
						height={640}
						alt=''
					/>
					<ContactForm />
				</div>
			</div>

			<LocationSection />
		</>
	);
}
