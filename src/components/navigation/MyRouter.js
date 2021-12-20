import { Button } from '@rmwc/button'
import Link from 'next/link'
import NavBackButton from './NavBackButton'

export default function MyRouter() {
	return (
		<div>
			<NavBackButton />

			{/* TODO: Fix error in dev console: findDOMNode is deprecated in StrictMode */}
			<Link href="/" passHref>
				<Button label="Home" icon="home" />
			</Link>
			<Link href="/projects" passHref>
				<Button label="Projects" icon="rocket_launch" />
			</Link>
			<Link href="/resources" passHref>
				<Button label="Resources" icon="laptop" />
			</Link>
			<Link href="/connect" passHref>
				<Button label="Connect" icon="waving_hand" />
			</Link>
		</div>
	)
}
