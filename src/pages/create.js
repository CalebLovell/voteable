import { Container } from '@components/Layout/Container';

export default function CreatePage() {
	return (
		<Container style='w-full min-h-content bg-base-primary flex items-center'>
			<form className='bg-white w-1/2 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
				<h1 className='text-base-primary text-center'>Add a Question</h1>
				<label htmlFor='Title' className='block text-sm font-medium leading-5 text-gray-700'>
					Title
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<input id='Title' className='form-input block w-full sm:text-sm sm:leading-5' placeholder='Add a title here...' required />
				</div>
				<div className='flex justify-between'>
					<label htmlFor='description' className='block text-sm font-medium leading-5 text-gray-700'>
						Description*
					</label>
					<span className='text-sm leading-5 text-gray-500' id='description-optional'>
						Optional
					</span>
				</div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<textarea
						id='description'
						rows='3'
						className='form-input block w-full sm:text-sm sm:leading-5'
						placeholder='Add a description here...'
						aria-describedby='description-optional'
					/>
				</div>
				<label htmlFor='choice1' className='block text-sm font-medium leading-5 text-gray-700'>
					Choice 1
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<input id='choice1' className='form-input block w-full sm:text-sm sm:leading-5' placeholder='Add a choice here...' required />
				</div>
				<label htmlFor='choice2' className='block text-sm font-medium leading-5 text-gray-700'>
					Choice 2
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<input id='choice2' className='form-input block w-full sm:text-sm sm:leading-5' placeholder='Add a choice here...' required />
				</div>
				<label htmlFor='choice3' className='block text-sm font-medium leading-5 text-gray-700'>
					Choice 3
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<input id='choice3' className='form-input block w-full sm:text-sm sm:leading-5' placeholder='Add a choice here...' />
				</div>
				<label htmlFor='Voting System' className='block text-sm leading-5 font-medium text-gray-700'>
					Voting System
				</label>
				<select
					id='Voting System'
					className='mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
					required
				>
					<option selected>First Past The Post</option>
					<option>Ranked Choice</option>
					<option>Single Transferable</option>
				</select>
				<button>Submit</button>
			</form>
		</Container>
	);
}
