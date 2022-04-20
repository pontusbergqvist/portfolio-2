const MenuOverlay = () => {
	return (
		<div className="h-screen w-screen bg-light text-dark dark:bg-dark dark:text-light fixed top-0">
			<div className="relative h-full w-full">
				<ul className="absolute top-1/2 translate-y-[-50%] flex flex-col items-center w-full text-center">
					<li className="text-h1 py-5 border-b w-full cursor-pointer">home</li>
					<li className="text-h1 py-5 border-b w-full">work</li>
					<li className="text-h1 py-5 border-b w-full">blog</li>
				</ul>
			</div>
		</div>
	)
}

export default MenuOverlay;
