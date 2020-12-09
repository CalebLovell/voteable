import { useFieldArray, useForm } from 'react-hook-form';

export default function CreatePage() {
	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			title: ``,
			description: ``,
			choices: [{ choice: `` }, { choice: `` }, { choice: `` }],
			type: ``,
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: `choices`,
	});

	const onSubmit = data => console.log(data);

	return (
		<main className='container flex items-center justify-center w-full min-h-content bg-base-primary'>
			<form className='w-full px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-xl font-bold text-center'>Add a Poll</h1>

				{/* Title */}
				<label htmlFor='title' className='block text-sm font-bold text-gray-700'>
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
					<label htmlFor='description' className='block text-sm font-bold text-gray-700'>
						Description
					</label>
					<span className='text-sm italic text-gray-500 cursor-default' id='description-optional'>
						Optional
					</span>
				</div>
				<div className='mt-1'>
					<textarea
						id='description'
						name='description'
						defaultValue=''
						rows='3'
						className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Add a description here...'
						aria-describedby='description-optional'
						ref={register}
					/>
				</div>

				{/* Choices */}
				<div className='flex mt-4'>
					<label id='choices' htmlFor='choices' className='inline-flex text-sm font-bold text-gray-700'>
						Choices
					</label>
					<button
						className='inline-flex items-center rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						type='button'
						onClick={() => append({ choice: `` })}
					>
						<svg className='w-4 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
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
							required
							name={`choices[${index}].choice`}
							defaultValue={`${item.choice}`}
							ref={register()}
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
				<label htmlFor='type' className='block mt-4 text-sm font-bold text-gray-700'>
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
					className='inline-flex items-center px-3 py-2 mt-4 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Submit
				</button>
			</form>
		</main>
	);
}
