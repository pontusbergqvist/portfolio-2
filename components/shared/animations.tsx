import { motion } from 'framer-motion';

const pageContainer = {
	componentIsMounted: {
		transition: {
			staggerChildren: 0.1,
		}
	},
}

const pageItem = {
	componentIsUnmounted: {
		y: 200,
		opacity: 0
	},
	componentIsMounted: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4
		}
	},
	componentIsUnmounting: {
		y: 200,
		opacity: 0,
		transition: {
			duration: 0.7
		}
  }
}

const list = {
	componentIsMounted: {
		transition: {
			delayChildren: 1,
			staggerChildren: 0.2
		}
	}
}

const listItem = {

}

export const PageAnimationWrapper = ({ children }: any) => {
	return (
		<motion.div
			variants={pageContainer}
			initial="componentIsUnmounted"
			animate="componentIsMounted"
			exit="componentIsUnmounting"
		>
			{children}
		</motion.div>
	)
}

export const PageItemAnimationWrapper = ({ children }: any) => {
	return (
		<motion.div
			variants={pageItem}
		>
			{ children }
		</motion.div>
	)
}

export const ListItemAnimationWrapper = ({ children }: any) => {
	return (
		<motion.div
			variants={list}
		>
			{children}
		</motion.div>
	)
}
