import { useEffect } from 'react';
import MenuOverlay from './menuoverlay';
import { AnimatePresence, useCycle, motion } from 'framer-motion';
import HamburgerMenuItems from './hamburgermenuitems';
import { useRouter } from 'next/router';

const variants = {
	init: {
		x: 40,
	},
	enter: {
		x: 0,
		transition: { duration: .3, type: 'spring', }
	},
	exit: {
		x: -40,
		transition: { duration: .2 }
	},
}

const HamburgerMenu = () => {
	const [open, toggleMenu] = useCycle(false, true);
	const router = useRouter();
	
	useEffect(() => {
		if (window.innerWidth <= 768) {
			toggleMenu();
		}
	}, [router.route])

	return (
		<>
		<div className="cursor-pointer z-10 fixed md:hidden right-0 mr-3 bg-accent p-2 w-[50px] h-[40px] rounded overflow-x-hidden" onClick={() => toggleMenu()}>
			<AnimatePresence initial={false} exitBeforeEnter>
				<motion.div 
					key={open ? "open" : "closed"} 
					variants={variants} 
					initial="init" 
					animate="enter" 
					exit="exit" 
					className='h-full'
				>
				{ !open ? (
						<>
							<div className='flex flex-col justify-between h-full'>
								<div className='h-[3px] w-full bg-light rounded'></div>
								<div className='h-[3px] w-full bg-light rounded'></div>
								<div className='h-[3px] w-full bg-light rounded'></div>
							</div>
						</>
					) : (
						<div className='flex flex-col relative h-full'>
							<div className='absolute top-1/2 translate-y-[-50%] left-0 h-[3px] w-full bg-light rounded rotate-[45deg]'></div>							
							<div className='absolute top-1/2 translate-y-[-50%] left-0 h-[3px] w-full bg-light rounded rotate-[-45deg]'></div>							
						</div>	
					)}
				</motion.div>
			</AnimatePresence>
		</div>	
			{ open && <MenuOverlay /> }
			{ open && <HamburgerMenuItems /> }
		</>
	)

}

export default HamburgerMenu;

