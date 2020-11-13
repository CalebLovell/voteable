interface Props {
	style?: string;
}

export const LanguageButton: React.FC<Props> = ({ style }) => {
	const toggleLanguage = () => null;

	return (
		<button name='Language Toggle' type='button' className={`px-2 py-2 ${style}`} onClick={toggleLanguage}>
			<svg className='w-6 text-accent-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'
				/>
			</svg>
		</button>
	);
};
