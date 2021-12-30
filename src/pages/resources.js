import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'

export default function ResourcesPage() {
	return (
		<div>
			<Head>
				<title>She.Codes PCC Resources</title>
			</Head>

			<Header title="💻 Resources" description="Learn some cool stuff" />
		</div>
	)
}
