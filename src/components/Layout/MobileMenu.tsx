import { MenuLink } from '@components/Common/MenuLink';
import { Container } from '@components/Layout/Container';
import { MobileMenuButton } from '@components/Buttons/MobileMenuButton';
import { useGlobalDispatch } from '@providers/GlobalProvider';

const links = [
	{ href: `/`, label: `Landing` },
	{ href: `/create`, label: `Create a New Poll` },
	{ href: `/poll`, label: `View a Poll` },
	{ href: `/result`, label: `View Poll Results` },
];

export const MobileMenu: React.FC = () => {
	const globalDispatch = useGlobalDispatch();
	return (
		<Container>
			<div>Hello it is a mobile menu</div>
		</Container>
	);
};
