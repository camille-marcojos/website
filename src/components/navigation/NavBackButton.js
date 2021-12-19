import { Button } from '@rmwc/button'
import { useRouter } from 'next/router'

export default function BackButton() {
	const router = useRouter()

	return <Button label="Back" icon="arrow_back" onClick={() => router.back()} />
}
