import { Button } from '@rmwc/button'
import Link from 'next/link'

export default function MyRouter() {
	return (
		<div>
			{/* TODO: Fix error in dev console: findDOMNode is deprecated in StrictMode */}
			<Link href="/" passHref>
				<Button label="Home" />
			</Link>
			<Link href="/projects" passHref>
				<Button label="Projects" />
			</Link>
			<Link href="/resources" passHref>
				<Button label="Resources" />
			</Link>
			<Link href="/connect" passHref>
				<Button label="Connect" />
			</Link>
		</div>
	)
}
