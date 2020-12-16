interface Props {
	name: string;
	placeholder: string;
	register?: () => void;
	customTailwindColor?: string;
	[x: string]: any;
}

export const Input: React.FC<Props> = ({ name, placeholder, register, customTailwindColor = `indigo-500`, ...inputProps }): JSX.Element => {
	return (
		<input
			type='text'
			className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
			name={name}
			placeholder={placeholder}
			ref={register}
			{...inputProps}
		/>
	);
};
