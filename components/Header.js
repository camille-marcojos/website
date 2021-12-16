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
					<Link href="/get-involved">
						<a>Get Involved</a>
					</Link>
				</li>
				<li>
					<Link href="/resources">
						<a>Resources</a>
					</Link>
				</li>
			</ul>
			<h1 className={title}>{title ? title : 'Default Title'}</h1>
		</div>
	)
}
