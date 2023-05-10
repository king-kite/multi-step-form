const form = document.querySelector("#form");
const goBack = document.querySelector("#form-go-back");

const data = {
	name: "",
	email: "",
	phone: "",
	plan: {
		value: "arcade",
		type: "monthly"
	},
	addons: []
};

goBack.addEventListener('click', function () {
	switch(activeScreen) {
		case "second":
			return showScreen("first");
		case "third":
			return showScreen("second");
		case "fourth":
			return showScreen("third");
		default:
			showScreen("first")
	}
})

form.addEventListener("submit", function (event) {
	event.preventDefault();
	removeErrors();
	if (activeScreen === "first")
		handleFirstScreenSubmit(
			this.name.value.trim(),
			this.email.value.trim(),
			this.phone.value.trim()
		);
	else if (activeScreen === "second")
		showScreen("third")
	else if (activeScreen === "third")
		showScreen("fourth")
	else showScreen("thanks")
});
