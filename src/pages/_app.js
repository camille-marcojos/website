import MyRouter from '../components/navigation/MyRouter'
import '../styles/reset.scss'
import '../styles/theme.scss'

export default function App({ Component, pageProps }) {
	return (
		<div>
			<MyRouter />
			<Component {...pageProps} />
		</div>
	)
}
