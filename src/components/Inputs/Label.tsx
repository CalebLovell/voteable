interface Props {
	id: string;
	label: string;
	[x: string]: any;
}

export const Label: React.FC<Props> = ({ id, label, ...labelProps }): JSX.Element => {
	return (
		<label htmlFor={id} className='block mb-1 text-sm font-semibold text-base-secondary' {...labelProps}>
			{label}
		</label>
	);
};
