import { useFieldArray, useForm } from 'react-hook-form';

import { Container } from '@components/Layout/Container';

export default function CreatePage() {
	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			title: ``,
			description: ``,
			choices: [{ title: `A Choice` }],
			type: ``,
		},
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: `choices`,
	});

	const onSubmit = data => console.log(data);

	return (
		<Container style='w-full min-h-content bg-base-primary flex items-center'>
			<form className='w-1/2 px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-center text-base-primary'>Add a Poll</h1>

				{/* Title */}
				<label htmlFor='title' className='block text-sm font-medium text-gray-700'>
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
				<div className='flex justify-between'>
					<label htmlFor='description' className='block text-sm font-medium text-gray-700'>
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
				<div className='flex justify-between'>
					<label id='choices' htmlFor='choices' className='block text-sm font-medium text-gray-700'>
						Choices
					</label>
					<button type='button' onClick={() => append({ title: ``, value: 0 })}>
						<svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
						</svg>
					</button>
					<button type='button' onClick={() => remove(index)}>
						<svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
						</svg>
					</button>
				</div>
				{fields.map((item, index) => (
					<input
						key={item.id}
						type='text'
						id='choice'
						className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Add a choice here...'
						required
						name={`choices[${index}].title`}
						defaultValue={`${item.title}`}
						ref={register()}
						aria-labelledby='choices'
					/>
				))}

				<label htmlFor='type' className='block text-sm font-medium text-gray-700'>
					Voting System
				</label>
				<select
					id='type'
					name='type'
					selected='selected'
					className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
					required
					ref={register}
				>
					<option selected>First Past The Post</option>
					<option>Ranked Choice</option>
					<option>Single Transferable</option>
				</select>
				<button
					type='button'
					className='inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Submit
				</button>
			</form>
		</Container>
	);
}
