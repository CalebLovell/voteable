interface Props {
	id: string;
	label: string;
	placeholder: string;
	register?: any;
	customTailwindColor?: string;
}

export const Input: React.FC<Props> = ({ id, label, placeholder, register, customTailwindColor = `indigo-500` }): JSX.Element => {
	return (
		<>
			<label htmlFor={id} className='block text-sm font-semibold text-base-secondary'>
				{label}
			</label>
			<input
				type='text'
				id={id}
				name={id}
				defaultValue=''
				className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
				placeholder={placeholder}
				ref={register}
				required
			/>
		</>
	);
};
