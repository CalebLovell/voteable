import { GetStaticProps } from 'next';
import { Poll } from '@utils/dataTypes';
import { PollCard } from '@components/PollCard';

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`http://localhost:3000/api/polls`);
	const data = await res.json();
	return { revalidate: 86400, props: { polls: data } };
};

interface Props {
	polls: Poll[];
}

const LandingPage: React.FC<Props> = ({ polls }): JSX.Element => {
	const sortedPolls = () => {
		return polls.sort((a: Poll, b: Poll) => {
			if (a.createdAt > b.createdAt) return 1;
			else if (a.createdAt < b.createdAt) return -1;
			else return 0;
		});
	};

	return (
		<main className='container w-full min-h-content bg-base-primary text-base-secondary'>
			<section>
				<h1 className='text-lg font-medium text-gray-500 uppercase'>Most Recent Polls</h1>
				<ul className='grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{sortedPolls().map(poll => (
						<PollCard key={poll.id} poll={poll} />
					))}
				</ul>
			</section>
		</main>
	);
};

export default LandingPage;
