import Link from 'next/link'
import React from 'react'

import Header from '../components/Header'

export default function ProjectsPage() {
	return (
		<div>
			<Header title="🚀 Projects " description="Create some cool things" />

			<Link href="/project-details"> Project Details </Link>
		</div>
	)
}
