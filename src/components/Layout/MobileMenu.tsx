import { InlineLink } from '@components/Common/InlineLink';
import { LogoLink } from '@components/Common/LogoLink';
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
		<div className='absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform'>
			<div className='rounded-lg shadow-lg'>
				<div className='bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50'>
					<div className='px-5 pt-5 pb-6 space-y-6 sm:space-y-8 sm:pb-8'>
						<div className='flex items-center justify-end'>
							<MobileMenuButton />
						</div>
						<div>
							<nav className='space-y-8'>
								<div className='grid gap-7 sm:grid-cols-2 sm:row-gap-8 sm:col-gap-4'>
									<a
										href='/create'
										className='flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
									>
										<svg
											className='w-8 h-8 text-accent-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
											/>
										</svg>
										<div className='text-base font-medium leading-6 text-base-secondary'>Home</div>
									</a>
									<a
										href='#'
										className='flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
									>
										<svg
											className='w-8 h-8 text-accent-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
											/>
										</svg>
										<div className='text-base font-medium leading-6 text-base-secondary'>Create a Poll</div>
									</a>
									<a
										href='#'
										className='flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
									>
										<svg
											className='w-8 h-8 text-accent-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
										</svg>
										<div className='text-base font-medium leading-6 text-base-secondary'>Discover</div>
									</a>
									<a
										href='#'
										className='flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
									>
										<svg
											className='w-8 h-8 text-accent-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
											/>
										</svg>
										<div className='text-base font-medium leading-6 text-base-secondary'>Learn More</div>
									</a>
								</div>
							</nav>
						</div>
					</div>
					<div className='px-5 py-6 space-y-6'>
						<div className='space-y-6'>
							<span className='flex w-full rounded-md shadow-sm'>
								<a
									href='#'
									className='flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-base-primary bg-accent-primary hover:bg-accent-secondary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700'
								>
									Sign up
								</a>
							</span>
							<p className='text-base font-medium leading-6 text-center text-base-secondary'>
								Already have an account?
								<InlineLink href='/' label='Sign In' style='ml-2' />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
