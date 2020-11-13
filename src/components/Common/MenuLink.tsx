import Link from 'next/link';
import { useGlobalDispatch } from '@providers/GlobalProvider';

interface Props {
	href: string;
	label: string;
	style?: string;
}

export const MenuLink: React.FC<Props> = ({ href = `This is the default title`, label = `Default Label`, style = `` }: Props) => {
	const globalDispatch = useGlobalDispatch();
	return (
		<Link href={href}>
			<a
				className={`text-primary font-medium leading-5 text hover:text-accent-primary hover:underline focus:text-accent-primary focus:outline:accent-primary transition duration-150 ease-in-out ${style}`}
				onClick={() => globalDispatch({ type: `SET_MOBILE_NAV_OPEN`, payload: false })}
			>
				{label}
			</a>
		</Link>
	);
};
