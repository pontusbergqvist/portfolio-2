import { queryVariants } from '../../utils/variants';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
	children: any;
	id: string;
	direction: string | undefined;
}

const AnimateQueryPage = ({ children, id, direction }: Props) => {

	return (
		<AnimatePresence exitBeforeEnter onExitComplete={() => scrollTo(0, 0)}>
			<motion.article 
				key={id}
				variants={queryVariants}
				custom={direction}
				initial="initial"
				animate="enter" 
				exit="exit"
				className='my-8 md:my-28'
			>
				{ children }
			</motion.article>
		</AnimatePresence>
	)
}

export default AnimateQueryPage;
