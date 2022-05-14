import Link from 'next/link';
import Thumbnail from './thumbnail';
import { Project } from '../../models/work';
import { motion } from 'framer-motion';


interface Props {
	project: Project
}

const Card = ({ project }: Props) => {
	const { title, image, description, slug } = project;

	return (
		<Link href={`/work/${slug}`} passHref scroll={false}>
			<motion.article whileHover="hover" className="cursor-pointer h-full w-full overflow-hidden">
				<Thumbnail src={image.fields.file.url} alt={title} />
				<div className="max-w-[290px] blog:max-w-full mx-auto my-2">
					<h3 className='text-h3'>{title}</h3>
					<p className='my-1 text-sm'>{description}</p>
				</div>
			</motion.article>
		</Link>
	)
}

export default Card;

