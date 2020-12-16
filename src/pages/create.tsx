import { Field, Form } from 'react-final-form';
import { StructError, assert } from 'superstruct';

import { FieldArray } from 'react-final-form-arrays';
import { PollSchema } from '@utils/dataSchemas';
import arrayMutators from 'final-form-arrays';
import { logError } from '@utils/logError';

export default function CreatePage(): JSX.Element {
	const user_id = `0ngT8eAMT9mNH5qyqSem`;

	const onSubmit = (data: unknown) => {
		try {
			assert(data, PollSchema);
			// const postData = async () => {
			// 	const res = await fetch(`http://localhost:3000/api/polls`, {
			// 		method: `POST`,
			// 		headers: { 'Content-Type': `application/json` },
			// 		body: JSON.stringify(data),
			// 		mode: `cors`,
			// 		referrerPolicy: `no-referrer`,
			// 	});
			// 	return res;
			// };
			// postData();
		} catch (error) {
			logError(error);
			if (error instanceof StructError) {
				switch (error.key) {
					case `title`:
						return alert(`Please enter a title that is no more than 100 characters long.`);
					case `description`:
						return alert(`Please enter a description that is no more than 500 characters long.`);
					case `choices`:
						return alert(`Please enter between 2 and 10 choices, no more than 100 characters long.`);
					case `types`:
						return alert(`Please choose at least one type of voting system.`);
					default:
						return alert(`An unexpected error occured. Sorry about that! The devs have been notified. Please try again later!`);
				}
			} else return alert(`An unexpected error occured. Sorry about that! The devs have been notified. Please try again later!`);
		}
	};

	return (
		<main className='container flex items-center justify-center w-full min-h-content bg-base-primary'>
			<Form
				onSubmit={onSubmit}
				mutators={{ ...arrayMutators }}
				initialValues={{
					title: ``,
					choices: [``, ``],
					types: [],
					user_id: user_id,
				}}
				render={({
					handleSubmit,
					form: {
						mutators: { push },
					},
				}) => (
					<form
						className='w-full px-4 py-8 my-12 border border-gray-300 md:w-2/3 sm:rounded-lg sm:px-10'
						onSubmit={handleSubmit}
						autoComplete='off'
					>
						<h1 className='text-xl font-bold text-center text-base-secondary'>Add a Poll</h1>
						<Field
							name='title'
							render={({ input }) => (
								<>
									<label htmlFor={input.name} className='block text-sm font-semibold text-base-secondary'>
										Title
									</label>
									<input
										{...input}
										className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
										placeholder='Add a title here...'
										type='text'
										required
										maxLength={100}
									/>
								</>
							)}
						/>
						<Field
							name='description'
							render={({ input }) => (
								<>
									<div className='flex justify-between mt-4'>
										<label htmlFor={input.name} className='block text-sm font-semibold text-base-secondary'>
											Description
										</label>
										<span className='text-sm italic cursor-default text-base-secondary' id='description-optional'>
											Optional
										</span>
									</div>
									<div className='mt-1'>
										<textarea
											{...input}
											className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
											placeholder='Add a description here...'
											aria-describedby='description-optional'
											rows={3}
											maxLength={2000}
										/>
									</div>
								</>
							)}
						/>

						<div className='flex mt-4'>
							<label id='choices' htmlFor='choices' className='inline-flex text-sm font-semibold text-base-secondary'>
								Choices
							</label>
							<button
								className='inline-flex items-center rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								type='button'
								onClick={() => push(`choices`, ``)}
							>
								<svg
									className='w-4 text-base-secondary'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
								</svg>
							</button>
						</div>
						<FieldArray name='choices'>
							{({ fields }) =>
								fields.map((name, index) => (
									<div className={`flex ${index ? `mt-3` : `mt-1`}`} key={name}>
										<Field
											name={`${name}`}
											render={({ input }) => (
												<input
													{...input}
													type='text'
													className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
													placeholder='Add a choice here...'
													required
													aria-labelledby='choices'
												/>
											)}
										/>
										<button
											className='inline-flex items-center p-2 ml-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											type='button'
											onClick={() => fields.remove(index)}
										>
											<svg
												className='w-4 text-gray-600'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
											</svg>
										</button>
									</div>
								))
							}
						</FieldArray>

						<fieldset className='mt-3'>
							<legend className='text-base font-medium text-base-secondary'>Voting Systems</legend>
							<Field
								name='types'
								value='First Past The Post'
								type='checkbox'
								render={({ input }) => (
									<div className='relative flex items-start mt-2'>
										<div className='flex items-center h-5 '>
											<input
												{...input}
												type='checkbox'
												className='w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500'
											/>
										</div>
										<div className='ml-3 text-sm'>
											<label htmlFor={input.name} className='font-bold text-base-secondary'>
												{input.value}
											</label>
											<p className='text-gray-400'>an example description here</p>
										</div>
									</div>
								)}
							/>
							<Field
								name='types'
								value='Ranked Choice'
								type='checkbox'
								render={({ input }) => (
									<div className='relative flex items-start mt-2'>
										<div className='flex items-center h-5 '>
											<input
												{...input}
												type='checkbox'
												className='w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500'
											/>
										</div>
										<div className='ml-3 text-sm'>
											<label htmlFor={input.name} className='font-bold text-base-secondary'>
												{input.value}
											</label>
											<p className='text-gray-400'>an example description here</p>
										</div>
									</div>
								)}
							/>
							<Field
								name='types'
								value='Single Transferable'
								type='checkbox'
								render={({ input }) => (
									<div className='relative flex items-start mt-2'>
										<div className='flex items-center h-5 '>
											<input
												{...input}
												type='checkbox'
												className='w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500'
											/>
										</div>
										<div className='ml-3 text-sm'>
											<label htmlFor={input.name} className='font-bold text-base-secondary'>
												{input.value}
											</label>
											<p className='text-gray-400'>an example description here</p>
										</div>
									</div>
								)}
							/>
						</fieldset>
						<button
							type='submit'
							className='inline-flex items-center px-3 py-2 mt-4 text-sm font-medium leading-4 text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Submit
						</button>
					</form>
				)}
			/>
		</main>
	);
}
