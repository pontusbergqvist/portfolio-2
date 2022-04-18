import { PageItemAnimationWrapper } from "../shared/animations";

const Header = () => {
	return (
			<header className="my-28">
				<div className="flex">
					<div className="h-[100px] w-[100px] border border-accent rounded-full"></div>
					<div className="mx-5">
						<h1 className="text-h1 font-mono">Pontus Bergqvist</h1>
						<p className="text-white text-h3 py-1 px-2 bg-accent inline">Full-stack web developer</p>
						<p className="mt-2 text-sm">Not just a web developer, anyway.</p>
					</div>
				</div>
			</header>
	)
}

export default Header;
