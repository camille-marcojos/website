import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>She.Codes PCC</title>
			</Head>

			<Header title="😃 Welcome to She.Codes PCC" />
		</div>
	)
}
