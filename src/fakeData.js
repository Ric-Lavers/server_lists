
export const fakePerson = iteration => (
	{
		id: `_${iteration}`,
		firstName: "name",
		lastName: "lastName",
		data: [
			{number: {name: 'one', value: 1}},
			{number: {name: 'two', value: 2}},
			{number: {name: 'three', value: 3}},
		],
		boolean: Math.random() < 0.5,
	}
)