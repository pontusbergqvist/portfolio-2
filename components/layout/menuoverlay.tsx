const MenuOverlay = () => {
	return (
		<div className="h-screen w-screen bg-accent fixed top-0 overscroll-contain overflow-y-hidden">
			<div className="relative h-full w-full">
				<ul className="absolute top-1/2 translate-y-[-50%] flex flex-col items-center w-full text-center">
					<li className="text-light text-h1 py-5 border-t-white border-b w-full">home</li>
					<li className="text-light text-h1 py-5 border-t-white border-b w-full">work</li>
					<li className="text-light text-h1 py-5 border-t-white border-b w-full">blog</li>
				</ul>
			</div>
		</div>
	)
}

export default MenuOverlay;
