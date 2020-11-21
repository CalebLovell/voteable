import { Response } from 'express';
import { db } from '@utils/firebase-admin';

export default async (res: Response): Promise<void> => {
	try {
		const snapshot = await db.collection(`polls`).get();
		const polls = [];
		snapshot.forEach(doc => {
			polls.push({ id: doc.id, ...doc.data() });
		});
		res.status(200).json(polls);
	} catch (error) {
		res.status(500).send(error);
	}
};
