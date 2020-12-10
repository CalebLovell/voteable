import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@utils/firebase-admin';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	if (req.method === `POST`) {
		try {
			const formData = req.body;
			const pollsRef = db.collection(`polls`);
			const newPollSnapshot = await pollsRef.add(formData);
			const newPoll = await newPollSnapshot.get();
			res.status(200).json({ data: newPoll.data() });
		} catch (error) {
			res.status(500).json({ error });
		}
	} else if (req.method === `GET`) {
		try {
			const pollsRef = db.collection(`polls`);
			const snapshot = await pollsRef.get();
			const polls = [];
			snapshot.forEach(doc => {
				polls.push({ id: doc.id, ...doc.data() });
			});
			res.status(200).json(polls);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
};
