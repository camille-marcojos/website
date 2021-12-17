import '@material/typography/dist/mdc.typography.css'
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
					<Link href="/resources">
						<a>Resources</a>
					</Link>
				</li>
				<li>
					<Link href="/connect-with-us">
						<a>Connect with us</a>
					</Link>
				</li>
			</ul>

			<Typography use="headline1" className={title}>
				{title ? title : 'Default Title'}
			</Typography>
		</div>
	)
}
