import Link from 'next/link';

interface Props {
	href: string;
	label: string;
	type?: string;
	style?: string;
}

export const InlineLink: React.FC<Props> = ({ href = `This is the default title`, label = `Default Label`, type, style = `` }: Props) => {
	const constantStyle = `text-center font-medium transition ease-in-out duration-150 px-2 lg:px-4 py-2`;
	const styles =
		type === `button`
			? `${constantStyle} text-base-primary bg-accent-primary hover:bg-accent-secondary rounded-lg ${style}`
			: `${constantStyle} text-accent-primary hover:text-accent-secondary ${style}`;
	return (
		<Link href={href}>
			<a href={href} className={styles}>
				{label}
			</a>
		</Link>
	);
};
