import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const container = {
	init: {
		transition: { delayChildren: .1, staggerChildren: .1 }
	},
	enter: {
		transition: { delayChildren: .1, staggerChildren: .2 }
	}
}

const item = {
	init: {
		opacity: 0,
		x: -50
	},
	enter: {
		opacity: 1,
		x: 0,
		transition: { duration: .2 }
	}
}

const HamburgerMenuItems = () => {
	const { theme, setTheme } = useTheme();
	const router = useRouter()

	return (
		<motion.ul variants={container} initial="init" animate="enter" className="fixed z-10 right-0 top-[80px] flex flex-col text-right mt-3 mr-5">
				<motion.li variants={item} className={`${router.pathname === "/" ? "text-accent": ""} my-3`}>
					<Link href="/"><a>home</a></Link>
				</motion.li>
				<motion.li variants={item} className={`${router.pathname === "/work" ? "text-accent": ""} my-3`}>
					<Link href="/work"><a className="">work</a></Link>
				</motion.li>
				<motion.li variants={item} className={`${router.pathname === "/blog" ? "text-accent": ""} my-3`}>
					<Link href="/blog"><a className="">blog</a></Link>
				</motion.li>
			<motion.li 
				variants={item}
				onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} 
				className='ml-1 text-yellow-400 my-3 bg-item-dark p-2 rounded-full text-h3 cursor-pointer'>
				{theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
			</motion.li>
		</motion.ul>
	)
}

export default HamburgerMenuItems;


