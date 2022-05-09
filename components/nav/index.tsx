import ThemeButton from "./themebutton";
import HamburgerMenu from "./hamburgermenu";
import Link from 'next/link';
import { useRouter } from "next/router"; 

const Nav = () => {
	const router = useRouter();

	return (
		<nav className='h-[100px] flex justify-start md:justify-between items-center font-mono px-2' >
			<ul className='w-[300px] hidden md:flex justify-between'>
				<li className={router.pathname === "/" ? "text-accent": ""}>
					<Link href="/"><a className="p-1 px-2">home</a></Link>
				</li>
				<li className={router.pathname === "/work" ? "text-accent": ""}>
					<Link href="/work"><a className="p-1 px-2">work</a></Link>
				</li>
				<li className={router.pathname === "/blog" ? "text-accent": ""}>
					<Link href="/blog"><a className="p-2 px-3">blog</a></Link>
				</li>
			</ul>

			{ /* This is disabled for mobile devices */ }
			<ThemeButton />

			{ /* This is disabled for desktop devides */ }
			<HamburgerMenu />
		</nav>
	)
}

export default Nav;
