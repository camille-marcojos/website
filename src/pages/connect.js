import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'

export default function ConnectPage() {
	return (
		<div>
			<Head>
				<title>She.Codes PCC Connect Page</title>
			</Head>

			<Header
				title="👋 Hi, Connect with us "
				description="Meet peeps interested in coding things"
			/>
		</div>
	)
}
