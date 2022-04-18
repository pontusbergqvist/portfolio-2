import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/layout/nav';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
				<div  className='bg-light text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
					<div className='w-[650px] mx-auto'>
					<Nav />
					<AnimatePresence exitBeforeEnter initial={false}>
						<Component {...pageProps} key={router.asPath}/>
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default MyApp;
