import Link from 'next/link';
import { motion } from 'framer-motion';
import { AdjacentPostData } from '../../models/blog';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	data: AdjacentPostData | null;
	type: string;
	route: string;
	children: string;
	setDir: Dispatch<SetStateAction<string | undefined>>;
}

const Button = ({ data, type, route, children, setDir }: Props) => {

	return data ? (
		<Link href={`${route}/${data.slug}`} passHref scroll={false}>
			<motion.div 
				onClick={() => type === "next" ? setDir("ltr") : setDir("rtl")}
				whileHover={{ scale: 1.01, boxShadow: '1px 1px #1E273B' }}
				className={`text-center border border-dark dark:border-light rounded p-2 w-[230px] m-2 cursor-pointer
					${type === "next" ? "md:text-right" : "md:text-left"}
					${data.title ? "cursor-pointer" : "pointer-events-none opacity-50"}
				`}>
				<p className="text-sm">{type === "next" ? "Next" : "Previous"}</p>
				<p>{data.title}</p>
			</motion.div>
		</Link>
		) : (
			<div 
				className={`text-center border border-dark dark:border-light rounded p-2 w-[230px] m-2 pointer-events-none opacity-50 ${type === "next" ? "md:text-right" : "md:text-left"}`}>
				<p className="text-sm">{type === "next" ? "Next" : "Previous"}</p>
				<p>{children}</p>
			</div>
		);
}

export default Button;
