import { Describe, array, enums, nullable, object, size, string } from 'superstruct';

import { NewPoll } from './dataTypes';

const baseTitle = string();

const BasePollSchema: Describe<NewPoll> = object({
	title: baseTitle,
	description: nullable(string()),
	choices: array(
		object({
			choice: string(),
		})
	),
	types: array(enums([`First Past The Post`, `Ranked Choice`, `Single Transferable`])),
	user_id: string(),
});

export const pollSchema = object({
	title: size(baseTitle, 1, 100),
	// description: size(nullable(string()), 1, 500),
	description: nullable(size(string(), 1, 500)),
	choices: size(
		array(
			object({
				choice: string(),
			})
		),
		1,
		10
	),
	types: array(size(enums([`First Past The Post`, `Ranked Choice`, `Single Transferable`]), 1, 3)),
	user_id: size(string(), 1, 50),
});
