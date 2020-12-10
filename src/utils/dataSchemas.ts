import { array, object, optional, size, string } from 'superstruct';

export const newPoll = object({
	title: size(string(), 1, 100),
	description: optional(size(string(), 1, 300)),
	choices: size(
		array(
			object({
				choice: size(string(), 1, 100),
			})
		),
		1,
		10
	),
	type: size(string(), 1, 100),
});
