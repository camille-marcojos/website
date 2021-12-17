import MyRouter from '../components/MyRouter'
import '../styles/theme.scss'

export default function App({ Component, pageProps }) {
	return (
		<div>
			<MyRouter />
			<Component {...pageProps} />
		</div>
	)
}
