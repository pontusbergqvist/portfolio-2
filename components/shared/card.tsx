import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '../../models/blog';
import { Project } from '../../models/work';

const variants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: .4			
	 	}
	}
}

interface Props {
	data: Post | Project,
	work?: boolean,
	blog?: boolean
}

const Card = ({ data, work }: Props) => {
	const { title, image, description, date, slug } = data;


	return (
		<Link href={`/${ work ? "work" : "blog" }/${slug}`} passHref scroll={false}>
			<motion.article whileHover="hover" className="hover:cursor-pointer h-full w-full overflow-hidden">
				<div className="overflow-hidden h-[150px] max-w-[270px] blog:max-w-full rounded mx-auto">
					<motion.img 
						variants={variants} 
						className="align-middle h-full w-full object-cover mb-2" 
						src={image.fields.file.url} alt={title} />
				</div>
				<div className="max-w-[290px] blog:max-w-full mx-auto my-2">
					{ !work && <p className='text-sm my-1'>{date?.slice(0, 10)}</p> }
					<h3 className='text-h3'>{title}</h3>
					<p className='my-1 text-sm'>{description}</p>
				</div>
			</motion.article>
		</Link>
	)
}

export default Card;

