interface Props {
	name: string;
	options: string[];
	register?: () => void;
	customTailwindColor?: string;
}

export const Select: React.FC<Props> = ({ name, options, register, customTailwindColor = `indigo-500` }): JSX.Element => {
	return (
		<>
			<label htmlFor={name} className='block mt-4 text-sm font-semibold text-base-secondary'>
				Voting Systems
			</label>
			<select
				name={name}
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
