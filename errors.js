const errors = {
	email: {
		container: document.querySelector('#email-error-container'),
		element: document.querySelector('#email-error-title'),
		value: "",
	},
	message: {
		element: document.querySelector('#error-message'),
		value: "",
	},
	name: {
		container: document.querySelector('#name-error-container'),
		element: document.querySelector('#name-error-title'),
		value: "",
	},
	phone: {
		container: document.querySelector('#phone-error-container'),
		element: document.querySelector('#phone-error-title'),
		value: ""
	},
}

// A functiont to remove errors
function removeErrors() {
	errors.name.value = "";
	errors.message.value = "";
	errors.email.value = "";
	errors.phone.value = "";
	handleErrors();
}

// A function to handle errors i.e. show and hide them
function handleErrors() {
	if (errors.name.value) {
		errors.name.element.innerText = errors.name.value;
		errors.name.container.classList.add('error');
	} else {
		errors.name.element.innerText = "";
		errors.name.container.classList.remove('error');
	}
	if (errors.email.value) {
		errors.email.element.innerText = errors.email.value;
		errors.email.container.classList.add('error');
	} else {
		errors.email.element.innerText = "";
		errors.email.container.classList.remove('error');
	}
	if (errors.phone.value) {
		errors.phone.element.innerText = errors.phone.value;
		errors.phone.container.classList.add('error');
	} else {
		errors.phone.element.innerText = "";
		errors.phone.container.classList.remove('error');
	}
	if (errors.message.value) {
		errors.message.element.innerText = errors.message.value;
		errors.message.element.classList.add("show");
	} else {
		errors.message.element.innerText = "";
		errors.message.element.classList.remove("show");
	}
}