import Footer from '../layout/footer';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.main className='max-w-[550px] mx-auto px-3'>
				{children}
				<Footer />
			</motion.main>
		</AnimatePresence>
	)
}

export default Layout;
