import { Typography } from '@rmwc/typography'
import Link from 'next/link'

export default function Header({ title }) {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</li>
				<li>
					<Link href="/learn">
						<a>Learn</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>

			<Typography className={title} use="headline2" tag="h1">
				{title ? title : 'Default Title'}
			</Typography>
		</div>
	)
}
