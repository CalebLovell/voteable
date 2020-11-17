enum VotingSystems {
	FirstPastThePost = 1,
	RankedChoice = 2,
	SingleTransferable = 3,
}

export interface Poll {
	id: string;
	title: string;
	description?: string;
	choices: string[];
	system: VotingSystems;
}

export type Polls = Poll[];
