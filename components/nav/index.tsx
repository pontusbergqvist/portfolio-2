import ThemeButton from "./themebutton";
import HamburgerMenu from "./hamburgermenu";
import MenuItems from "./menuitems";

const Nav = () => {

	return (
		<nav className='h-[100px] flex justify-start md:justify-between items-center font-mono px-2' >
			<MenuItems />

			{ /* This is disabled for mobile devices */ }
			<ThemeButton />

			{ /* This is disabled for desktop devides */ }
			<HamburgerMenu />
		</nav>
	)
}

export default Nav;
