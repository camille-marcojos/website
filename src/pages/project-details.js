import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'

export default function ProjectDetails() {
	return (
		<div>
			<Head>
				<title>She.Codes PCC Project Name</title>
			</Head>

			<Header
				title="🕵️ Project Details "
				description="I'm a project. These are the things that projects do.. lolz"
			/>
		</div>
	)
}
