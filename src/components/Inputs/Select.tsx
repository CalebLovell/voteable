interface Props {
	id: string;
	name: string;
	options: string[];
	register?: any;
	customTailwindColor?: string;
}

export const Select: React.FC<Props> = ({ id, name, options, register, customTailwindColor = `indigo-500` }): JSX.Element => {
	return (
		<>
			<label htmlFor={id} className='block mt-4 text-sm font-semibold text-base-secondary'>
				Voting Systems
			</label>
			<select
				id={id}
				name={id}
				defaultValue={name}
				className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
				required
				ref={register}
			>
				{options.map((x, i) => (
					<option key={i}>{x}</option>
				))}
			</select>
		</>
	);
};
