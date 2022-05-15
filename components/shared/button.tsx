import Link from 'next/link';
import { motion } from 'framer-motion';
import { AdjacentPostData } from '../../models/blog';

interface Props {
	data: AdjacentPostData | null;
	type: string;
	route: string;
}

const Button = ({ data, type, route }: Props) => {
	return data ? (
		<Link href={`${route}/${data.slug}`} passHref scroll={false}>
			<motion.div 
				whileHover={{ scale: 1.01, boxShadow: '1px 1px #1E273B' }}
				className={`border border-dark dark:border-light rounded p-2 w-[230px] mr-2 cursor-pointer
					${type === "next" && "text-right"}
					${data.title ? "cursor-pointer" : "pointer-events-none opacity-50"}
				`}>
				<p className="text-sm">{type === "next" ? "Next" : "Previous"}</p>
				<p>{data.title}</p>
			</motion.div>
		</Link>
		) : (
			<div 
				className={`border border-dark dark:border-light rounded p-2 w-[230px] mr-2 pointer-events-none opacity-50 ${type === "next" && "text-right"}`}>
				<p className="text-sm">{type === "next" ? "Next" : "Previous"}</p>
				<p>{type === "next" ? "No more posts" : "No previous post"}</p>
			</div>
		);
}

export default Button;
