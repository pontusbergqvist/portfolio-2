import ThemeButton from "./themebutton";
import Link from 'next/link';

const Nav = () => {
	return (
		<nav className='h-[100px] flex justify-between items-center'  >
			<ul className='w-[300px] flex justify-between'>
				<li>
					<Link href="/"><a>$HOME</a></Link>
				</li>
					<Link href="/work"><a>work</a></Link>
				<li>blog</li>
			</ul>
			<ThemeButton />
		</nav>
	)
}

export default Nav;
