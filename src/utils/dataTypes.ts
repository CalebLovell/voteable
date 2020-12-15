import { Timestamp } from '@firebase/firestore-types';

export interface User {
	name: string;
	created_at: Timestamp;
	updated_at: Timestamp;
}

interface Choice {
	choice_id: string;
	title: string;
}

interface VotingTypes {
	firstPastThePost: boolean;
	rankedChoice: boolean;
	singleTransferable: boolean;
}

export interface Poll {
	id: string;
	title: string;
	description?: string;
	choices: Choice[];
	types: VotingTypes;
	user_id: string;
	created_at: Timestamp;
	expiration: Timestamp;
}

export interface Vote {
	user_id: string;
	poll_id: string;
	choice_id: string;
	created_at: Timestamp;
}

export type Users = User[];
export type Polls = Poll[];
export type Votes = Vote[];
