import { StructError, assert } from 'superstruct';
import { useFieldArray, useForm } from 'react-hook-form';

import { pollSchema } from '@utils/dataSchemas';

export default function CreatePage(): JSX.Element {
	const user_id = `0ngT8eAMT9mNH5qyqSem`;

	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			title: ``,
			description: ``,
			choices: [{ choice: `` }, { choice: `` }, { choice: `` }],
			type: ``,
		},
	});
	const { fields, append, remove } = useFieldArray({ control, name: `choices` });

	const onSubmit = (data: unknown) => {
		data.user_id = user_id;
		try {
			assert(data, pollSchema);
			const postData = async () => {
				const res = await fetch(`http://localhost:3000/api/polls`, {
					method: `POST`,
					headers: { 'Content-Type': `application/json` },
					body: JSON.stringify(data),
					mode: `cors`,
					referrerPolicy: `no-referrer`,
				});
				return res;
			};
			postData();
		} catch (error) {
			if (error instanceof StructError) {
				switch (error.key) {
					case `title`:
						throw new Error(`Please enter a title that is no more than 100 characters long.`);
					case `description`:
						throw new Error(`Please enter a description that is no more than 500 characters long.`);
					case `choices`:
						throw new Error(`Please enter between 2 and 10 choices, no more than 100 characters long.`);
					case `type`:
						throw new Error(`Please choose a type of voting system.`);
					default:
						throw new Error(`An unexpected error occured. Sorry about that! The devs have been notified. Please try again later!`);
				}
			} else throw new Error(`An unexpected error occured. Sorry about that! The devs have been notified. Please try again later!`);
		}
	};

	return (
		<main className='container flex items-center justify-center w-full min-h-content bg-base-primary'>
			<form className='w-full px-4 py-8 border border-gray-300 sm:rounded-lg sm:px-10' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-xl font-bold text-center text-base-secondary'>Add a Poll</h1>

				{/* Title */}
				<label htmlFor='title' className='block text-sm font-semibold text-base-secondary'>
					Title
				</label>
				<input
					type='text'
					id='title'
					name='title'
					defaultValue=''
					className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					placeholder='Add a title here...'
					ref={register}
					required
				/>

				{/* Description */}
				<div className='flex justify-between mt-4'>
					<label htmlFor='description' className='block text-sm font-semibold text-base-secondary'>
						Description
					</label>
					<span className='text-sm italic cursor-default text-base-secondary' id='description-optional'>
						Optional
					</span>
				</div>
				<div className='mt-1'>
					<textarea
						id='description'
						name='description'
						defaultValue=''
						rows={3}
						className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Add a description here...'
						aria-describedby='description-optional'
						ref={register}
					/>
				</div>

				{/* Choices */}
				<div className='flex mt-4'>
					<label id='choices' htmlFor='choices' className='inline-flex text-sm font-semibold text-base-secondary'>
						Choices
					</label>
					<button
						className='inline-flex items-center rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						type='button'
						onClick={() => append({ choice: `` })}
					>
						<svg className='w-4 text-base-secondary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
						</svg>
					</button>
				</div>
				{fields.map((item, index) => (
					<div className={`flex ${index ? `mt-3` : `mt-1`}`} key={item.id}>
						<input
							type='text'
							id='choice'
							className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							placeholder='Add a choice here...'
							name={`choices[${index}].choice`}
							defaultValue={`${item.choice}`}
							ref={register()}
							required
							aria-labelledby='choices'
						/>
						<button
							className='inline-flex items-center p-2 ml-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							type='button'
							onClick={() => remove(index)}
						>
							<svg className='w-4 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
							</svg>
						</button>
					</div>
				))}

				{/* Voting System */}
				<label htmlFor='type' className='block mt-4 text-sm font-semibold text-base-secondary'>
					Voting System
				</label>
				<select
					id='type'
					name='type'
					defaultValue='First Past The Post'
					className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					required
					ref={register}
				>
					<option>First Past The Post</option>
					<option>Ranked Choice</option>
					<option>Single Transferable</option>
				</select>

				<button
					type='submit'
					className='inline-flex items-center px-3 py-2 mt-3 text-sm font-medium leading-4 text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Submit
				</button>
			</form>
		</main>
	);
}
