import { Poll, Polls } from '@utils/dataTypes';

import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`http://localhost:3000/api/polls`);
	const data = await res.json();
	return { revalidate: 86400, props: { polls: data } };
};

interface Props {
	polls: Polls;
}

const LandingPage: React.FC<Props> = ({ polls }): JSX.Element => {
	const sortedPolls = () => {
		return polls.sort((a: Poll, b: Poll) => {
			if (a.created_at > b.created_at) return 1;
			else if (a.created_at < b.created_at) return -1;
			else return 0;
		});
	};

	return (
		<main className='container w-full min-h-content bg-base-primary text-base-secondary'>
			<h1>Most recent polls:</h1>
			<section>
				{sortedPolls().map(poll => (
					<div key={poll.id} className='mb-4 border-2 border-indigo-500'>
						<p>{poll.title}</p>
						<p>{poll.description}</p>
						<p>{poll.type}</p>
					</div>
				))}
			</section>
		</main>
	);
};

export default LandingPage;
