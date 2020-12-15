interface Props {
	id: string;
	placeholder: string;
	register?: () => void;
	customTailwindColor?: string;
}

export const TextArea: React.FC<Props> = ({ id, placeholder, register, customTailwindColor = `indigo-500` }): JSX.Element => {
	return (
		<textarea
			id={id}
			name={id}
			defaultValue=''
			rows={3}
			className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
			placeholder={placeholder}
			aria-describedby={`${id}-optional`}
			ref={register}
		/>
	);
};
