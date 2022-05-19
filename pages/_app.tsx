import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav';
import usePageTransition from '../hooks/usePageTransition';
import useWindowWidth from '../hooks/useWindowWidth';
import Head from 'next/head';
import variants from '../utils/variants';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
	const direction = usePageTransition(router.route);
	const windowWidth = useWindowWidth();
	const variant = variants(windowWidth);

	const routeToString = (input: string): string => input === "/" ? "Home" : input.slice(0, 5).charAt(1).toUpperCase() + input.slice(2, 5);

	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<Head>
				<title>{`${routeToString(router.route)} | Bergqvist.io`}</title>
				<link rel="shortcut icon" href="/favicon.ico?" />
			</Head>
			<div  className='bg-lighk text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
				<div className='max-w-[650px] mx-auto'>
					<Nav />
					<AnimatePresence initial={false} custom={direction} exitBeforeEnter onExitComplete={() => scrollTo(0, 0)}>
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
