import Head from 'next/head';
import { MobileMenu } from '@components/Layout/MobileMenu';
import { NavBar } from '@components/Layout/NavBar';
import { useGlobalState } from '@providers/GlobalProvider';

export const PageWrap: React.FC = ({ children }) => {
	const { mobileNavOpen } = useGlobalState();
	return (
		<>
			<Head>
				<title>Voteable</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<NavBar />
			{mobileNavOpen ? <MobileMenu /> : null}
			{children}
		</>
	);
};
