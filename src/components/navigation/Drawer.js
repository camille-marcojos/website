// Will refactor with this file

import { Button } from '@rmwc/button'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerSubtitle,
	DrawerTitle,
} from '@rmwc/drawer'
import { List, ListItem } from '@rmwc/list'
import * as React from 'react'

export default function RmwcDrawer() {
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

			<Button onClick={() => setOpen(!open)} raised>
				Toggle Modal
			</Button>
		</>
	)
}
