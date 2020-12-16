interface Props {
	name: string;
	placeholder: string;
	register?: () => void;
	customTailwindColor?: string;
}

export const TextArea: React.FC<Props> = ({ name, placeholder, register, customTailwindColor = `indigo-500` }): JSX.Element => {
	return (
		<textarea
			name={name}
			rows={3}
			className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
			placeholder={placeholder}
			aria-describedby={`${name}-optional`}
			ref={register}
		/>
	);
};
