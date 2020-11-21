export interface User {
	id: string;
	name: string;
	email: string;
}

type VotingSystems = `First Past The Post` | `Ranked Choice` | `Single Transferable`;

interface Choice {
	choice_id: string;
	value: number;
}

export interface Poll {
	title: string;
	description?: string;
	type: VotingSystems;
	choices: Choice[];
	user_id: string;
	created_at: string;
}

export interface Vote {
	id: string;
	user_id: string;
	poll_id: string;
	choice_id: string;
}

export type Users = User[];
export type Polls = Poll[];
export type Votes = Vote[];
