import { motion } from 'framer-motion';
import Footer from '../layout/footer';


const ltr = {
    hidden: { opacity: 0, x: -300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0, },
    exit: { opacity: 0, x: 300, transition: { type: 'tween', duration: .2 }},
}

const rtl = {
    hidden: { opacity: 0, x: 300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -200, transition: { type: 'tween', duration: .2 }},
}

interface Props {
	children: JSX.Element
}

const Layout = ({ children }: Props) => {

	return (
		<motion.main 
			variants={ltr} 
			initial="hidden" 
			animate="enter" 
			exit="exit" 
			className='w-[550px] mx-auto'
		>
			{children}
			<Footer />
		</motion.main>
	)
}

export default Layout;
