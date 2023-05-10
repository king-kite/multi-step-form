let activeScreen = "first";

const title = document.querySelector("#title");
const description = document.querySelector("#description");

const screens = {
	first: {
		component: document.querySelector("#first-screen"),
		title: "Personal info",
		description: "Please provide your name, email address and phone number."
	},
	second: {
		component: document.querySelector("#second-screen"),
		title: "Select your plan",
		description: "You have the option of monthly or yearly billing."
	},
	third: {
		component: document.querySelector("#third-screen"),
		title: "Pick add-ons",
		description: "Add-ons help enhance your gaming experience."
	},
	fourth: {
		component: document.querySelector("#fourth-screen"),
		title: "Finishing up",
		description: "Double-check everything looks OK before confirming."
	},
	thanks: {
		component: document.querySelector("#thank-you"),
		title: "",
		description: ""
	},
};
const navs = {
	first: document.querySelector("#nav-step-1"),
	second: document.querySelector("#nav-step-2"),
	third: document.querySelector("#nav-step-3"),
	fourth: document.querySelector("#nav-step-4"),
};

// A function to close multiple screens except on that is provided
// in the name parameter
function closeScreens(name) {
	const screenKeys = Object.keys(screens);
	const closeKeys = screenKeys.filter((item) => item !== name);
	closeKeys.forEach((key) => {
		screens[key].component.classList.remove("show");
		if (key !== "thanks") {
			navs[key].classList.remove("active");
		}
	});

	if (name === "thanks" && !form.classList.contains("hide"))
		form.classList.add("hide");
}

// A function to show a screen
function showScreen(name) {
	// Remove the hide class if present
	if (form.classList.contains("hide") && name !== "thanks")
		form.classList.remove("hide");
	closeScreens(name);
	activeScreen = name;
	screens[name].component.classList.add("show");
	if (name !== "thanks") {
		navs[name].classList.add("active");
		title.innerText = screens[name].title;
		description.innerText = screens[name].description;
	} else {
		navs["fourth"].classList.add("active");
	}

	if (name !== "thanks" && name !== "first") {
		// show the go back button
		goBack.classList.add("show")
	} else {
		// remove the go back button
		goBack.classList.remove("show")
	}

	const formSubmit = document.querySelector('#form-submit');
	if (name === "fourth") {
		formSubmit.innerText = 'Confirm';
		formSubmit.classList.add('finish');
	} else {
		formSubmit.innerText = 'Next Step';
		formSubmit.classList.remove('finish');
	}

	// handle screen info i.e. saved data.
	switch(name) {
		case "first":
			handleFirstScreen();
			break;
		case "second":
			handleSecondScreen();
			break;
		case "third":
			handleThirdScreen();
			break;
		case "fourth":
			handleFourthScreen();
			break;
		default:
			return;
	}
}