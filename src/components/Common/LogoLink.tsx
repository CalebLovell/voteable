import Link from 'next/link';

interface Props {
	style?: string;
}

export const LogoLink: React.FC<Props> = ({ style }) => {
	return (
		<Link href='/'>
			<a
				href='/'
				className={`px-2 lg:px-4 py-1 text-accent-primary hover:text-accent-secondary font-medium transition ease-in-out duration-150 flex items-center ${style}`}
			>
				<svg className='inline w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
					/>
				</svg>
				<span className='ml-2'>Voteable</span>
			</a>
		</Link>
	);
};
