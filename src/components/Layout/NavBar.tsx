import { Container } from '@components/Layout/Container';
import { DarkModeButton } from '@components/Buttons/DarkModeButton';
import { InlineLink } from '@components/Common/InlineLink';
import { LanguageButton } from '@components/Buttons/LanguageButton';
import { LogoLink } from '@components/Common/LogoLink';
import { MobileMenuButton } from '@components/Buttons/MobileMenuButton';

export const NavBar: React.FC = () => {
	return (
		<Container style='bg-base-primary h-20'>
			<div className='h-full flex justify-between items-center md:hidden'>
				<MobileMenuButton />
				<div className='flex items-center space-x-2'>
					<LanguageButton />
					<DarkModeButton />
				</div>
			</div>
			<nav className='h-full hidden md:flex justify-between items-center'>
				<div className='flex items-center'>
					<LogoLink />
					<InlineLink href='/create' label='Create a Poll' />
					<InlineLink href='/poll' label='Discover' />
					<InlineLink href='/result' label='Learn More' />
				</div>
				<div className='flex items-center md:space-x-2 lg:space-x-10'>
					<div className='flex items-center space-x-2'>
						<LanguageButton />
						<DarkModeButton />
					</div>
					<div className='flex items-center space-x-2'>
						<InlineLink href='/' label='Sign in' />
						<InlineLink href='/' label='Sign up' type='button' />
					</div>
				</div>
			</nav>
		</Container>
	);
};
