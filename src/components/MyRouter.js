import Link from 'next/link'
import { useRouter } from 'next/router'

export function BackButton() {
	const router = useRouter()

	return <span onClick={() => router.back()}> BACK </span>
}

export default function MyRouter() {
	return (
		<div>
			<BackButton />
			<Link href="/"> Home </Link>
			<Link href="/connect"> Connect </Link>
			<Link href="/projects"> Projects </Link>
			<Link href="/resources"> Resources </Link>
		</div>
	)
}

// const Link = ({ children, href }) => {
//   const router = useRouter()
//   return (
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault()
//         // typically you want to use `next/link` for this usecase
//         // but this example shows how you can also access the router
//         // and use it manually
//         router.push(href)
//       }}
//     >
//       {children}
//       <style jsx>{`
//         a {
//           margin-right: 10px;
//         }
//       `}</style>
//     </a>
//   )
// }
