interface Props {
	name: string;
	label: string;
	[x: string]: any;
}

export const Label: React.FC<Props> = ({ name, label, ...labelProps }): JSX.Element => {
	return (
		<label htmlFor={name} className='block mb-1 text-sm font-semibold text-base-secondary' {...labelProps}>
			{label}
		</label>
	);
};
