import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/layout/nav';
import MenuOverlay from '../components/layout/menuoverlay';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'
import { useState, useCallback, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [active, setActive] = useState(false);
	const router = useRouter();
	const navOnClickHandler = useCallback(() => setActive(!active), [active, setActive]) 

	// Stop scrolling when overlay menu is up
	useEffect(() =>	active ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden'), [active])

	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
				<div  className='bg-light text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
					<div className='max-w-[650px] mx-auto'>
					<Nav active={active} setActive={navOnClickHandler} />
					<AnimatePresence exitBeforeEnter initial={false}>
						<Component {...pageProps} key={router.asPath}/>
					</AnimatePresence>
				</div>
			</div>
			{ active && <MenuOverlay /> }
		</ThemeProvider>
	)
}

export default MyApp;
