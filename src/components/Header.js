import { Typography } from '@rmwc/typography'

export default function Header({ title, description }) {
	return (
		<div>
			<Typography className={title} use="headline2" tag="h1">
				{title ? title : 'Default Title'}
			</Typography>
			<Typography className={description} use="headline5" tag="h2">
				{description}
			</Typography>
		</div>
	)
}
