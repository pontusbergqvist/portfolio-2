import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
	route: string;
}

const MenuItem = ({ route }: Props) => {
	const router = useRouter();

	return (
		<motion.li 
		className={`${router.route === route ? "text-light dark:text-dark" : ""} rounded px-2 z-10 flex items-center h-full`}
		>
			<Link href={route}><a className="p-1 px-2">{route === "/" ? "home" : route.slice(1)}</a></Link>
		</motion.li>
	)
}

export default MenuItem;
