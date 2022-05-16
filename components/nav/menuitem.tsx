import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
	route: string;
}

const MenuItem = ({ route }: Props) => {
	const router = useRouter();
	const slug = router.query?.slug || "";

	return (
		<motion.li 
			className={`${`${router.route.slice(0, 5)}/${slug}` === `${route}/${slug}` ? "text-light dark:text-dark" : ""} z-10`}
		>
			<Link href={route}>
				<a className="p-1 px-4 rounded flex items-center h-full">
				{route === "/" ? "home" : route.slice(1)}
				</a>
			</Link>
		</motion.li>
	)
}

export default MenuItem;
