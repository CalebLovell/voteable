const Custom404 = (): JSX.Element => {
	return (
		<main className='container flex items-center justify-center w-full bg-base-primary min-h-content text-base-secondary'>
			<div className='flex items-center justify-center mb-10 min-h-content-area text-text-base'>
				<div className='flex flex-col items-center justify-center sm:flex-row'>
					<h1 className='px-2 pb-4 mb-4 text-4xl border-b-2 sm:border-b-0 sm:border-r-2 border-text-base sm:px-0 sm:mb-0 sm:pb-2 sm:pt-2 sm:mr-4 sm:pr-4'>
						404
					</h1>
					<h2 className='text-xl'>This page could not be found!</h2>
				</div>
			</div>
		</main>
	);
};

export default Custom404;
