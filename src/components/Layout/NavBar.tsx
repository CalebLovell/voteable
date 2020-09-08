import { Container } from '@components/Layout/Container';
import { MobileMenuButton } from '@components/Buttons/MobileMenuButton';
import { DarkModeButton } from '@components/Buttons/DarkModeButton';

export const NavBar: React.FC = () => {
	return (
		<Container outerStyle='bg-bg-base'>
			<MobileMenuButton />
			<DarkModeButton />
		</Container>
	);
};
