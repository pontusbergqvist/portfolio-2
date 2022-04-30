import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/layout/nav';
import MenuOverlay from '../components/layout/menuoverlay';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import usePageTransition from '../hooks/usePageTransition';
import variants from '../utils/transitions';


function MyApp({ Component, pageProps, router }: AppProps) {
	const [active, setActive] = useState(false);
	const direction = usePageTransition(router.route);

	const navOnClickHandler = useCallback(() => setActive(!active), [active, setActive]) 

	// Stop scrolling when overlay menu is up
	useEffect(() =>	active ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden'), [active])

	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
				<div  className='bg-light text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
					<div className='max-w-[650px] mx-auto'>
					<Nav active={active} setActive={navOnClickHandler} />
					<AnimatePresence exitBeforeEnter initial={false} custom={direction}>
						<motion.div
							variants={variants} 
							initial="initial" 
							animate="enter" 
							exit="exit"
							key={router.route}
							custom={direction}
						>
							<Component {...pageProps} />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			{ active && <MenuOverlay /> }
		</ThemeProvider>
	)
}

export default MyApp;
