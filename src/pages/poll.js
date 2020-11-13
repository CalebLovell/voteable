import { Container } from '@components/Layout/Container';

export default function PollPage() {
	return (
		<Container style='w-full min-h-content bg-base-primary flex justify-center'>
			<fieldset className='mt-6'>
				<legend className='text-base leading-6 font-medium text-gray-900'>Question Title Here</legend>
				<p className='text-sm leading-5 text-gray-500'>And this would be the question description</p>
				<p className='text-sm leading-5 text-gray-500'>Voting type: FPTP</p>
				<div className='mt-4'>
					<div className='flex items-center'>
						<input
							id='push_everything'
							name='push_notifications'
							type='radio'
							className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
						/>
						<label htmlFor='push_everything' className='ml-3'>
							<span className='block text-sm leading-5 font-medium text-gray-700'>Choice 1</span>
						</label>
					</div>
					<div className='mt-4 flex items-center'>
						<input
							id='push_email'
							name='push_notifications'
							type='radio'
							className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
						/>
						<label htmlFor='push_email' className='ml-3'>
							<span className='block text-sm leading-5 font-medium text-gray-700'>Choice 2</span>
						</label>
					</div>
					<div className='mt-4 flex items-center'>
						<input
							id='push_nothing'
							name='push_notifications'
							type='radio'
							className='form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
						/>
						<label htmlFor='push_nothing' className='ml-3'>
							<span className='block text-sm leading-5 font-medium text-gray-700'>Choice 3</span>
						</label>
					</div>
				</div>
				<button>Vote</button>
			</fieldset>
		</Container>
	);
}
