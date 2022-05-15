import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/nav';
import usePageTransition from '../hooks/usePageTransition';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowWidth from '../hooks/useWindowWidth';
import getVariants from '../utils/variants';

function MyApp({ Component, pageProps, router }: AppProps) {
	const direction = usePageTransition(router.route);
	const windowWidth = useWindowWidth();
	const variant = getVariants(windowWidth);

	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
				<div  className='bg-lighk text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
					<div className='max-w-[650px] mx-auto'>
					<Nav />
					<AnimatePresence exitBeforeEnter initial={false} custom={direction} onExitComplete={() => scrollTo(0, 0)}>
						<motion.div
							variants={variant} 
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
	)
}

export default MyApp;
