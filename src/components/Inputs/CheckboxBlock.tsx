interface Props {
	name: string;
	label: string;
	description: string;
	register?: () => void;
	customTailwindColor?: string;
}

export const CheckboxBlock: React.FC<Props> = ({ name, label, description, register, customTailwindColor = `indigo-500` }): JSX.Element => {
	return (
		<div className='relative flex items-start mt-2'>
			<div className='flex items-center h-5 '>
				<input
					name={name}
					ref={register}
					type='checkbox'
					className={`w-4 h-4 text-${customTailwindColor} border-gray-300 rounded focus:ring-${customTailwindColor}`}
				/>
			</div>
			<div className='ml-3 text-sm'>
				<label htmlFor={name} className='font-bold text-base-secondary'>
					{label}
				</label>
				<p className='text-gray-400'>{description}</p>
			</div>
		</div>
	);
};
