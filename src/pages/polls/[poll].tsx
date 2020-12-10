import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Poll } from '@utils/dataTypes';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const res = await fetch(`http://localhost:3000/api/polls/${context.params.poll}`);
	const data = await res.json();
	return { props: { poll: data } };
};

// http://localhost:3000/polls/zHvJssTJ3Goqyemz60T4

interface Props {
	poll: Poll;
}

const PollPage: React.FC<Props> = ({ poll }): JSX.Element => {
	return (
		<main className='container flex justify-center w-full min-h-content bg-base-primary'>
			<fieldset className='mt-6'>
				<legend className='text-base font-medium leading-6 text-gray-900'>{poll.title}</legend>
				<p className='text-sm leading-5 text-gray-500'>{poll.description}</p>
				<p className='text-sm leading-5 text-gray-500'>Voting type: {poll.type}</p>
				<p className='text-sm leading-5 text-gray-500'>User: {poll.user_id}</p>
				<div className='mt-4'>
					{poll.choices.map((choice, i) => (
						<div key={i} className='flex items-center'>
							<input
								id={choice.choice_id}
								name='choice'
								type='radio'
								className='w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio'
							/>
							<label htmlFor={choice.choice_id} className='ml-3'>
								<span className='block text-sm font-medium leading-5 text-gray-700'>{choice.title}</span>
							</label>
						</div>
					))}
				</div>
				<button>Vote</button>
			</fieldset>
		</main>
	);
};

export default PollPage;
