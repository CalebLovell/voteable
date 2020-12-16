import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@utils/firebase-admin';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const { method, body } = req;
	switch (method) {
		case `GET`:
			try {
				const pollsRef = db.collection(`polls`);
				const snapshot = await pollsRef.get();
				const polls: any[] = [];
				snapshot.forEach(doc => {
					polls.push({ id: doc.id, ...doc.data() });
				});
				res.status(200).json(polls);
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		case `POST`:
			try {
				const pollsRef = db.collection(`polls`);
				const newPoll = await pollsRef.add({ ...body, createdAt: new Date().toISOString() });
				const snapshot = await newPoll.get();
				res.status(200).json({ id: snapshot.id, ...snapshot.data() });
			} catch (error) {
				res.status(500).json({ error });
			}
			break;
		default:
			res.setHeader(`Allow`, [`GET`, `POST`]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};
