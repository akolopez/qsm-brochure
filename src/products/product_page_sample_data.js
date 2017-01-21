exports.types = [
	{
		"value": null, "label": "Any"
	},
	{
		"value": "vaccines", "label": "Vaccines"
	},
	{
		"value": "vitamins", "label": "Vitamins"
	},
	{
		"value": "antibiotics", "label": "Antibiotics"
	},
	{
		"value": "basemix", "label": "Base Mixes"
	},
	{
		"value": "others", "label": "Others"
	}
]

exports.brands = [
	{
		"value": null, "label": "Any"
	},
	{
		"value": "msd", "label": "MSD"
	},
	{
		"value": "zagro", "label": "Zagro"
	}
]

exports.species = [
	{
		"value": null, "label": "Any"
	},
	{
		"value": "swine", "label": "Swine"
	},
	{
		"value": "poultry", "label": "Poultry"
	},
	{
		"value": "others", "label": "Others"
	}
]

exports.products = [
	{id: 1, name: 'Pig-Grow', description: 'Make your pig fatter than your face.', brand: 'MSD', species: 'Swine', type: 'basemix'},
	{id: 2, name: 'Bust of Waddles the Pig', description: 'Waddles, the first of his name.', brand: 'Zagro', species: 'Swine', type: 'others'},
	{id: 3, name: 'Chicken-joy stimulator', description: 'Happier chickens equals happier you. $$$', brand: 'Zagro', species: 'Poultry', type: 'vitamins'},
	{id: 4, name: 'Human Repellent', description: 'Get rid of the worst anti-bodies.', brand: 'MSD', species: 'Others', type: 'others'},
	{id: 5, name: 'Zombie Vaccine', description: 'Use in case of zombie outbreak.', brand: 'Zagro', species: 'Others', type: 'vaccines'}
]
