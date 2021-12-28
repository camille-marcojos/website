import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerSubtitle,
	DrawerTitle,
} from '@rmwc/drawer'
import { List, ListItem } from '@rmwc/list'
import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar'
import { useRouter } from 'next/router'
import * as React from 'react'

export default function RmwcTopAppBar() {
	const [open, setOpen] = React.useState(false)
	const router = useRouter()

	return (
		<>
			<Drawer modal open={open} onClose={() => setOpen(false)}>
				<DrawerHeader>
					<DrawerTitle>She.Codes PCC</DrawerTitle>
					<DrawerSubtitle>Subtitle</DrawerSubtitle>
				</DrawerHeader>
				<DrawerContent>
					<List>
						<ListItem onClick={() => router.push('./')}>Home</ListItem>
						<ListItem onClick={() => router.push('./projects')}>
							Projects
						</ListItem>
						<ListItem onClick={() => router.push('./resources')}>
							Resources
						</ListItem>
						<ListItem onClick={() => router.push('./connect')}>
							Connect
						</ListItem>
					</List>
				</DrawerContent>
			</Drawer>

			<SimpleTopAppBar
				fixed
				title="She.Codes PCC"
				navigationIcon
				onNav={() => setOpen(!open)}
			/>

			<TopAppBarFixedAdjust />
		</>
	)
}
