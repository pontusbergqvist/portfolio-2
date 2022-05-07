import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/nav';
import OverlayContext from '../components/OverlayContext';
import usePageTransition from '../hooks/useTransitionDirection';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowWidth from '../hooks/useWindowWidth';

function MyApp({ Component, pageProps, router }: AppProps) {
	const direction = usePageTransition(router.route);
	const windowWidth = useWindowWidth();

	const variants = {
		initial: (direction: string) => {
			return {
				x: direction === 'ltr' ? windowWidth ? 300 : -300: -300,
				opacity: 0,
				transition: { duration: .2 }
			}
		},
		enter: {
			x: 0,
			y: 0,
			opacity: 1,
		},
		exit: (direction: string) => {
			return {
				x: direction === 'ltr' ? windowWidth ? -300 : 300 : 300,
				opacity: 0,
				transition: { type: 'tween', duration: .2 }
			}
		},
	}

	return (
		<OverlayContext>
			<ThemeProvider attribute='class' defaultTheme='light'>
					<div  className='bg-lighk text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
						<div className='max-w-[650px] mx-auto'>
						<Nav />
						<AnimatePresence exitBeforeEnter initial={false} custom={direction} onExitComplete={() => scrollTo(0, 0)}>
							<motion.div
								variants={variants} 
								initial="initial" 
								animate="enter" 
								exit={"exit"}
								key={router.route}
								custom={direction}
							>
								<Component {...pageProps} />
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</ThemeProvider>
		</OverlayContext>
	)
}

export default MyApp;
