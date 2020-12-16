import { Timestamp } from '@firebase/firestore-types';

export interface User {
	name: string;
	created_at: Timestamp;
	updated_at: Timestamp;
}

type VotingType = `First Past The Post` | `Ranked Choice` | `Single Transferable`;

export interface NewPoll {
	title: string;
	description: string | null;
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
