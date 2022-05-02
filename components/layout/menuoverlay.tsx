import { useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

const MenuOverlay = () => {

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	})

	return (
		<motion.div 
			className="opacity-90 h-screen w-screen bg-light dark:bg-dark text-dark dark:text-light fixed top-[0px] right-0">
		</motion.div>
	)
}

export default MenuOverlay;
