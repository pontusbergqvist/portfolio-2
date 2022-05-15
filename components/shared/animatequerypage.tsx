import useQuery from '../../hooks/useQuery';
import useQueryPageTransition from '../../hooks/useQueryPageTransition';
import { queryVariants } from '../../utils/variants';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
	children: any;
	pages: any[];
}

const AnimateQueryPage = ({ children, pages }: Props) => {
	const query = useQuery();
	const direction = useQueryPageTransition(pages);

	return (
		<AnimatePresence exitBeforeEnter onExitComplete={() => scrollTo(0, 0)}>
			<motion.article 
				key={query}
				variants={queryVariants}
				custom={direction}
				initial="init" 
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
