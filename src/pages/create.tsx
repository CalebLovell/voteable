import { StructError, assert } from 'superstruct';
import { useFieldArray, useForm } from 'react-hook-form';

import { CheckboxBlock } from '@components/Inputs/CheckboxBlock';
import { Input } from '@components/Inputs/Input';
import { Label } from '@components/Inputs/Label';
import { TextArea } from '@components/Inputs/TextArea';
import { logError } from '@utils/logError';
import { pollSchema } from '@utils/dataSchemas';

export default function CreatePage(): JSX.Element {
	const user_id = `0ngT8eAMT9mNH5qyqSem`;

	const { control, register, handleSubmit } = useForm({
		defaultValues: {
			title: ``,
			description: null,
			choices: [{ choice: `` }, { choice: `` }, { choice: `` }],
			types: [],
			user_id: user_id,
		},
	});
	const { fields, append, remove } = useFieldArray({ control, name: `choices` });

	const onSubmit = (data: unknown) => {
		try {
			console.log(data);
			assert(data, pollSchema);
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
			<form
				className='w-full px-4 py-8 my-12 border border-gray-300 md:w-2/3 sm:rounded-lg sm:px-10'
				onSubmit={handleSubmit(onSubmit)}
				autoComplete='off'
			>
				<h1 className='text-xl font-bold text-center text-base-secondary'>Add a Poll</h1>
				<Label name='title' label='Title' />
				<Input name='title' placeholder='Add a title here...' register={register} required={true} />
				<div className='flex justify-between mt-4'>
					<Label name='description' label='Description' />
					<span id='description-optional' className='text-sm italic cursor-default text-base-secondary'>
						Optional
					</span>
				</div>
				<TextArea name='description' placeholder='Add a description here...' register={register} />
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
						<Input
							name={`choices[${index}].choice`}
							placeholder='Add a choice here...'
							register={register}
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
				<fieldset className='mt-3'>
					<legend className='text-base font-medium text-base-secondary'>Voting Systems</legend>
					<CheckboxBlock name='types' label='First Past The Post' description='an example description here' register={register} />
					<CheckboxBlock name='types' label='Ranked Choice' description='an example description here' register={register} />
					<CheckboxBlock name='types' label='Single Transferable' description='an example description here' register={register} />
				</fieldset>
				<button
					type='submit'
					className='inline-flex items-center px-3 py-2 mt-4 text-sm font-medium leading-4 text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Submit
				</button>
			</form>
		</main>
	);
}
