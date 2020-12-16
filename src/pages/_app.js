import '../styles/index.css';

import { GlobalProvider } from '@providers/GlobalProvider';
import { PageWrap } from '@components/PageWrap';
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<ToastProvider autoDismiss autoDismissTimeout={10000} placement='top-right'>
				<PageWrap>
					<Component {...pageProps} />
				</PageWrap>
			</ToastProvider>
		</GlobalProvider>
	);
}

export default MyApp;
