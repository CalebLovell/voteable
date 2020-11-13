import '../styles/index.css';

import { GlobalProvider } from '@providers/GlobalProvider';
import { PageWrap } from '@components/PageWrap';

function MyApp({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<PageWrap>
				<Component {...pageProps} />
			</PageWrap>
		</GlobalProvider>
	);
}

export default MyApp;
