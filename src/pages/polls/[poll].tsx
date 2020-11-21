import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Container } from '@components/Layout/Container';
import { Poll } from '@utils/dataTypes';

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const res = await fetch(`http://localhost:3000/api/polls/${context.params.poll}`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { poll: data } };
};

// http://localhost:3000/polls/zHvJssTJ3Goqyemz60T4

interface Props {
	poll: Poll;
}

const PollPage: React.FC<Props> = ({ poll }): JSX.Element => {
	return (
		<Container style='w-full min-h-content bg-base-primary flex justify-center'>
			<fieldset className='mt-6'>
				<legend className='text-base leading-6 font-medium text-gray-900'>{poll.title}</legend>
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
								className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
							/>
							<label htmlFor={choice.choice_id} className='ml-3'>
								<span className='block text-sm leading-5 font-medium text-gray-700'>{choice.title}</span>
							</label>
						</div>
					))}
				</div>
				<button>Vote</button>
			</fieldset>
		</Container>
	);
};

export default PollPage;
