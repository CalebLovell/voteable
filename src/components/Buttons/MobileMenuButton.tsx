import { useGlobalDispatch, useGlobalState } from '@providers/GlobalProvider';

interface Props {
	style?: string;
}

export const MobileMenuButton: React.FC<Props> = ({ style }) => {
	const { mobileNavOpen } = useGlobalState();
	const globalDispatch = useGlobalDispatch();
	return (
		<button
			name='menu'
			type='button'
			className={style}
			onClick={() => globalDispatch({ type: `SET_MOBILE_NAV_OPEN`, payload: !mobileNavOpen })}
			aria-expanded={mobileNavOpen}
		>
			{mobileNavOpen ? (
				// Close Icon
				<svg className='h-8 w-8 text-accent-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
				</svg>
			) : (
				// Menu Icon
				<svg className='h-8 w-8 text-accent-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
				</svg>
			)}
		</button>
	);
};
