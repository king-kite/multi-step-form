const addons = [
	{
		description: 'Access to multiplayer games',
		name: 'Online service',
		price: 1,
		value: 'online_service',
		yearlyPrice: 10,
	},
	{
		description: 'Extra 1TB of cloud save',
		name: 'Larger storage',
		price: 2,
		value: 'larger_storage',
		yearlyPrice: 20,
	},
	{
		description: 'Custom theme on your profile',
		name: 'Customizable profile',
		price: 2,
		value: 'customizable_profile',
		yearlyPrice: 20,
	}
]

function handleThirdScreen() {
	const yearly = data.plan.type === "yearly";

	const addonsList = document.querySelector('#addons-list');
	addonsList.innerHTML = addons.map(addon => {
		const checked = !!data.addons.find(item => item === addon.value);

		return `
			<li class="addons-list-item ${checked ? 'active' : ''}">
        <label onclick="handleAddonValue('${addon.value}', ${checked ? 1 : 0})" for="${addon.value}">
          <div class="checkbox-container">
            <div class="checkbox">
              <input
                ${checked ? 'checked' : ''}
                type="checkbox"
                name="${addon.value}"
                id="${addon.value}"
              />
              <span class="checkmark"></span>
            </div>
          </div>
          <div class="addons-list-item-title">
            <h3>${addon.name}</h3>
            <p>${addon.description}</p>
          </div>
          <p class="addons-list-item-price">+$${yearly ? addon.yearlyPrice : addon.price}/${yearly ? 'yr' : 'mo'}</p>
        </label>
      </li>
		`
	}).join("")
}

function handleAddonValue(value, checked) {
	// Store the clicked value in the data object and
	// refresh the screen
	if (checked === 1) {
		// Means currently saved, hence remove
		data.addons = data.addons.filter(item => item !== value);
	} else {
		data.addons = [
			...data.addons,
			value
		]
	}
	showScreen('third');
}