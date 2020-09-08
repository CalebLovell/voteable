import Link from 'next/link';

interface Props {
	href: string;
	label: string;
	style?: string;
}

export const InlineLink: React.FC<Props> = ({ href = `This is the default title`, label = `Default Label`, style = `` }: Props) => {
	return (
		<Link href={href}>
			<a href='#' className={`text-accent-primary hover:text-accent-secondary transition ease-in-out duration-150 ${style}`}>
				{label}
			</a>
		</Link>
	);
};
