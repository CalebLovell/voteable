interface Props {
	id: string;
	name: string;
	placeholder: string;
	defaultValue: string;
	register?: () => void;
	customTailwindColor?: string;
	[x: string]: any;
}

export const Input: React.FC<Props> = ({
	id,
	name,
	defaultValue,
	placeholder,
	register,
	customTailwindColor = `indigo-500`,
	...inputProps
}): JSX.Element => {
	return (
		<input
			type='text'
			className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
			id={id}
			name={name}
			placeholder={placeholder}
			defaultValue={defaultValue}
			ref={register}
			{...inputProps}
		/>
	);
};
