function handleFirstScreen() {
	if (data.name)
		form.name.value = data.name;
	if (data.email)
		form.email.value = data.email;
	if (data.phone)
		form.phone.value = data.phone;

	removeErrors();
}

function handleFirstScreenSubmit(name, email, phone) {
	let isValid = true;
	// errors is coming from the errors.js file
	if (!name) {
		errors.name.value = "This field is required!";
		isValid = false;
	} else if (name.length < 4) {
		isValid = false;
		errors.name.value = "This field must be at least 4 characters!";
	}

	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!email) {
		errors.email.value = "This field is required!";
		isValid = false;
	} else if (!emailRegex.test(email)) {
		// Validate the field to be an email
		errors.email.value = "This field is not a valid email address!";
		isValid = false;
	}

	const phoneRegex = /[+]{1}[0-9]{1,3} [0-9]{3} [0-9]{3,4} [0-9]{3}/;
	if (!phone) {
		errors.phone.value = "This field is required!";
		isValid = false;
	} else if (!phoneRegex.test(phone)) {
		isValid = false;
		errors.phone.value = "Invalid phone number. Use format provided!"
	}

	handleErrors();

	if (isValid === true) {
		// Change the screen and save the data;
		data.name = name;
		data.email = email;
		data.phone = phone;
		showScreen("second");
	}
}