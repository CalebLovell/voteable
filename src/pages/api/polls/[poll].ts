import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@utils/firebase-admin';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const pollsRef = db.collection(`polls`);
		const pollSnapshot = await pollsRef.doc(`${req.query.poll}`).get();
		res.status(200).json(pollSnapshot.data());
	} catch (error) {
		res.status(500).json({ error });
	}
};
