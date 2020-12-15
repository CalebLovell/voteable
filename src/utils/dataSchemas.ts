import { array, boolean, object, optional, refine, size, string } from 'superstruct';

const titleStruct = size(string(), 1, 100);

const descriptionStruct = optional(size(string(), 1, 500));

const choicesStruct = size(
	array(
		object({
			choice: size(string(), 1, 100),
		})
	),
	1,
	10
);

const votingTypesStruct = refine(
	object({
		firstPastThePost: boolean(),
		rankedChoice: boolean(),
		singleTransferable: boolean(),
	}),
	`types`,
	value => value.firstPastThePost === true || value.rankedChoice === true || value.singleTransferable === true
);

const userStruct = size(string(), 20, 20);

export const pollSchema = object({
	title: titleStruct,
	description: descriptionStruct,
	choices: choicesStruct,
	types: votingTypesStruct,
	user_id: userStruct,
});
