import { useGlobalDispatch, useGlobalState } from '@providers/GlobalProvider';

interface Props {
	style?: string;
}

export const DarkModeButton: React.FC<Props> = ({ style }) => {
	const { theme } = useGlobalState();
	const globalDispatch = useGlobalDispatch();
	console.log(theme);

	const toggleDarkMode = () => {
		if (theme === `dark`) globalDispatch({ type: `SET_THEME`, payload: `light` });
		else if (theme === `light`) globalDispatch({ type: `SET_THEME`, payload: `dark` });
		else return;
	};

	return (
		<button name='Dark Mode Toggle' type='button' className={`px-2 py-2 ${style}`} onClick={toggleDarkMode}>
			{theme === `dark` ? (
				// Moon Icon
				<svg className='w-6 text-accent-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
					/>
				</svg>
			) : (
				// Sun Icon
				<svg className='w-6 text-accent-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
					/>
				</svg>
			)}
		</button>
	);
};
