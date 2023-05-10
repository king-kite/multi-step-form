const planSwitch = document.querySelector('#plan-switch-button');

const plans = [
	{
		icon: "assets/images/icon-arcade.svg",
		price: 9,
		title: "Arcade"	,
		value: "arcade",
		yearlyDuration: "2 months free",
		yearlyPrice: 90
	},
	{
		icon: "assets/images/icon-advanced.svg",
		price: 12,
		title: "Advanced"	,
		value: "advanced",
		yearlyDuration: "2 months free",
		yearlyPrice: 120
	},
	{
		icon: "assets/images/icon-pro.svg",
		price: 15,
		title: "Pro"	,
		value: "pro",
		yearlyDuration: "2 months free",
		yearlyPrice: 150
	},
]

function handleSecondScreen() {
	const yearly = data.plan.type === "yearly";

	if (yearly) {
		planSwitch.classList.add('yearly');
	} else {
		planSwitch.classList.remove('yearly')
	}

	const planList = document.querySelector('#plan-list');
	planList.innerHTML = plans.map(plan => {
		const checked = data.plan.value === plan.value
		return `
		<li>
		  <label onclick="savePlanValue('${plan.value}')" for="${plan.value}" class="plan-list-item ${checked ? 'active' : ''}">
		    <div class="plan-icon-container">
		      <img src="${plan.icon}" alt="" />
		    </div>
		    <h4 class="plan-title">
		      ${plan.title} <span class="plan-price">&dollar;${yearly ? plan.yearlyPrice : plan.price}/${yearly ? "yr" : "mo"}</span>

		      <p class="yearly-bonus ${yearly ? "show" : ""}">${plan.yearlyDuration}</p>
		    </h4>
		    <input
		    	${checked ? 'checked' : ''}
		      type="radio"
		      name="plan"
		      id="${plan.value}"
		      value="${plan.value}"
		    />
		  </label>
		</li>
	`
	}).join("")
}

function savePlanValue(value) {
	// Store the clicked value in the data object and
	// refresh the screen
	data.plan.value = value;
	showScreen('second')
}


planSwitch.addEventListener('click', function () {
	const monthlyElement = document.querySelector('#plan-switch-monthly');
	const yearlyElement = document.querySelector('#plan-switch-yearly');

	if (data.plan.type === 'monthly') {
		data.plan.type = 'yearly';
		yearlyElement.classList.add('active');
		monthlyElement.classList.remove('active');
		planSwitch.classList.add('yearly')
	} else {
		data.plan.type = 'monthly'
		monthlyElement.classList.add('active');
		yearlyElement.classList.remove('active')
		planSwitch.classList.remove('yearly')
	}
	showScreen('second')
})