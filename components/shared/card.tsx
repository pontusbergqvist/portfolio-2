import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '../../models/blog';

const variants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: .4			
	 	}
	}
}

interface Props {
	post: Post,
	work?: boolean,
	blog?: boolean
}

const Card = ({ post, work, blog }: Props) => {
	const { title, image, description, date, slug } = post;

	const formatDate = (date: string): string => date.slice(0, 10);

	return (
		<Link href={`/${ work ? "work" : blog && "blog" }/${slug}`} passHref scroll={false}>
			<motion.article whileHover="hover" className="hover:cursor-pointer h-full w-full overflow-hidden">
				<div className="overflow-hidden h-[150px] max-w-[270px] blog:max-w-full rounded mx-auto">
					<motion.img 
						variants={variants} 
						className="align-middle h-full w-full object-cover mb-2" 
						src={image.fields.file.url} alt={title} />
				</div>
				<div className="max-w-[290px] blog:max-w-full mx-auto my-2">
					{ !work && <p className='text-sm my-1'>{formatDate(date)}</p> }
					<h3 className='text-h3'>{title}</h3>
					<p className='my-1 text-sm'>{description}</p>
				</div>
			</motion.article>
		</Link>
	)
}

export default Card;
