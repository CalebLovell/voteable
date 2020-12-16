import { Timestamp } from '@firebase/firestore-types';

export interface User {
	name: string;
	createdAt: string;
	updatedAt: string;
}

type VotingType = `First Past The Post` | `Ranked Choice` | `Single Transferable`;

export interface NewPollData {
	title: string;
	description?: string;
	choices: string[];
	types: VotingType[];
	user_id: string;
}

export interface Poll {
	id: string;
	title: string;
	description?: string;
	choices: string[];
	types: VotingType[];
	createdAt: string;
	user_id: string;
}

export interface Vote {
	user_id: string;
	poll_id: string;
	choice_id: string;
	createdAt: string;
}
