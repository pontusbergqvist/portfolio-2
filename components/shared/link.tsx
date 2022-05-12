import { default as NextLink } from 'next/link'
import { motion } from 'framer-motion';

interface Props {
	to: string,
	children: string
}

const Link = ({ to, children }: Props) => {
	return (
		<NextLink scroll={false} href={to} passHref>
			<motion.a 
				className='text-center underline font-mono cursor-pointer inline-block'
				>{children}
			</motion.a>
		</NextLink>
	)
}

export default Link;
