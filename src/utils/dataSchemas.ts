import { Describe, array, enums, object, optional, size, string } from 'superstruct';

import { NewPoll } from './dataTypes';

export const BasePollSchema: Describe<NewPoll> = object({
	title: string(),
	description: optional(string()),
	choices: array(string()),
	types: array(enums([`First Past The Post`, `Ranked Choice`, `Single Transferable`])),
	user_id: string(),
});

export const PollSchema = object({
	title: size(string(), 1, 100),
	description: optional(size(string(), 1, 2000)),
	choices: size(array(string()), 1, 10),
	types: size(array(enums([`First Past The Post`, `Ranked Choice`, `Single Transferable`])), 1, 3),
	user_id: size(string(), 1, 50),
});
