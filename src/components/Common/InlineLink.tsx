import Link from 'next/link';

type Props = {
	href: string;
	label: string;
	type?: string;
	style?: string;
}

export const InlineLink: React.FC<Props> = ({ href = `This is the default title`, label = `Default Label`, type }: Props) => {
	const styles =
		type === `button`
			? `text-center font-medium transition ease-in-out duration-150 px-2 lg:px-4 py-2 text-base-primary bg-accent-primary hover:bg-accent-secondary rounded-lg`
			: `text-center font-medium transition ease-in-out duration-150 px-2 lg:px-4 py-2 text-accent-primary hover:text-accent-secondary`;
	return (
		<Link href={href}>
			<a href={href} className={styles}>
				{label}
			</a>
		</Link>
	);
};
