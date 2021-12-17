import { Button } from '@rmwc/button'
import { useRouter } from 'next/router'

export default function BackButton() {
	const router = useRouter()
	return <Button label="BACK" onClick={() => router.back()} />
}
