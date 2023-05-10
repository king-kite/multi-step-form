const changeLink = document.querySelector("#change");
const finishList = document.querySelector('#finish-up-list');
const finishPlanPrice = document.querySelector("#finish-plan-price");
const finishTitle = document.querySelector("#finish-title");
const finishPrice = document.querySelector('#finish-up-total-price')

changeLink.addEventListener("click", function () {
	showScreen("second");
});

function handleFourthScreen() {
	const plan = plans.find((item) => item.value === data.plan.value);
	const planPrice = data.plan.type === "yearly" ? plan.yearlyPrice : plan.price;
	const userAddons = addons.filter((item) => data.addons.includes(item.value));

	const subscript = data.plan.type === "yearly" ? "yr" : "mo"

	finishTitle.innerText = plan.title + ` (${data.plan.type})`;
	finishPlanPrice.innerText = `$${planPrice}/${subscript}`;

	finishList.innerHTML = userAddons.map(addon => `
		<li class="finish-up-list-item">
		  <p class="finish-up-list-item-title">${addon.name}</p>
		  <p class="finish-up-list-item-price">+$${data.plan.type === "yearly" ? addon.yearlyPrice : addon.price}/${subscript}</p>
		</li>
	`).join("")

	const totalPrice = userAddons.reduce((acc, addon) => {
		const price = data.plan.type === "yearly" ? addon.yearlyPrice : addon.price
		return acc + +price;
	}, +planPrice)

	finishPrice.innerText = `+$${totalPrice}/${subscript}`
}
