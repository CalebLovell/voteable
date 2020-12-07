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
			<form className='bg-white w-1/2 py-8 px-4 shadow sm:rounded-lg sm:px-10' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-base-primary text-center'>Add a Poll</h1>

				{/* Title */}
				<div className='flex justify-between'>
					<label htmlFor='title' className='block text-sm font-medium leading-5 text-gray-700'>
						Title
					</label>
					<span className='text-sm leading-5 text-gray-500 cursor-default italic' id='description-required'>
						Required
					</span>
				</div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<input
						id='title'
						name='title'
						defaultValue=''
						className='form-input block w-full sm:text-sm sm:leading-5'
						placeholder='Add a title here...'
						ref={register}
						required
					/>
				</div>

				{/* Description */}
				<div className='flex justify-between'>
					<label htmlFor='description' className='block text-sm font-medium leading-5 text-gray-700'>
						Description
					</label>
					<span className='text-sm leading-5 text-gray-500 cursor-default italic' id='description-optional'>
						Optional
					</span>
				</div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<textarea
						id='description'
						name='description'
						defaultValue=''
						rows='3'
						className='form-input block w-full sm:text-sm sm:leading-5'
						placeholder='Add a description here...'
						aria-describedby='description-optional'
						ref={register}
					/>
				</div>

				{/* Choices */}
				<div className='flex justify-between'>
					<label htmlFor='choices' className='block text-sm font-medium leading-5 text-gray-700'>
						Choices
					</label>
					<button type='button' onClick={() => append({ title: ``, value: 0 })}>
						append
					</button>
					<span className='text-sm leading-5 text-gray-500 cursor-default italic' id='choices-required'>
						Required
					</span>
				</div>
				{fields.map((item, index) => (
					<div key={item.id}>
						<label htmlFor='choice' className='block text-sm font-medium leading-5 text-gray-700'>
							Choice 1
						</label>
						<div className='mt-1 relative rounded-md shadow-sm'>
							<input
								id='choice'
								className='form-input block w-full sm:text-sm sm:leading-5'
								placeholder='Add a choice here...'
								required
								name={`choices[${index}].title`}
								defaultValue={`${item.title}`}
								ref={register()}
							/>
						</div>
						<button type='button' onClick={() => remove(index)}>
							Delete
						</button>
					</div>
				))}

				<label htmlFor='type' className='block text-sm leading-5 font-medium text-gray-700'>
					Voting System
				</label>
				<select
					id='type'
					name='type'
					defaultValue=''
					className='mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
					required
					ref={register}
				>
					<option selected>First Past The Post</option>
					<option>Ranked Choice</option>
					<option>Single Transferable</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		</Container>
	);
}
