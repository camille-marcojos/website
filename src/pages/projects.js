import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import Header from '../components/Header'

export default function ProjectsPage() {
	return (
		<div>
			<Head>
				<title>She.Codes PCC Projects</title>
			</Head>
			<Header title="🚀 Projects " description="Create some cool things" />

			<Link href="/project-details" class="myLink">
				Project Details
			</Link>
		</div>
	)
}
