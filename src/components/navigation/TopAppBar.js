import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerSubtitle,
	DrawerTitle,
} from '@rmwc/drawer'
import { List, ListItem } from '@rmwc/list'
import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar'
import * as React from 'react'

export default function RmwcTopAppBar() {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<Drawer modal open={open} onClose={() => setOpen(false)}>
				<DrawerHeader>
					<DrawerTitle>DrawerHeader</DrawerTitle>
					<DrawerSubtitle>Subtitle</DrawerSubtitle>
				</DrawerHeader>
				<DrawerContent>
					<List>
						<ListItem>Cookies</ListItem>
						<ListItem>Pizza</ListItem>
						<ListItem>Icecream</ListItem>
					</List>
				</DrawerContent>
			</Drawer>

			<SimpleTopAppBar
				fixed
				title="test"
				navigationIcon
				onNav={() => setOpen(!open)}
			/>

			<TopAppBarFixedAdjust />
		</>
	)
}
