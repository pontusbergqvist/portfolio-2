import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/layout/nav';
import OverlayContext from '../components/OverlayContext';
import usePageTransition from '../hooks/usePageTransition';
import variants from '../utils/transitions';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
	const direction = usePageTransition(router.route);

	return (
		<OverlayContext>
			<ThemeProvider attribute='class' defaultTheme='light'>
					<div  className='bg-light text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
						<div className='max-w-[650px] mx-auto'>
						<Nav />
						<AnimatePresence exitBeforeEnter initial={false} custom={direction}>
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
