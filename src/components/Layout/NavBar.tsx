import { DarkModeButton } from '@components/Buttons/DarkModeButton';
import { InlineLink } from '@components/Common/InlineLink';
import { LanguageButton } from '@components/Buttons/LanguageButton';
import { LogoLink } from '@components/Common/LogoLink';
import { MobileMenuButton } from '@components/Buttons/MobileMenuButton';

export const NavBar: React.FC = () => {
	return (
		<div className='container bg-base-primary h-14'>
			<div className='flex items-center justify-between h-full md:hidden'>
				<MobileMenuButton />
				<div className='flex items-center space-x-2'>
					<LanguageButton />
					<DarkModeButton />
				</div>
			</div>
			<nav className='items-center justify-between hidden h-full md:flex'>
				<div className='flex items-center'>
					<LogoLink />
					<InlineLink href='/create' label='Create' />
					<InlineLink href='/polls/zHvJssTJ3Goqyemz60T4' label='Poll' />
					<InlineLink href='/result' label='Result' />
				</div>
				<div className='flex items-center md:space-x-2 lg:space-x-10'>
					<div className='flex items-center space-x-2'>
						<LanguageButton />
						<DarkModeButton />
					</div>
					<div className='flex items-center space-x-2'>
						<InlineLink href='/signin' label='Sign in' />
						<InlineLink href='/signup' label='Sign up' type='button' />
					</div>
				</div>
			</nav>
		</div>
	);
};
