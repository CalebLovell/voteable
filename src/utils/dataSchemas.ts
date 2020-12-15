import { Describe, array, enums, nullable, object, size, string } from 'superstruct';

import { NewPoll } from './dataTypes';

const titleStruct = string();

const descriptionStruct = nullable(string());

const choicesStruct = array(
	object({
		choice: string(),
	})
);

const votingTypesStruct = array(enums([`First Past The Post`, `Ranked Choice`, `Single Transferable`]));

const userStruct = string();

export const pollSchema: Describe<NewPoll> = object({
	title: titleStruct,
	description: descriptionStruct,
	choices: choicesStruct,
	types: votingTypesStruct,
	user_id: userStruct,
});
