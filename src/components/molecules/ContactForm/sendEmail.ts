const VALID_EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const EMPTY_ERR_MSG = `Can’t be empty`;
const INVALID_EMAIL_ERR_MSG = `Provide a valid email`;

const sendEmail = async (e: any, setError: any, setSuccess: any) => {
	e.preventDefault();
	setError("");
	setSuccess(false);

	let targetElement = e.target;

	let formData = new FormData(targetElement);
	const bodyParams = new Map();
	let hasError = false;
	for (const [key, value] of formData) {
		let str: FormDataEntryValue = value;
		const inputElement = document.getElementById(key);

		if (!value) {
			hasError = true;
			setError((prev: any) => ({
				...prev,
				[key]: EMPTY_ERR_MSG,
			}));
		} else {
			if (key === "email") {
				let emailValue = e.target[1].value;
				if (!VALID_EMAIL_REGEX.test(emailValue)) {
					hasError = true;
					setError((prev: any) => ({
						...prev,
						email: INVALID_EMAIL_ERR_MSG,
					}));
				} else {
					hasError = false;
					setError((prev: any) => ({
						...prev,
						email: "",
					}));
				}
			} else {
				setError((prev: any) => ({
					...prev,
					[key]: "",
				}));
				hasError = false;
			}
		}

		if (hasError) {
			inputElement?.parentElement?.classList.add("hasError");
		} else {
			inputElement?.parentElement?.classList.remove("hasError");
			bodyParams.set(key, value);
		}
	}

	let submitButton = document.getElementById(
		"submitMessage"
	) as HTMLButtonElement;
	if (submitButton && !hasError) {
		submitButton.disabled = true;
		submitButton.innerHTML = "Submitting...";
	}
	setTimeout(() => {
		if (!hasError) {
			if (submitButton) {
				submitButton.innerHTML = "Submitted";
				submitButton.disabled = false;
			}
			setSuccess(true);
		}
	}, 1000);
	setTimeout(() => {
		if (!hasError) {
			if (submitButton) {
				submitButton.innerHTML = "Submit";
				submitButton.disabled = false;
			}
			setSuccess(false);
		}
	}, 3000);
};
export default sendEmail;
