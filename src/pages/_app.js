import '../styles/reset.scss'
import '../styles/theme.scss'

import MyRouter from '../components/navigation/MyRouter'

export default function App({ Component, pageProps }) {
	return (
		<div>
			<MyRouter />
			<Component {...pageProps} />
		</div>
	)
}
