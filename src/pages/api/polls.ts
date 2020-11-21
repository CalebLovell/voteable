import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@utils/firebase-admin';

export default async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const pollsRef = db.collection(`polls`);
		const snapshot = await pollsRef.get();
		const polls = [];
		snapshot.forEach(doc => {
			polls.push({ id: doc.id, ...doc.data() });
		});
		res.status(200).json(polls);
	} catch (error) {
		res.status(500).json({ status: 500, error: error.message });
	}
};
