import { Request, Response } from 'express';

import { Polls } from '@utils/dataTypes';
import { db } from '@utils/firebase-admin';

export default async (_: Request, res: Response): Promise<Polls> => {
	const snapshot = await db.collection(`polls`).get();
	const polls = [];
	snapshot.forEach(doc => {
		polls.push({ id: doc.id, ...doc.data() });
	});
	return res.status(200).json(polls);
};
