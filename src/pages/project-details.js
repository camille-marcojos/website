import React from 'react'
import Header from '../components/Header'
import NavBackButton from '../components/navigation/NavBackButton'

export default function ProjectDetails() {
	return (
		<div>
			<Header
				title="Project Details"
				description="I'm a project. These are the things that projects do.. lolz"
			/>
			<NavBackButton />
		</div>
	)
}
