import MenuItem from "./menuitem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MenuItems = () => {
	const router = useRouter();
	const [position, setPosition] = useState(0);
	const [translate, setTranslate] = useState("")

	useEffect(() => {
			if (router.route === "/") {
				setPosition(0);
				setTranslate("0%")
			} else if (router.route === "/work") {
				setPosition(180);
				setTranslate("-50%");
			} else if (router.route === "/blog") {
				setPosition(360);
				setTranslate("-100%");
			}
	}, [router.route])

	return (
		<ul className='w-[360px] h-[35px] hidden md:flex items-center justify-between relative'>
			<MenuItem route="/" />
			<MenuItem route="/work" />
			<MenuItem route="/blog" />
			<motion.div
				className={`bg-item-dark dark:bg-item-light h-full w-[72px] rounded absolute`}
				animate={{ x: position, translateX: translate }}
			></motion.div>
		</ul>
		)
}

export default MenuItems;
