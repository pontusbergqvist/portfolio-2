import ThemeButton from "./themebutton";
import Link from 'next/link';
import { useRouter } from "next/router"; 

const Nav = () => {
	const router = useRouter();
	return (
		<nav className='h-[100px] flex justify-between items-center font-mono'  >
			<ul className='w-[300px] flex justify-between'>
				<li className={router.pathname === "/" ? "text-accent": ""}>
					<Link href="/"><a>$home</a></Link>
				</li>
				<li className={router.pathname === "/work" ? "text-accent": ""}>
					<Link href="/work"><a>work</a></Link>
				</li>
				<li>blog</li>
			</ul>
			<ThemeButton />
		</nav>
	)
}

export default Nav;
