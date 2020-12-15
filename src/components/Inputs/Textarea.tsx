interface Props {
	id: string;
	label: string;
	placeholder: string;
	optional?: boolean;
	register?: any;
	customTailwindColor?: string;
}

export const Textarea: React.FC<Props> = ({
	id,
	label,
	register,
	placeholder,
	optional = false,
	customTailwindColor = `indigo-500`,
}): JSX.Element => {
	return (
		<>
			<div className='flex justify-between mt-4'>
				<label htmlFor={id} className='block text-sm font-semibold text-base-secondary'>
					{label}
				</label>
				{optional ? (
					<span id={`${id}-optional`} className='text-sm italic cursor-default text-base-secondary'>
						Optional
					</span>
				) : null}
			</div>
			<div className='mt-1'>
				<textarea
					id={id}
					name={id}
					defaultValue=''
					rows={3}
					className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-${customTailwindColor} focus:border-${customTailwindColor} sm:text-sm`}
					placeholder={placeholder}
					aria-describedby={`${id}-optional`}
					ref={register}
				/>
			</div>
		</>
	);
};
