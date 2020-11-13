export default function Custom404() {
	return (
		<div className='min-h-content-area text-text-base flex justify-center items-center'>
			<div className='flex flex-col sm:flex-row justify-center items-center'>
				<h1 className='text-4xl border-b-2 sm:border-b-0 sm:border-r-2 border-text-base px-2 mb-4 pb-4 sm:px-0 sm:mb-0 sm:pb-2 sm:pt-2 sm:mr-4 sm:pr-4'>
					404
				</h1>
				<h2 className='text-xl'>This page could not be found!</h2>
			</div>
		</div>
	);
}
