import { ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '@components/Layout/NavBar';
import { MobileMenu } from '@components/Layout/MobileMenu';
import { useGlobalState } from '@providers/GlobalProvider';

interface Props {
	children?: ReactNode;
}

export const PageWrap: React.FC<Props> = ({ children }) => {
	const { sideNavOpen } = useGlobalState();
	return (
		<>
			<Head>
				<title>Voteable</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<NavBar />
			{sideNavOpen ? <MobileMenu /> : null}
			{children}
		</>
	);
};
